import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 250 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items: [
        { value: Country.Russia, content: Country.Russia },
        { value: Country.Belarus, content: Country.Belarus },
        { value: Country.Ukraine, content: Country.Ukraine },
        { value: Country.Kazakhstan, content: Country.Kazakhstan },
        { value: Country.Armenia, content: Country.Armenia },
    ],
    direction: 'bottom left',
    value: 'Выберите страну',
    defaultValue: 'Выберите страну',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    items: [
        { value: Country.Russia, content: Country.Russia },
        { value: Country.Belarus, content: Country.Belarus },
        { value: Country.Ukraine, content: Country.Ukraine },
        { value: Country.Kazakhstan, content: Country.Kazakhstan },
        { value: Country.Armenia, content: Country.Armenia },
    ],
    direction: 'bottom right',
    value: 'Выберите страну',
    defaultValue: 'Выберите страну',
};

export const TopLeft = Template.bind({});
TopLeft.args = {
    items: [
        { value: Country.Russia, content: Country.Russia },
        { value: Country.Belarus, content: Country.Belarus },
        { value: Country.Ukraine, content: Country.Ukraine },
        { value: Country.Kazakhstan, content: Country.Kazakhstan },
        { value: Country.Armenia, content: Country.Armenia },
    ],
    direction: 'top left',
    value: 'Выберите страну',
    defaultValue: 'Выберите страну',
};

export const TopRight = Template.bind({});
TopRight.args = {
    items: [
        { value: Country.Russia, content: Country.Russia },
        { value: Country.Belarus, content: Country.Belarus },
        { value: Country.Ukraine, content: Country.Ukraine },
        { value: Country.Kazakhstan, content: Country.Kazakhstan },
        { value: Country.Armenia, content: Country.Armenia },
    ],
    direction: 'top right',
    value: 'Выберите страну',
    defaultValue: 'Выберите страну',
};
