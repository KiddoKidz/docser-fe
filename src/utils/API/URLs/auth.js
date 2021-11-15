const URL = process.env.REACT_APP_API_BASE_URL;

const BaseAuth = `${URL}/auth`;
export const Login = `${BaseAuth}/login`;
export const LoginAdmin = `${BaseAuth}/login?is_admin=True`;
export const GetUser = `${BaseAuth}/userinfo/`;
