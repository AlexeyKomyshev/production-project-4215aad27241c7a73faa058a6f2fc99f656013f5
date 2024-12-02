import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <StarRating {...args} />
);

export const NotSelect = Template.bind({});
NotSelect.args = {
    size: 30,
};

export const FourSelect = Template.bind({});
FourSelect.args = {
    size: 30,
    selectedStars: 4,
};
