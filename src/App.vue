<template>
  <div class="superhero-gallery">
    <SuperHeroCard name="Batman"/>
  </div>
</template>

<script>

import SuperHeroCard from './components/SuperHeroCard.vue'

export default {
  name: 'SuperHeroApp',
  components: {
    SuperHeroCard
  }

}
</script>

<style>
#app {

}
</style>
