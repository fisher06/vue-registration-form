<template>
  <v-row>
    <v-col>
      {{ user }}
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      valid: true
    }
  },
  computed: {
    user () {
      return this.$store.state.account.user
    }
  },
  methods: {
  }
}
</script>
