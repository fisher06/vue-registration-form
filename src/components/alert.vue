<template>
  <div id="alert">
    <v-snackbar
      v-for="(message, i) in success "
      :key="i"
      v-model="success.length"
      color="#4CAF50"
    >
      {{ message }}
      <v-btn
        @click="removeSuccess()"
        dark
        text
      >
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>
    </v-snackbar>
    <v-snackbar
      v-for="(message, i) in info "
      :key="i"
      v-model="info.length"
      color="#2196F3"
    >
      {{ message }}
      <v-btn
        @click="removeInfo()"
        dark
        text
      >
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      timeout: 6000
    }
  },
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
