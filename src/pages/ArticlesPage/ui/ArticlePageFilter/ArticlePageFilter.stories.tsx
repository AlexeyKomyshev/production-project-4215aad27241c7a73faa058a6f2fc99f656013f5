import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlePageFilter } from './ArticlePageFilter';

export default {
    title: 'pages/Article/ArticlePageFilter',
    component: ArticlePageFilter,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePageFilter>;

const Template: ComponentStory<typeof ArticlePageFilter> = (args) => <ArticlePageFilter {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
