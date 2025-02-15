import { Container } from '@/components/container';
import { HeaderSubTitle, HeaderTitle } from '@/components/header';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ProductContent } from './_content';
import { ProductCreate } from './_create';

export default function Products() {
    return (
        <>
            <section id='header' className='border-y'>
                <Container className='space-y-3 py-24'>
                    <HeaderTitle>Products</HeaderTitle>
                    <HeaderSubTitle>
                        Your will be never go back to the old way of doing things. Commerce is the future of online
                        shopping.
                    </HeaderSubTitle>
                    <div className='flex items-center gap-5'>
                        <Button asChild>
                            <Link href='/'>Back to home</Link>
                        </Button>
                        <ProductCreate>
                            <Button type='button'>Add new product</Button>
                        </ProductCreate>
                    </div>
                </Container>
            </section>
            <section id='content' className='bg-background'>
                <ProductContent />
            </section>
        </>
    );
}
