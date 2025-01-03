import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
    username: 'admin',
    age: 20,
    country: Country.Russia,
    lastname: 'Комышев',
    first: 'Алексей',
    city: 'Котлас',
    currency: Currency.RUB,
    avatar: 'https://www.zastavki.com/pictures/originals/2014/Animals___Cats_Shaggy_Kuril_Bobtail_kitten_091931_.jpg',
};

describe('validateProfileData.test', () => {
    test('success ', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first and last name ', async () => {
        const result = validateProfileData({
            ...data,
            first: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country ', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('without data', async () => {
        const result = validateProfileData({});

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_CITY,
            ValidateProfileError.INCORRECT_USERNAME,
            ValidateProfileError.INCORRECT_AVATAR,
            ValidateProfileError.INCORRECT_CURRENCY,
        ]);
    });
});
