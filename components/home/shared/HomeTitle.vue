<template>
    <div class="text-center">
        <h3>{{ title }}</h3>
        <p>{{ desc }}</p>
    </div>
</template>

<script>
export default {
    props: {
      title: {
      type: String,
      required: true
    },
    desc: {
      type: String
    }
    }
}
</script>

<style lang="scss" scoped>

</style>