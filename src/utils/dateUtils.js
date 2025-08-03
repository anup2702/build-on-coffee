export const isNewItem = (dateAdded) => {
  const addedDate = new Date(dateAdded);
  const today = new Date();
  const diffInTime = today.getTime() - addedDate.getTime();
  const diffInDays = diffInTime / (1000 * 3600 * 24);

  return diffInDays <= 7; // If added in the last 7 days
};
