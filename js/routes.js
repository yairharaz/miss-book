// import homePage from './pages/home-page.cmp.js';
import bookApp from './cmps/book-app.cmp.js';
import bookDetails from './cmps/book-details.cmp.js';
import homePage from './cmps/home-page.cmp.js';
import about from './cmps/about.cmp.js';


const myRoutes = [
    
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: about
    },
   
];

export const myRouter = new VueRouter({ routes: myRoutes })



