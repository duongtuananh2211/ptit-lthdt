import { createBrowserRouter, redirect } from 'react-router-dom';

import AuthLogin from '../pages/authn/Login';
import ClientLayout from '../layouts/client';
import CartPage from '../pages/client/cart';
import CheckoutPage from '../pages/client/checkout';
import HomePage from '../pages/client/home';
import OrderDetail from '../pages/client/order-detail';
import ProductDetailPage from '../pages/client/product-detail';
import ProductsPage from '../pages/client/products';
import ProfilePage from '../pages/client/profile';
import AdminLayout from '../layouts/admin';
import DashboardPage from '../pages/admin/dashboard';
import CategoryPage from '../pages/admin/category';
import VoucherPage from '../pages/admin/voucher';
import CustomerPage from '../pages/admin/custormer';
import OrderPage from '../pages/admin/order';
import ProductPage from '../pages/admin/product';
import CollectionPage from '../pages/admin/collection';
import CreateCollectionPage from '../pages/admin/collection/CreateCollectionPage';
import EditCollectionPage from '../pages/admin/collection/EditCollectionPage';
import CollectionDetailPage from '../pages/admin/collection/CollectionDetailPage';
import NotFound from '../pages/NotFound';
import ProductDetailAdminPage from '../pages/admin/product/ProductDetailAdminPage';
import Register from '../pages/authn/Register';
import OrderDetailPage from '../pages/client/order-detail';

export default function Routes() {
  return createBrowserRouter([
    {
      path: '/',
      element: <ClientLayout />,
      loader: async () => {
        return await fetch('http://localhost:8080/api/config/visitors', {
          method: 'PUT',
        });
      },
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/cart',
          element: <CartPage />,
        },
        {
          path: '/checkout',
          element: <CheckoutPage />,
        },
        {
          path: '/products',
          element: <ProductsPage />,
        },
        {
          path: '/products/:id',
          element: <ProductDetailPage />,
        },
        {
          path: '/orders/:id',
          element: <OrderDetailPage />,
        },
        {
          path: '/account',
          loader: async () => {
            const user = localStorage.getItem('user-current');

            if (user === null) {
              return redirect('/login');
            }

            return user;
          },
          element: <ProfilePage />,
        },
        {
          path: '/account/orders/:id',
          element: <OrderDetail />,
        },
      ],
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      loader: async () => {
        const user = localStorage.getItem('user-current');

        if (user === null) {
          return redirect('/login?redirect=admin');
        }

        return user;
      },
      errorElement: <NotFound />,
      children: [
        {
          path: '',
          element: <DashboardPage />,
        },
        {
          path: 'categories',
          element: <CategoryPage />,
        },
        {
          path: 'vouchers',
          element: <VoucherPage />,
        },
        {
          path: 'customers',
          element: <CustomerPage />,
        },
        {
          path: 'orders',
          element: <OrderPage />,
        },
        {
          path: 'products',
          element: <ProductPage />,
        },
        {
          path: 'products/:id',
          element: <ProductDetailAdminPage />,
        },
        {
          path: 'collections',
          element: <CollectionPage />,
        },
        {
          path: 'collections/new',
          element: <CreateCollectionPage />,
        },
        {
          path: 'collections/:id/edit',
          element: <EditCollectionPage />,
        },
        {
          path: 'collections/:id',
          element: <CollectionDetailPage />,
        },
      ],
    },
    {
      path: 'login',
      loader: async () => {
        const user = localStorage.getItem('user-current');

        if (user !== null) {
          return redirect('/');
        }

        return user;
      },
      element: <AuthLogin />,
    },
    {
      path: 'register',
      loader: async () => {
        const user = localStorage.getItem('user-current');

        if (user !== null) {
          return redirect('/profile');
        }

        return user;
      },
      element: <Register />,
    },
  ]);
}
