import { z } from 'zod';

const productSchema = z.object({
    name: z.string().min(1).min(3),
    price: z.coerce.number().min(10000, 'The price field must be at least Rp 10000').default(10000),
    stock: z.coerce.number(),
});

type ProductFormField = z.infer<typeof productSchema>;

export { productSchema, type ProductFormField };
