import {requestError, requestSuccess, requestPending} from './request_actions'

export const ADD_COMMENT = 'ADD_COMMENT';

export function addComment(comment) {
    return { type: ADD_COMMENT, comment}
}
