export const onItemCreate = (newItem) => ({
  newItem,
  type: 'CREATE_NEW_MYITEM'
});

export const onItemDelete = (id, contents) => ({
  id,
  type: 'DELETE_MYITEM'
});