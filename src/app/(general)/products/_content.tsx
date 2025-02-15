'use client';

import * as React from 'react';

import { CircleX } from 'lucide-react';

import { useProductStore } from '@/stores/product-store';

import { ProductBlock } from '@/components/blocks/product-block';
import { Container } from '@/components/container';
import { ProductSkeleton } from '@/components/skeleton/product-skeleton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

const ProductContent = () => {
    const [isClient, setIsClient] = React.useState(false);

    const filterResult = useProductStore((state) => state.filterResult);

    const search = useProductStore((state) => state.search);
    const setSearch = useProductStore((state) => state.setSearch);
    const order = useProductStore((state) => state.order);
    const setOrder = useProductStore((state) => state.setOrder);
    const clearFilter = useProductStore((state) => state.clearFilter);

    const filteredProducts = filterResult();

    const show = Object.values({ search, order }).some((item) => item !== '');

    React.useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <Container className='space-y-6 py-24'>
            <div className='grid gap-3 sm:grid-cols-2'>
                <div className='flex items-center gap-2'>
                    <Button
                        tabIndex={-1}
                        size='icon'
                        variant='outline'
                        className={cn('shrink-0 [&_svg]:size-5', !show && 'hidden')}
                        onClick={clearFilter}>
                        <span className='sr-only'>Clear Filter</span>
                        <CircleX className='text-destructive stroke-2' />
                    </Button>
                    <Input
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search Product'
                    />
                </div>
                <div className='grid sm:grid-cols-2'>
                    <Select value={order ?? ''} onValueChange={(e) => setOrder(e as 'asc' | 'desc' | null)}>
                        <SelectTrigger>
                            <SelectValue placeholder='Sort by Price' />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='desc'>Expensive</SelectItem>
                            <SelectItem value='asc'>Cheapest</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {isClient ? (
                    filteredProducts.map((product) => <ProductBlock key={product.id} product={product} />)
                ) : (
                    <ProductSkeleton />
                )}
            </div>
        </Container>
    );
};

export { ProductContent };
