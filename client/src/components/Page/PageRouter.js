
import Home from './Home/Home';
import About from './About/About';
import PostViewer from '../Page/Post/PostViewer';
import Login from '../Page/Login/Login';
import Author from '../Page/Author/Author';

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
        component: PostViewer
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/author",
        component: Author
    }
];

export default routes;