<!--App.vue-->
<template>
  <div class="container">
    <navigation/>
    <router-view/>
  </div>
</template>

<script>
import navigation from "./views/navigation";
export default {
  name: 'app',
  components: {
    navigation
  }
}
</script>
