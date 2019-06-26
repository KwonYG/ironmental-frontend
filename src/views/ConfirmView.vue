<template>
<section class="confirm_section" id="confirm_section_id">
    <div class="confirm_container">
        <div class="section_intro"> 
            <h2 class="intro_title">
                인증이 정상적으로 처리되었습니다! 
            </h2>
            <p class="intro_content">매주 메일을 통해 인터뷰를 보내드립니다.</p>
        </div>
        <div class="content_box">

        </div>
    </div>
</section>
</template>

<script>
/*
 400, 404 => 잘못된 인증 코드입니다.
 500 => 서버 에러입니다. 조금만 기다려주세요 ㅠㅠ
 */
export default {
name: "confirmView",
    created(){
        this.$store.dispatch('요청액션')
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
