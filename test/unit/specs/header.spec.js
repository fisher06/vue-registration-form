import { shallowMount, createLocalVue } from '@vue/test-utils';
import Header from "@/components/header.vue";
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Vue from 'vue';

const localVue = createLocalVue();
Vue.use(Vuetify);

describe('header.vue', () => {

  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify()
  });

  localVue.use(VueRouter);
  const router = new VueRouter();

  const wrapper = shallowMount(Header, {
    localVue,
    vuetify,
    router
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Child page rendered', () => {
    expect(wrapper.html()).toContain(`<v-card-stub `);
    expect(wrapper.html()).toContain(`<v-app-bar-nav-icon-stub></v-app-bar-nav-icon-stub>`);
    expect(wrapper.html()).toContain(`<v-img-stub `);
    expect(wrapper.html()).toContain(`</v-toolbar-stub>`);
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});