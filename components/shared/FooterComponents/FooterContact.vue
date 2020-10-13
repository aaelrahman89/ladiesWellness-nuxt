<template>
    <div>
        <section>
            <h3 class="text-capitalize">{{ $t('contact.title') }}</h3>
            <ul>
              <li>{{ $t('contact.address') }} : {{footerContactsData.address}}</li>
              <li>
                {{ $t('email') }} :
                <a
                  :href="`mailto:${footerContactsData.email}`"
                  class="text-white"
                >{{footerContactsData.email}}</a>
              </li>
              <li>
                {{ $t('contact.phone') }} :
                <a :href="`tel:${footerContactsData.phone}`" class="text-white">{{footerContactsData.phone}}</a>
              </li>
            </ul>
          </section>
    </div>
</template>

<script>
export default {
  props: ['footerContactsData']
}
</script>

<style lang="scss" scoped>
 li{
   opacity: 0.8;
 }
</style>
