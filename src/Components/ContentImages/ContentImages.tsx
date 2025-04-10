import React from 'react';
import Carousel from '../CarouselContent/CarouselContent';
import image1 from './Img/slide_1.png';
import image2 from './Img/slide_2.png';
import image3 from './Img/slide_3.png';
import image4 from './Img/slide_4.png';
import image5 from './Img/slide_5.png';
import image6 from './Img/slide_6.png';
import image7 from './Img/slide_7.png';
import image8 from './Img/slide_8.png';
import image9 from './Img/slide_10.png'

import imageMobile1 from './Img/slide_1.png';
import imageMobile2 from './Img/slide_2.png';
import imageMobile3 from './Img/slide_3.png';
import imageMobile4 from './Img/slide_4.png';
import imageMobile5 from './Img/slide_5.png';
import imageMobile6 from './Img/slide_6.png';
import imageMobile7 from './Img/slide_7.png';
import imageMobile8 from './Img/slide_8.png';
import imageMobile9 from './Img/slide_10.png';

function ContentImages() {
    const imagesDesktop = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
    const imagesMobile = [
        imageMobile1,
        imageMobile2,
        imageMobile3,
        imageMobile4,
        imageMobile5,
        imageMobile6,
        imageMobile7,
        imageMobile8,
        imageMobile9,




    ];

    return (
        <div>
            <Carousel imagesDesktop={imagesDesktop} imagesMobile={imagesMobile} />
        </div>
    );
}

export default ContentImages;