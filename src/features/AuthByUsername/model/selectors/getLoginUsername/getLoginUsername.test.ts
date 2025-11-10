import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '12356',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('12356');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
