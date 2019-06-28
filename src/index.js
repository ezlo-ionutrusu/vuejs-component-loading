import Vue from 'vue';
import userName from './userName.vue';
import userImage from './userImage.vue';

const previewComponent = {
  install: function(Vue, options) {
    Vue.component('user-name', userName);
    Vue.component('user-image', userImage);
  }
};

export default previewComponent;
