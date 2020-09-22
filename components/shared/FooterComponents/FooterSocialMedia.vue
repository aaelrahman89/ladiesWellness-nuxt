<template>
    <div>
      <ul class="social-links d-flex justify-content-between w-50 mx-auto">
        <li><a :href="footerSocialMedia.twitter" target="_blank" title="twitter"><i class="fab fa-twitter"></i></a></li>
        <li><a :href="footerSocialMedia.facebook" target="_blank" title="facebook"><i class="fab fa-facebook-f"></i></a></li>
        <li><a :href="footerSocialMedia.youtube" target="_blank" title="youtube"><i class="fab fa-youtube"></i></a></li>
        <li><a :href="footerSocialMedia.whatsapp" target="_blank" title="whatsapp"><i class="fab fa-whatsapp"></i></a></li>
      </ul>
    </div>
</template>

<script>
export default {
  props: ['footerSocialMedia']
}
</script>

<style lang="scss" scoped>
   a{
       color: #fff;
       font-size: 24px;
   }
</style>