<template>
	<section class="confirm_section" id="confirm_section_id">
		<div class="confirm_container">
			<div class="section_intro">
				<mdb-icon
					v-if="authResult.isError"
					icon="exclamation-circle"
					class="error_icon"
					size="5x"
				/>
				<h2 class="intro_title">{{ authResult.title }}</h2>
				<p class="intro_content">{{ authResult.message }}</p>
			</div>
			<div class="content_box"></div>
		</div>
	</section>
</template>

<script>
import { mapGetters } from 'vuex';
import { mdbIcon } from 'mdbvue';
export default {
	name: 'confirmView',
	components: {
		mdbIcon,
	},

	computed: {
		...mapGetters({
			authResult: 'fetchedAuthResult',
		}),
	},

	created() {
		const confirmCode = this.$route.params.confirmCode;
		this.$store.dispatch('REQUEST_AUTH', { confirmCode });
	},
};
</script>

<style scoped>
.confirm_section {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 800px;
	background: linear-gradient(to bottom, #006ef0, #00e1f0);
	color: #fff;
	text-align: center;
}

.error_icon {
	margin-bottom: 10px;
}

.section_intro .intro_title {
	font-weight: 800;
}

.content_box {
	width: 500px;
	margin: 50px auto;
}

.content_box form {
	display: flex;
}
</style>
