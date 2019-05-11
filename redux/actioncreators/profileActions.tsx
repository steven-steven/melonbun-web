export const onAddFavoriteRequest = (requestId) => ({
    requestId,
    type: 'ADD_TO_FAVORITE_REQUESTS'
});

export const onRemoveFavoriteRequest = (requestId) => ({
    requestId,
    type: 'REMOVE_FROM_FAVORITE_REQUESTS'
});