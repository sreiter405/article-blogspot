export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_ERROR = 'REQUEST_ERROR'
export const REQUEST_PENDING = 'REQUEST_PENDING'


export function requestError(error_message) {
    return { type: REQUEST_ERROR, error_message }
}

export function requestSuccess() {
    return { type: REQUEST_SUCCESS }
}

export function requestPending(){
    return { type : REQUEST_PENDING }
}
