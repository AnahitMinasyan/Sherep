import React, {Component} from 'react';
import classes from './CareerPage.css';
import careerImg  from '../../assets/images/sherep-10.png';
import Accordion from "../PagesFunctions/AccordionCareer/Accordion";
import axios from "../../axios-orders";


class CareerPage extends Component {

    state = {
        data: null,

    };

    componentDidMount() {
        axios.get('https://sherepsite-project.firebaseio.com/career.json/')
            .then(res => {
                let newData = res.data;
                let newNames = [];
                for (let key in newData) {
                    newNames.push({...newData[key], id: key})
                }
                this.setState({data: newNames})
            })
    }

    render() {
        console.log(this.state.data);
        let career =
            this.state.data ? <Accordion posts={this.state.data} />: null ;

        return (
            <div className={classes.CareerPage}>
                <div className={classes.CareerPageImg}>
                    <img src={careerImg} alt=""/>
                </div>
                <div className={classes.CareerPageContent}>
                    <h1>Career</h1>
                    <div className={classes.CareerAllContent}>

                        <div  className="accordion-container">
                            {career}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CareerPage;