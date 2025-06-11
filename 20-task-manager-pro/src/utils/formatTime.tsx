export const getFormattedTime = () =>
  new Date()
    .toISOString()
    .replace("T", " ")
    .replace(/-/g, "/")
    .substring(0, 19);
