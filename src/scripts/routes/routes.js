import Home from '../views/pages/home';
import Upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/Home': Home,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
};

export default routes;
