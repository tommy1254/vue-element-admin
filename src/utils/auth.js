import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const Authorization = 'Authorization'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

//jwt
export function getAuthorization() {
  return Cookies.get(Authorization)
}

export function setAuthorization(authorization) {
  return Cookies.set(Authorization, authorization)
}

export function removeAuthorization() {
  return Cookies.remove(Authorization)
}
