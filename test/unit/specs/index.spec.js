
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Index from "@/pages/index.vue";
import Vuex from 'vuex';
import account from '@/store/modules/account.js'
import Vuetify from 'vuetify';
import Vue from 'vue';

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);


describe('index.vue', () => {
  
  let accountMoke = Object.assign({}, account);

  const store = new Vuex.Store({
    modules: {
      account: accountMoke
    }
  });
  store.dispatch = jest.fn();

  const wrapper = shallowMount(Index, {
    store, 
    localVue,
    stubs: ['app-header', 'app-alert', 'app-account-info', 'app-footer']
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('Child page rendered', () => {
    expect(wrapper.html()).toContain(`<app-header-stub></app-header-stub>`);
    expect(wrapper.html()).toContain(`<app-alert-stub></app-alert-stub>`);
    expect(wrapper.html()).toContain(`<app-account-info-stub></app-account-info-stub>`);
    expect(wrapper.html()).toContain(`<app-footer-stub></app-footer-stub>`);
  });

  it('The action was dispatch', () => {
    expect(store.dispatch).toHaveBeenCalledWith("account/fetchSourceData", undefined)
  });
});