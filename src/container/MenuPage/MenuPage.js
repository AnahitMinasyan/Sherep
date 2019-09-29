import React, {Component} from 'react';
import classes from "../MenuPage/MenuPage.css";
import MenuImg from "../../assets/images/shere-6.png";
import MenuNavigation from "../../components/Menu/MenuNavigation/MenuNavigation";
import MenuButtons from "../../components/Menu/MenuButtons/MenuButtons";
import MenuList from "../../components/Menu/MenuList/MenuList";
import axios from "../../axios-orders";

class MenuPage extends Component {
    state = {
        data: null,
        showData: null
    };

    componentDidMount() {
        // axios.post('https://sherepsite-project.firebaseio.com/menu.json', {
        //     category: 'banquet',
        //     title: 'Banquet-Title5',
        //     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        //     price: '5000'
        // }).then(res => {
        axios.get('https://sherepsite-project.firebaseio.com/menu.json/').then(res => {
            this.filterData(res.data)
        })
    }

    filterData = (data) => {
        let newNames = [];
        for (let key in data) {
            newNames.push(data[key])
        }
        this.setState({data: newNames}, () => {
            this.changeType('food')
        })
    };

    changeType = (type) => {
        let finData = [];
        this.state.data.map(el => {
            if (el.category === type) {
                finData.push(el)
            }
        });
        this.setState({showData: finData})
    };

    render() {
        return (

            <div className={classes.MenuPage}>
                    <div className={classes.MenuPageBack}>
                        <img src={MenuImg} alt=""/>
                    </div>

            <div className={classes.MenuPageList}>
                     <h1>Menu</h1>
                <div>
                    <MenuNavigation/>
                </div>


                <MenuButtons changeType={el => this.changeType(el)}/>
                <MenuList showData={this.state.showData}/>
            </div>

        </div>
        );
    }
}

export default MenuPage;