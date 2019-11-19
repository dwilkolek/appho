<template>
  <q-page class="flex flex-center">
    <div class="box">
      <q-icon
        class="build-icon"
        name="fas fa-hammer"
      />
      <q-space />
      <h1>AppHo</h1>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>
<style scoped>
.box {
  position: relative;
  height: 200px;
  width: 200px;
}
.build-icon {
  font-size: 200px;
  animation: spin 1s linear infinite;
  transform-origin: bottom left;
}
.appho {
  position: absolute;
  right: 0px;
  bottom: 0px;
}

@keyframes spin {
  0% {
    transform: rotate(-25deg);
  }
  30% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(-25deg);
  }
}
</style>
