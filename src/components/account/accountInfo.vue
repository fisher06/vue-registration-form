<template>
  <v-row
    class="account-info"
  >
    <v-col
      class="profile-image"
      cols="12"
      sm="4"
    >
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        max-height="150"
        max-width="250"
        :src="profileImage"
      ></v-img>
    </v-col>
    <v-col
      cols="12"
      sm="8"
      class="profile-name"
    >
      <p
        v-if="firstname && lastname"
      >
        {{ firstname + ' ' + lastname }}
      </p>
    </v-col>
    <v-col
      cols="12"
      md="9"
    >
      <app-account-form />
    </v-col>
    <v-col
      cols="12"
      md="3"
    >
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
    lastname () {
      return this.$store.state.account.user.lastname
    },
    profileImage () {
      return this.$store.state.account.user.profileImage
    }
  }
}
</script>

<style lang="scss" scoped>
  .account-info {
    .profile-name {
      border-bottom: 2px solid #f12239;
    }
    .profile-image {
      .v-image {
        margin: auto;
      }
    }
    .profile-name {
      p {
        text-align: center;
        font-size: 2em;
        margin-top: 24px;
        font-weight: bold;
      }
    }
  }
</style>
