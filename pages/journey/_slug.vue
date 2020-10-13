
<template>
  <div>
    <PageTitle :title="$t('menu.journey')" bgImg="events.png" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5 col-12 px-0">
        <img :src="journey.image" class="w-100" :alt="journey.image_alt" :title="journey.image_title" />
        </div>
        <div class="col-md-7 col-12">
          <h1>{{journey.title}}</h1>
          <div class="doctor-details">
            <p v-html="journey.description"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
          async asyncData({params, $axios, app}) {
    let journey = await $axios.$get(`/api/journey/${encodeURIComponent(params.slug)}?lang=${app.i18n.locale}`);
    return {
      journey: journey.data
    }
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/variable";
img{
      height: 575px;
}
h1{
  font-weight: bold;
    color: $mainColor;
}
h1:lang(ar), p:lang(ar){
  text-align: right;
}
p{
      margin: 3rem 0;
          width: 90%;
}
</style>
