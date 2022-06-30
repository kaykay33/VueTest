<template>
  <div class="site-1-1">
    <div class="color-plate-2">
      <div class="rectangle-3-1 border-1px-black"></div>
      <div class="colorplate-logo" id="colorplate-logo">{{ colorplateLogo }}</div>
    </div>
    <img
      class="line-1-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/62bca8b055c93f24bf8553e3/releases/62bca8bead51795a7041b478/img/bottomline@1x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "Site1",
  props: ["colorplateLogo"],
};
</script>

<style>
.site-1-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 685px;
  margin-right: 0;
  margin-top: 46px;
  width: 1720px;
  z-index: 3;
}

.color-plate-2 {
  display: flex;
  flex-direction: column;
  height: 655px;
  margin-left: 1px;
  width: 1055px;
}

.rectangle-3-1 {
  align-self: center;
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
  box-shadow: 0px 4px 4px #00000040;
  height: 553px;
  margin-left: -2px;
  width: 1053px;
}

.colorplate-logo {
  color: var(--alto);
  font-family: var(--font-family-inter);
  font-size: var(--font-size-l);
  font-weight: 600;
  height: 80px;
  letter-spacing: 0;
  margin-top: 22px;
  text-align: center;
  width: 367px;
}

.line-1-1 {
  height: 5.34px;
  margin-left: 0;
  margin-top: 25.3px;
  width: 100%;
}
</style>
