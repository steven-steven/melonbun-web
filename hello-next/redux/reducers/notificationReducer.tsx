const initialState = {
    toast: {
        message: '',
        open: false
    }
};

export default function (state = initialState, action) {

    switch (action.type) {

        case 'TOAST_MESSAGE':
            {
                return {
                    ...state,
                    toast: {
                        message: action.payload,
                        open: true
                    }
                };
            }

        case 'TOAST_CLEAR':
            {
                return {
                    ...state,
                    toast: {
                        message: "",
                        open: false
                    }
                };
            }

    }

    return state;
}