export const textReducer = (text, limit, dots) => {
  return text.length > limit ? text.substring(0, limit) + (dots ? '' : '...') : text;
};
