export const selectFilter = state => state.filter.filter;
export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectName = state => state.contacts.inputs.name;
export const selectNumber = state => state.contacts.inputs.number;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const SelectIsModalShown = state => state.modal.isModalShown;
export const SelectOpenedContact = state => state.modal.openedContact;
export const SelectUserName = state => state.auth.user.name;
export const SelectUserEmail = state => state.auth.user.email;
