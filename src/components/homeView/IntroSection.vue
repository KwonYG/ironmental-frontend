<template>
  <section class="intro_section" id="intro_section_pos">
    <div class="intro_description">
      <h2 class="intro_title">WELCOME TO IRON MENTAL</h2>
      <p>
        더 이상 쿠크다스 멘탈은 그만!
        <br />이제 면접장에서 강철 멘탈이 되어보세요!
      </p>
    </div>
    <div class="intro_content">
      <div
        class="content_item"
        data-aos="fadeInUp"
        data-aos-offset="250"
        data-aos-duration="1000"
        data-aos-delay="1000"
        data-aos-once="true"
      >
        <div class="circle_img">
          <img src="../../assets/email.svg" alt="이메일 아이콘" />
        </div>
        <p class="item_content">
          구독신청을 해주세요.
          <br />매주 이메일을 통해 면접 질문을 보내드립니다.
        </p>
      </div>

      <div
        class="content_item"
        data-aos="fadeInUp"
        data-aos-offset="250"
        data-aos-duration="1000"
        data-aos-delay="2000"
        data-aos-once="true"
      >
        <div class="circle_img">
          <img src="../../assets/list.svg" alt="리스트 아이콘" />
        </div>
        <p class="item_content">
          매주 이메일을 기다리기엔 시간이 부족하신가요?
          <br />인터뷰 메뉴를 클릭하시면 모든 면접질문을 보실 수 있습니다.
        </p>
      </div>

      <div
        class="content_item"
        data-aos="fadeInUp"
        data-aos-offset="250"
        data-aos-duration="1000"
        data-aos-delay="3000"
        data-aos-once="true"
      >
        <div class="circle_img">
          <img src="../../assets/goal.svg" alt="성장 아이콘" />
        </div>
        <p class="item_content">
          기술 면접을 보면서 멘탈이 흔들린 적 있으신가요?
          <br />Iron Mental과 함께 실력을 키워보세요.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "introSection"
};
</script>

<style scoped>
.intro_section {
  min-height: 800px;
  background-color: #e2f6fe;
}
.intro_description {
  padding: 100px 0 0 50px;
}

.intro_title {
  color: #0981dd;
  font-weight: 800;
}

.intro_description p {
  color: #414141;
  font-weight: bold;
}

.intro_content {
  margin-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
}

.content_item {
  margin: 0 auto;
}

.content_item > * {
  margin: 0 auto;
  text-align: center;
}

/* 수정하기 */
.circle_img {
  position: relative;
  width: 260px;
  height: 260px;
  border: double 4px transparent;
  border-radius: 50%;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #006ef0, #00e1f0);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.circle_img img {
  position: absolute;
  top: 55px;
  left: 55px;
  width: 140px;
  height: 130px;
}

.item_content {
  padding: 10px;
}

.goal_image {
  width: 500px;
  height: 500px;
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .intro_section {
    text-align: center;
  }

  .content_item {
    padding-bottom: 70px;
  }

  .intro_description {
    padding: 50px 30px 20px 30px;
  }

  .intro_content {
    display: block;
  }

  [data-aos-delay] {
    transition-delay: 0s !important;
  }
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .intro_section {
    text-align: center;
  }
  .intro_content {
    display: block;
  }
  .intro_description {
    padding: 50px 30px 20px 30px;
  }
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .intro_section {
    background-color: #e2f6fe;
    min-height: 800px;
  }

  .intro_description {
    padding: 100px 0 0 50px;
  }

  .intro_title {
    color: #0981dd;
    font-weight: 800;
  }

  .intro_description p {
    color: #414141;
    font-weight: bold;
  }
  /* intro content : 원 세개 아이템*/
  .intro_content {
    margin-top: 50px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .content_item {
    margin: 0 auto;
    align-items: center;
  }

  .content_item > * {
    margin: 0 auto;
    text-align: center;
  }

  .circle_img {
    position: relative;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    border: 5px solid transparent;
    background-image: radial-gradient(white, white),
      radial-gradient(circle at top left, #0174e8, #24b3b5);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .intro_img {
    position: absolute;
    width: 140px;
    height: 130px;
    top: 55px;
    left: 55px;
  }

  .item_content {
    padding: 10px;
  }

  .goal_image {
    width: 500px;
    height: 500px;
  }
}
</style>
