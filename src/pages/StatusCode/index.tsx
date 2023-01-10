import { Header } from '../../components/Header';
import { Container, TextField, WrapperImage, Image, Text } from './style';

import { useEffect, useState } from 'react';
import { apiCode } from '../../services/statusCode/apiStatusCode';

export function Status() {
    const [code, setCode] = useState();
    const [inputValue, setInputValue] = useState('');

    const getCode = () => {
        apiCode.get(`/`).then((res) => setCode(res.data));
    };

    useEffect(() => {
        getCode();
    }, []);

    return (
        <>
            <Header children="Status Code" />
            <Text>HTTP Cats</Text>
            <Container>
                <TextField
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Search for the status code you want"
                />
                <WrapperImage>
                    <Image src={`https://http.cat/${inputValue}.jpg`} />
                </WrapperImage>
            </Container>
        </>
    );
}
