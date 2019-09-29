import React, {Component} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import classes from './Accordion.css';


class Accordion extends Component {

    constructor(props) {
        super(props);

        this.state = {
            opened_item_id: null,
        };
    }

    handleClick(item_id) {
        let id = this.state.opened_item_id===item_id ? null : item_id;
        this.setState({
            ...this.state,
            opened_item_id: id,
        });
    }

    render() {
        let posts = this.props.posts ? this.props.posts.map(item => (
            <div key={item.id}>
                <div className={classes.AccordionLabel}  onClick={() =>this.handleClick(item.id)}>
                    { item.label}
                    <FontAwesomeIcon icon={this.state.opened_item_id === item.id ?  faAngleUp : faAngleDown }/>
                </div>
                < div className={[classes.AccordionContent, this.state.opened_item_id === item.id ? classes.AccordionSectionOpen : classes.AccordionSectionClose].join(' ')}>
                    <div className={classes.CareerList}>

                        <div>
                            <h3>{item.title}</h3>
                            <p>
                                {item.content}
                            </p>

                        </div>


                    </div>
                </div>

            </div>

        )) : null

        return (
            <div className={classes.AccordionSection}>
                {posts}

            </div>
        );
    }
}

export default Accordion;