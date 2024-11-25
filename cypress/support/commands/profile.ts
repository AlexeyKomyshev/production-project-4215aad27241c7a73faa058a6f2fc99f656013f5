export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId:string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asfasf' },
        body: {
            id: '4',
            first: 'Юзер',
            lastname: 'Тестовый',
            age: 19,
            currency: 'RUB',
            country: 'Belarus',
            username: 'testuser',
            avatar: 'https://avatars.mds.yandex.net/i?id=01fb6d454b1e71efb02d7a2f41be61bf9a7e53d5-9226182-images-thumbs&n=13',
            city: 'Тестград',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>
            resetProfile(profileId:string): Chainable<void>

        }
    }
}
