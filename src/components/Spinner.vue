<template>
    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status" v-if="status">
      <span class="sr-only">Loading...</span>
    </div>
</template>

<script>
export default {
    props:{
        status: Boolean,
    }
}
</script>

<style>

</style>
