import React from 'react';
import { gql, useQuery } from '@apollo/react-hooks';

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
        </div>
    );
}

export default Home;