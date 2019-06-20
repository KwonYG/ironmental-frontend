<template>
  <div class="home">
    <form-section id="form_section_pos"></form-section>
    <intro-section id="intro_section_pos"></intro-section>
  </div>
</template>

<script>
import FormSection from '../components/homeView/FormSection.vue';
import IntroSection from '../components/homeView/IntroSection.vue';

export default {
  name: 'home',
  components: {
    FormSection,
    IntroSection,
  }
}
</script>
