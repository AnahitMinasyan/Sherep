import React, {Component} from 'react';
import classes from "../NewsPage.css";
import newsPage from "../../../assets/images/sherep-8.png";
import axios from 'axios';

class NewsDetails extends Component {

    state = {
        loadedPost: null
    };


    componentDidMount () {
        if(this.props.match.params.id ){
            this.loadData(this.props.match.params.id);
        }
    }

    loadData (id) {
        axios.get( 'https://sherepsite-project.firebaseio.com/news/' + id + '.json/')
            .then( response => {
                this.setState( { loadedPost: response.data } );
            });
    }

    render(){
        return (this.state.loadedPost ? <div className={classes.NewsPage}>
            <div className={classes.NewsPageImg}>
                <img src={newsPage} alt=""/>
            </div>
            <div className={classes.NewsPageContent}>
                <h1>News</h1>
                <div className={classes.NewsAllContent}>
                    <h3>
                        {this.state.loadedPost.title}
                    </h3>

                    <p>{this.state.loadedPost.content}</p>
                </div>
            </div>
        </div> : 'Loading...');
    }
}

export default NewsDetails;