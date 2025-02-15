import Link from 'next/link';

import { Container } from '@/components/container';
import { HeaderSubTitle, HeaderTitle } from '@/components/header';
import { Button } from '@/components/ui/button';

import { PokemonContent } from './_content';

export default function Page() {
    return (
        <>
            <section id='header' className='border-y'>
                <Container className='space-y-3 py-24'>
                    <HeaderTitle>Pokemons</HeaderTitle>
                    <HeaderSubTitle>All the Pokémon data you'll ever need in one place.</HeaderSubTitle>
                    <div className='flex items-center gap-5'>
                        <Button asChild>
                            <Link href='/'>Back to home</Link>
                        </Button>
                    </div>
                </Container>
            </section>
            <section id='content' className='bg-background'>
                <PokemonContent />
            </section>
        </>
    );
}
