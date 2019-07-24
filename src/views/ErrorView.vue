<template>
	<section class="error_section" id="error_section_id">
		<div class="error_container">
			<div class="section_intro">
				<mdb-icon icon="exclamation-circle" class="error_icon" size="5x" />
				<h2 class="intro_title">404 Error</h2>
				<p class="intro_content">알 수 없는 요청입니다.</p>
			</div>
		</div>
	</section>
</template>

<script>
import { mdbIcon } from 'mdbvue';

export default {
	name: 'confirmView',
	components: {
		mdbIcon,
	},
};
</script>

<style scoped>
.error_section {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 800px;
	background: linear-gradient(to bottom, #006ef0, #00e1f0);
	color: #fff;
	text-align: center;
}
.section_intro .intro_title {
	font-weight: 800;
}

.content_box {
	width: 500px;
	margin: 50px auto;
}

.error_icon {
	margin: 20px 0;
}
</style>
