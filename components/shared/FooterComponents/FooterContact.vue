<template>
    <div>
        <section>
            <h3 class="text-capitalize">Contact</h3>
            <ul>
              <li>Address : {{footerContactsData.address}}</li>
              <li>
                E-mail :
                <a
                  :href="`mailto:${footerContactsData.email}`"
                  class="text-white"
                >{{footerContactsData.email}}</a>
              </li>
              <li>
                Phone :
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