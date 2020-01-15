import { name, version } from './package.json';

const scripts = [
    { name: 'react', vendor: true, src: '/assets/react-module/react.bundle.js' },
    { name: 'react-module', src: '/assets/react-module/module.bundle.js' }
];

export {
    name,
    version,
    scripts,
}