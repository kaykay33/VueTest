<template>
  <div class="container-center-horizontal">
    <div class="tab-1 screen">
      <div class="navigation" :style="{ 'background-image': 'url(' + navigation + ')' }">
        <a href="#rectangle-1" className="align-self-flex-end"><img class="logo_beside" :src="logo_Beside" /></a
        ><a href="#rectangle-1">
          <div class="app_-btn">
            <div class="overlap-group">
              <div class="rechteck_app"></div>
              <div class="app inter-semi-bold-alto-22px">{{ app }}</div>
            </div>
          </div></a
        ><router-link to="/tab-2">
          <div class="join_-btn">
            <div class="overlap-group1">
              <div class="join inter-semi-bold-alto-22px">{{ join }}</div>
            </div>
          </div></router-link
        >
      </div>
      <div class="main-text">
        <h1 class="main_h4 inter-semi-bold-alto-48px">{{ main_H4 }}</h1>
        <div class="underline_h5 inter-semi-bold-alto-30px" v-html="underline_H5"></div>
      </div>
      <div class="site-1">
        <div class="bubble animate-enter8">
          <div class="rectangle-2 animate-enter7" show-on-scroll></div>
          <div class="bubble-1 inter-semi-bold-alto-26px">{{ bubble }}</div>
        </div>
        <div class="color-plate">
          <div class="rectangle-3 animate-enter9"></div>
          <div class="color-plate-1 inter-semi-bold-alto-26px">{{ colorPlate }}</div>
        </div>
      </div>
      <img class="to-top" :src="totop" />
      <div class="overlap-group3">
        <div class="weblayout">
          <img
            class="line-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/62bca8b055c93f24bf8553e3/releases/62bca8bead51795a7041b478/img/bottomline@1x.svg"
          />
          <img
            class="line-2"
            src="https://anima-uploads.s3.amazonaws.com/projects/62bca8b055c93f24bf8553e3/releases/62bca8bead51795a7041b478/img/bottomline@1x.svg"
          />
        </div>
        <div class="site-2">
          <div class="stars">
            <div class="star-container-1"><img class="star" :src="star3" /><img class="star-1" :src="star5" /></div>
            <div class="star-container">
              <img class="star" :src="star1" /><a href="https://mui.com/" target="_blank"
                ><img class="star-4 animate-enter5" show-on-scroll :src="star4"
              /></a>
            </div>
            <div class="star-container"><img class="star" :src="star2" /><img class="star-1" :src="star6" /></div>
          </div>
          <div class="underline_h5-1 valign-text-middle inter-semi-bold-alto-20px animate-enter6" show-on-scroll>
            <span
              ><span class="inter-semi-bold-alto-20px">{{ spanText1 }}</span
              ><span class="inter-semi-bold-alto-30px">{{ spanText2 }}</span>
            </span>
          </div>
        </div>
      </div>
      <div class="site-3">
        <div class="card">
          <color-plate-site3 :src="colorPlateSite3Props.src" />
          <div class="text-card_h5 valign-text-middle inter-semi-bold-alto-20px animate-enter1" show-on-scroll>
            <span
              ><span class="inter-semi-bold-alto-20px">{{ spanText3 }}</span
              ><span class="inter-semi-bold-alto-30px">{{ spanText4 }}</span>
            </span>
          </div>
        </div>
        <div class="text-head_-site3 inter-semi-bold-alto-48px animate-enter4" show-on-scroll>{{ texthead_Site3 }}</div>
        <div class="elipse-container">
          <div class="text-elipse_h5 valign-text-middle inter-semi-bold-alto-20px animate-enter2" show-on-scroll>
            <span
              ><span class="inter-semi-bold-alto-20px">{{ spanText5 }}</span
              ><span class="inter-semi-bold-alto-30px">{{ spanText6 }}</span>
            </span>
          </div>
          <div class="elipse animate-enter3">
            <div class="ellipse-container">
              <img class="ellipse-1" :src="ellipse1" /><img class="ellipse-2" :src="ellipse2" />
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-nav">
        <img
          class="bottom-line"
          src="https://anima-uploads.s3.amazonaws.com/projects/62bca8b055c93f24bf8553e3/releases/62bca8bead51795a7041b478/img/bottomline@1x.svg"
        />
        <div class="underline_h-container inter-semi-bold-alto-20px">
          <div class="underline_h5-2 valign-text-middle">
            <span
              ><span class="inter-semi-bold-alto-20px">{{ spanText7 }}</span
              ><span class="inter-semi-bold-alto-30px">{{ spanText8 }}</span>
            </span>
          </div>
          <div class="underline_h5-3 valign-text-middle">
            <span
              ><span class="inter-semi-bold-alto-20px">{{ spanText9 }}</span
              ><span class="inter-semi-bold-alto-30px">{{ spanText10 }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorPlateSite3 from "./ColorPlateSite3";
export default {
  name: "Tab1",
  components: {
    ColorPlateSite3,
  },
  props: [
    "navigation",
    "logo_Beside",
    "app",
    "join",
    "main_H4",
    "underline_H5",
    "bubble",
    "colorPlate",
    "totop",
    "star3",
    "star5",
    "star1",
    "star4",
    "star2",
    "star6",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "texthead_Site3",
    "spanText5",
    "spanText6",
    "ellipse1",
    "ellipse2",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "colorPlateSite3Props",
  ],
};
</script>

<style>
.tab-1 {
  align-items: center;
  background-color: var(--haiti);
  display: flex;
  flex-direction: column;
  min-height: 3240px;
  overflow-x: hidden;
  width: 100%;
}

.navigation {
  align-items: center;
  background-size: 100% 100%;
  display: flex;
  height: 110px;
  left: 0;
  width: 100%;
  min-width: 100%;
  padding: 6.8px 25px;
  position: fixed;
  top: 0;
  z-index: 6;
}

.logo_beside {
  align-items: left;
  cursor: pointer;
  height: 96px;
  transition: all 0.4s ease;
  width: 200px;
  margin-top: 0px;
}

.logo_beside:hover,
.rechteck_app:hover,
.join_-btn:hover {
  transform: scale(1.06);
}

.app_-btn {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  margin-left: 60%;
  margin-top: 4px;
  min-width: 122px;
}

.overlap-group {
  border-radius: 10px;
  height: 44px;
  position: relative;
  width: 120px;
}

.rechteck_app {
  background-color: var(--purple-heart);
  border-radius: 10px;
  cursor: pointer;
  height: 44px;
  left: 0;
  position: absolute;
  top: 0;
  transition: all 0.4s ease;
  width: 120px;
}

.app {
  align-items:center;
  left: 37px;
  letter-spacing: 0;
  position: relative;
  top: 8px;
  width: 45px;
}

.join_-btn {
  align-items:center;
  cursor: pointer;
  position: center;
  margin-left: 140px;
  margin-top: 4.4px;
  min-width: 122px;
  transition: all 0.4s ease;
}

.overlap-group1 {
  align-items: flex-end;
  background-color: var(--purple-heart);
  border-radius: 10px;
  display: flex;
  height: 44px;
  min-width: 120px;
  padding: 6.6px 34px;
}

.join {
  align-items:center;
  letter-spacing: 0;
  min-height: 30px;
  width: 52px;
}

.main-text {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 153px;
  margin-left: 4px;
  margin-top: 200px;
  transition: all 0.5s ease;
  width: 474px;
  z-index: 5;
}

.main-text:hover {
  opacity: 1;
}

.main_h4 {
  height: 58px;
  letter-spacing: 0;
  margin-left: -3px;
  text-align: center;
  width: 429px;
}

.underline_h5 {
  height: 72px;
  letter-spacing: 0;
  margin-left: -4px;
  margin-top: 2px;
  text-align: center;
  width: 470px;
}

.site-1 {
  display: flex;
  height: 566px;
  justify-content: space-between;
  margin-right: 93px;
  margin-top: 62px;
  width: 1587px;
  z-index: 4;
}

.bubble {
  flex-direction: column;
  height: 456px;
  opacity: 0;
  transform: translate(-250px, 0);
  width: 552px;
}

.bubble.animate-enter8 {
  animation: animate-enter8-frames 1.2s ease-in-out 0.5s 1 normal forwards;
  opacity: 0;
  transform: translate(-250px, 0);
}

.rectangle-2 {
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(173.4, 0, 255) 0%,
    rgba(59.74, 109.37, 183.81, 0.44) 81.25%,
    rgba(30.76, 48.19, 205.06, 0) 100%
  );
  border-radius: 20px;
  cursor: pointer;
  height: 400px;
  opacity: 0;
  transform: translate(-200px, 0);
  transition: all 0.5s ease;
  width: 550px;
}

