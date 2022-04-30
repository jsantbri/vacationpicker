<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h1>{{ header }}</h1>
        <ul>
          <li @click="showCountry(country)"
            v-for="country in countryData.countries"
            :key="country.id"
            :title="country.details"
            class="grab">
            {{ country.id }} - 
            {{ country.name.toUpperCase() }} : 
            {{ country.capital }} 
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import countryData from '@/data/CountryData.js'
export default {
  name: "VacationPicker",
  data() {
    return {
      countryData,
      header: 'Vue Vacation Picker',
      selectedCountryIndex: 0
    }
  },
  methods: {
    showCountry ( country ) {
      this.$router.push ( {
       name: 'detail',
       params: {
         id: country.id,
         name: country.name
       }
      } );
    },
    selectCountry(index) {
      this.selectedCountryIndex = index;
    }
  },
  computed: {
    selectedCountry() {
      return {
        ...this.countryData.countries[this.selectedCountryIndex]
      }
    }
  }
}
</script>

<style scoped>
.grab {
  cursor:pointer;
  color:blue;
}
</style>
