<template>
  <ul>
    <li class="nav-item">
      <router-link :to="{ name: 'home' }" class="nav-link" exact>
        Home
      </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ name: 'add' }" class="nav-link" exact>
        Add Country
      </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ name: 'update' }" class="nav-link" exact>
        Update Country
      </router-link>
    </li>
    <!--
    <li class="nav-item">
      <router-link :to="{ name: 'detail', params: { id: '2', name: 'Belgium' } }" class="nav-link" exact>
        Detail country
      </router-link>
    </li>
-->
  </ul>
</template>

<script>
export default {
  name: "NaviGation",
  mounted() {
    let route = {
      path: "/detail/:id/:name",
      name: "detail",
      component: () =>
        import(/* webpackChunkName: "update" */ "@/views/countrydetail"),
    };
    this.$router.addRoute(route);
  },
};
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

li:not(:last-of-type) {
  margin-right: 1rem;
}

.router-link-active {
  color: orange;
}

.router-link-exact-active {
  color: crimson;
}
</style>
