import React from 'react';
import TextInputField from './textInputField';
import SecuredInputField from './securedInputField'

export default class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <TextInputField />
                <br></br>
                <SecuredInputField />
            </div>
        );
    }
}