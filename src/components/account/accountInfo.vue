<template>
  <v-row>
    <v-col cols="4">
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="150"
        max-width="250"
        src="https://picsum.photos/id/11/500/300"
      ></v-img>
    </v-col>
    <v-col cols="8">
      {{ firstname + ' ' + lastname }}
    </v-col>
    <v-col cols="9">
      <app-account-form />
    </v-col>
    <v-col cols="3">
      <app-account-menu />
    </v-col>
  </v-row>
</template>

<script>
import AppAccountForm from '../account/accountForm.vue'
import AppAccountMenu from '../account/accountMenu.vue'

export default {
  components: {
    AppAccountForm,
    AppAccountMenu
  },
  computed: {
    firstname () {
      return this.$store.state.account.user.firstname
    },
    lastname() {
      return this.$store.state.account.user.lastname
    }
  }
}
</script>
