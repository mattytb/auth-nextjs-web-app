import Cookies from 'universal-cookie';

const cookieName = 'MTB_AUTH_USER',
    daysOfExpiry = 3;
    
let cookies;

const getCookies = (cookieFromRequest) => {
    cookieFromRequest 
        ? cookies = new Cookies(cookieFromRequest) 
        : cookies = new Cookies();
}

export const getUserFromCookie = (cookiesFromRequest) => {
    getCookies(cookiesFromRequest);

    return cookies.get(cookieName)
    ? cookies.get(cookieName) 
    : null;
}

export const deleteUserCookie = (cookiesFromRequest) => {
    getCookies(cookiesFromRequest);
    cookies.remove(cookieName);
}

export const createUserCookie = (cookiesFromRequest, token, id, name, imageSrc) => {
    getCookies(cookiesFromRequest);

    const user = JSON.stringify({token, id, name, imageSrc});
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + daysOfExpiry);
    cookies.set(cookieName, user, { expires : expireDate });
    return cookies.get(cookieName);
}