import { Country, Currency } from 'shared/const/common';

export interface profile{
    first: string,
    lastname: string,
    age: 20,
    currency: Currency,
    country: Country,
    sity: string,
    username: string,
    avatar: string
}

export interface ProfileSchema {
    data?: profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
