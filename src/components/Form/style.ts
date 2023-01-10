import styled from 'styled-components';
import { Button } from '../Button/style';

export const Container = styled.section`
    width: 30%;
    background-color: #ffffff;
    border-radius: 10px;

    margin: 0 auto;
    margin-top: 3em;

    > form {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
`;

export const Label = styled.label`
    padding-bottom: 0.5em;
`;

export const ButtonRegister = styled(Button)`
    margin: 1em;
`;
