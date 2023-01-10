import { Botao } from '../Button';
import {
    Container,
    Text,
    Navigation,
    LinkPage,
    WrapperLogout,
    LinkNavigation,
} from './style';

interface PropsHeader {
    children: string;
}

export function Header(props: PropsHeader) {
    const clearStorage = () => {
        console.log('chegou');
        localStorage.clear();
        window.location.href = '/login';
    };

    return (
        <Container>
            <Text>{props.children}</Text>
            <Navigation>
                <LinkPage>
                    <LinkNavigation to="/">Home</LinkNavigation>
                </LinkPage>
                <LinkPage>
                    <LinkNavigation to="/cats">Status Code</LinkNavigation>
                </LinkPage>
                <LinkPage>
                    <LinkNavigation to="/ramdom-dog">Ramdom Dog</LinkNavigation>
                </LinkPage>
                <LinkPage>
                    <LinkNavigation to="/users">Users</LinkNavigation>
                </LinkPage>
            </Navigation>
            <WrapperLogout>
                <Botao onClick={clearStorage} children="Logout" />
            </WrapperLogout>
        </Container>
    );
}
