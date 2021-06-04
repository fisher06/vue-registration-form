<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        v-if="!disabled"
        v-model="dateFormatted"
        :label="$t('customer.birthday')"
        v-on="on"
        prepend-icon="event"
        readonly
      />
      <v-text-field
        v-else
        v-model="dateFormatted"
        :label="$t('customer.birthday')"
        v-on="on"
        prepend-icon="event"
        readonly
        disabled
      />
    </template>
    <v-date-picker
      ref="picker"
      v-if="!disabled"
      v-model="date"
      :locale="$i18n.locale"
      :max="max"
      @input="handleInput"
      min="1950-01-01"
    />
    <v-date-picker
      ref="picker"
      v-else
      v-model="date"
      :locale="$i18n.locale"
      :max="max"
      @input="handleInput"
      min="1950-01-01"
      readonly
    />
  </v-menu>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data (vm) {
    return {
      menu: false,
      date: this.value,
      dateFormatted: vm.formatDate(this.value)
    }
  },
  computed: {
    max () {
      const currentYear = new Date().getFullYear()
      const date = new Date()
      date.setFullYear(currentYear - 18)
      return date.toISOString().substr(0, 10)
    }
  },
  watch: {
    menu (value) {
      value && this.$nextTick(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
    date (value) {
      this.dateFormatted = this.formatDate(value)
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', this.date)
      this.menu = false
    },
    formatDate (date) {
      if (!date) { return null }
      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    }
  }
}
</script>
