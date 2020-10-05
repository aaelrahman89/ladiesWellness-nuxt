<template>
    <div>
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