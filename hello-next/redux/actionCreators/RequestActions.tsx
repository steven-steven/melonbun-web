export const onItemCreate = (newRequest) => ({
    newRequest,
    type: 'CREATE_REQUEST'
});

export const onItemDelete = (id) => ({
    id,
    type: 'DELETE_REQUEST'
});