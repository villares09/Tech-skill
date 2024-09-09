export const getNavbarState = () => {
  const res = localStorage.getItem("navbarState");
  return res === null ? "market" : JSON.parse(res);
};

export const getTimestampMarketInfo = () => {
  return localStorage.getItem("timestampMarketInfo");
};
export const setTimestampMarketInfo = (value: string) => {
  return localStorage.setItem("timestampMarketInfo", value);
};
export const setNavbarState = (value: string) => {
  localStorage.setItem("navbarState", JSON.stringify(value));
};

export const getProMode = () => {
  return localStorage.getItem("promode");
};

export const getFirstNotification = async () => {
  const value = await localStorage.getItem("firstTimeNotification");
  return value === "true" || value == null;
};
export const setFirstNotification = (isFirstTime: boolean) => {
  return localStorage.setItem(
    "firstTimeNotification",
    isFirstTime ? "true" : "false"
  );
};
