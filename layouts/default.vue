<template>
  <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <TopHeader></TopHeader>
    <Header></Header>
    <Nuxt />
    <Footer />
  </div>
</template>

<style>

</style>
<script>
  import TopHeader from "../components/shared/TopHeader";
  import Header from "../components/shared/Header";
  import Footer from "../components/shared/Footer";
  export default {
    components: {Header, TopHeader}
  }
</script>
