<template>
  <div class="background">
    <section class="form_section">
      <div class="form_container">
        <img
          src="../../assets/envelope.svg"
          class="envelope_img"
          data-aos="fade-down"
          data-aos-duration="1500"
          alt="편지 봉투 아이콘"
        />
        <div class="form_section_intro">
          <h2 class="intro_title">면접 시, 당신의 멘탈을 지켜드립니다!</h2>
          <p class="intro_content">IT 관련 면접질문과 모법답안을 메일을 통해 매주 보내드립니다.</p>
        </div>
        <div class="form_box">
          <form v-on:submit.prevent="onSubmit">
            <mdb-icon class="email_icon" color="white" far icon="envelope" size="2x" alt="이메일 아이콘"></mdb-icon>
            <input
              type="email"
              title="이메일 주소"
              id="email_adress"
              v-model="email"
              class="form-control"
              placeholder="Your e-mail"
            />
            <div class="text-center">
              <mdb-btn class="submit_btn btn btn-outline-white" color="amber" title="전송버튼">
                <i class="far fa-paper-plane" alt="전송 아이콘"></i>
              </mdb-btn>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mdbBtn, mdbIcon } from "mdbvue";
import swal from "sweetalert";

export default {
  components: {
    mdbBtn,
    mdbIcon
  },

  data() {
    return {
      email: ""
    };
  },

  computed: {
    getSubResultTest() {
      const result = this.$store.state.subModule.subResult;
      return console.log("getSubResultTest", result);
    }
  },

  methods: {
    emailValid(email) {
      const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/i;

      return email.match(regExp);
    },

    getResult() {
      const result = this.$store.state.subModule.subResult;
      console.log(result);
      if (result.isSub === true && result.isCertify === true) {
        return swal("구독 중", result.message, "success");
      }

      if (result.isCertify === false && result.isSub === true) {
        return swal("미인증 구독자", result.message, "error");
      }

      if (result.isCertify === false) {
        return swal("구독 완료!", result.message, "success");
      }
    },

    onSubmit() {
      const validResult = this.emailValid(this.email);

      if (this.email === "") {
        return swal("이메일 미입력", "이메일을 입력해주세요.", "info");
      } else if (!validResult) {
        return swal("이메일 형식 불일치", "이메일형식 맞지 않습니다.", "error");
      } else if (validResult) {
        this.$store
          .dispatch("POST_SUBSCRIPTION", { email: this.email })
          .then(() => {
            this.getResult();
          });
      }
      this.email = "";
    }
  }
};
</script>

<style scoped>
label {
  margin: 0px;
}
.background {
  background-color: #e2f6fe;
}
.form_section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  background: linear-gradient(to bottom, #006ef0, #00e1f0);
  color: #fff;
  text-align: center;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
}
.form_section_intro .intro_title {
  font-weight: 800;
}
.form_box {
  margin: 50px auto;
}
.form_box form {
  display: flex;
}
.envelope_img {
  margin-bottom: 60px;
  width: 250px;
  height: 250px;
}

.email_icon {
  margin-right: 10px;
}

.submit_btn {
  margin: 0 0 0 10px;
  line-height: 8px;
}
@media screen and (max-width: 414px),
  screen and (max-height: 414px) and (orientation: landscape) {
  .envelope_img {
    width: 180px;
    height: 180px;
  }
  .form_section_intro {
    padding: 20px;
  }
  .form_box form {
    padding: 30px;
    display: block;
  }
  .submit_btn {
    margin: 10px 0 0 0;
  }
}
</style>
