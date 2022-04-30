<template>
  <h1>Country: {{ id }} {{ name }}</h1>
  <div>
    <h2>Details</h2>
    <ul class="list-group" v-if="country">
      <li class="list-group-item">{{ country.id}}</li>
      <li class="list-group-item">{{ country.name}}</li>
      <li class="list-group-item">{{ country.capital}}</li>
      <li class="list-group-item">Picture of {{ country.capital}}</li>
      <li class="list-group-item">{{ country.details}}</li>
    </ul>
  </div>
</template>

<script>
import countryData from '../data/CountryData';

export default {
  name: "CountryDetail",
  data() {
    return {
      countryData,
    }
  },
  computed: {
    id () {
      return this.$route.params.id;
    },
    name () {
      return this.$route.params.name;
    }
  },
  watch: {
    id: function ( id ) {
      this.country = this.fetchCountry ( id );
    }
  },
  methods: {
    fetchCountry ( id ) {
      return ( this.countryData.countries.find ( country => country.id === +id ) );
    }
  },
  created () {
    this.country = this.fetchCountry ( this.id );
  },
}
</script>

<style scoped>
</style>
