// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuelidate from "vuelidate";
import VuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
import "./assets/styles/app.scss";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VuelidateErrorExtractor, {
  i18n: false,
  // Define common validation messages.
  messages: {
    required: "{attribute} is required!",
    isJoe: "{attribute} must be Joe",
    notGmail: "{attribute} must not be gmail",
    email: "{attribute} is not a valid Email address.",
    isEmailAvailable:
      "{attribute} is not available. Must be at least 10 characters long."
  }
});

Vue.component("form-group", templates.singleErrorExtractor.foundation6);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
