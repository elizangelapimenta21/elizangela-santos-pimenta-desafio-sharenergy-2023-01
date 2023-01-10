import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../services/Firebase/firebaseConfig';

import { Wrapper, Title, Form, Label, Span, SpanMessageError } from './style';
import { Input } from '../../components/Input/style';
import { Botao } from '../../components/Button';

export function Cadastro() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [messageError, setMessageError] = useState<string>('');
    const [showMessageError, setShowMessageError] = useState<boolean>(false);

    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);

        if (user) {
            window.alert('Conta cadastrada com sucesso!');
            window.location.href = '/';
        }

        if (error) {
            setShowMessageError(true);
            setMessageError(error.message);
        }
    };

    return (
        <Wrapper>
            <Title>Crie uma conta</Title>
            {showMessageError ? (
                <SpanMessageError>* {messageError}</SpanMessageError>
            ) : null}
            <Form onSubmit={handleSubmit}>
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
                <Span>
                    Voltar para página de <Link to="/login">Login.</Link>
                </Span>
                <Botao children="cadastrar-se" />
            </Form>
        </Wrapper>
    );
}
