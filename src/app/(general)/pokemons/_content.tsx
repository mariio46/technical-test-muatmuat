'use client';

import * as React from 'react';

import { Container } from '@/components/container';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Card } from '@/components/ui/card';
import { useFetchPokemons } from './_query';

const PokemonContent = () => {
    const { data } = useFetchPokemons();
    const [search, setSearch] = React.useState<string>('');

    const filteredPokemons = data ? data.results.filter((pokemon) => pokemon.name.includes(search)) : [];

    return (
        <Container className='space-y-6 py-24'>
            <div className='grid sm:grid-cols-2'>
                <div>
                    <Input
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search Pokemon'
                    />
                </div>
            </div>
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredPokemons.map((item) => (
                            <TableRow key={item.name}>
                                <TableCell>{item.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </Container>
    );
};

export { PokemonContent };
