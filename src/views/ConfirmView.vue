<template>
<section class="confirm_section" id="confirm_section_id">
    <div class="confirm_container">
        <div class="section_intro"> 
            <mdb-icon v-if="isError" icon="exclamation-circle" class="error_icon" size="5x"/>
            <h2 class="intro_title">
                {{ title }} 
            </h2>
            <p class="intro_content">{{ message }}</p>
        </div>
        <div class="content_box">

        </div>
    </div>
</section>
</template>

<script>
import { mdbIcon } from 'mdbvue';
export default {
    name: "confirmView",
    components:{
        mdbIcon
    },
    
    data(){
        return{
            isError: false,
            title:'',
            message:'',
        }
    },

    created(){
        const confirmCode = this.$route.params.confirmCode;
        
        this.$store.dispatch('REQUEST_AUTH',{ confirmCode })
        .then(()=>{
            this.title = '인증이 완료되었습니다!';
            this.message = '매주 이메일을 통해 인터뷰를 보내드립니다.';
        })
        .catch(err => {
            this.isError = true;
            const errorCode = err.response.status;
            
            if(errorCode === 400){ // 형식이 잘못된 인증코드
                this.title = errorCode;
                this.message = '잘못된 인증코드입니다.';
            } else if(errorCode === 404){ // 형식은 맞지만 구독신청이 안되어있는 경우
                this.title = errorCode;
                this.message = '잘못된 인증코드입니다.';
            } else if(errorCode === 500){ // 서버오류
                this.title = '서버 오류';
                this.message='개발자의 멘탈이 나간 상태입니다. 조금만 기다려주세요.';
            }
        });
    }
};
</script>

<style scoped>
.confirm_section{
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    background: linear-gradient( to bottom, #006EF0, #00E1F0 );
    color:#FFF;
    text-align: center;
}

.error_icon{
    margin-bottom: 10px;
}

.section_intro .intro_title{
    font-weight: 800;
}

.content_box{
    width: 500px;
    margin: 50px auto;
}

.content_box form{
    display:flex;
}
</style>
