<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.$NbGet('https://v1.hitokoto.cn/').then((res) => console.log(res))
    console.log(this)
  }
}
</script>

<style>
</style>