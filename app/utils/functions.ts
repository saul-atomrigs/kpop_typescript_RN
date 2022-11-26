type TTextReducer = {
  text: string;
  limit: number;
  dots: boolean;
};

export const textReducer = ({text, limit, dots}: TTextReducer) => {
  return text.length > limit ? text.substring(0, limit) + (dots ? '...' : '') : text;
};
