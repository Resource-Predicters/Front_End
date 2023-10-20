import MainPage from "pages/MainPage";
import DetailPage from "pages/DetailPage";
import AiPage from "pages/AiPage";
import SigninPage from "pages/SigninPage";
import SignupPage from "pages/SignupPage";

const dashboardRoutes = [
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
    path: "/detail/:id",
    name: "Detail",
    icon: "nc-icon nc-chart-pie-35",
    component: DetailPage,
    layout: "/admin",
  },
  {
    // ai 구매예측가격을 차트로 보여줌
    path: "/ai",
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
];

export default dashboardRoutes;
