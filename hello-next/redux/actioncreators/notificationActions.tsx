export function toastMessage(message) {
    return {
        type: 'TOAST_MESSAGE',
        payload: message
    };
}

export function toastClear() {
    return {
        type: 'TOAST_CLEAR'
    };
}