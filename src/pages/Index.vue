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
  max-width: 60%;
  margin: auto;
}
.build-icon {
  font-size: 25vh;
  animation: spin 1s linear infinite;
  transform-origin: bottom left;
}
.appho {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
h1 {
  line-height: 1em !important;
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
