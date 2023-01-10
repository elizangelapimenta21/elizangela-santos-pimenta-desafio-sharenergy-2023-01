import Button from '@mui/material/Button';
import { Container, Wrapper, Box, WrapperButton } from './style';
import { Iuser } from '../../interface/users';

export function Usercard({
    index,
    _id,
    name,
    email,
    phone,
    adress,
    cpf,
    deleteUser,
}: Iuser) {
    return (
        <Container key={index}>
            <Wrapper>
                <span>{name}</span>
                <Box>
                    <span>E-mail: {email}</span>
                    <span>Phone: {phone}</span>
                </Box>
                <span>Endereço: {adress}</span>
                <span>CPF: {cpf}</span>
            </Wrapper>
            <WrapperButton>
                <Button size="small">Change</Button>
                <Button size="small" onClick={() => deleteUser(_id)}>
                    Delete
                </Button>
            </WrapperButton>
        </Container>
    );
}
