<template>
    <div>
        slug 
        <h5>{{$t('greeting')}}</h5>
        <nuxt-link :to="localePath('/test')">Test</nuxt-link>
                <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
<nuxt-link :to="switchLocalePath('ar')">Arabic</nuxt-link>

    </div>
</template>