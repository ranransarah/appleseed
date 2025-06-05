import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {
	RouterProvider,
	createRouter,
	createRoute,
	createRootRoute,
} from '@tanstack/react-router';
import Home from './pages/Home.tsx';
import GalleryPage from './pages/GalleryPage.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TOS from './pages/TOS.tsx';
import Program from './pages/Program.tsx';
import Contact from './pages/Contact.tsx';

const rootRoute = createRootRoute({
	component: () => <App />,
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: Home,
});

const galleryRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/photo-gallery',
	component: GalleryPage,
});

const ppRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/privacy-policy',
	component: PrivacyPolicy,
});

const tosRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/tos',
	component: TOS,
});

const programRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/program',
	component: Program,
});

const contactRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/contact',
	component: Contact,
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	galleryRoute,
	ppRoute,
	tosRoute,
	programRoute,
	contactRoute,
]);

const router = createRouter({ routeTree, scrollRestoration: true });

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
);
