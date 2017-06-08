
import Home from './Home/Home';
import About from './About/About';
import PostViewer from '../Page/Post/PostViewer';


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
    }
];

export default routes;