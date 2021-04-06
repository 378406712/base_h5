<template>
  <div id="app">
    <keep-alive>
      <transition v-if="$route.meta.keepAlive" name="" mode="">
        <router-view></router-view>
      </transition>
    </keep-alive>

    <transition name="fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-size: 75px;
}
</style>
