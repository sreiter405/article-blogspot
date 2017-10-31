import { ADD_COMMENT} from '../ActionTypes/blog_actions'
import { REQUEST_ERROR, REQUEST_SUCCESS, REQUEST_PENDING } from '../ActionTypes/request_actions'
const initialState = {
    comments : [],
    isComment: false,
    isFetching: false,
    requestErrorMessage: ''
}
function appreducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments : [
                  ...state.comments,
                  action.comment
                ],
                isComment: true
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
        case 'persist/REHYDRATE':
          const savedData = action.payload.appreducer || initialState;

          return {
            ...state,
            ...savedData
          }
        default:
            return state
    }
}

export default appreducer;
