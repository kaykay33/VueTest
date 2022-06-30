import Vue from "vue";
import Router from "vue-router";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import { tab1Data, tab2Data } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/tab-2",
      component: Tab2,
      props: {
        navigationProps: tab2Data.navigationProps,
        mainTextProps: tab2Data.mainTextProps,
        site1Props: tab2Data.site1Props,
        site2Props: tab2Data.site2Props,
        bottomNavProps: tab2Data.bottomNavProps,
      },
    },
    {
      path: "*",
      component: Tab1,
      props: { ...tab1Data },
    },
  ],
});
