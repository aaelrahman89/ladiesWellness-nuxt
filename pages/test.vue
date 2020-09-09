<template>
    <div>
        <h3>{{$i18n.locale}}</h3>
        <h5>{{$t('greeting')}}</h5>
        <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
<nuxt-link :to="switchLocalePath('ar')">Arabic</nuxt-link>

<nuxt-link :to="localePath('/about')">About</nuxt-link>
    </div>
</template>

<script>
export default {
    
}
</script>

