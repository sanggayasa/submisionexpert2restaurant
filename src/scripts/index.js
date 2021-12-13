/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/*
masukan modul dengan format seperti ini
import modul_name from 'module_lookasi';
*/

import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
