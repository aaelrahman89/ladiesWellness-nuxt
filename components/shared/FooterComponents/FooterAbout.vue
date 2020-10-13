<template>
    <div class="mt-7">
        <section>
            <h3 class="text-capitalize text-center">{{ $t('slogan') }}</h3>
            <p class="text-center">
              {{footerAbout.small_description}}
            </p>
          </section>
    </div>
</template>

<script>
export default {
  props: ['footerAbout']
}
</script>

<style lang="scss" scoped>
  .mt-7{
    margin-top: 7rem;
    @media screen and (max-width: 768px) {
    margin-top: 0;
  }
  }
  p{
    opacity: 0.8;
  }
</style>
