<template>
  <div class="question_list_container">
    <drop-down></drop-down>
    <ul
      class="question_list"
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="limit"
    >
      <li
        class="question_item"
        v-for="interview in interviews"
        :key="interview.id"
        data-aos="slide-up"
        data-aos-offset="100"
        data-aos-easing="ease-out-back"
      >
        <interview-list-item :interview="interview"></interview-list-item>
      </li>
    </ul>
    <spinner class="spinner" v-if="isLoading"></spinner>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import infiniteScroll from "vue-infinite-scroll";
import bus from "../../utils/bus.js";
import DropDown from "./DropDown.vue";
import InterviewListItem from "./InterviewListItem.vue";
import Spinner from "../Spinner.vue";

export default {
  components: {
    DropDown,
    InterviewListItem,
    Spinner
  },

  directives: {
    infiniteScroll
  },

  data() {
    return {
      limit: 4,
      busy: false,
      isLoading: false
    };
  },

  computed: {
    ...mapGetters({
      interviews: "fetchedInterviews"
    })
  },

  created() {
    this.changeIsLoading();
    this.$store
      .dispatch("FETCH_INTERVIEWS")
      .then(() => {
        this.changeIsLoading();
      })
      .catch(() => {
        this.changeIsLoading();
      });
  },

  updated() {
    bus.$emit("execute:highlight");
  },

  methods: {
    changeIsLoading() {
      this.isLoading = !this.isLoading;
    },

    loadMore() {
      const nextUrl = this.$store.state.interviewModule.nextUrl;

      this.busy = true;
      this.$store.dispatch("FETCH_MORE_INTERVIEWS", nextUrl);
      this.busy = false;
    }
  }
};
</script>

<style scoped>
.question_list {
  list-style: none;
  padding: 0 14.3%;
}
.question_item {
  margin-bottom: 70px;
}

.tags_dropdown {
  width: 200px;
  height: 100px;
  color: #419fe6;
}

.spinner {
  margin-top: 10px;
}
/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .question_list {
    padding: 0;
  }
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
  .question_list {
    padding: 0;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>
