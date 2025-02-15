import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { Product } from '@/types/product';

import { useProductStore } from '@/stores/product-store';
import { useRouter } from 'next/navigation';
import { productSchema, type ProductFormField } from './_schema';

export const useCreateProduct = (setDialog: React.Dispatch<React.SetStateAction<boolean>>) => {
    const router = useRouter();

    const addProduct = useProductStore((state) => state.addProduct);

    const form = useForm<ProductFormField>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: '',
            price: 10000,
            stock: 0,
        },
    });

    function submit(values: ProductFormField) {
        const payload: Product = {
            id: Date.now().toString(),
            ...values,
        };

        addProduct(payload);

        setDialog(false);
        form.reset();

        router.refresh();
    }

    return { form, submit };
};

export const useUpdateProduct = (setDialog: React.Dispatch<React.SetStateAction<boolean>>, product: Product) => {
    const router = useRouter();

    const updateProduct = useProductStore((state) => state.updateProduct);

    const form = useForm<ProductFormField>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: '',
            price: 10000,
            stock: 0,
        },
        values: {
            name: product.name,
            price: product.price,
            stock: product.stock,
        },
    });

    function submit(values: ProductFormField) {
        const payload: Product = {
            id: product.id,
            ...values,
        };

        updateProduct(product.id, payload);

        setDialog(false);
        form.reset();

        router.refresh();
    }

    return { form, submit };
};

export const useDeleteProduct = () => {
    const router = useRouter();
    const deleteProduct = useProductStore((state) => state.deleteProduct);

    function submit(id: string) {
        deleteProduct(id);
        router.refresh();
    }

    return { submit };
};
