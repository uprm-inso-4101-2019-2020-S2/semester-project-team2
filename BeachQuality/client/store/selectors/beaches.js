import { createSelector } from "reselect";

export const selectBeach = state => state.beach || {};

export const selectBeaches = createSelector(selectBeach, beach => {
  return beach.beaches || [];
});

export const selectBeachesLoading = createSelector(selectBeach, beach => {
  return beach.beachesLoading;
});

export const selectBeachError = createSelector(selectBeach, beacj => {
  return beach.err;
});

export const selectCurrentBeach = createSelector(selectBeach, beach => {
  return beach.currentBeach;
});
