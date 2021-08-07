import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import AppBar from './component/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';

const HomeView = lazy(() =>
  import('./views/HomeView' /*webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /*webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /*webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /*webpackChunkName: "contacts-view" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('useEffect');
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense
        fallback={<Loader type="Puff" color="#00BFFF" height={80} width={80} />}
      >
        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            component={RegisterView}
            redirectTo="/"
          />
          <PublicRoute
            path="/login"
            restricted
            component={LoginView}
            redirectTo="/contacts"
          />
          <PrivateRoute
            path="/contacts"
            component={ContactsView}
            redirectTo="/login"
          />
        </Switch>
      </Suspense>
    </>
  );
}
