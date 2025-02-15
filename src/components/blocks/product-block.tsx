import { Boxes, ShoppingBag } from 'lucide-react';

import type { Product } from '@/types/product';

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { toRupiah } from '@/lib/utils';

interface ProductBlockProps {
    product: Product;
}

const ProductBlock = ({ product }: ProductBlockProps) => {
    return (
        <Card>
            <CardHeader className='w-min'>
                <div className='bg-background-secondary rounded-full border p-3'>
                    <ShoppingBag className='text-muted-foreground size-5' />
                </div>
            </CardHeader>
            <CardContent>
                <h3 className='line-clamp-2 font-semibold text-foreground'>{product.name}</h3>
            </CardContent>
            <CardFooter className='justify-between'>
                <p className='text-brand-green text-sm font-semibold'>{toRupiah(product.price)}</p>
                <div className='text-muted-foreground flex items-center gap-1'>
                    <Boxes className='size-4 stroke-[1.5]' />
                    <span className='text-sm'>{product.stock}</span>
                </div>
            </CardFooter>
        </Card>
    );
};

export { ProductBlock };
