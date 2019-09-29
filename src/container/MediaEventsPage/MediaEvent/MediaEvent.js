import React, {Component} from 'react';
import classes from "../MediaEventsPage.css";
import MediaPage from "../../../assets/images/sherep-7.png";
import axios from "axios";

class MediaEvent extends Component {


    state = {
        loadedPost: null
    };


    componentDidMount () {
        if(this.props.match.params.id ){
            this.loadData(this.props.match.params.id);
        }
    }

    loadData (id) {
        axios.get( 'https://sherepsite-project.firebaseio.com/media/' + id + '.json/')
            .then( response => {
                this.setState( { loadedPost: response.data } );
            });
    }

    render() {
        return (this.state.loadedPost ?
            <div className={classes.MediaPage}>
                <div className={classes.MediaPageImg}>
                    <img src={MediaPage} alt=""/>
                </div>
                <div className={classes.MediaPageContent}>
                    <h3>
                        {this.state.loadedPost.title}
                    </h3>

                    <p>{this.state.loadedPost.content}</p>
                </div>
            </div>: 'Loading...'


        );
    }
}

export default MediaEvent;