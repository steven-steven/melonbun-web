import * as RequestServices from '../services/requestServices';
import {IRequestForm} from '../dataTypes/request';
import * as NotificationActions from '../actioncreators/notificationActions'

export const setRequestEntries = (requestList:any) => ({
    payload: {requestList},
    type: 'INITIALIZE_ALL_REQUESTS'
});

export function initializeRequestEntries() {

    return function (dispatch, getState) {

        dispatch(NotificationActions.fetching());
        return RequestServices.getAllRequests().then(
            data => {
                dispatch(setRequestEntries(data));
            }
        )
        .catch(function(error) {
            console.log("Error: Failed to initialize requests - ", error);
        })
        .then(()=>{
            dispatch(NotificationActions.fetchingDone());
        });
    };
}

export function createNewRequest(requestForm:IRequestForm) {

    return function (dispatch, getState) {

        return RequestServices.createNewRequest(requestForm).then(
            data => {
                if(data) {
                    dispatch(initializeRequestEntries());
                    dispatch(NotificationActions.toastMessage("Request Created"))
                }
            }
        )
        .catch(function(error) {
            console.log("Error: Failed to create request - ", error);
        });
    };
}