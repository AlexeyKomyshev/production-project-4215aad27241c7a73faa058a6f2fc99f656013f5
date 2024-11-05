import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsun',
    text: 'Text lorem ipsun',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem ipsun',
    text: 'Text lorem ipsun',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsun',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text lorem ipsun',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsun',
    text: 'Text lorem ipsun',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lorem ipsun',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text lorem ipsun',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimarySizeM = Template.bind({});
PrimarySizeM.args = {
    title: 'Title lorem ipsun',
    text: 'Text lorem ipsun',
    size: TextSize.M,
};

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
    title: 'Title lorem ipsun',
    text: 'Text lorem ipsun',
    size: TextSize.L,
};

export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Title lorem ipsun',
    text: 'Text lorem ipsun',
    size: TextSize.M,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Title lorem ipsun',
    text: 'Text lorem ipsun',
    size: TextSize.S,
};
