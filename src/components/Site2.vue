<template>
  <div class="site-2-1 animate-enter10" show-on-scroll>
    <div class="overlap-group1-2">
      <a href="www.google.com" target="_blank">
        <div class="elipse-1">
          <div class="ellipse-container-1">
            <img class="ellipse-1-1" :src="ellipse1" /><img class="ellipse-2-1" :src="ellipse2" />
          </div></div
      ></a>
      <div class="text-head_-site2 inter-semi-bold-alto-48px">{{ texthead_Site2 }}</div>
      <div class="text-elipse_h5-1 valign-text-middle inter-semi-bold-alto-20px">
        <span
          ><span class="inter-semi-bold-alto-20px">{{ spanText1 }}</span
          ><span class="inter-semi-bold-alto-30px">{{ spanText2 }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Site2",
  props: ["ellipse1", "ellipse2", "texthead_Site2", "spanText1", "spanText2"],
};
</script>

<style>
.site-2-1 {
  height: 765px;
  margin-right: 5px;
  margin-top: 100px;
  opacity: 0;
  transform: scale(1.1);
  width: 707px;
  z-index: 2;
}

.site-2-1.animate-enter10 {
  animation: animate-enter10-frames 1.4s ease-in-out 0.6s 1 normal forwards;
  opacity: 0;
  transform: scale(1.1);
}

.overlap-group1-2 {
  height: 774px;
  position: relative;
  top: -1px;
  width: 667px;
}

.elipse-1 {
  align-items: flex-end;
  cursor: pointer;
  display: flex;
  height: 660px;
  justify-content: flex-end;
  left: 0;
  min-width: 658px;
  padding: 76.6px 57.5px;
  position: absolute;
  top: 37px;
}

.ellipse-container-1 {
  height: 491px;
  position: relative;
  width: 539px;
}

.ellipse-1-1 {
  height: 415px;
  left: 0;
  position: absolute;
  top: 76px;
  width: 407px;
}

.ellipse-2-1 {
  height: 392px;
  left: 151px;
  position: absolute;
  top: 0;
  width: 388px;
}

.text-head_-site2 {
  left: 166px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 0;
}

.text-elipse_h5-1 {
  height: 139px;
  left: 46px;
  letter-spacing: 0;
  position: absolute;
  top: 635px;
  width: 621px;
}

@keyframes animate-enter10-frames {
  from {
    opacity: 0;
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
