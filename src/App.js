import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./container/HomePage/HomePage";
import AboutPage from "./container/AboutPage/AboutPage";
import GalleryPage from "./container/GalleryPage/GalleryPage";
import MenuPage from "./container/MenuPage/MenuPage";
import MediaEventsPage from "./container/MediaEventsPage/MediaEventsPage";
import MediaEvent from "./container/MediaEventsPage/MediaEvent/MediaEvent";
import NewsPage from "./container/NewsPage/NewsPage";
import NewsDetails from "./container/NewsPage/NewsDetails/NewsDetails";
import CareerPage from "./container/CareerPage/CareerPage";
import ContactPage from "./container/ContactPage/ContactPage";
import Accordion from "./container/PagesFunctions/AccordionCareer/Accordion";

class App extends Component {
    render() {


        return (

            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/about'  component={AboutPage}/>
                        <Route path='/gallery' component={GalleryPage}/>
                        <Route path='/menu' component={MenuPage} />
                        <Route path='/media' component={MediaEventsPage} exact/>
                        <Route path='/media/:id' component={MediaEvent}/>
                        <Route path='/news' component={NewsPage} exact/>
                        <Route path='/news/:id' component={NewsDetails}/>
                        <Route path='/career' component={CareerPage}/>
                        <Route path='/career/:id' component={Accordion}/>
                        <Route path='/contact' component={ContactPage}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }

}

export default App;