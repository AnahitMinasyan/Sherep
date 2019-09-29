import React, {Component} from 'react';
import classes from './DropDownLink.css';
import Input from "../../../../Contact/input";
import {sharedInputChangeHandler} from "../../../../../shared/functions";

class DropDownLink extends Component {
    state = {
        form: {
            selectLanguage: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'english', displayValue: 'english'},
                        {value: 'armenian', displayValue: 'հայերեն'}
                    ]
                },
                value: '',
                validation: {},
                valid: true
            }
        },
        formIsValid: false,
        loading: false
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        sharedInputChangeHandler(this, event, inputIdentifier, this.state.form);
    };

    render() {
        const formElementsArray = [];
        for (let key in this.state.form) {
            formElementsArray.push({
                id: key,
                config: this.state.form[key]
            });
        }
        console.log(formElementsArray);

        let form = (
            <form className={classes.dropdownForm}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}

            </form>
        );


        return (
            <div style={{'text-align': 'end'}}>
                <li className={classes.MenuItem}>
                    {form}
                </li>
            </div>

        );
    }
};

export default DropDownLink;