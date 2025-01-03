import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        'ofvnaofvnaofnvfdnvoafnvadfnvdanfvjadnfkvdnafkvnadkfvnadfnvnadkfvndkfjvndakjfvnkdajfnvdanfvjadnfkvdnafkvnadkfvnadfnvnadkfvndkfjvndakjfvnknvdanfvjadnfkvdnafkvnadkfvnadfnvnadkfvndkfjvndakjfvnknvdanfvjadnfkvdnafkvnadkfvnadfnvnadkfvndkfjvndakjfvnkn',
};
export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        'ofvnaofvna;ofnvfdnvoafnvadfnnvfdnvoafnvadfnvdanfvjanvfdnvoafnvadfnvdanfvjanvfdnvoafnvadfnvdanfvjanvfdnvoafnvadfnvdanfvjanvfdnvoafnvadfnvdanfvjanvfdnvoafnvadfnvdanfvjanvfdnvoafnvadfnvdanfvjavdanfvjadnf;kvdnaf;kvnadkfvnadfnvnad;kfvndkfjvndakjfvnkdajfn',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
