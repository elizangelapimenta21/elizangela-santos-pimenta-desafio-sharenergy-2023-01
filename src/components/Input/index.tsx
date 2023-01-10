import { InputHTMLAttributes } from 'react';
import { Input } from './style'

export function CampoTexto(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <Input
            type={props.type}
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    );
}
export { Input };

