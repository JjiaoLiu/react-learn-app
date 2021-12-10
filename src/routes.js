import About from "./About";
import App from "./App";
import Home from "./Home";
const routes = [
  {
    path: "/",
    component: App,
    routes: [
      { path: "/about", component: About },
      { path: "/home", component: Home },
    ],
  },
];
export default routes;
