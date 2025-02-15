import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { formatCurrency } from 'usemods';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const toRupiah = (value: string | number): string => {
    if (typeof value === 'string') {
        const initialStringValue = value.trim() === '' ? '0' : value.trim();

        const stringResult = formatCurrency(Number(initialStringValue), { decimals: 2, locale: 'id-ID' });

        return stringResult;
    }

    const numberResult = formatCurrency(value, { decimals: 2, locale: 'id-ID' });

    return numberResult;
};
