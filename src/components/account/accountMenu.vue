<template>
  <v-card
    class="mx-auto"
  >
    <v-list>
      <v-list-group
        :value="true"
        prepend-icon="mdi-menu"
      >
        <template v-slot:activator>
          <v-list-item-title>{{ $t('account.menu') }}</v-list-item-title>
        </template>

        <v-list-item
          v-for="(key, index) in user"
          :key="index"
          link
        >
          <v-list-item-icon>
            <v-icon v-text="icon[index]"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ $t('account.' + index) }}
          </v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      icon: {
        email: 'mdi-email',
        firstname: 'mdi-account',
        lastname: 'mdi-account',
        gender: 'mdi-face',
        dob: 'mdi-calendar',
        age: 'mdi-cake-layered',
        street: 'mdi-home',
        zipcode: 'mdi-post',
        city: 'mdi-city',
        country: 'mdi-city',
        phone: 'mdi-cellphone',
        profileImage: 'mdi-camera'
      }
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
