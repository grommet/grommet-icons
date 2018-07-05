import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

function loadStories() {
  require('../src/js/icon.stories.js');
}

addDecorator(withKnobs);

configure(loadStories, module);
