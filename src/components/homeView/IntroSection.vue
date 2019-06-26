<template>
<section class="intro_section" id="intro_section_pos">
    <div class="intro_description">
        <h2 class="intro_title">WELCOME TO IRON MENTAL</h2>
        <p>
            여기는 설명설명설명설명여기는 설명설명설명설명여기는 설명설명설명설명여기는 설명설명설명설명여기는<br>
            설명설명설명설명여기는 설명설명설명설명여기는 설명설명설명설명
        </p>
    </div>
    <div class="intro_content">
        <div class="content_item" data-aos="fadeInUp" data-aos-offset="250" data-aos-duration="1000">
            <div class="circle_img">
                <img src="../../assets/meeting.svg" alt="">
            </div>
            <p class="item_content">
                여기 동그라미
            </p>
        </div>

        <div class="content_item" data-aos="fadeInUp" data-aos-offset="250" data-aos-duration="1000" data-aos-delay="1000">
            <div class="circle_img">
                <img src="../../assets/email.svg" alt="">
            </div>
            <p class="item_content">
                여기 동그라미여기 동그라미여기 동그라미여기 동그라미여기 동그라미여기 동그라미여기 동그라여기 <br>
                여기 동그라미여기 동그라미여기 동그라미여기 동그라미여기 동그라미
            </p>
        </div>

        <div class="content_item" data-aos="fadeInUp" data-aos-offset="250" data-aos-duration="1000" data-aos-delay="2000">
            <div class="circle_img">
                <img src="../../assets/goal.svg" alt="">
            </div>
            <p class="item_content">
                여기 동그라미
            </p>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'introSection',
}
</script>

<style scoped>
.intro_section{
    min-height: 800px;
    background-color: #E2F6FE;
}
.intro_description{
    padding: 100px 0 0 50px;
}

.intro_title{
    color: #0981DD;
    font-weight: 800;
}

.intro_description p {
    color:#414141;
    font-weight: bold;
}

.intro_content{
    margin-top: 50px;
    width: 100%;
    display: flex;
    align-items: center;
}

.content_item{
    margin: 0 auto;
}

.content_item > *{
    margin: 0 auto;
    text-align: center;
}

/* 수정하기 */
.circle_img{ 
    position:relative;
    width: 260px;
    height: 260px;
    border: double 4px transparent;
    border-radius: 50%;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #006EF0, #00E1F0);
    background-origin: border-box;
    background-clip: content-box, border-box;
}

.circle_img img{
    position: absolute;
    top:55px;
    left:55px;
    width:140px;
    height:130px;
}

.item_content{
  padding: 10px;
}

.goal_image{
  width:500px;
  height:500px;
}


/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {  
    .intro_section{
    text-align: center;
}
.intro_description{
    padding: 50px 30px 20px 30px;
}
.intro_content{
    display: block;
}
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) {  }
/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) { 
    .intro_section{
    text-align: center;
}
.intro_content{
    display: block;
}
.intro_description{
    padding: 50px 30px 20px 30px;
}
}
/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {  }
/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
    .intro_section{
        background-color: #E2F6FE;
        min-height: 800px;
    }

    .intro_description{
        padding: 100px 0 0 50px;
    }

    .intro_title{
        color: #0981DD;
        font-weight: 800;
    }

    .intro_description p {
        color: #414141;
        font-weight: bold;
    }
    /* intro content : 원 세개 아이템*/
    .intro_content{
        margin-top: 50px;
        width:100%;
        display: flex;
        align-items: center;
    }

    .content_item{
    margin: 0 auto;
    align-items: center;
    }

    .content_item > * {
    margin: 0 auto; 
    text-align:center;
    }

    .circle_img{
    position: relative;
    width:260px;
    height:260px;
    border-radius: 50%;
    border:5px solid transparent;
    background-image:  radial-gradient(white, white),radial-gradient(circle at top left, #0174E8, #24B3B5);
    background-origin: border-box;
    background-clip: content-box, border-box;
    }
    
    .intro_img{
    position: absolute;
    width: 140px;
    height: 130px;
    top:55px;
    left:55px;
    }

    .item_content{
    padding: 10px;
    }

    .goal_image{
    width:500px;
    height:500px;
    }
}

</style>
