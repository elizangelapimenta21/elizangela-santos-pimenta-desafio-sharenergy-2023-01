import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    height: 75px;
    width: 100%;
    background-color: #2f3030;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Text = styled.h1`
    margin-left: 5rem;
    font-size: 1.7em;
    color: #ffffff;
`;

export const Navigation = styled.ul`
    display: flex;
    align-items: center;
`;

export const LinkPage = styled.li`
    list-style: none;
    padding: 1em;
    color: #ffffff;
`;

export const WrapperLogout = styled.div`
    Button {
        margin-right: 5rem;
        width: 12rem;
        height: 2.5rem;
        border-radius: 100px;
    }
`;

export const LinkNavigation = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    transition: ease all 0.2s;
    :hover {
        color: #76787a;
    }
`;
