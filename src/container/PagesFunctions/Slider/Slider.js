import React, {Component} from 'react';
import classes from './Slider.css';


import './Slider.css';
import img0 from '../../../assets/images/sherep-5.png';
import img1 from '../../../assets/images/sherep-3.png';
import img2 from '../../../assets/images/sherep-7.png';
import img3 from '../../../assets/images/sherep-8.png';
import {faAngleDown, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Slider extends Component {

    constructor(props){
        super(props);
        this.properties= [
            {id:1, index: 0, picture: img1},
            {id:2, index: 1, picture: img0},
            {id:3, index: 2, picture: img2},
            {id:4, index: 3, picture: img3}
        ];

        this.state = {
            properties: this.properties,
            property: this.properties[0]
        };
        this.nextProperty = this.nextProperty.bind(this);
        this.prevProperty = this.prevProperty.bind(this);
    }


    nextProperty = () => {
        const newIndex = this.state.property.index+1;
        this.setState({
            property: this.properties[newIndex]
        })
    }

    prevProperty = () => {
        const newIndex = this.state.property.index-1;
        this.setState({
            property: this.properties[newIndex]
        })
    }


    render() {
        const { properties, property} = this.state;
        return (
            <div  className={classes.sliderContent}>

                <div className={[classes.SlideButtons, classes.SlideButtonsLeft].join(' ')}>

                    <button
                        className={classes.LeftButton}
                        onClick={() => this.prevProperty()}
                        disabled={property.index === 0}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} style={{'width':'35px', 'height': '45px',  'opacity': '0.8'}}/>
                    </button>

                </div>

                    <div className={[`gallerySlider activeSlide-${property.index}`, classes.Slider].join(' ')}>


                        <div className="gallery-slider-wrapper" style={{'display':'flex', 'flex-direction':'row',
                            'transform': `translateX(-${property.index*(100)}%)`
                        }}>

                            {
                                properties.map(property =>
                                    <div id={`img-${property.id}`} className="gallery">
                                        <img src={property.picture} alt='' />
                                    </div>
                                )
                            }

                        </div>



                    </div>
                <div className={[classes.SlideButtons, classes.SlideButtonsRight].join(' ')}>

                    <button
                        className={classes.RightButton}
                        onClick={() => this.nextProperty()}
                        disabled={property.index === properties.length-1}
                    >
                        <FontAwesomeIcon icon={faAngleRight}  style={{'width':'35px', 'height': '45px', 'opacity': '0.8'}}/>
                    </button>

                </div>


                {/*</div>*/}
            </div>

        );
    }

}

export default Slider;