.rectangle-2.animate-enter7 {
  animation: animate-enter7-frames 1.5s ease-in-out 0.5s 1 normal forwards;
  opacity: 0;
  transform: translate(-200px, 0);
}

.rectangle-2:hover,
.rectangle-3:hover {
  filter: blur(30px);
}

.bubble-1 {
  height: 31px;
  letter-spacing: 0;
  margin-left: 79px;
  margin-top: 25px;
  text-align: center;
  width: 88px;
}

.color-plate {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  height: 454px;
  margin-right: -2px;
  margin-top: 112px;
  width: 552px;
}

.rectangle-3 {
  background: linear-gradient(
    180deg,
    rgb(228.8, 124, 247) 0%,
    rgb(160, 163, 241) 22.92%,
    rgb(142, 181, 237) 42.19%,
    rgba(134, 192, 233, 0.99) 56.77%,
    rgb(101, 151, 236) 69.79%,
    rgb(78, 124, 241) 86.98%,
    rgb(78, 124, 241) 100%
  );
  border-radius: 20px;
  cursor: pointer;
  height: 400px;
  margin-right: 2px;
  opacity: 0;
  transform: translate(250px, 0);
  transition: all 0.5s ease;
  width: 550px;
}

.rectangle-3.animate-enter9 {
  animation: animate-enter9-frames 1.2s ease-in-out 0.5s 1 normal forwards;
  opacity: 0;
  transform: translate(250px, 0);
}

