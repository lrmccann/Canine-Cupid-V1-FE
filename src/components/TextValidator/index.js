
import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';
 
class TextInput extends ValidatorComponent {
 
    renderValidatorComponent() {
        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;
 
        return (
            <div className="form-group">
                <input
                    {...rest}
                    ref={(r) => { this.input = r; }}
                />
                {this.errorText()}
            </div>
        );
    }
 
    errorText() {
        const { isValid } = this.state;
 
        if (isValid) {
            return null;
        }
 
        return (
            <div style={{ color: 'red' }}>
                {this.getErrorMessage()}
            </div>
        );
    }
}
 
export default TextInput;
