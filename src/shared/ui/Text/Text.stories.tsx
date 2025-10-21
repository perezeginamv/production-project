import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextThema } from './Text';

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
    title: 'Title lDarkorem ipsum ',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo cupiditate repudiandae natus repellendus asperiores dicta totam alias sunt debitis facilis quibusdam atque, quaerat sit saepe molestiae deserunt quasi. Sunt, architecto.',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title lDarkorem ipsum ',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo cupiditate repudiandae natus repellendus asperiores dicta totam alias sunt debitis facilis quibusdam atque, quaerat sit saepe molestiae deserunt quasi. Sunt, architecto.',
    theme: TextThema.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsum ',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo cupiditate repudiandae natus repellendus asperiores dicta totam alias sunt debitis facilis quibusdam atque, quaerat sit saepe molestiae deserunt quasi. Sunt, architecto.',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsum ',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo cupiditate repudiandae natus repellendus asperiores dicta totam alias sunt debitis facilis quibusdam atque, quaerat sit saepe molestiae deserunt quasi. Sunt, architecto.',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lorem ipsum ',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo cupiditate repudiandae natus repellendus asperiores dicta totam alias sunt debitis facilis quibusdam atque, quaerat sit saepe molestiae deserunt quasi. Sunt, architecto.',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
