import { configure } from '@storybook/react';

configure(require.context('../src/', true, /\_\_stories\_\_\/.*\.tsx?$/), module);
