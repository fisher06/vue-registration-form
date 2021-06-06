import { shallowMount, createLocalVue } from '@vue/test-utils';
import Footer from "@/components/footer.vue";
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Vue from 'vue';

const localVue = createLocalVue();
Vue.use(Vuetify);

describe('footer.vue', () => {

  let vuetify;
  beforeEach(() => {
    vuetify = new Vuetify()
  });

  localVue.use(VueRouter);
  const router = new VueRouter();

  const wrapper = shallowMount(Footer, {
    localVue,
    vuetify,
    router
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Child page rendered', () => {
    expect(wrapper.html()).toContain(`<v-footer-stub `);
    expect(wrapper.html()).toContain(`<strong>XIE Wei</strong>`);
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});