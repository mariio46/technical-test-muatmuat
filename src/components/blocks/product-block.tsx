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
                <div className='bg-background-secondary rounded-full border p-3'>
                    <ShoppingBag className='text-muted-foreground size-5' />
                </div>
                <div className='absolute right-3 top-1.5'>
                    <div className='flex items-center justify-center'>
                        <ProductUpdate product={product}>
                            <Button type='button' size='icon' variant='ghost' className='h-7 w-7 [&_svg]:size-3'>
                                <span className='sr-only'>toggle dialog</span>
                                <Pencil className='text-muted-foreground size-4' />
                            </Button>
                        </ProductUpdate>
                        <Button
                            type='button'
                            onClick={() => deleteProduct(product.id)}
                            size='icon'
                            variant='ghost'
                            className='h-7 w-7 [&_svg]:size-3'>
                            <span className='sr-only'>Delete product</span>
                            <Trash2 className='text-destructive size-4' />
                        </Button>
                    </div>
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
