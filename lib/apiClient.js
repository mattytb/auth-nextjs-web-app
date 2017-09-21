import fetch from 'isomorphic-fetch'
import Settings from '../settings.js'

export const isUserAuthenticated = async (user) => {

    const response = await fetch(`${Settings.baseUri}/${Settings.authenticationStatusUri}`,
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                token : user.token, 
                userId: user.id
            })
        }
    );

    return await response.json();
}

export const getFacebookUser = async (accessToken) => {

    const response = await fetch(`${Settings.baseUri}/${Settings.getFacebookUserUri}`,
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                accessToken : accessToken
            })
        }
    );
    
    return await response.json();
}

export const getUsers = async (token, userId) => {
    const response = await fetch(`${Settings.baseUri}/${Settings.usersUri}?token=${token}&userId=${userId}`);
    return await response.json();
}

export const deleteUser = async (token, userId) => {
	const response = await fetch(`${Settings.baseUri}/${Settings.usersUri}/${userId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            userId : userId,
            token : token
        })
    });
    return await response.json();
}
