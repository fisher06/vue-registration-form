
<template>
  <v-row>
    <v-col>
      <v-card class="signup-form elevation-0">
        <v-card-text>
          <v-form
            ref="account"
            v-model="valid"
            lazy-validation
          >
            <v-row>
              <v-col>
                <v-text-field
                  :label="$t('account.email') + ' *'"
                  prepend-icon="mdi-email"
                  name="login"
                  type="text"
                  disabled
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <!--v-btn
            @click="resetPassword"
            text
            small
          >
            {{ $t('account.moidfyPwd') }}
          </v-btn>
          <v-spacer />
          <v-btn
            @click="onSubmit"
            color="black"
            class="white--text"
          >
            {{ $t('account.save') }}
          </v-btn-->
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
      form: {},
      rules: [
        v => !!v || this.$t('auth.requiredField')
      ],
      nameRules: [
        v => !!v || this.$t('auth.requiredField'),
        v => (v && v.length <= 12) || this.$t('auth.nameMustLessThan12')
      ],
      genders: [
        { value: 'male', text: this.$t('customer.male') },
        { value: 'female', text: this.$t('customer.female') }
      ]
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>
