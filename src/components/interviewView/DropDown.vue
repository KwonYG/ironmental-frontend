<template>
  <div class="tags_dropdown">
    <label class="typo__label">Select Tag</label>
    <multiselect
      v-model="value"
      :options="tags"
      :searchable="true"
      :close-on-select="true"
      :show-labels="false"
      placeholder="Pick a tag"
      @select="asyncFind"
    ></multiselect>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect
  },

  data() {
    return {
      value: ""
    };
  },

  computed: {
    ...mapGetters({
      tags: "fetchedTags"
    })
  },

  created() {
    this.$store.dispatch("FETCH_TAGS");
  },

  methods: {
    asyncFind(actionName) {
      this.$store.dispatch("UPDATE_VALUE_ACTION", { value: actionName });
      this.$store.dispatch("FETCH_SPECIFIC_INTERVIEWS", { tag: actionName });
    }
  }
};
</script>

<style>
</style>
