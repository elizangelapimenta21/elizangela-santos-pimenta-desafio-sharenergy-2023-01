import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/Firebase/firebaseConfig';

import {
    Wrapper,
    Title,
    Form,
    Label,
    Span,
    SpanMessageError,
    ContainerCheckBox,
} from './style';

import { Input } from '../../components/Input';
import { Botao } from '../../components/Button';
import Checkbox from '@mui/material/Checkbox';

export function Login() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [messageError, setMessageError] = useState<string>('');
    const [showMessageError, setShowMessageError] = useState<boolean>(false);
    const [remember, setRemember] = useState(false);

    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

        if (error) {
            setShowMessageError(true);
            setMessageError(error.message);
            return;
        }

        if (user) {
            if (remember) {
                localStorage.setItem('user', JSON.stringify(user));
            }
            console.log(remember);
            window.location.href = '/';
        }
    };

    useEffect(() => {
        const user = localStorage.getItem('user');
        const userParsed = user ? JSON.parse(user) : null;

        if (userParsed) {
            window.location.href = '/';
        }
    }, []);

    const handleChangeCheckbox = () => {
        setRemember(!remember);
    };

    return (
        <Wrapper>
            <Title>Faça login para acessar sua conta</Title>
            <Form onSubmit={handleSubmit}>
                {showMessageError ? (
                    <SpanMessageError>* {messageError}</SpanMessageError>
                ) : null}
                <Label>Email</Label>
                <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Label>Senha</Label>
                <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <ContainerCheckBox>
                    <Checkbox
                        value={remember}
                        onChange={handleChangeCheckbox}
                    />
                    <Span>Lembre me</Span>
                </ContainerCheckBox>

                <Span>
                    Não tem uma conta ainda?{' '}
                    <Link to="/cadastro">Cadastre-se</Link>
                </Span>
                <Botao children="Entrar" />
            </Form>
        </Wrapper>
    );
}
