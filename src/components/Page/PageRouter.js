
import Home from './Home/Home';
import About from './About/About';
import Post from './Post/Post';


const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/post/:slug",
        component: Post
    }
];

export default routes;