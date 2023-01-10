import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

export const Container = styled(Card)`
    width: 40%;
    min-width: 500px;
    margin: 1em;
`;

export const Wrapper = styled(CardContent)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1em 0 1em 0;
`;

export const WrapperButton = styled(CardActions)`
    display: flex;
    justify-content: space-between;
`;