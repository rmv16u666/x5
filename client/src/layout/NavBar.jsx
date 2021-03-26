import React from 'react';
import { Button, Menu, Container } from 'semantic-ui-react';

export default function NavBar() {
    return(
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item name='Authors' />
                <Menu.Item name='Books' />
                <Menu.Item>
                    <Button positive content='Logout' ></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}