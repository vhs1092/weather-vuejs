<template>
  <div>
      <div v-if="loading"> <img src="../assets/loading.gif" width="30%"></div>
      <div v-else v-for="(weater, key) in forecasts" :key="key" class="card">
        <router-link :to="'/weather/' + weater.woeid" tag="a">
          <div class="card-header float-left" style="width:100%;">
            <h4 class="float-left">
              {{weater.city}}
            </h4>
            <div class="float-right">
              <img :src="iconPath+ weater.weather_state_abbr+'.svg'" alt="Showers" style="width:32px" />
              <span>{{weater.weather_state_name}}</span>
            </div>
          </div>
        </router-link>
        <div class="card-block">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Temperature: {{weater.the_temp}}°C</li>
            <li class="list-group-item">Max: {{weater.max_temp}}°C</li>
            <li class="list-group-item">Min: {{weater.min_temp}}°C</li>
          </ul>
        </div>
      </div>
      <div v-if="notFound">No results were found. Try changing the keyword!</div>
  </div>
</template>

<script>
  import {getHeaders, iconPath} from '../config'
  export default {
    data () {
      return {
        loading: true,
        forecasts: [],
        iconPath: iconPath(),
        city_name: this.city,
        notFound: false
      }
    },
    props: ['city'],
    methods: {
      //* get weaters
      getCityWeather () {
        this.$http.get('weather.php/?command=search&keyword=' + this.city_name, getHeaders())
          .then((response) => {
            if (response.body.length === 0) {
              //* no data found
              this.loading = false
              this.notFound = true
            } else {
              let woeids = response.body[0].woeid
              this.$http.get('weather.php/?command=location&woeid=' + woeids, getHeaders())
                .then((response) => {
                  this.loading = false
                  this.forecasts.push({
                    city: response.body.title,
                    woeid: response.body.woeid,
                    the_temp: Math.round(response.body.consolidated_weather[0].the_temp),
                    min_temp: Math.round(response.body.consolidated_weather[0].min_temp),
                    max_temp: Math.round(response.body.consolidated_weather[0].max_temp),
                    weather_state_name: response.body.consolidated_weather[0].weather_state_name,
                    weather_state_abbr: response.body.consolidated_weather[0].weather_state_abbr
                  })
                })
            }
          })
      }
    },
    mounted () {
      this.getCityWeather()
    }
  }
</script>
