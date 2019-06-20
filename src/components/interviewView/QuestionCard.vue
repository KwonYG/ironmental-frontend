<template>
<div>
    <mdb-card class="question_card">
        <mdb-card-header class="card_header" color="info-color">
            <!-- badge는 v-for와 v-if문으로 해결-->
            <mdb-badge pill color="indigo">HTML</mdb-badge>
            <mdb-badge pill color="purple">CSS</mdb-badge>
            <mdb-badge pill color="orange">JavaScript</mdb-badge>
        </mdb-card-header>
        <mdb-card-body>
            <mdb-card-title>{{ interview.question }}</mdb-card-title>
            <!-- <mdb-btn color="info-color">ANSWER >></mdb-btn> -->
            <mdb-card-text>
                <p>
                    {{ interview.answer }}
                </p>
            </mdb-card-text>
        </mdb-card-body>
    </mdb-card>
</div>
</template>

<script>
import { mdbCard, mdbCardBody, mdbCardHeader, mdbCardTitle, mdbCardText, mdbBadge } from 'mdbvue';
import { mapGetters } from 'vuex';
export default {
    name: 'QuestionCard',
    components: {
        mdbCard,
        mdbCardBody,
        mdbCardHeader,
        mdbCardTitle,
        mdbCardText,
        mdbBadge
    },

    computed:{
        ...mapGetters({
            interview: 'fetchedInterviewItem'
        })
    },

    created(){
        const id = this.$route.params.id;
        this.$store.dispatch('FETCH_INTERVIEW_BY_ID',{ id });
         
    }
}
</script>

<style>
.question_card{
    width:100%;
    border-radius: 30px;
    color:black;
}

.card-header:first-child{
    border-radius: 30px
}
</style>
