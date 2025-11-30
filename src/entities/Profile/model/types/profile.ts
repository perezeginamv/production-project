import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency/model/types/currency';

export interface Profile {
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string,
    [key: string]: string | number | undefined;
}

export interface ProfileSchema {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean
}

export interface ObjectError {
    [key: string]: string;
}
