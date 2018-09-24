import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import CityWeather from '@/components/CityWeather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search/:city',
      name: 'Search',
      component: Search
    },
    {
      path: '/weather/:woeid',
      name: 'CityWeather',
      component: CityWeather
    }
  ]
})
