<!--  -->
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  height: 40px;
  background-color: #de4943;

}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;


}

</style>