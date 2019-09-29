import React, {Component} from 'react';
import classes from './AboutPage.css';
import aboutPage from '../../assets/images/sherep-3.png';

class AboutPage extends Component {
    render() {
        return (
            <div className={classes.AboutPage}>
                <div className={classes.AboutPageImg}>
                    <img src={aboutPage} alt=""/>
                </div>
                <div className={classes.AboutPageContent}>
                    <h1>About</h1>
                    <div className={classes.AboutText}>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Earum, eos excepturi exercitationem facilis, illo maxime nulla pariatur perspiciatis provident
                            quas quis quod sapiente sed sequi temporibus tenetur voluptas voluptates voluptatum?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Earum, eos excepturi exercitationem facilis, illo maxime nulla pariatur perspiciatis provident
                            quas quis quod sapiente sed sequi temporibus tenetur voluptas voluptates voluptatum?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Earum, eos excepturi exercitationem facilis, illo maxime nulla pariatur perspiciatis provident
                            quas quis quod sapiente sed sequi temporibus tenetur voluptas voluptates voluptatum?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Earum, eos excepturi exercitationem facilis, illo maxime nulla pariatur perspiciatis provident
                            quas quis quod sapiente sed sequi temporibus tenetur voluptas voluptates voluptatum?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Earum, eos excepturi exercitationem facilis, illo maxime nulla pariatur perspiciatis provident
                            quas quis quod sapiente sed sequi temporibus tenetur voluptas voluptates voluptatum?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Earum, eos excepturi exercitationem facilis, illo maxime nulla pariatur perspiciatis provident
                            quas quis quod sapiente sed sequi temporibus tenetur voluptas voluptates voluptatum?
                        </p>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutPage;