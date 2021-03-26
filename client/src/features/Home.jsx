import React from 'react';
import { gql, useQuery } from '@apollo/react-hooks';
import { history } from '../App';

function Home() {


    const LOGIN = gql`
    query login {
        login {
            token
        }
    }`;

    const {data, loading} = useQuery(LOGIN);

    return(
        <div>
            <h3>Home page</h3>
            <button onClick={() => { history.push('/') }} >to home</button>
        </div>
    );
}

export default Home;