export const sharedInputChangeHandler = (_this, event, inputIdentifier, stateVariable)=> {
    const updateContactForm = {
        ...stateVariable
    };
    const updateFormElement = {
        ...updateContactForm[inputIdentifier]
    };
    updateFormElement.value = event.target.value;
    updateFormElement.valid = _this.checkValidity(updateFormElement.value, updateFormElement.validation );
    updateFormElement.touched = true;
    updateContactForm[inputIdentifier] = updateFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updateContactForm) {
        formIsValid = updateContactForm[inputIdentifier].valid && formIsValid;
    }
    _this.setState({form: updateContactForm, formIsValid: formIsValid})
};


