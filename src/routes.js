import { makeLazyLoadComp } from './hocs/makeLazyLoadComp';

// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
import AlbumsPage from './pages/AlbumsPage';


export default [
  {
    displayName: 'Home',
    path: '/',
    exact: true,
    component: makeLazyLoadComp(() => import(
      /* webpackChunkName:"HomePage" */
      './pages/HomePage.js' // eslint-disable-line comma-dangle
    )),
  }, {
    displayName: 'About',
    path: '/about',
    component: makeLazyLoadComp(() => import(
      /* webpackChunkName:"AboutPage" */
      './pages/AboutPage.js' // eslint-disable-line comma-dangle
    )),
  }, {
    displayName: 'Albums',
    path: '/albums',
    component: AlbumsPage,
    // component: makeLazyLoadComp(() => import(
    //   /* webpackChunkName:"AlbumsPage" */
    //   './pages/AlbumsPage.js' // eslint-disable-line comma-dangle
    // )),
  },
];
