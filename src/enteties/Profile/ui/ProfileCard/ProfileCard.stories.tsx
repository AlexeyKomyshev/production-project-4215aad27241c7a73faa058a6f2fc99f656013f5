import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'enteties/Country';
import { Currency } from 'enteties/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 20,
        country: Country.Russia,
        lastname: 'Комышев',
        first: 'Алексей',
        city: 'Котлас',
        currency: Currency.RUB,
        avatar,
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true',
};