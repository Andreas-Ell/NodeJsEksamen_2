import LoginForm from './components/LoginForm/LoginForm.svelte';
import ForsideProtected from './components/routes/ForsideProtected.svelte';
import AktiviteterProtected from './components/routes/AktiviteterProtected.svelte';

const routes = {
  '/': LoginForm,
  '/forside': ForsideProtected,
  '/aktiviteter': AktiviteterProtected
};

export default routes;
