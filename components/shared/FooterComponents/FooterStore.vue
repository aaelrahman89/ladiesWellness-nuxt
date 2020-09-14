<template>
    <div>
        <section>
            <ul class="d-flex">
              <li class="store font-weight-bold">
                <a href="#" target="_blank" class="text-white">
                  <i class="fab fa-apple"></i> Google Play
                </a>
              </li>
              <li class="store font-weight-bold" :class="$i18n.locale == 'ar'?'mr-5':'ml-5'">
                <a href="#" target="_blank" class="text-white">
                  <i class="fab fa-apple"></i> App Store
                </a>
              </li>
            </ul>
          </section>
    </div>
</template>