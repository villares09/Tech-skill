export const getSelectedContact = () => {
  return JSON.parse(localStorage.getItem("selectedContact") ?? "");
};
export const setSelectedContact = (value: string) => {
  return localStorage.setItem("selectedContact", JSON.stringify(value));
};
export const removeSelectedContact = async () => {
  localStorage.removeItem("selectedContact");
};
export const getSelectedWithdrawalsAccount = () => {
  return JSON.parse(localStorage.getItem("WithdrawalsAccount") ?? "");
};
export const setSelectedWithdrawalsAccount = (value: string) => {
  return localStorage.setItem("WithdrawalsAccount", JSON.stringify(value));
};
export const removeSelectedWithdrawalsAccount = async () => {
  localStorage.removeItem("WithdrawalsAccount");
};
