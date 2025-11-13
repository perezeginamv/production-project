import { Country, Currency } from 'shared/const/common';

export interface Profile {
    first: string,
    lastname: string,
    age: 22,
    currency: Currency,
    country: string,
    city: string,
    username: Country,
    avatar: string
}

export interface ProfileSchema {
    data?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean
}
