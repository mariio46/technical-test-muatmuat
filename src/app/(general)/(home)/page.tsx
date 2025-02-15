import Link from 'next/link';

import { Container } from '@/components/container';
import { HeaderSubTitle, HeaderTitle } from '@/components/header';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
        <section id='header' className='border-y'>
            <Container className='space-y-3 py-24'>
                <HeaderTitle>Technical Test by Muatmuat</HeaderTitle>
                <HeaderSubTitle>Welcome to Technical Test by Muatmuat.</HeaderSubTitle>
                <div className='flex items-center gap-5'>
                    <Button asChild>
                        <Link href='/products'>Products</Link>
                    </Button>
                    <Button asChild>
                        <Link href='/pokemons'>Pokemons</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
