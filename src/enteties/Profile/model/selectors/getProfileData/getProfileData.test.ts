import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            username: 'admin',
            age: 20,
            country: Country.Russia,
            lastname: 'Комышев',
            first: 'Алексей',
            city: 'Котлас',
            currency: Currency.RUB,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});