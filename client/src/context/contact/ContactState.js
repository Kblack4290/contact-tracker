import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_CONTACTS,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Keith Black',
                email: 'Keithblack4290@gmail.com',
                phone: '(845) 625-9783',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Nikima Henry',
                email: 'Nhenry869@gmail.com',
                phone: '(845) 901-7870',
                type: 'professional'
            },
            {
                id: 3,
                name: 'Hazel Basil',
                email: 'HazeBaze@gmail.com',
                phone: '(123) 456-7890',
                type: 'personal'
            },
        ],
        current: null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add contact 
    const addContact = contact => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact })
    }
    // delete contact

    const deleteContact = id => {

        dispatch({ type: DELETE_CONTACT, payload: id })
    }
    //set current contact
    const setCurrent = contact => {

        dispatch({ type: SET_CURRENT, payload: contact })
    }
    //clear current contact
    const clearCurrent = () => {

        dispatch({ type: CLEAR_CURRENT, payload: null })
    }
    //upadate contact

    //Filter contacts

    //clear  Filter

    return (
        <contactContext.Provider value={{
            contacts: state.contacts,
            current: state.current,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent
        }}>
            value = { }
            {props.children}
        </contactContext.Provider>
    )
}

export default ContactState;