<template>
  <div id="app">
    <div class="max-w-md mx-auto">
      <img class="w-1/4" src="./assets/logo.png" />
    </div>
    <h3>Form error display with Vuelidate-error-extractor</h3>
    <h4>Using included Foundation 6 template</h4>
    <form-component />
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";

export default {
  name: "App",
  components: {
    FormComponent
  }
};
</script>
