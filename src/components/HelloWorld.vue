<template>
  <!-- <h1>{{ msg }}</h1> -->
  <h1>{{ main_name }}</h1>
</template>

<script>
export default {
  name: 'xdns',
  props: {
    msg: String
  },
  data() {
    return {
      main_name: "XDNS",
    }
  }
}
</script>
