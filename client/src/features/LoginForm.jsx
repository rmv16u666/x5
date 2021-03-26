import React from 'react';
import { gql, useLazyQuery } from '@apollo/react-hooks';
import { history } from '../App';

function LoginForm() {    
    let login;
    let password;

    const LOGIN = gql`
        query login($login: String!, $password: String!) {
            login(login: $login, password: $password) {
                token,
                userName
            }
        }`;

    const [doLogin, {loading, data}] = useLazyQuery(LOGIN, {
        variables: {
            login,
            password
        }
    });

    if (data && data.login) {
        console.log(data.login.token);
        localStorage.setItem('token', data.login.token);
        history.push('/');
    }

    return (
        <div>
            <input type="text" onChange={ (e) => login = e.target.value }></input>
            <input type="password" onChange={(e) => password = e.target.value} ></input>
            <button onClick={ () => doLogin( { variables: {login: login, password: password} } )}>login</button>

            {!loading && data && (
                <div>{data.login.userName}</div>
            )}
        </div>
        
    );
};

export default LoginForm;