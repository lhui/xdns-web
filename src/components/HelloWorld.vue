<template>
  <!-- <h1>{{ msg }}</h1> -->
  <h1>{{ main_name }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
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
      count: 0
    }
  }
}
</script>
