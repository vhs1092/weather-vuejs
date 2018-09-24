<template>
  <div class="container mt-3">
	<div class="row justify-content-center">
      <div class="col-12 col-md-12 col-lg-12">
          <form class="card card-sm">
              <div class="card-body row no-gutters align-items-center">
                  <div class="col-auto">
                      <i class="fas fa-search h4 text-body"></i>
                  </div>
                  <!--end of col-->
                  <div class="col">
                      <input class="form-control form-control-lg form-control" id="city" placeholder="City Name" v-model="search" required autocomplete="off">
                  </div>
                  <!--end of col-->
                  <div class="col-auto">
                      <button @click="sendData" class="btn btn-lg btn-success" type="submit">Search</button>
                  </div>
                  <!--end of col-->
              </div>
              <div class="row">
              <div class="col-md-4 pt-3" v-for="city in cities" :key="city">
               <weather :city="city"></weather>
             </div>
              </div>
          </form>
          
      </div>
      <!--end of col-->
  </div>
</div>
</template>
<style>
.form-control-borderless {
    border: none;
}

.form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {
    border: none;
    outline: none;
    box-shadow: none;
}
</style>
<script>
import Weather from './Weather'
export default {
  name: 'Home',
  props: ['message'],
  data () {
    return {
      search: '',
      cities: ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver']
    }
  },
  methods: {
    sendData: function () {
      this.cities = []
      this.cities.push(this.search)
    }
  },
  components: {
    Weather
  }
}
</script>
