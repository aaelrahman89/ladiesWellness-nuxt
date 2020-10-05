<template>
    <div class="hold-links">
      <ul class="social-links">
        <li><a :href="`tel:${socialLinksHref.phone}`"><i class="fas fa-phone-alt"></i></a></li>
        <li><a :href="socialLinksHref.twitter"><i class="fab fa-twitter"></i></a></li>
        <li><a :href="socialLinksHref.facebook"><i class="fab fa-facebook-f"></i></a></li>
        <li><a :href="socialLinksHref.instagram"><i class="fab fa-instagram"></i></a></li>
        <li><a :href="socialLinksHref.youtube"><i class="fab fa-youtube"></i></a></li>
        <li><a :href="socialLinksHref.whatsapp"><i class="fab fa-whatsapp"></i></a></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "SocialLinks",
      props:['socialLinksHref']
    }
</script>

<style scoped lang="scss">
  @import "assets/scss/variable";
  .hold-links{
    display: block;
    height: 100%;
  }
  .social-links{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    li{
      a{
        color: #fff;
        display: inline-block;
        margin-right: 1rem;
        transition: all ease-in-out .3s;
        &:hover{
          color: $mainColor;
        }
      }
    }
    @media (max-width: 992px) {
      justify-content: center;
      margin: .5rem 0;
    }
  }
</style>
