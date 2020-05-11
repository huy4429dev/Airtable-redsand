
import * as types from './../constansts/user';

export default function callApi(endpoint, method, body=""){

        return fetch(`${types.API_ENDPOINT}/${endpoint}`,{
            method: method,
            body: body ? JSON.stringify(body) : null,
            headers: {
                'Content-Type': 'application/json'
            },
        })

}