import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import { SignatureKind } from "typescript";
import MainPage from "pages/MainPage";
import DetailPage from "pages/DetailPage";
import AiPage from "pages/AiPage";
import SigninPage from "pages/SigninPage";
import SignupPage from "pages/SignupPage";

const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin"
  // },
  // {
  //   path: "/dashboard",
  //   name: "Dashborad",
  //   icon: "nc-icon nc-chart-pie-35",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  {
    // 메인페이지 - 4개의 원자재 차트를 보여줌
    path: "/main",
    name: "Main",
    icon: "nc-icon nc-grid-45",
    component: MainPage,
    layout: "/admin",
  },
  {
    // 상세페이지 - 각 원자재의 차트, 실구매가 테이블, 뉴스테이블를 보여줌
    path: "/detail",
    name: "Detail",
    icon: "nc-icon nc-chart-pie-35",
    component: DetailPage,
    layout: "/admin",
  },
  {
    // ai 구매예측가격을 차트로 보여줌
    path: "/pages/ai",
    name: "Ai",
    icon: "nc-icon nc-spaceship",
    component: AiPage,
    layout: "/admin",
  },
  {
    // 로그인
    path: "/signin",
    name: "Signin",
    icon: "nc-icon nc-single-02",
    component: SigninPage,
    layout: "/admin",
  },
  {
    // 로그아웃
    path: "/signup",
    name: "Signup",
    icon: "nc-icon nc-circle-09",
    component: SignupPage,
    layout: "/admin",
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "nc-icon nc-circle-09",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "nc-icon nc-notes",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-paper-2",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-atom",
  //   component: Icons,
  //   layout: "/admin"
  // },
  //{
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
