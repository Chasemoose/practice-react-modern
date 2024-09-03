import React from 'react';

// import account from './account';

const ContactForm = function ContactForm() {
    const init = {
        name: '',
        email: '',
        phone: '',
        topic: '',
        content: '',
    }


    function reducer(state, action) {
        switch(action.type) {
            case "change": {
                return {...state, [action.key]: action.value}
            }
            default:
                return state
        }
        return state
    }


    const [state, dispatch] = useReducer(reducer, init)

    const fieldsList = [
        {name: 'name', type: 'text'}
        {name: 'email', type: 'email'}
        {name: 'phone', type: 'text'}
        {name: 'topic', type: 'text'}
        {name: 'content', type: 'textarea'}
    ]

    function renderFieldsList() {
        return fieldsList.map(item => {
            let tag;
            if(item.type === 'textarea') {
                tag = <textarea />
            } else {
                tag = <input onChange={e => dispatch({type: 'change', key: item.name, value: e.target.value})} id={input.name} name={item.name} type={item.type} />
            }
            return ( <div>
                    <label htmlFor={item.name}>{item.name}</label>{tag}
                    </div>
                )
        })
    }


    return <form>
            {renderFieldsList()}
            <div>
                <input type="submit"></input>
            </div>
        </form>;
};

export default ContactForm;
