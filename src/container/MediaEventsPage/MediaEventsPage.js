import React, {Component} from 'react';
import classes from "./MediaEventsPage.css";
import MediaPage from "../../assets/images/sherep-7.png";
import MediaSummary from "../../components/Media/MediaSummary/MediaSummary";
import axios from 'axios';


class MediaEventsPage extends Component {
    state = {
        data: null
    }

    componentDidMount() {

            axios.get('https://sherepsite-project.firebaseio.com/media.json/')
                .then(res => {
                    let newData = res.data;
                    let newNames = [];
                    for (let key in newData) {
                        newNames.push({...newData[key], id: key })
                    }
                    this.setState({data: newNames})
            })
        
    }

    postSelectedHandler = ( id ) => {
        this.props.history.push( '/media/' + id );
    }

    render() {
        let media=
            this.state.data ?
                this.state.data.map(mediaItem => {
                    return (<li key={mediaItem.id}>
                    <MediaSummary
                        key = {mediaItem.id}
                        date = {mediaItem.date}
                        title={mediaItem.title}
                        content={mediaItem.content}
                        link = {`/media/` + mediaItem.id}
                        clicked={() => this.postSelectedHandler( mediaItem.id )}
                    />
                    </li>)
                }) : null;
        return (
            <div className={classes.MediaPage}>
                <div className={classes.MediaPageImg}>
                    <img src={MediaPage} alt=""/>
                </div>
                <div className={classes.MediaPageContent}>
                    <h1>Media about us</h1>
                    <ul className={classes.MediaAllContent}>
                        {media}
                    </ul>
                 </div>

            </div>
        );
    }
}

export default MediaEventsPage;