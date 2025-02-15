import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Product } from '@/types/product';

type ProductState = {
    products: Product[];
    search: string;
    order: 'asc' | 'desc' | null;
};

type ProductAction = {
    addProduct: (product: Product) => void;
    setSearch: (search: string) => void;
    updateProduct: (id: string, product: Product) => void;
    deleteProduct: (id: string) => void;
    filterResult: () => Product[];
    clearFilter: () => void;
    setOrder: (order: 'asc' | 'desc' | null) => void;
};

export const useProductStore = create<ProductState & ProductAction>()(
    persist(
        (set, get) => ({
            products: [],
            search: '',
            order: null,

            addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
            updateProduct: (id, payload) =>
                set((state) => ({
                    products: state.products.map((product) =>
                        product.id === id ? { ...product, ...payload } : product,
                    ),
                })),
            deleteProduct: (id) =>
                set((state) => ({ products: state.products.filter((product) => product.id !== id) })),
            setSearch: (search) => set(() => ({ search })),

            filterResult: () => {
                const { search, products, order } = get();

                const filterResult = products.filter((product) =>
                    product.name.toLowerCase().includes(search.toLowerCase()),
                );

                if (order) {
                    filterResult.sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price));
                }

                return filterResult;
            },
            clearFilter: () => set({ search: '', order: '' as 'asc' | 'desc' | null }),
            setOrder: (order) => set(() => ({ order })),
        }),
        { name: 'product-store' },
    ),
);
