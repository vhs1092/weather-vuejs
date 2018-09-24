<template>
  <div>
    <div class="card mt-3">
      <div class="card-header">
        <div v-if="loading"> <img src="../assets/loading.gif" width="30%"></div>
        <h3>
          <div class="float-left">
          {{city}} <br>
          {{time | moment("calendar")}}
          </div>
          <div class="float-right">
          <router-link :to="{ name: 'Home' }" class="btn btn-danger btn-sm btn_rounded">Back</router-link>
          </div>
        </h3>
      </div>
      <div class="card-block">
        <div class="row">
          <div class="col-md-4 mt-2 mb-2" v-for="(dataDetail, key) in dayInfo" :key="key">
            <div class="card">
              <div class="card-header">
                  <div class="float-left">{{dataDetail.applicable_date |  moment("ddd DD MMM")}}
                    </div>
                    <div class="float-right">
                        <img :src="iconPath+ dataDetail.weather_state_abbr+'.svg'" alt="Showers" style="width:32px" />
                    <span>{{dataDetail.weather_state_name}}</span>
                    </div>
                  </div>
              <div class="card-block">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Temperature : {{dataDetail.the_temp | roundValue()}}°C</li>
                  <li class="list-group-item">Max : {{dataDetail.max_temp | roundValue()}}°C</li>
                  <li class="list-group-item">Min : {{dataDetail.min_temp | roundValue()}}°C</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  //* Import configuration file
  import {getHeaders, iconPath} from '../config'
  export default {
    data () {
      return {
        loading: true,
        woeid: this.$route.params.woeid,
        iconPath: iconPath(),
        dayInfo: '',
        city: '',
        time: ''
      }
    },
    mounted () {
      this.getCityWeather()
    },
    filters: {
      roundValue (val) {
        //* round value
        return Math.round(val)
      }
    },
    methods: {
      getCityWeather: function () {
          //* function to get actual city weather
        this.$http.get('weather.php/?command=location&woeid=' + this.woeid, getHeaders())
          .then((response) => {
            this.loading = false
            this.dayInfo = response.body.consolidated_weather
            this.city = response.body.title
            this.time = response.body.time
          })
      }
    }
  }
</script>
