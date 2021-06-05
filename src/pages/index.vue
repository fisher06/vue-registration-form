
<template>
  <v-container
    fluid
  >
  <app-header />
  <app-alert />
  <v-row class="ma-0">
    <v-col cols="12">
      <app-account-info />
    </v-col>
  </v-row>
  <app-footer />
  </v-container>
</template>

<script>
import AppAlert from '../components/alert.vue'
import AppHeader from '../components/header.vue'
import AppFooter from '../components/footer.vue'
import AppAccountInfo from '../components/account/accountInfo.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    AppAlert,
    AppAccountInfo,
    AppHeader,
    AppFooter
  },
  created () {
    this.fetchData()
  },
  methods: {
    ...mapActions('account', ['fetchSourceData']),
    fetchData () {
      this.fetchSourceData()
    }
  }
}
</script>
