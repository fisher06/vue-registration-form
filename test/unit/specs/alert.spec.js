import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Alert from "@/components/alert.vue";
import alert from '@/store/modules/alert.js'
import Vuetify from 'vuetify';
import Vue from 'vue';


const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);

describe('alert.vue', () => {

  let alertMoke = Object.assign({}, alert);
  alertMoke.mutations.removeInfoMsg = jest.fn();
  alertMoke.mutations.removeSuccessMsg = jest.fn();
  

  const store = new Vuex.Store({
    modules: {
      alert: alertMoke
    }
  });
  store.commit = jest.fn();
  const wrapper = shallowMount(Alert, {
    store, 
    localVue,
    mocks: {
      $t: () => { return 'Jest test' }
    }
  });

  it('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('is a vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('No msg rendered', () => {
    expect(wrapper.html()).not.toContain(`<v-snackbar-stub `);
  })

  it('Success msg rendered', () => {
    alertMoke.state.success = ['test success 1'];
    wrapper.vm.$nextTick(() => {
      expect(wrapper.html()).toContain(`<v-snackbar-stub `);
      expect(wrapper.html()).toContain(`test success 1`);
    });
  })

  it('Info msg rendered', () => {
    alertMoke.state.success = [];
    alertMoke.state.info = ['test info 1'];
    wrapper.vm.$nextTick(() => {
      expect(wrapper.html()).toContain(`<v-snackbar-stub `);
      expect(wrapper.html()).toContain(`test info 1`);
    })
  })

});