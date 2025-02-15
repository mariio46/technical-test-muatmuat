'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCreateProduct } from './_action';

const ProductCreate = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = React.useState(false);
    const { form, submit } = useCreateProduct(setOpen);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add new product</DialogTitle>
                    <DialogDescription>Feel free to fill form below to add new product.</DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form id='product-form' onSubmit={form.handleSubmit(submit)} className='space-y-4'>
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoFocus
                                            type='text'
                                            autoComplete='name'
                                            aria-label='Product name'
                                            placeholder='Product Name'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='price'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input
                                            inputMode='numeric'
                                            autoComplete='price'
                                            aria-label='Price'
                                            placeholder='10000'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='stock'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Stock</FormLabel>
                                    <FormControl>
                                        <Input
                                            inputMode='numeric'
                                            autoComplete='price'
                                            aria-label='Price'
                                            placeholder='34'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>

                <div className='mt-6'>
                    <Button type='submit' form='product-form'>
                        Save
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export { ProductCreate };
