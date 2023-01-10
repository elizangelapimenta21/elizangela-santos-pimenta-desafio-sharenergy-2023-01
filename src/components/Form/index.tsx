import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../../contexts/createUsers';
import { Input } from '../Input';
import { Container, Wrapper, Label, ButtonRegister } from './style';

export function Form() {
    const {
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        adress,
        setAdress,
        cpf,
        setCpf,
    } = useContext(UserContext);

    async function createUser() {
        const response = await axios.post("http://localhost:3000/users",{
            name,
            email,
            phone,
            adress,
            cpf,
        });
        setName('');
        setEmail('');
        setPhone('');
        setAdress('');
        setCpf('');
    }

    return (
        <Container>
            <form onSubmit={createUser}>
                <Wrapper>
                    <Label>Name</Label>
                    <Input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Wrapper>
                <Wrapper>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Wrapper>
                <Wrapper>
                    <Label>Telefone</Label>
                    <Input
                        type="text"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </Wrapper>
                <Wrapper>
                    <Label>Endereço</Label>
                    <Input
                        type="text"
                        value={adress}
                        onChange={(event) => setAdress(event.target.value)}
                    />
                </Wrapper>
                <Wrapper>
                    <Label>CPF</Label>
                    <Input
                        type="text"
                        value={cpf}
                        onChange={(event) => setCpf(event.target.value)}
                    />
                </Wrapper>
                <ButtonRegister children="Register" />
            </form>
        </Container>
    );
}
