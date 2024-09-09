export const getToken = () => {
  return localStorage.getItem(process.env.REACT_APP_STORAGE_TOKEN_KEY_NAME!);
};
export const getIsAuthenticated = () => {
  return localStorage.getItem("isAuthenticated");
};
export const getFTUTours =() => {
  return localStorage.getItem("FTUTours");
};
export const setFTUTours = (value: Array<string>) => {
  return localStorage.setItem("FTUTours",JSON.stringify(value) );
};
export const removeFTUTours = () => {
  return localStorage.removeItem("FTUTours");
};
export const getFITours = () => {
  return localStorage.getItem("FITours");
};
export const setFITours = (value: Array<string>) => {
  return localStorage.setItem("FITours",JSON.stringify(value));
};
export const removeFITours = () => {
  return localStorage.removeItem("FITours");
};


export const getRefreshToken = () => {
  return localStorage.getItem(process.env.REACT_APP_STORAGE_REFRESH_TOKEN_KEY_NAME!);
};
export const getTimestamp = () => {
  return localStorage.getItem(process.env.REACT_APP_STORAGE_TIMESTAMP_KEY_NAME!);
};
export const setTimestamp = (value: string) => {
  return localStorage.setItem(
    process.env.REACT_APP_STORAGE_TIMESTAMP_KEY_NAME!,
    value
  );
};
export const getUserStatus = () => {
  return localStorage.getItem(process.env.REACT_APP_STORAGE_USERSTATUS_KEY_NAME!);
};
export const setUserStatus = (value: string) => {
  return localStorage.setItem(
    process.env.REACT_APP_STORAGE_USERSTATUS_KEY_NAME!,
    value
  );
};
export const setToken = (value: string) => {
  localStorage.setItem(process.env.REACT_APP_STORAGE_TOKEN_KEY_NAME!, value);
};

export const setRefreshToken = (value: string) => {
  localStorage.setItem(process.env.REACT_APP_STORAGE_REFRESH_TOKEN_KEY_NAME!, value);
};

export const removeAuthdata = async () => {
  localStorage.removeItem(process.env.REACT_APP_STORAGE_USERSTATUS_KEY_NAME!);
  localStorage.removeItem(process.env.REACT_APP_STORAGE_REFRESH_TOKEN_KEY_NAME!);
  localStorage.removeItem(process.env.REACT_APP_STORAGE_TOKEN_KEY_NAME!);
  localStorage.removeItem(process.env.REACT_APP_STORAGE_TIMESTAMP_KEY_NAME!);
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("timestamp");
  localStorage.removeItem("timestampMarketInfo");
  localStorage.removeItem("userData");
  localStorage.removeItem("promode");
  localStorage.removeItem("userInfo");
};
