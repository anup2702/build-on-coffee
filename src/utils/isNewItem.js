export default function isNewItem(dateAdded) {
  if (!dateAdded) return false;
  const today = new Date();
  const addedDate = new Date(dateAdded);
  const diffTime = today - addedDate;
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  return diffDays <= 7; // true if within 7 days
}
