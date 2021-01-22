import { Catalog, Favorites } from '../components';


const routes = [{
    key: 'catalog-route-vt',
    path: '/',
    component: Catalog
},{
    key: 'favorites-route-vt',
    path: '/favorites',
    component: Favorites
}];

export default routes;