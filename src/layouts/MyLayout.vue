<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          AppHo
        </q-toolbar-title>

      </q-toolbar>
    </q-header>
    <q-footer
      reveal
      elevated
    >
      <q-toolbar>
        <q-toolbar-title class="footer-title">Created by <a
            href="https://wilkolek.eu"
            target="_blank"
          >wilkolek.eu</a></q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Apps</q-item-label>
        <q-item
          clickable
          tag="a"
          to="/"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Homepage</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          to="/roof-pressure-coefficients"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-wind" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Find roof pressure coefficients</q-item-label>
            <q-item-label caption>Constructions</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          tag="a"
          to="/rod-finder"
        >
          <q-item-section avatar>
            <q-icon name="fas fa-dice-four" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Rod Finder</q-item-label>
            <q-item-label caption>Constructions</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
<style scoped lang="scss">
.footer-title {
  font-size: 1rem;
  a {
    color: #ccc;
    text-decoration: none;
    &:hover {
      color: #333;
    }
  }
}
</style>
