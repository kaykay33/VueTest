<template>
  <div class="bottom-nav-1">
    <img
      class="bottom-line-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/62bca8b055c93f24bf8553e3/releases/62bca8bead51795a7041b478/img/bottomline@1x.svg"
    />
    <div class="underline_h-container-1 inter-semi-bold-alto-20px">
      <div class="underline_h5-5 valign-text-middle">
        <span
          ><span class="inter-semi-bold-alto-20px">{{ spanText1 }}</span
          ><span class="inter-semi-bold-alto-30px">{{ spanText2 }}</span>
        </span>
      </div>
      <div class="underline_h5-6 valign-text-middle">
        <span
          ><span class="inter-semi-bold-alto-20px">{{ spanText3 }}</span
          ><span class="inter-semi-bold-alto-30px">{{ spanText4 }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
  props: ["spanText1", "spanText2", "spanText3", "spanText4"],
};
</script>

<style>
.bottom-nav-1 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-right: 7px;
  margin-top: 131px;
  min-height: 99px;
  width: 1887px;
  z-index: 1;
}

.bottom-line-1 {
  align-self: center;
  height: 5px;
  margin-left: 7px;
  margin-top: -1px;
  width: 1720px;
}

.underline_h-container-1 {
  align-items: flex-start;
  display: flex;
  height: 77px;
  margin-top: 11px;
  min-width: 1872px;
}

.underline_h5-5 {
  align-self: flex-end;
  height: 59px;
  letter-spacing: 0;
  width: 276px;
}

.underline_h5-6 {
  height: 53px;
  letter-spacing: 0;
  margin-left: 1416px;
  width: 180px;
}
</style>
