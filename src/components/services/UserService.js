import { authHeader } from '../helpers/authHeader';

export async function getUserId(name) {

    try {
        const response = await fetch('/users/get_id', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: name})
        });
        return await response.json()
    } catch(error) {
        return {};
    }
}

export async function handleLogin(name, pass) {

    try {
        const response = await fetch('/users/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: name, password: pass})
        });
        return await response.json()
    } catch(error) {
        return {};
    }
}

export async function handleRegister(name, pass) {
    try {
        const response = await fetch('/users/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: name, password: pass})
        });
        return await response.json()
    } catch(error) {
        return {};
    }
}

export async function getUser(id) {

    try {
        const response = await fetch('/users/' + id, {
            headers: authHeader()
        });
        return await response.json()
    } catch(error) {
        return {};
    }
}

export async function PostNewItem(id, item) {

    try {
        const response = await fetch('/users'+ '/add/' + id , {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(item)
        })
        return await response.json()
    } catch(error) {
        return {};
    }
}

export async function PostRemoveItem(id, item) {

    try {
        const response = await fetch('/users' + '/remove/' + id, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            ...authHeader()
        },
            body: JSON.stringify(item)
        })
        return await response.json()
    } catch(error) {
        return {};
    }
}
