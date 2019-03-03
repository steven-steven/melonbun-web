export const onItemCreate = (newRequest) => ({
    newRequest,
    type: 'CREATE_REQUEST'
});

export const onItemDelete = (id, contents) => ({
    id,
    type: 'DELETE_REQUEST'
});