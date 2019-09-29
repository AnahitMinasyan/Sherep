import React from 'react';
import classes from "../../../container/MediaEventsPage/MediaEventsPage.css";
import classes1 from "./MediaList.css";
import {Link} from "react-router-dom";
import moment from "moment";

const MediaSummary = (props) => {
    return (

            <article className={classes.MediaContent}>
                <p className={classes.MediaData}>{moment(props.date).format('L')}</p>

                <h3>{props.title}</h3>
                <p className={classes.MediaSummaryText}>
                    {props.content}
                </p>
                <div className={classes1.MediaListDetails}>
                    <Link  to={props.link}>Details</Link>

                </div>



            </article>

    );
};

export default MediaSummary;