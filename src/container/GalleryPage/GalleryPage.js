import React, {Component} from 'react';
import galleryImg from '../../assets/images/sherep-5.png'
import slideImg from '../../assets/images/sherep-3.png';


import classes from './GalleryPage.css';
import Slider from "../PagesFunctions/Slider/Slider";

import '../PagesFunctions/Slider/Slider.css';


class GalleryPage extends Component {


    render() {


        return (
            <div className={classes.GalleryPage}>
                <div className={classes.GalleryPageBack}>
                    <img src={galleryImg} alt=""/>
                </div>

                <div className={classes.GalleryPageSlider}>
                    <h1>Gallery</h1>
                    <Slider />
                </div>
            </div>
        );
    }
}

export default GalleryPage;