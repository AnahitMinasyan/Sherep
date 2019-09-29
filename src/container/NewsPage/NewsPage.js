import React, {Component} from 'react';
import classes from './NewsPage.css';
import newsPage from "../../assets/images/sherep-8.png";
import axios from '../../axios-orders';
import NewsSummary from "../../components/News/NewsList/NewsSummary/NewsSummary";


class NewsPage extends Component {

state = {
    data: null
}

    componentDidMount() {
            axios.get('https://sherepsite-project.firebaseio.com/news.json/')
                .then(res => {
                    let newData = res.data;
                    let newNames = [];
                    for (let key in newData) {
                        newNames.push({...newData[key], id: key})
                    }
                    this.setState({data: newNames})
                })
    }


    postSelectedHandler = ( id ) => {
        this.props.history.push( '/news/' + id );
    }

    render() {
    console.log(this.state.data);
        let news =
            this.state.data ?
                this.state.data.map(newsItem => {
                    return(<li key={newsItem.id}>
                            <NewsSummary
                                key={newsItem.id}
                                date={newsItem.date}
                                title={newsItem.title}
                                content={newsItem.content}
                                link = {`/news/` + newsItem.id}
                                clicked={() => this.postSelectedHandler( newsItem.id )} />

                        </li>)
                }) : null;


        return (
            <div className={classes.NewsPage}>
                <div className={classes.NewsPageImg}>
                    <img src={newsPage} alt=""/>
                </div>
                <div className={classes.NewsPageContent}>
                    <h1>News</h1>
                    <div className={classes.NewsAllContent}>
                        <ul className={classes.NewsListDetails}>

                        {news}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsPage;