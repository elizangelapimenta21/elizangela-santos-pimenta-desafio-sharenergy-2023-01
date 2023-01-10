import { useEffect, useState } from 'react';
import { apiDog } from '../../services/RamdomDog/apiDog';

import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Loader } from '../Loader';

import { Button } from '../Button/style';
import { ContainerCard, WrraperButton, Text } from './style';

import { dogsProps } from '../../interface/dogs';

export function CardStatusCode() {
    const [dogs, setDogs] = useState<dogsProps>();
    const [loading, setLoading] = useState(false);

    async function getDogs() {
        setLoading(true)
        apiDog.get('/woof.json').then((res) => setDogs(res.data));
        setLoading(false)
    }

    useEffect(() => {
        getDogs();
    }, []);

    return (
        <>
            <Text>Click refresh to view a random dog</Text>
            
            <ContainerCard sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia component="img" height="300" image={dogs?.url} />
                    <WrraperButton>
                        <Button children="Refresh" onClick={getDogs} />
                    </WrraperButton>
                </CardActionArea>
            </ContainerCard>
        </>
    );
}
