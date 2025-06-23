from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import os
import shutil
import requests
from io import BytesIO

app = Flask(__name__)
CORS(app)

# Configurações
TEMP_IMAGE_PATH = "/home/alfredo/Documents/Projects/ProductImgTemp"
FINAL_IMAGE_PATH = "/home/alfredo/Documents/Projects/resize-image/Assets/ProductsImg"
VIDEO_SOURCE_PATH = "/home/alfredo/Videos/Screencasts"
OUTPUT_FILE_PATH = (
    "/home/alfredo/Documents/Projects/DataProductsTemp/DataProductsTemp.tsx"
)
RELATIVE_IMAGE_PATH = "../../Assets/ProductsImg"
NEXT_PRODUCT_ID = 20


# Função para redimensionar e salvar imagem
def save_resized_image_from_url(image_url, output_dir, suffix=""):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    try:
        response = requests.get(image_url)
        response.raise_for_status()
        img = Image.open(BytesIO(response.content))
        img = img.convert("RGB")
        img = img.resize((500, 500))  # Tamanho padrão

        base_name = os.path.basename(image_url.split("?")[0])
        name, _ = os.path.splitext(base_name)

        safe_name = name.replace(" ", "_").replace("+", "_")
        filename = f"{safe_name}{suffix}.webp"
        save_path = os.path.join(output_dir, filename)

        img.save(save_path, "WEBP")
        return filename
    except Exception as e:
        raise FileNotFoundError(f"Erro ao baixar ou salvar imagem: {e}")


# Função para copiar vídeos
def copy_video(video_path, output_dir, new_name):
    if not os.path.isfile(video_path):
        raise FileNotFoundError(f"Vídeo não encontrado: {video_path}")

    filename = new_name.replace(" ", "_").replace("+", "_")
    dest_path = os.path.join(output_dir, filename)
    shutil.copy(video_path, dest_path)
    return filename


# Função para montar o caminho require do React
def require_path(filename):
    return f"require('{RELATIVE_IMAGE_PATH}/{filename}')"


@app.route("/api/create_product_scope", methods=["POST"])
def create_product_scope():
    global NEXT_PRODUCT_ID
    data = request.get_json()

    if not data:
        return jsonify({"error": "Nenhum dado recebido."}), 400

    # Campos obrigatórios
    name = data.get("name")
    priceFisica = data.get("priceFisica")
    priceJuridica = data.get("priceJuridica")
    oldPrice = data.get("oldPrice")
    price = data.get("price")
    caracteristicas = data.get("caracteristicas", {})
    productInfo = data.get("productInfo")
    description = data.get("description")
    peso_kg = data.get("peso_kg")
    altura_cm = data.get("altura_cm")
    largura_cm = data.get("largura_cm")
    comprimento_cm = data.get("comprimento_cm")
    category = data.get("category")
    image_url = data.get("imageUrl")
    secondary_image_url = data.get("secondaryImageUrl")
    gallery_paths = data.get("gallery", [])

    if not all([name, price, description, category]):
        return jsonify({"error": "Campos obrigatórios faltando."}), 400

    try:
        # Salvar imagem principal
        imageUrl = (
            require_path(save_resized_image_from_url(image_url, FINAL_IMAGE_PATH, "_1"))
            if image_url
            else "undefined"
        )

        # Salvar imagem secundária
        secondaryImageUrl = (
            require_path(
                save_resized_image_from_url(secondary_image_url, FINAL_IMAGE_PATH, "_2")
            )
            if secondary_image_url
            else "undefined"
        )
    except FileNotFoundError as e:
        return jsonify({"error": str(e)}), 400

    # Processar galeria
    gallery = []
    for idx, g_path in enumerate(gallery_paths, start=3):
        ext = os.path.splitext(g_path)[-1].lower()

        if ext in [".mp4", ".webm", ".ogg"]:
            # Vídeo: copiar
            base_name = os.path.basename(g_path)
            safe_base_name = base_name.replace(" ", "_").replace("+", "_")
            filename = f"{safe_base_name}"
            copy_video(g_path, FINAL_IMAGE_PATH, filename)
            gallery.append(require_path(filename))
        else:
            # Imagem da galeria: baixar e redimensionar
            try:
                filename = save_resized_image_from_url(
                    g_path, FINAL_IMAGE_PATH, f"_{idx}"
                )
                gallery.append(require_path(filename))
            except Exception as e:
                return jsonify({"error": f"Erro na galeria: {e}"}), 400

    # Montar características como string com chave e valor entre aspas
    caracteristicas_str = ",\n            ".join(
        [f'"{k}": {repr(str(v))}' for k, v in caracteristicas.items()]
    )

    # Criar produto no formato TSX
    product = f"""
    {{
        id: {NEXT_PRODUCT_ID},
        name: {repr(name)},
        priceFisica: {priceFisica},
        priceJuridica: {priceJuridica},
        imageUrl: {imageUrl},
        secondaryImageUrl: {secondaryImageUrl},
        gallery: [
            {', '.join(gallery)}
        ],
        oldPrice: {oldPrice},
        price: {price},
        caracteristicas: {{
            {caracteristicas_str}
        }},
        productInfo: {repr(productInfo)},
        description: {repr(description)},
        peso_kg: {peso_kg},
        altura_cm: {altura_cm},
        largura_cm: {largura_cm},
        comprimento_cm: {comprimento_cm},
        category: {repr(category)},
    }},"""

    # Escrever no arquivo
    with open(OUTPUT_FILE_PATH, "a") as f:
        f.write(product + "\n")

    NEXT_PRODUCT_ID += 1

    return jsonify({"message": "Produto criado com sucesso!"}), 201


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