.color-plate-1 {
  height: 31px;
  letter-spacing: 0;
  margin-right: 402px;
  margin-top: 23px;
  text-align: center;
  width: 139px;
}

.to-top {
  height: 146px;
  left: 1787px;
  position: fixed;
  top: 962px;
  width: 145px;
  z-index: 7;
}

.overlap-group3 {
  height: 1084px;
  margin-right: 0;
  margin-top: 99px;
  position: relative;
  width: 1720px;
  z-index: 2;
}

.weblayout {
  display: flex;
  flex-direction: column;
  height: 1084px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1720px;
}

.line-1 {
  height: 5.34px;
  margin-left: 0;
  margin-top: -0.7px;
  width: 100%;
}

.line-2 {
  height: 5.34px;
  margin-left: 0;
  margin-top: 1074.7px;
  min-width: 100%;
}

.site-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 851px;
  left: 189px;
  position: absolute;
  top: 116px;
  min-width: 100%;
}

.stars {
  align-items: flex-end;
  display: flex;
  height: 633px;
  justify-content: center;
  margin-left: 0px;
  min-width: 100%;
}

.star-container-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: -31.44px;
  min-height: 656px;
  width: 285px;
}

.star {
  height: 273px;
  margin-left: 2px;
  width: 283px;
}

.star-1 {
  height: 273px;
  margin-top: 110px;
  width: 283px;
}

.star-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: -31.44px;
  margin-left: 187px;
  min-height: 656px;
  width: 285px;
}

.star-4 {
  cursor: pointer;
  display: block;
  height: 273px;
  margin-top: 110px;
  opacity: 0;
  transform: translate(0, 250px);
  width: 283px;
}

.star-4.animate-enter5 {
  animation: animate-enter5-frames 1.2s ease-in-out 0.5s 1 normal forwards;
  display: block;
  opacity: 0;
  transform: translate(0, 250px);
}

.underline_h5-1 {
  height: 142px;
  letter-spacing: 0;
  margin-left: -2px;
  margin-top: 76px;
  opacity: 0;
  transform: translate(0, 50px);
  width: 1342px;
}

.underline_h5-1.animate-enter6 {
  animation: animate-enter6-frames 1s ease-in-out 0.5s 1 normal forwards;
  opacity: 0;
  transform: translate(0, 50px);
}

