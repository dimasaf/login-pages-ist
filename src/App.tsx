import Login from './pages/Login/Login'

import { Provider } from 'react-redux'
import { store } from './app/store'
import {
  RouterProvider,
  createBrowserRouter,
  Navigate
} from "react-router-dom";
import Home from './pages/Home/Home';
import { useAppSelector } from './app/hooks';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const {isAuth} = useAppSelector(state => state.auth)

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return children;
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute>
      <Home />
    </ProtectedRoute>
  }
])

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
