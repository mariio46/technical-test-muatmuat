import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Pokemon = {
    count: number;
    results: Array<{ name: string; url: string }>;
};

async function fetchPokemons() {
    const { data } = await axios.get<Pokemon>('https://pokeapi.co/api/v2/pokemon-species/?limit=100', {
        params: { limit: 100 },
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

    return data;
}

export const useFetchPokemons = () => {
    return useQuery({
        queryKey: ['pokemons'],
        queryFn: fetchPokemons,
    });
};
