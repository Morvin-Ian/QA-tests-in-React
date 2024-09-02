import React from 'react'
import InputField from './InputField';
import { FormControl, FormProps } from '../../types';


const Form: React.FC<FormProps> = ({
    formControls = [],
    formData,
    setFormData,
    buttonText,
    title,
    handleSubmit
}) => {

    const formTypes = {
        INPUT: 'input',
        SELECT: "select",
        TEXTAREA: "textarea"
    }

    function renderFormElement(currentElement:FormControl ) {
        let content = null;

        switch (currentElement?.componentType) {
            case formTypes.INPUT:
                content = <InputField
                    key={currentElement?.name}
                    data={currentElement}
                    value={formData[currentElement.name]}
                    onChange={((event) => setFormData({
                        ...formData,
                        [event.target.name]: event.target.value
                    }))}

                />
                break;
            default:
                content = null
                break;
        }

        return content;
    }

    return (
        <div className='signin-container'>
            <form className="signin-form" onSubmit={handleSubmit}>
                <h2>{title}</h2>

                {
                    formControls?.length ?
                        formControls.map((formElement:FormControl) => renderFormElement(formElement))
                        : null
                }
                <div>
                    <button>{buttonText || 'Submit'}</button>
                </div>
            </form>

        </div>
    )
}

export default Form