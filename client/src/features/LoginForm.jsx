import React, {useState} from 'react';
import { gql, useQuery } from '@apollo/react-hooks';

function LoginForm() {

    localStorage.setItem('token', 'auth_token');

    const LOGIN = gql`
    query login {
        login {
            token
        }
    }`;

    const {data, loading} = useQuery(LOGIN);

    /*{!loading && (
        <div>{data}</div>
    )}*/
 
    return (
        <div>
            <input type="text"></input>
            <input type="password" ></input>
            <button>login</button>
        </div>
    );
};

export default LoginForm;