import React from 'react';
import { Field, reduxForm } from 'redux-form';

class MovieForm extends React.Component {

    renderInput = (formProps) => {

        return (
            <div className="form-group">
                <label>{formProps.label}</label>
                <input {...formProps.input} className="form-control" autoComplete="off"/>
            </div>
        )
    }

    onSubmit = (formValue) => { //call our action creator with our form values when the form is submitted

        this.props.onSubmit(formValue); //passing onSubmit as a prop from the parent component
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error"> {/* If field element is given a prop that isn't on the predefined list of props, it just passes them to our component method */}
                <Field name="title" component={this.renderInput} label="Enter Title"/> {/* Field with a given name, also Field is just reponsible for managing our redux side of things, it doesn't physically render an input */}
                <button className="btn btn-primary">Submit</button>
            </form>
        )
    }
}


export default reduxForm({
    form: 'movieForm'
})(MovieForm);