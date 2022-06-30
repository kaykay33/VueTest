<template>
  <div class="color-plate_site-3 animate-enter" show-on-scroll>
    <div class="overlap-group-1">
      <img class="card_bg" :src="src" />
      <div class="stripe3"></div>
      <div class="stripe2"></div>
      <div class="stripe1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorPlateSite3",
  props: ["src"],
};
</script>

<style>
.color-plate_site-3 {
  cursor: pointer;
  height: 423.28px;
  margin-left: 40.1px;
  margin-top: 142.1px;
  mix-blend-mode: hard-light;
  opacity: 0;
  transform: translate(-250px, 0);
  transition: all 1s ease-in-out;
  min-width: 100%;
}

.color-plate_site-3.animate-enter {
  animation: animate-enter-frames 1.5s ease-in-out 0.4s 1 normal forwards;
  opacity: 0;
  transform: translate(-250px, 0);
}

.color-plate_site-3:hover {
  transform: rotate(25deg);
}

.overlap-group-1 {
  height: 925px;
  position: relative;
  top: -235px;
  min-width: 100%;
}

.card_bg {
  height: 712px;
  left: 144px;
  position: absolute;
  top: 106px;
  transform: rotate(60deg);
  width: 657px;
}

.stripe3 {
  background-color: var(--violet-purple);
  border-radius: 195px;
  height: 290px;
  left: 277px;
  position: absolute;
  top: 366px;
  transform: rotate(-30deg);
  width: 87px;
}

.stripe2 {
  background-color: var(--violet-purple);
  border-radius: 195px;
  height: 321px;
  left: 622px;
  position: absolute;
  top: 236px;
  transform: rotate(-30deg);
  width: 87px;
}

.stripe1 {
  background-color: var(--violet-purple);
  border-radius: 195px;
  height: 429px;
  left: 453px;
  position: absolute;
  top: 234px;
  transform: rotate(-30deg);
  width: 87px;
}

@keyframes animate-enter-frames {
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
