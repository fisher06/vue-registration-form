import { shallowMount, createLocalVue } from '@vue/test-utils';
import App from "@/App.vue";
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Vue from 'vue';

const localVue = createLocalVue();
Vue.use(Vuetify);

describe('App.vue', () => {

  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify()
  });

  localVue.use(VueRouter);
  const router = new VueRouter();

  const wrapper = shallowMount(App, {
    localVue,
    vuetify,
    router,
    stubs: ['router-view']
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Child page rendered', () => {
    expect(wrapper.html()).toContain(`<router-view-stub name=\"default\"></router-view-stub>`);
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});