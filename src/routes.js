import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);
const Kyc = React.lazy(() => import("./views/kycpage/kyc"));
const Referal = React.lazy(() => import("./views/referal/Referal"));
const KycDetails = React.lazy(() => import("./views/kycpage/kycDetails"));
const UserList = React.lazy(() => import("./views/userList/userlist"));
const UserDetails = React.lazy(() => import("./views/userList/userDetails"));
const MAsterDetails = React.lazy(() => import("./views/masters list/userDetails"));
const SubscribeDetails = React.lazy(() => import("./views/SubsribeList/subscribeDetails"));
const SubscriptionList = React.lazy(() => import("./views/SubsribeList/subscriptionList"));
const MAsterRequestDetails = React.lazy(() => import("./views/masters Request/userDetails"));
const SupportPAge = React.lazy(() => import("./views/supportpage/userlist"));
const SupportMainPage = React.lazy(() => import("./views/Support/Support"));

//coinsettings
const Asset=React.lazy(()=>import('./views/coinsettings/asset/Asset'))
const Tokenlist=React.lazy(()=>import('./views/coinsettings/tokenlist/Tokenlist'))
const Tokenlistdetail = React.lazy(() => import('./views/coinsettings/tokenlist/Tokenlistdetail'))
const Tradepair=React.lazy(() =>import('./views/coinsettings/tradepair/Tradepair') )
const Tradedetail = React.lazy(() => import('./views/coinsettings/tradepair/Tradedetail'))
const Commission=React.lazy(() =>import('./views/coinsettings/commissionsettings/Commission') )
const Commissiondetail = React.lazy(() => import('./views/coinsettings/commissionsettings/commissiondetail'))
const Addtoken=React.lazy(()=>import('./views/coinsettings/tokenlist/Addtoken') )

const userwithdrawhistory=React.lazy(()=>import('./views/userdeposithistory/Selltrade') )
const userDeposithistory=React.lazy(()=>import('./views/userwithdrawhistory/Selltrade') )




//Trade History
const Buytrade = React.lazy(() => import('./views/tradehistory/buytrade/Buytrade'))
const Selltrade = React.lazy(() => import('./views/tradehistory/selltrade/Selltrade'))
const pendingorders = React.lazy(() => import('./views/tradehistory/pendingorders/Pendingorders'))

//User Deposit History




//Admin Wallet
const Adminwallet=React.lazy(()=>import('./views/adminwallet/Adminwallet'))
//withdraw Wallet
const Withdraw= React.lazy(()=>import('./views/widthdrawwallet/withdraw'))



//  masters list,
const MAsterList = React.lazy(()=>import('./views/masters list/userlist'))
const MAsterRequest = React.lazy(()=>import('./views/masters Request/userlist'))



// Base
const Accordion = React.lazy(() => import("./views/base/accordion/Accordion"));
const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const ListGroups = React.lazy(() =>
  import("./views/base/list-groups/ListGroups")
);
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/base/paginations/Paginations")
);
const Placeholders = React.lazy(() =>
  import("./views/base/placeholders/Placeholders")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const Progress = React.lazy(() => import("./views/base/progress/Progress"));
const Spinners = React.lazy(() => import("./views/base/spinners/Spinners"));
const Tables = React.lazy(() => import("./views/base/tables/Tables"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));
const AssetDetail = React.lazy(() => import("./views/coinsettings/asset/Assetdetail"));



// Buttons
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const ButtonGroups = React.lazy(() =>
  import("./views/buttons/button-groups/ButtonGroups")
);
const Dropdowns = React.lazy(() =>
  import("./views/buttons/dropdowns/Dropdowns")
);

//Forms
const ChecksRadios = React.lazy(() =>
  import("./views/forms/checks-radios/ChecksRadios")
);
const FloatingLabels = React.lazy(() =>
  import("./views/forms/floating-labels/FloatingLabels")
);
const FormControl = React.lazy(() =>
  import("./views/forms/form-control/FormControl")
);
const InputGroup = React.lazy(() =>
  import("./views/forms/input-group/InputGroup")
);
const Layout = React.lazy(() => import("./views/forms/layout/Layout"));
const Range = React.lazy(() => import("./views/forms/range/Range"));
const Select = React.lazy(() => import("./views/forms/select/Select"));
const Validation = React.lazy(() =>
  import("./views/forms/validation/Validation")
);

const Charts = React.lazy(() => import("./views/charts/Charts"));

// Icons
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));

// Notifications
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Toasts = React.lazy(() => import("./views/notifications/toasts/Toasts"));

const Widgets = React.lazy(() => import("./views/widgets/Widgets"));


