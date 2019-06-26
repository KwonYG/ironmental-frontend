<template>
<div class="background">
    <section class="form_section">
        <div class="form_container">
            <img src="../../assets/envelope.svg" class="envelope_img" data-aos="fade-down" data-aos-duration="1500">
            <div class="form_section_intro">
                <img src="">
                <h2 class="intro_title">
                    면접 시, 당신의 멘탈을 지켜드립니다!
                </h2>
                <p class="intro_content">
                    IT 관련 면접질문과 모법답안을 메일을 통해 매주 보내드립니다.
                </p>
            </div>
            <div class="form_box">
                <form v-on:submit.prevent="onSubmit">
                    <label for="email_input" class="email_label grey-text font-weigt-light">
                        <mdb-icon color="white" far icon="envelope" size="2x">email</mdb-icon>
                    </label>
                    <input type="email" id="email_input" v-model="email" class="form-control" placeholder="Your e-mail"/>
                    <div class="text-center">
                        <mdb-btn class="submit_btn btn btn-outline-white" color="amber"><i class="far fa-paper-plane"></i></mdb-btn>
                    </div>
                </form>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import { mdbBtn, mdbIcon } from 'mdbvue';
  export default {
    components: {
        mdbBtn,
        mdbIcon
    },

    data(){
        return {
            email: '',
        }
    },

    computed:{
        getSubResultTest(){
            const result = this.$store.state.subModule.subResult;
            return console.log('getSubResultTest', result);
        }
    },

    methods:{
        emailValid(email){
            const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/i
            
            return email.match(regExp);
        },

        getResult(){
            const result = this.$store.state.subModule.subResult;
            console.log(result);
            if(result.isSub === true && result.isCertify === true){
                return swal('구독 중', result.message, 'success');
            }

            if(result.isCertify === false && result.isSub === true){
                return swal('미인증 구독자', result.message, 'error');
            }

            if(result.isCertify === false){
                return swal('구독 완료!', result.message, 'success');
            }
        },

        onSubmit(){
            const validResult = this.emailValid(this.email);
            
            if(this.email === ''){
                return swal('이메일 미입력','이메일을 입력해주세요.', 'info');
            }else if(!validResult){
                return swal('이메일 형식 불일치', '이메일형식 맞지 않습니다.', 'error');
            }else if(validResult){
                // dispatch를 통해 sub모듈의 스테이트 확인 isSub, isCertify
                this.$store.dispatch('POST_SUBSCRIPTION', { email: this.email})
                            .then(()=>{
                                this.getResult();
                            });
            }
            this.email = '';
        }
    }
  }
</script>

<style scoped>
label{
    margin: 0px;
}
.background{
    background-color: #E2F6FE;
}
.form_section{
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    /* background-color:#AF2030; */
    
    /* background: linear-gradient( to bottom, #0174E8, #24B3B5 ); */
    background: linear-gradient( to bottom, #006EF0, #00E1F0 );
    color:#FFF;
    text-align: center;
    border-bottom-left-radius: 50% 20%;
    border-bottom-right-radius: 50% 20%
    /* clip-path: polygon(
        0 0,
        100% 0,
        100% 100%,
        0 calc(100% - 5vw)
    ); */
}
.form_section_intro .intro_title{
    font-weight: 800;
}
.form_box{
    margin: 50px auto;
}
.form_box form{
    display:flex;
}
.email_label{
    margin-right: 10px;
}
.envelope_img{
    margin-bottom: 60px;
    width: 250px;
    height: 250px;
}
.submit_btn {
    margin: 0 0 0 10px;
    line-height: 8px;
}
@media screen and (max-width: 414px), screen and (max-height: 414px) and (orientation: landscape){
    .envelope_img{
        width: 180px;
        height: 180px;
    }
    .form_section_intro{
        padding:20px;
    }
    .form_box form{
        padding:30px;
        display: block;
    }
    .submit_btn{
        margin: 10px 0 0 0;
    }
}
</style>
