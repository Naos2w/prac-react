export const getFormattedTime = (days: number = 0) => {
  const now = new Date();
  const result = now.getDate() + days;
  return new Date(now.setDate(result))
    .toISOString()
    .replace("T", " ")
    .replace(/-/g, "/")
    .substring(0, 19);
};
