import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>block</div>
            <div>block</div>
            <div>block</div>
            <div>block</div>
        </>
    ),
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
    children: (
        <>
            <div>block</div>
            <div>block</div>
            <div>block</div>
            <div>block</div>
        </>
    ),
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    direction: 'column',
    gap: '16',
    children: (
        <>
            <div>block</div>
            <div>block</div>
            <div>block</div>
            <div>block</div>
        </>
    ),
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    direction: 'column',
    gap: '32',
    children: (
        <>
            <div>block</div>
            <div>block</div>
            <div>block</div>
            <div>block</div>
        </>
    ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
    direction: 'row',
    gap: '4',
    children: (
        <>
            <div>block</div>
            <div>block</div>
            <div>block</div>
            <div>block</div>
        </>
    ),
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
    direction: 'row',
    gap: '8',
    children: (
        <>
            <div>block</div>
            <div>block</div>
            <div>block</div>
            <div>block</div>
        </>
    ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
    direction: 'row',
    gap: '16',
    children: (
        <>
            <div>block</div>
            <div>block</div>
            <div>block</div>
            <div>block</div>
        </>
    ),
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    direction: 'row',
    gap: '32',
    children: (
        <>
            <div>block</div>
            <div>block</div>
            <div>block</div>
            <div>block</div>
        </>
    ),
};
