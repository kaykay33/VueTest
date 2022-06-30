<template>
  <div class="main-text-1 animate-enter11">
    <div class="main_h4-1 inter-semi-bold-alto-48px">{{ main_H4 }}</div>
    <div class="underline_h5-4 inter-semi-bold-alto-30px" v-html="underline_H5"></div>
  </div>
</template>

<script>
export default {
  name: "MainText",
  props: ["main_H4", "underline_H5"],
};
</script>

<style>
.main-text-1 {
  flex-direction: column;
  height: 153px;
  margin-top: 200px;
  opacity: 0;
  width: 470px;
  z-index: 4;
}

.main-text-1.animate-enter11 {
  animation: animate-enter11-frames 0.5s ease-in-out 0s 1 normal forwards;
  opacity: 0;
}

.main_h4-1 {
  height: 58px;
  letter-spacing: 0;
  margin-left: 78px;
  text-align: center;
  width: 315px;
}

.underline_h5-4 {
  height: 72px;
  letter-spacing: 0;
  margin-top: 23px;
  text-align: center;
  
}

@keyframes animate-enter11-frames {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
