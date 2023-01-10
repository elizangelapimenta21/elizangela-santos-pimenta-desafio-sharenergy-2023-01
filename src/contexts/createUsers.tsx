import { createContext, useState, ReactElement } from 'react';
import { usersProps } from '../interface/users';


export const UserContext = createContext<usersProps>({

    name: '',
    email: '',
    phone: '',
    adress: '',
    cpf: '',
    setName: () => {},
    setEmail: () => {},
    setPhone: () => {},
    setAdress: () => {},
    setCpf: () => {},
});

export const UserProvider = ({ children }: {children: ReactElement}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [adress, setAdress] = useState('');
    const [cpf, setCpf] = useState('');

    return (
        <UserContext.Provider
            value={{
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
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
