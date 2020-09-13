<template>
  <div class="main-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2">
          <div class="hold-event">
            <nuxt-link to="event"><i class="fas fa-bell"></i> Event : <span class="event-name">zomba</span></nuxt-link>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="nav-bar">
            <ul>
              <li><nuxt-link to="/">home</nuxt-link></li>
              <li><nuxt-link to="about">about us</nuxt-link></li>
              <li><nuxt-link to="journey">Your Journey</nuxt-link></li>
              <li><nuxt-link to="home"><img src="@/assets/images/akw-logo.png" alt="akw-logo" class="logo"></nuxt-link></li>
              <li><nuxt-link to="services">services</nuxt-link></li>
              <li><nuxt-link to="doctors">doctors</nuxt-link></li>
              <li><nuxt-link to="blog">blog</nuxt-link></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="hold-options">
            <div class="search ">
              <i class="fas fa-search"></i>
            </div>
            <div class="event-link separate">
              <nuxt-link to="events"><i class="far fa-calendar-alt"></i></nuxt-link>
            </div>
            <div class="lang">
              <nuxt-link :to="switchLocalePath('en')" v-if="this.$i18n.locale === 'ar'">English</nuxt-link>
              <nuxt-link :to="switchLocalePath('ar')" v-if="this.$i18n.locale === 'en'">عربى</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>

</style>
