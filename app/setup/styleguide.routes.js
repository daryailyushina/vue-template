import index from '../styleguide/routes/index';
import lazyload from '../styleguide/routes/lazyload';
import forms from '../styleguide/routes/forms';

const root = '/styleguide';

/**
 * This file is only meant for style-example routes
 */
export default [
  {
    path: root,
    name: 'index',
    component: index,
    meta: {
      title: 'Welcome',
    },
  },
  {
    path: `${root}/lazyload`,
    name: 'styleguideLazyload',
    component: lazyload,
    meta: {
      title: 'Lazyload',
    },
  },
  {
    path: `${root}/forms`,
    name: 'styleguideForms',
    component: forms,
    meta: {
      title: 'Forms',
    },
  },
  {
    path: '*',
    redirect: root,
  },
];
