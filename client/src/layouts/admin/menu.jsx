import {
  GroupOutlined,
  HomeOutlined,
  InventoryOutlined,
  LinkOutlined,
  RedeemOutlined,
  SellOutlined,
  ViewInArOutlined,
} from '@mui/icons-material';

export const menu = [
  {
    id: 'quick-links',
    title: '',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        path: '/admin',
        icon: HomeOutlined,
      },
    ],
  },
  {
    id: 'catalog',
    title: 'Mục lục',
    children: [
      {
        id: 'products',
        title: 'Sản phẩm',
        path: '/admin/products',
        icon: InventoryOutlined,
      },
      {
        id: 'categories',
        title: 'Loại sản phẩm',
        path: '/admin/categories',
        icon: LinkOutlined,
      },
      {
        id: 'collections',
        title: 'Bộ sưu tập',
        path: '/admin/collections',
        icon: SellOutlined,
      },
    ],
  },
  {
    id: 'sale',
    title: 'Bán hàng',
    children: [
      {
        id: 'orders',
        title: 'Đơn hàng',
        path: '/admin/orders',
        icon: ViewInArOutlined,
      },
    ],
  },
  {
    id: 'customer',
    title: 'Khách hàng',
    children: [
      {
        id: 'custormers',
        title: 'Khách hàng',
        path: '/admin/customers',
        icon: GroupOutlined,
      },
    ],
  },
  {
    id: 'promotion',
    title: 'Khuyến mãi',
    children: [
      {
        id: 'vouchers',
        title: 'Mã giảm giá',
        path: '/admin/vouchers',
        icon: RedeemOutlined,
      },
    ],
  },
];
