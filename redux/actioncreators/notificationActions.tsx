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

export const fetching = () => ({ type: "FETCHING" });
export const fetchingDone = () => ({ type: "FETCHING_DONE" });
