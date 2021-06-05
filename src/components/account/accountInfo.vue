<template>
  <v-row>
    <v-col cols="12">
      Info
    </v-col>
    <v-col cols="8">
      <app-account-form />
    </v-col>
    <v-col cols="4">
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
  }
}
</script>
