<template>
  <div
    id="alert"
    class="alert-msg"
  >
    <v-snackbar
      v-for="(message, i) in success "
      :key="i"
      v-model="success.length"
      color="#f12239"
    >
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="removeSuccess()"
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      v-for="(message, i) in info "
      :key="i"
      v-model="info.length"
      color="#2196F3"
    >
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="removeInfo()"
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    success () {
      return this.$store.state.alert.success
    },
    info () {
      return this.$store.state.alert.info
    }
  },
  methods: {
    ...mapMutations('alert', ['removeInfoMsg', 'removeSuccessMsg']),
    removeSuccess () {
      this.removeSuccessMsg()
    },
    removeInfo () {
      this.removeInfoMsg()
    }
  }
}
</script>
