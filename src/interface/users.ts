import { Types } from 'mongoose';

export interface usersProps {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    phone: string;
    setPhone: React.Dispatch<React.SetStateAction<string>>;
    adress: string;
    setAdress: React.Dispatch<React.SetStateAction<string>>;
    cpf: string;
    setCpf: React.Dispatch<React.SetStateAction<string>>;
}

export interface Iuser {
    client: {
        _id: Types.ObjectId;
        name: string;
        email: string;
        phone: string;
        adress: string;
        cpf: string;
        deleteUser: (_id: Types.ObjectId) => void;
    };
}
