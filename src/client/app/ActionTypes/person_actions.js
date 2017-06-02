import {requestError, requestSuccess, requestPending} from './request_actions'
import { getPersons, getContacts, createContact, createAddress } from '../Functions/dispatch_func'

export const ADD_PERSONS = 'ADD_PERSONS';
export const ADD_CONTACTS = 'ADD_CONTACTS'
export const ADD_CONTACT = 'ADD_CONTACT';


export function addPersons(persons) {
    return { type: ADD_PERSONS, persons}
}

export function addContacts(contacts) {
    return {type: ADD_CONTACTS, contacts}
}

export function addContact(contact) {
    return {type: ADD_CONTACT, contact}
}


export function getPersonsAsynch() {
    return function(dispatch){
        dispatch(requestPending())
        let success = (users)=>{
            dispatch(addPersons(users))
            dispatch(requestSuccess())
        }
        let error = (error)=>{
            dispatch(requestError(error.message))
        }
        getPersons(success,error);
    }
}

export function getContactsAsynch() {
    return function(dispatch) {
      dispatch(requestPending())
      let success = (contacts)=>{
          dispatch(addContacts(contacts))
          dispatch(requestSuccess())
      }
      let error = (error)=>{
        dispatch(requestError(error.message))
      }
      getContacts(success, error)
    }

}

export function addContactAsynch(contact) {
    return function(dispatch) {
        dispatch(requestPending())
        contact.addressId = addressId;
        let success = (result)=>{
            let contactId = result.contactId
            contact.contactId = contactId;
            dispatch(addContacts(contact))
            dispatch(requestSuccess())
        }
        let error = (error)=>{
            dispatch(requestError(error.message))
        }
        dispatch(createContact(success, error, contact))
    }
}

export function addAddressAsynch(contact, address) {
    return function(dispatch) {
        dispatch(requestPending())
        let success = (addressId) => {
            contact.addressId = addressId
            dispatch(addContactAsynch(contact))
            dispatch(requestSuccess())
        }
        let error = (error) => {
            dispatch(requestError(error.message))
        }
        dispatch(createAddress(success, error, address))
    }
}
