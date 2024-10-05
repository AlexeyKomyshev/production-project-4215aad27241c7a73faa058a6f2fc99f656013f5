import { Country, Currency } from 'shared/const/common';

export interface Profile{
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
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}
