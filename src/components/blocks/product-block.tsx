import { Boxes, Pencil, ShoppingBag, Trash2 } from 'lucide-react';

import type { Product } from '@/types/product';

import { useDeleteProduct } from '@/app/(general)/products/_action';
import { ProductUpdate } from '@/app/(general)/products/_update';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { toRupiah } from '@/lib/utils';
import { Button } from '../ui/button';

interface ProductBlockProps {
    product: Product;
}

const ProductBlock = ({ product }: ProductBlockProps) => {
    const { submit: deleteProduct } = useDeleteProduct();

    return (
        <Card className='relative'>
            <CardHeader className='w-min'>
                <div className='rounded-full border bg-background-secondary p-3'>
                    <ShoppingBag className='size-5 text-muted-foreground' />
                </div>
                <div className='absolute right-3 top-1.5'>
                    <div className='flex items-center justify-center'>
                        <ProductUpdate product={product}>
                            <Button type='button' size='icon' variant='ghost' className='h-7 w-7 [&_svg]:size-3'>
                                <span className='sr-only'>toggle dialog</span>
                                <Pencil className='size-4 text-muted-foreground' />
                            </Button>
                        </ProductUpdate>
                        <Button
                            type='button'
                            onClick={() => deleteProduct(product.id)}
                            size='icon'
                            variant='ghost'
                            className='h-7 w-7 [&_svg]:size-3'>
                            <span className='sr-only'>Delete product</span>
                            <Trash2 className='size-4 text-destructive' />
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <h3 className='line-clamp-2 font-semibold text-foreground'>{product.name}</h3>
            </CardContent>
            <CardFooter className='justify-between'>
                <p className='text-sm font-semibold text-brand-green'>{toRupiah(product.price)}</p>
                <div className='flex items-center gap-1 text-muted-foreground'>
                    <Boxes className='size-4 stroke-[1.5]' />
                    <span className='text-sm'>{product.stock}</span>
                </div>
            </CardFooter>
        </Card>
    );
};

export { ProductBlock };
