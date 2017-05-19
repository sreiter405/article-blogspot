import { ADD_PERSONS } from '../ActionTypes/person_actions'
import { REQUEST_ERROR, REQUEST_SUCCESS, REQUEST_PENDING } from '../ActionTypes/request_actions'
const initialState = {
    persons : [],
    isFetching: false,
    requestErrorMessage: ''
}
function person(state = initialState, action) {
    switch (action.type) {
        case ADD_PERSONS:
            return {
                ...state,
                persons : action.persons
            }
        case REQUEST_PENDING:
            return {
                ...state,
                isFetching : true,
                fetchErrorMessage : ""
            }
        case REQUEST_SUCCESS:
            return {
                ...state,
                isFetching : false,
                fetchErrorMessage : ""
            }
        case REQUEST_ERROR:
            return {
                ...state,
                isFetching : false,
                fetchErrorMessage : action.error_message
            }
        default:
            return state
    }
}

export default person;