const routes = [

  {
    path: "/imperialAdmin/dashboard",
    name: "Dashboard",
    element: Dashboard,
  },
  {
    path: "/imperialAdmin/userdeposithistory",
    name: "User Deposity History",
    element:userwithdrawhistory ,
  },
  {
    path: "/imperialAdmin/userwithdrawhistory",
    name: "User Withdraw History",
    element:userDeposithistory  ,
  },
  { path: "/imperialAdmin/Kyc", name: "Kyc", element: Kyc },
  { path: "/imperialAdmin/referal", name: "Referal", element: Referal },
  {
    path: "/imperialAdmin/KycDetails",
    name: "KycDetails",
    element: KycDetails,
  }, 
  {
    path: "/imperialAdmin/UserDetail",
    name: "User Detail",
    element: UserDetails,
  },
  {
    path: "/imperialAdmin/masterDetail",
    name: "Master Detail",
    element: MAsterDetails,
  },
  {
    path: "/imperialAdmin/masterRequestDetail",
    name: "Master Request Detail",
    element: MAsterRequestDetails,
  },
  {
    path: "/imperialAdmin/subscribeDetails",
    name: "Subscribe Details",
    element: SubscribeDetails,
  },
  {
    path: "/imperialAdmin/UserList",
    name: "Users List",
    element: UserList,
  },
  {
    path: "/imperialAdmin/masterList",
    name: "Master List",
    element: MAsterList,
  },
  {
    path: "/imperialAdmin/subscriptionList",
    name: "Subscribe List",
    element: SubscriptionList,


  },
  {
    path: "/imperialAdmin/masterRequest",
    name: "Master request",
    element: MAsterRequest,
  },
  { path: "/theme", name: "Theme", element: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", element: Colors },
  { path: "/theme/typography", name: "Typography", element: Typography },
  { path: "/imperialAdmin/coinseetings/asset/assetdetail", name: "AssertDetail", element: AssetDetail },

  { path : '/imperialAdmin/coinsettings', name :'Coinsettings', element:Cards,exact:true},
  { path : '/imperialAdmin/coinseetings/asset', name :'Asset', element:Asset},
  { path : '/imperialAdmin/coinseetings/tokenlist', name :'Tokenlist', element:Tokenlist},
  { path : '/imperialAdmin/coinseetings/tradepair', name :'Tradepair', element:Tradepair},
  { path : '/imperialAdmin/coinseetings/commissionsettings', name :'Commission', element:Commission},
  { path : '/imperialAdmin/coinseetings/tokenlist/tokenlistdetail', name:'TokenlistDetail', element:Tokenlistdetail},
  { path : '/imperialAdmin/coinseetings/tradepair/tradedetail', name:'TradeDetail', element:Tradedetail},
  { path : '/imperialAdmin/coinseetings/commissionsettings/commissiondetail' ,name:'Commissiondetail',element:Commissiondetail},
  { path : '/imperialAdmin/coinseetings/tokenlist/addtoken', name:'Addtoken',element:Addtoken},

  { path : '/imperialAdmin/tradehistory', name: 'tradehistory', element:Cards, exact:true},
  { path : '/imperialAdmin/tradehistory/buytrade', name:'Buy Trade' , element:Buytrade},
  { path : '/imperialAdmin/tradehistory/selltrade', name:'Sell Trade' , element:Selltrade},
  { path : '/imperialAdmin/tradehistory/pendingorders', name:'Pending Orders' , element:pendingorders},


 
  

  { path : '/imperialAdmin/adminwallet' , name:'Admin Wallet' , element:Adminwallet},
  { path : '/imperialAdmin/withdrawwallet' , name:'Withdraw Wallet' , element:Withdraw},
  { path : '/imperialAdmin/support' , name:'Support page' , element:SupportPAge},
  { path : '/imperialAdmin/supportMain' , name:'Support Main page' , element:SupportMainPage},
  

  { path: "/base", name: "Base", element: Cards, exact: true },
  { path: "/base/accordion", name: "Accordion", element: Accordion },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", element: Breadcrumbs },
  { path: "/base/cards", name: "Cards", element: Cards },
  { path: "/base/carousels", name: "Carousel", element: Carousels },
  { path: "/base/collapses", name: "Collapse", element: Collapses },
  { path: "/base/list-groups", name: "List Groups", element: ListGroups },
  { path: "/base/navs", name: "Navs", element: Navs },
  { path: "/base/paginations", name: "Paginations", element: Paginations },
  { path: "/base/placeholders", name: "Placeholders", element: Placeholders },
  { path: "/base/popovers", name: "Popovers", element: Popovers },
  { path: "/base/progress", name: "Progress", element: Progress },
  { path: "/base/spinners", name: "Spinners", element: Spinners },
  { path: "/base/tables", name: "Tables", element: Tables },
  { path: "/base/tooltips", name: "Tooltips", element: Tooltips },
  { path: "/buttons", name: "Buttons", element: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", element: Buttons },
  { path: "/buttons/dropdowns", name: "Dropdowns", element: Dropdowns },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    element: ButtonGroups,
  },
  { path: "/charts", name: "Charts", element: Charts },
  { path: "/forms", name: "Forms", element: FormControl, exact: true },
  { path: "/forms/form-control", name: "Form Control", element: FormControl },
  { path: "/forms/select", name: "Select", element: Select },
  {
    path: "/forms/checks-radios",
    name: "Checks & Radios",
    element: ChecksRadios,
  },
  { path: "/forms/range", name: "Range", element: Range },
  { path: "/forms/input-group", name: "Input Group", element: InputGroup },
  {
    path: "/forms/floating-labels",
    name: "Floating Labels",
    element: FloatingLabels,
  },
  { path: "/forms/layout", name: "Layout", element: Layout },
  { path: "/forms/validation", name: "Validation", element: Validation },
  { path: "/icons", exact: true, name: "Icons", element: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", element: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", element: Flags },
  { path: "/icons/brands", name: "Brands", element: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    element: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", element: Alerts },
  { path: "/notifications/badges", name: "Badges", element: Badges },
  { path: "/notifications/modals", name: "Modals", element: Modals },
  { path: "/notifications/toasts", name: "Toasts", element: Toasts },
  { path: "/widgets", name: "Widgets", element: Widgets },
];

export default routes;
