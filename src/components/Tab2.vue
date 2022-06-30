<template>
  <div class="container-center-horizontal">
    <div class="tab-2 screen">
      <navigation
        :navigation="navigationProps.navigation"
        :logo_Beside="navigationProps.logo_Beside"
        :app="navigationProps.app"
        :join="navigationProps.join"
      />
      <main-text :main_H4="mainTextProps.main_H4" :underline_H5="mainTextProps.underline_H5" />
      <site1 :colorplateLogo="site1Props.colorplateLogo" />
      <site2
        :ellipse1="site2Props.ellipse1"
        :ellipse2="site2Props.ellipse2"
        :texthead_Site2="site2Props.texthead_Site2"
        :spanText1="site2Props.spanText1"
        :spanText2="site2Props.spanText2"
      />
      <bottom-nav
        :spanText1="bottomNavProps.spanText1"
        :spanText2="bottomNavProps.spanText2"
        :spanText3="bottomNavProps.spanText3"
        :spanText4="bottomNavProps.spanText4"
      />
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation";
import MainText from "./MainText";
import Site1 from "./Site1";
import Site2 from "./Site2";
import BottomNav from "./BottomNav";
export default {
  name: "Tab2",
  components: {
    Navigation,
    MainText,
    Site1,
    Site2,
    BottomNav,
  },
  props: ["navigationProps", "mainTextProps", "site1Props", "site2Props", "bottomNavProps"],
};
</script>

<style>
.tab-2 {
  align-items: center;
  background-color: var(--haiti);
  display: flex;
  flex-direction: column;
  min-height: 2160px;
  position: relative;
  width: 100%;
}
</style>