.site-3 {
  align-items: flex-start;
  display: flex;
  margin-left: 61.93px;
  margin-top: 45px;
  min-width: 1646px;
  padding: 0 0px;
  z-index: 3;
}

.card {
  display: flex;
  flex-direction: column;
  height: 896px;
  justify-content: space-between;
  margin-top: 0;
  position: relative;
  width: 656px;
}

.text-card_h5 {
  height: 203px;
  letter-spacing: 0;
  margin-left: 31.1px;
  opacity: 0;
  transform: translate(0, 100px);
  width: 623px;
}

.text-card_h5.animate-enter1 {
  animation: animate-enter1-frames 1.3s ease-in-out 0.9s 1 normal forwards;
  opacity: 0;
  transform: translate(0, 100px);
}

.text-head_-site3 {
  letter-spacing: 0;
  margin-left: 15px;
  margin-top: 17px;
  min-height: 58px;
  min-width: 242px;
  opacity: 0;
  text-align: center;
}

.text-head_-site3.animate-enter4 {
  animation: animate-enter4-frames 1.2s ease-in-out 0.5s 1 normal forwards;
  opacity: 0;
}

.elipse-container {
  height: 729px;
  margin-left: 22px;
  margin-top: 7px;
  position: relative;
  width: 707px;
}

.text-elipse_h5 {
  height: 139px;
  left: 74px;
  letter-spacing: 0;
  opacity: 0;
  position: absolute;
  top: 590px;
  transform: translate(0, 100px);
  width: 633px;
}

.text-elipse_h5.animate-enter2 {
  animation: animate-enter2-frames 1.3s ease-in-out 0.9s 1 normal forwards;
  opacity: 0;
  transform: translate(0, 100px);
}

.elipse {
  height: 660px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transform: translate(250px, 0);
  width: 658px;
}

.elipse.animate-enter3 {
  animation: animate-enter3-frames 1.5s ease-in-out 0.5s 1 normal forwards;
  opacity: 0;
  transform: translate(250px, 0);
}

.ellipse-container {
  height: 512px;
  left: 49px;
  position: relative;
  top: 89px;
  width: 565px;
}

.ellipse-1 {
  cursor: pointer;
  height: 441px;
  left: 0;
  position: absolute;
  top: 71px;
  transition: all 0.6s ease;
  width: 433px;
}

.ellipse-1:hover,
.ellipse-2:hover {
  transform: rotate(5deg);
}

.ellipse-2 {
  cursor: pointer;
  height: 418px;
  left: 151px;
  position: absolute;
  top: 0;
  transition: all 0.5s ease;
  width: 414px;
}

.bottom-nav {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-right: 3px;
  margin-top: 55px;
  min-height: 99px;
  width: 1891px;
  z-index: 1;
}

.bottom-line {
  height: 5px;
  margin-left: 3px;
  margin-top: -1px;
  width: 1720px;
}

.underline_h-container {
  align-items: flex-start;
  display: flex;
  height: 82px;
  margin-right: 4px;
  margin-top: 12px;
  min-width: 1887px;
}

.underline_h5-2 {
  align-self: flex-end;
  height: 68px;
  letter-spacing: 0;
  width: 297px;
}

.underline_h5-3 {
  height: 53px;
  letter-spacing: 0;
  margin-left: 1410px;
  width: 180px;
}

@keyframes animate-enter7-frames {
  from {
    opacity: 0;
    transform: translate(-200px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes animate-enter9-frames {
  from {
    opacity: 0;
    transform: translate(250px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes animate-enter2-frames {
  from {
    opacity: 0;
    transform: translate(0, 100px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes animate-enter3-frames {
  from {
    opacity: 0;
    transform: translate(250px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes animate-enter4-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes animate-enter6-frames {
  from {
    opacity: 0;
    transform: translate(0, 50px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes animate-enter1-frames {
  from {
    opacity: 0;
    transform: translate(0, 100px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes animate-enter5-frames {
  from {
    opacity: 0;
    transform: translate(0, 250px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes animate-enter8-frames {
  from {
    opacity: 0;
    transform: translate(-250px, 0);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
