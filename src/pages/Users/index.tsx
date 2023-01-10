import { useState, useEffect } from 'react';
import { Form } from '../../components/Form';
import { Header } from '../../components/Header';
import { Usercard } from '../../components/userCard';
import { Iuser } from '../../interface/users';
import { userApi } from '../../services/Users/api';
import { Container } from './style';

import { Types } from 'mongoose';

export function Users() {
    const [users, setUsers] = useState<Iuser[]>([]);

    async function getUsers() {
        userApi.get('/users').then((res) => setUsers(res.data));
    }

    async function deleteUser(_id: Types.ObjectId) {
        const responde = await userApi.delete(`/users/${_id}`);
        getUsers();
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <Header children="Users" />
            <Form />
            <Container>
                {users.map((user, index) => (
                    <Usercard
                        key={index}
                        _id={user._id}
                        name={user.name}
                        email={user.email}
                        phone={user.phone}
                        adress={user.adress}
                        cpf={user.cpf}
                        deleteUser={deleteUser}
                    />
                ))}
            </Container>
        </>
    );
}
