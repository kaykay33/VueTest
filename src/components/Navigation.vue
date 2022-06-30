<template>
  <div class="navigation-1" :style="{ 'background-image': 'url(' + navigation + ')' }">
    <router-link to="/tab-1" className="align-self-flex-end"
      ><img class="logo_beside-1" :src="logo_Beside" /></router-link
    ><a href="#colorplate-logo">
      <div class="app_-btn-1">
        <div class="overlap-group-2 border-1px-black">
          <div class="app-1 inter-semi-bold-alto-22px">{{ app }}</div>
        </div>
      </div></a
    ><router-link to="/tab-1">
      <div class="join_-btn-1">
        <div class="overlap-group1-1 border-1px-black">
          <div class="join-1 inter-semi-bold-alto-22px">{{ join }}</div>
        </div>
      </div></router-link
    >
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: ["navigation", "logo_Beside", "app", "join"],
};
</script>

<style>
.navigation-1 {
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

.logo_beside-1 {
  align-items: left;
  cursor: pointer;
  height: 96px;
  transition: all 0.4s ease;
  width: 200px;
  margin-top: 0px;
}

.app_-btn-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  margin-bottom: 6px;
  margin-left: 1245px;
  min-width: 122px;
}

.overlap-group-2 {
  align-items: flex-start;
  background-color: var(--purple-heart);
  border-radius: 10px;
  display: flex;
  height: 40px;
  min-width: 120px;
  padding: 6px 36px;
}

.app-1,
.join-1 {
  letter-spacing: 0;
  min-height: 27px;
}

.join_-btn-1 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  margin-bottom: 6px;
  margin-left: 108px;
  min-width: 122px;
}

.overlap-group1-1 {
  align-items: flex-start;
  background-color: var(--purple-heart);
  border-radius: 10px;
  display: flex;
  height: 40px;
  min-width: 120px;
  padding: 6px 33px;
}
</style>
