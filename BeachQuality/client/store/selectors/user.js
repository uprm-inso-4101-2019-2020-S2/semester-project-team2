import { createSelector } from "reselect";

export const selectUser = state => state.user || {};

export const selectUserLoading = createSelector(selectUser, user => {
  return user.userLoading;
});

export const selectUserErr = createSelector(selectUser, user => {
  return user.err;
});

export const selectUserAccount = createSelector(selectUser, user => {
  return user.account;
});

export const selectUserLocation = createSelector(selectUser, user =>{
  return user.location;
})

export const selectToggleLocation = createSelector(selectUser, user => {
  return user.useLocation;
})
