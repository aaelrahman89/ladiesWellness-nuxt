<template>
  <div :dir="$i18n.locale == 'ar' ? 'rtl' : 'ltr'">
    <ScrollToTop />
    <TopHeader></TopHeader>
    <Header :HeaderServices="HeaderServices"></Header>
    <FixedSocial></FixedSocial>
    <Nuxt class="responsive-mobile"/>
    <HomeNewLetter></HomeNewLetter>
    <Footer :footerSocial="footerSocial" :footerContacts="footerContacts" :footerAbout="footerAbout" />
  </div>
</template>

<style>

</style>
<script>
  import TopHeader from "../components/shared/TopHeader";
  import Header from "../components/shared/Header";
  import Footer from "../components/shared/Footer";
  import HomeNewLetter from "../components/home/HomeNewLetter";
  import FixedSocial from "../components/shared/FixedSocial";
  import ScrollToTop from "../components/shared/ScrollToTop";
  export default {
    components: {FixedSocial, Header, TopHeader, HomeNewLetter,Footer},
    head(context) {
      return {
        htmlAttrs: {
          lang: this.$i18n.locale,
          dir: this.$i18n.locale == "ar" ? "rtl" : "ltr"
        }
      };
    },
    data(){
      return {
        footerSocial: {},
        footerContacts: {},
        footerAbout: {},
        HeaderServices: []
      }
    },
    created(){
      // Get Footer SocialMedia
      this.$axios.$get(`socialmedia`).then(res => this.footerSocial = res.data);

      // Get Footer Contacts
      this.$axios.$get(`contacts?lang=${this.$i18n.locale}`).then(res => this.footerContacts = res.data);

      // Get Footer About Us
      this.$axios.$get(`about_us?lang=${this.$i18n.locale}`).then(res => this.footerAbout = res.data);

      // Get Header Services
      this.$axios.$get(`services?lang=${this.$i18n.locale}`).then(res => this.HeaderServices = res.data);
    }
  }
</script>
<style scoped lang="scss">
  .responsive-mobile{
    @media (max-width: 1080px) {
      margin-top: 56px;
    }
  }
</style>
