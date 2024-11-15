import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 20,
            country: Country.Russia,
            lastname: 'Комышев',
            first: 'Алексей',
            city: 'Котлас',
            currency: Currency.RUB,
            avatar,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 20,
            country: Country.Russia,
            lastname: 'Комышев',
            first: 'Алексей',
            city: 'Котлас',
            currency: Currency.RUB,
            avatar,
        },
    },
})];
