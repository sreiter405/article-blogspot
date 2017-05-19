import {requestError, requestSuccess, requestPending} from './request_actions'
import { getPersons } from '../Functions/dispatch_func'

export const ADD_PERSONS = 'ADD_PERSONS';

export function addPersons(persons) {
    return { type: ADD_PERSONS, persons}
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