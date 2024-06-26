import React from 'react';
import CIcon from '@coreui/icons-react';
import {

  cilSpeedometer,
  cilList,
  cilWallet,
  cilCreditCard,
  cilChart,
  cilPlaylistAdd,
  cilBook,
  cilReload,
  cilCog,
  cilChatBubble,
  cilSitemap
} from '@coreui/icons'
import RestoreIcon from '@mui/icons-material/Restore';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import HistorySharpIcon from '@mui/icons-material/HistorySharp';

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/imperialAdmin/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Users List',
    to: '/imperialAdmin/UserList',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },  {
    component: CNavItem,
    name: 'Subscribe List',
    to: '/imperialAdmin/subscriptionList',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Masters List',
    to: '/imperialAdmin/masterList',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Masters Request',
    to: '/imperialAdmin/masterRequest',
    icon: <CIcon icon={cilPlaylistAdd} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Kyc',
    to: '/imperialAdmin/Kyc',
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Referal',
    to: '/imperialAdmin/referal',
    icon: <CIcon icon={cilSitemap} size="lg" customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Home Banner',
    to: '/imperialAdmin/homebanner',
    icon: <CIcon icon={cilSitemap} size="lg" customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Coin settings',
    to: '/imperialAdmin/coinseetings',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Asset',
        to: '/imperialAdmin/coinseetings/asset',
      },
      // {
      //   component: CNavItem,
      //   name: 'Token list',
      //   to: '/imperialAdmin/coinseetings/tokenlist',
      // },
      {
        component: CNavItem,
        name: 'Trade pair',
        to: '/imperialAdmin/coinseetings/tradepair',
      },
      // {
      //   component: CNavItem,
      //   name: 'Commission Settings',
      //   to: '/imperialAdmin/coinseetings/commissionsettings',
      // },
      
  ],},
  {
    component: CNavGroup,
    name: 'Trade History',
    to: '/imperialAdmin/tradehistory',
    icon:<RestoreIcon />,
    icon: <CIcon icon={cilReload} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buy Trade',
        to: '/imperialAdmin/tradehistory/buytrade',
      },
      {
        component: CNavItem,
        name: 'Sell Trade',
        to: '/imperialAdmin/tradehistory/selltrade',
      },
      {
        component: CNavItem,
        name: 'Pending Orders',
        to: '/imperialAdmin/tradehistory/pendingorders',
      },
      
  ],},

  {
    component: CNavItem,
    name: 'User Deposit History',
    to: '/imperialAdmin/userdeposithistory',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  },
  
  {
    component: CNavItem,
    name: 'User Withdraw History',
    to: '/imperialAdmin/userwithdrawhistory',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },


  {
    component: CNavItem,
    name: 'Admin Wallet',
    to: '/imperialAdmin/adminwallet',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Withdraw Wallet',
    to: '/imperialAdmin/withdrawwallet',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Support',
    to: '/imperialAdmin/support',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
  },



  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },


/*  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },*/
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  
]

export default _nav
