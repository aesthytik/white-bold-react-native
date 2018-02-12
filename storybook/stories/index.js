import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';
import Welcome from './Welcome';

import Button from './Button'; // eslint-disable-line
import TextInput from './TextInput'; // eslint-disable-line

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('primary', () => <Button text="primary" type="primary" />)
  .add('secondary', () => <Button text="secondary" type="secondary" />)
  .add('rounded', () => <Button text="rounded" type="rounded" />)
  .add('semiRounded', () => <Button text="Semi Rounded" type="semiRounded" />); //   </Button>
// .add('with long text', () => <Button text="Buttons2" />)
// .add('with some emoji', () => <Button text="😀 😎 👍 💯" loading />);
storiesOf('TextInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('without text', () => <TextInput onChange={action('clicked-text')} />)
  .add('with text', () => (
    <TextInput
      value="I am a text input box"
      onChange={action('clicked-text')}
    />
  ));
