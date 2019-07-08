import { store } from "../store/index.js";

function interviewItemGuard(to, from, next) {
  store
    .dispatch("FETCH_INTERVIEW_BY_ID", { id: to.params.id })
    .then(() => {
      next();
    })
    .catch(() => {
      next({
        name: "notFound"
      });
    });
}

export { interviewItemGuard };
