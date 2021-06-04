
<template>
  <v-container
    fluid
  >
  <app-alert />
  <v-row>
    <v-col cols="12">
      <app-account-info />
    </v-col>
    <v-col cols="12">
      <app-account-form />
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import AppAlert from '../components/alert.vue'
import AppAccountForm from '../components/account/accountForm.vue'
import AppAccountInfo from '../components/account/accountInfo.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    AppAlert,
    AppAccountForm,
    AppAccountInfo
  },
  created () {
    this.fetchData()
  },
  methods: {
    ...mapActions(['fetchSourceData']),
    fetchData () {
      this.fetchSourceData()
    }
  }
}
</script>
