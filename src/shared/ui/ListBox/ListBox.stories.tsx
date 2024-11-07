import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from 'enteties/Country';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    items: [
        { value: Country.Russia, content: Country.Russia },
        { value: Country.Belarus, content: Country.Belarus },
        { value: Country.Ukraine, content: Country.Ukraine },
        { value: Country.Kazakhstan, content: Country.Kazakhstan },
        { value: Country.Armenia, content: Country.Armenia },
    ],
    direction: 'bottom',
    defaultValue: 'Выберите страну',
};
