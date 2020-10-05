<template>
  <div>
    <div id="share-buttons">
      <!-- Facebook -->
      <a target="_blank" :href="`http://www.facebook.com/sharer.php?u=${location}`" >
      <i class="fab fa-facebook-f"></i>
      </a>
      <!-- Twitter -->
      <a target="_blank" :href="`https://twitter.com/share?url=${location}`" >
        <i class="fab fa-twitter"></i>
      </a>
      <!-- whatsapp -->
      <a target="_blank" :href="`https://api.whatsapp.com/send?text=${location}`" >
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    location() {
      if (process.browser) {
        return window.location.href;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
a{
    color: #000;
    margin: 8px;
}
</style>