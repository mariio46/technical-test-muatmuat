import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '../ui/skeleton';

const ProductSkeleton = () => {
    return Array.from({ length: 12 }).map((_, index) => (
        <Card key={index}>
            <CardHeader>
                <Skeleton className='size-10 rounded-full' />
            </CardHeader>
            <CardContent>
                <Skeleton className='h-3 w-full' />
            </CardContent>
            <CardFooter className='justify-between'>
                <Skeleton className='h-3 w-24' />
                <Skeleton className='h-3 w-10' />
            </CardFooter>
        </Card>
    ));
};

export { ProductSkeleton };
