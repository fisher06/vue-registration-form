import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AccountInfo from "@/components/account/accountInfo.vue";
import account from '@/store/modules/account.js'
import Vuetify from 'vuetify';
import Vue from 'vue';


const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);

describe('accountInfo.vue', () => {

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
    "phone": "0667011512892",
    "profileImage": "https://avatars.githubusercontent.com/u/12713369?v=4"
  }
  const store = new Vuex.Store({
    modules: {
      account: accountMoke
    }
  });
  store.commit = jest.fn();

  const wrapper = shallowMount(AccountInfo, {
    store, 
    localVue,
    mocks: {
      $t: jest.fn(text => 'i18n ' + text)
    },
    stubs: ['app-account-form', 'app-account-menu']
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('child rendered', () => {
    expect(wrapper.html()).toContain(`<v-img-stub `);
    expect(wrapper.html()).toContain(`Test first Test last`);
    expect(wrapper.html()).toContain(`<app-account-form-stub></app-account-form-stub>`);
    expect(wrapper.html()).toContain(`<app-account-menu-stub></app-account-menu-stub>`);
  })

  it('User name updated', () => {
    expect(wrapper.vm.firstname).toBe("Test first");
    accountMoke.state.user.firstname = "Test first 2";
    wrapper.vm.$nextTick(() => {
      expect(wrapper.html()).toContain(`Test first 2`);
      expect(wrapper.vm.firstname).toBe("Test first 2");
    })
    expect(wrapper.vm.lastname).toBe("Test last");
    accountMoke.state.user.lastname = "Test last 2";
    wrapper.vm.$nextTick(() => {
      expect(wrapper.html()).toContain(`Test last 2`);
      expect(wrapper.vm.lastname).toBe("Test last 2");
    })

  })
});