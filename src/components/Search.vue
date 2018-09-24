<template>
  <div class="container mt-3">
	<div class="row justify-content-center">
      <div class="col-12 col-md-12 col-lg-12">
          <form class="card card-sm">
              <div class="card-body row no-gutters align-items-center">
                  <!--end of col-->
                  <div class="col-auto">
                      <router-link :to="{ name: 'Home' }" class="btn btn-danger btn-sm btn_rounded">Back</router-link>
                  </div>
                  <!--end of col-->
              </div>
              <div class="row justify-content-center">
               <weather v-if="city.length != 0" :city="city"></weather>
              </div>
          </form>
          
      </div>
      <!--end of col-->
  </div>
</div>
</template>

<script>
import Weather from './Weather'
export default {
  components: {
    Weather
  },
  name: 'Search',
  data () {
    return {
      search: '',
      city: []
    }
  },
  mounted () {
    this.city = this.$route.params.city
  }
}
</script>
