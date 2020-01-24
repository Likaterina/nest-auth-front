export const getToken = () => localStorage.getItem("token")
export const setToken = (token: string) => {
  localStorage.setItem("token", token)
  console.log(token)
}
export const removeToken = () => localStorage.removeItem("token")
