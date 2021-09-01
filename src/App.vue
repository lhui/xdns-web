<template>
    <div>
    <!-- <router-link to="/dnslist">DNSList</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
import DNSList from './components/DNSList.vue'
export default {
  name: 'App',
  components: {
    DNSList
  }
}
</script>

<style>
</style>
