export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

export const setError = error => {
  return {
    type: SET_ERROR,
    error
  };
};
