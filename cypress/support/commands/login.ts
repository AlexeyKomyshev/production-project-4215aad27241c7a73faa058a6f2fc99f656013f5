import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';

export const login = (username: string = 'test', password: string = '123') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            grant_type: 'password',
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
    });
};
