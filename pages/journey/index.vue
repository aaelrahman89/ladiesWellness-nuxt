
<template>
  <div>
    <PageTitle :title="$t('menu.journey')" bgImg="blog.png" />
      <div class="container-fluid">
        <div class="row">
        <div class="col-md-4" v-for="journey in journeys" :key="journey.id">
          <Journey :journey="journey"/>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
import Journey from '@/components/Journey'
export default {
  components: {
    Journey
  },
      async asyncData(context) {
      let journeys = await context.$axios.get(`/api/journeys?lang=${context.app.i18n.locale}`);
      return {
        journeys: journeys.data.data
      }
    },
}
</script>

<style lang="scss" scoped>

</style>
