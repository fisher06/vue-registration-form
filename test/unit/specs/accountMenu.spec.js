import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AccountMenu from "@/components/account/accountMenu.vue";
import account from '@/store/modules/account.js'
import Vuetify from 'vuetify';
import Vue from 'vue';


const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);

describe('accountMenu.vue', () => {

  let accountMoke = Object.assign({}, account);
  accountMoke.state.user = {
    "lastname": "Test last",
    "firstname": "Test first",
    "email": "jesttest@test.com",
    "dob": "1888-08-08",
    "age": "50",
    "gender": "female",
    "zipcode": "75001",
    "street": "4 n tazieff",
    "city": "Paris",
    "country": "CA",
    "phone": "0667011892",
    "profileImage": "https://avatars.githubusercontent.com/u/12713369?v=4"
  }
  const store = new Vuex.Store({
    modules: {
      account: accountMoke
    }
  });
  store.commit = jest.fn();

  const wrapper = shallowMount(AccountMenu, {
    store, 
    localVue,
    mocks: {
      $t: jest.fn(text => 'i18n ' + text)
    }
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('child rendered', () => {
    expect(wrapper.html()).toContain(`<v-card-stub `);
    expect(wrapper.html()).toContain(`<v-icon-stub>mdi-account</v-icon-stub>`);
    expect(wrapper.html()).toContain(`i18n account.lastname`);
    expect(wrapper.html()).toContain(`<v-icon-stub>mdi-account</v-icon-stub>`);
    expect(wrapper.html()).toContain(`i18n account.firstname`);
    expect(wrapper.html()).toContain(`<v-icon-stub>mdi-email</v-icon-stub>`);
    expect(wrapper.html()).toContain(`i18n account.email`);
    expect(wrapper.html()).toContain(`<v-icon-stub>mdi-calendar</v-icon-stub>`);
    expect(wrapper.html()).toContain(`i18n account.dob`);
    expect(wrapper.html()).toContain(`<v-icon-stub>mdi-cake-layered</v-icon-stub>`);
    expect(wrapper.html()).toContain(`i18n account.age`);
    expect(wrapper.html()).toContain(`<v-icon-stub>mdi-face</v-icon-stub>`);
    expect(wrapper.html()).toContain(`i18n account.gender`);
    expect(wrapper.html()).toContain(`<v-icon-stub>mdi-post</v-icon-stub>`);
    expect(wrapper.html()).toContain(`i18n account.zipcode`);
    expect(wrapper.html()).toContain(`<v-icon-stub>mdi-home</v-icon-stub>`);
    expect(wrapper.html()).toContain(`i18n account.street`);
    expect(wrapper.html()).toContain(`<v-icon-stub>mdi-city</v-icon-stub>`);
    expect(wrapper.html()).toContain(`i18n account.city`);
    expect(wrapper.html()).toContain(`i18n account.country`);
    expect(wrapper.html()).toContain(`<v-icon-stub>mdi-cellphone</v-icon-stub>`);
    expect(wrapper.html()).toContain(`i18n account.phone`);
    expect(wrapper.html()).toContain(`<v-icon-stub>mdi-camera</v-icon-stub>`);
    expect(wrapper.html()).toContain(`i18n account.profileImage`);
  });
});