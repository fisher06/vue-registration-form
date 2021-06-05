
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
              <v-col
                cols="12"
                v-if="email"
              >
                <v-text-field
                  :label="$t('account.email') + ' *'"
                  prepend-icon="mdi-email"
                  name="login"
                  type="text"
                  v-model="email"
                  disabled
                />
              </v-col>
              <v-col
                cols="6"
                v-if="firstname"
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :label="$t('account.firstname') + ' *'"
                  prepend-icon="mdi-account"
                  name="firstname"
                  type="text"
                  required
                />
              </v-col>
              <v-col
                cols="6"
                v-if="lastname"
              >
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :label="$t('account.lastname') + ' *'"
                  prepend-icon="mdi-account"
                  name="lastname"
                  type="text"
                  required
                />
              </v-col>
              <v-col
                cols="6"
                v-if="gender"
                >
                <v-select
                  v-model="gender"
                  :rules="rules"
                  :items="genders"
                  :label="$t('account.gender')"
                  prepend-icon="mdi-face"
                />
              </v-col>
              <v-col
                cols="6"
                v-if="dob"
              >
                <v-menu
                  ref="dobMenu"
                  v-model="dobMenu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dob"
                      :label="$t('account.birthday')"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="dob"
                    :active-picker.sync="activePicker"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="saveDate"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col
                cols="6"
                v-if="age"
              >
                <v-text-field
                  v-model="age"
                  :rules="ageRules"
                  :label="$t('account.age')"
                  prepend-icon="mdi-email"
                  name="age"
                  type="text"
                />
              </v-col>
              <v-col
                cols="6"
                v-if="street"
              >
                <v-text-field
                  v-model="street"
                  :rules="streetRules"
                  :label="$t('account.street')"
                  prepend-icon="mdi-home"
                  name="street"
                  type="text"
                />
              </v-col>
              <v-col
                cols="6"
                v-if="zipcode"
              >
                <v-text-field
                  v-model="zipcode"
                  :rules="streetRules"
                  :label="$t('account.zipcode')"
                  prepend-icon="mdi-post"
                  name="zipcode"
                  type="text"
                />
              </v-col>
              <v-col
                cols="6"
                v-if="city"
              >
                <v-text-field
                  v-model="city"
                  :rules="streetRules"
                  :label="$t('account.city')"
                  prepend-icon="mdi-city"
                  name="city"
                  type="text"
                />
              </v-col>
              <v-col
                cols="6"
                v-if="country"
              >
                <v-select
                  v-model="country"
                  :items="countries"
                  :label="$t('account.country')"
                  prepend-icon="mdi-face"
                />
              </v-col>
              <v-col
                cols="6"
                v-if="phone"
              >
                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  :label="$t('account.phone')"
                  prepend-icon="mdi-cellphone"
                  name="phone"
                  type="text"
                />
              </v-col>
              <v-col>
                <v-file-input
                  :label="$t('account.uploadImage')"
                  show-size
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="cancelModification"
            text
            small
          >
            {{ $t('account.cancel') }}
          </v-btn>
          <v-spacer />
          <v-btn
            @click="submitUserData"
            color="red"
            class="white--text"
          >
            {{ $t('account.save') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      valid: true,
      rules: [
        v => !!v || this.$t('auth.requiredField')
      ],
      nameRules: [
        v => !!v || this.$t('auth.requiredField'),
        v => (v && v.length <= 12) || this.$t('auth.nameMustLessThan12')
      ],
      phoneRules: [
        v => /^[0-9]*$/.test(v) || this.$i18n.t('auth.phoneMustBeNumber')
      ],
      ageRules: [
        v => /^[0-9]*$/.test(v) || this.$i18n.t('auth.ageMustBeNumber')
      ],
      streetRules: [
        v => /^[a-zA-Z0-9 '.ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøºÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž_-]*$/.test(v) || this.$i18n.t('auth.removeSpecialCharacters')
      ],
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      genders: [
        { value: 'male', text: this.$t('account.male') },
        { value: 'female', text: this.$t('account.female') }
      ],
      activePicker: null,
      dobMenu: false,
      countries: this.$store.state.account.countries
    }
  },
  watch: {
    dobMenu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    }
  },
  computed: {
    email () {
      return this.$store.state.account.user.email
    },
    firstname: {
      set (newValue) {
        this.setUserData({
          type: 'firstname',
          value: newValue
        })
      },
      get () {
        return this.$store.state.account.user.firstname
      }
    },
    lastname: {
      set (newValue) {
        this.setUserData({
          type: 'lastname',
          value: newValue
        })
      },
      get () {
        return this.$store.state.account.user.lastname
      }
    },
    dob: {
      set (newValue) {
        this.setUserData({
          type: 'dob',
          value: newValue
        })
      },
      get () {
        return this.$store.state.account.user.dob
      }
    },
    age: {
      set (newValue) {
        this.setUserData({
          type: 'age',
          value: newValue
        })
      },
      get () {
        return this.$store.state.account.user.age
      }
    },
    gender: {
      set (newValue) {
        this.setUserData({
          type: 'gender',
          value: newValue
        })
      },
      get () {
        return this.$store.state.account.user.gender
      }
    },
    street: {
      set (newValue) {
        this.setUserData({
          type: 'street',
          value: newValue
        })
      },
      get () {
        return this.$store.state.account.user.street
      }
    },
    zipcode: {
      set (newValue) {
        this.setUserData({
          type: 'zipcode',
          value: newValue
        })
      },
      get () {
        return this.$store.state.account.user.zipcode
      }
    },
    city: {
      set (newValue) {
        this.setUserData({
          type: 'city',
          value: newValue
        })
      },
      get () {
        return this.$store.state.account.user.city
      }
    },
    country: {
      set (newValue) {
        this.setUserData({
          type: 'country',
          value: newValue
        })
      },
      get () {
        return this.$store.state.account.user.country
      }
    },
    phone: {
      set (newValue) {
        this.setUserData({
          type: 'phone',
          value: newValue
        })
      },
      get () {
        return this.$store.state.account.user.phone
      }
    }
  },
  methods: {
    ...mapMutations(['setUserData', 'submitUserData', 'cancelModification']),
    ...mapActions(['submitUserData']),
    saveDate (date) {
      this.$refs.dobMenu.save(date)
    }
  }
}
</script>
