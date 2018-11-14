import decode from 'jwt-decode';
export default class UserService {
    constructor(domain) {
        this.domain = domain || 'http://localhost:8080'
        this.fetch = this.fetch.bind(this)
        this.getProfile = this.getProfile.bind(this)
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken()
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    getProfile() {
        return decode(this.getToken());
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    fetch(url, options) {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }

    getInvestments = (userId) => {
        return this.fetch(`${this.domain}/get-investments`, {
            method: 'POST',
            body: JSON.stringify({
                userId
            })
        }).then(res => {
            return res;
        })
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}