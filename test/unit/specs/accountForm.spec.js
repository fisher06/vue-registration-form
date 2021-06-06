import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AccountForm from "@/components/account/accountForm.vue";
import account from '@/store/modules/account.js'
import Vuetify from 'vuetify';
import Vue from 'vue';


const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);

describe('accountForm.vue', () => {

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
  store.dispatch = jest.fn();

  const wrapper = shallowMount(AccountForm, {
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

  it('User name updated', () => {
    accountMoke.state.user.firstname = "Test first 2";
    wrapper.vm.$nextTick(() => {
      expect(wrapper.html()).toContain(`Test first 2`);
    })

    accountMoke.state.user.lastname = "Test last 2";
    wrapper.vm.$nextTick(() => {
      expect(wrapper.html()).toContain(`Test last 2`);
    })
  })

  it('Date Save fun', () => {
    wrapper.vm.$refs.dobMenu.save = jest.fn();
    wrapper.vm.saveDate();
    expect(wrapper.vm.$refs.dobMenu.save).toHaveBeenCalled();
  })

  it('Submit fun', () => {
    wrapper.vm.submit();
    expect(store.dispatch).toHaveBeenCalledWith("account/submitUserData", undefined)
  })

  it('Computed data', () => {
    expect(wrapper.vm.phone).toBe("0667011512892")
  })
});