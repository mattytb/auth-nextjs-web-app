
import { isUserAuthenticated } from './apiClient'
import { getUserFromCookie } from './userCookieHelper'

export default async (cookie) => {

    let userIsLoggedIn;

    const user = getUserFromCookie(cookie);

    if(cookie && user){

        const userAuthenticated = await isUserAuthenticated(user);
        return userAuthenticated.success ? user : null;

    }
    else if(user){

        return user;
        
    }

    return null;
}