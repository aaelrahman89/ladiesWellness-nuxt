<template>
    <div class="doctors">
      <div class="doctor-background">
        <div class="container-fluid">
          <div class="text-center title about-us-title">
            <h5 class="m-0 position-relative">Andalusia For Ladies Wellness</h5>
            <h3 class="m-0 position-relative text-capitalize">{{$t('doctors')}}</h3>
          </div>
        </div>
      </div>
      <div class="hold-doctors-items">
        <div class="filter-items">
          <div class="container">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide>
                <span :class="{'active-class':isActive === 0}" @click="getAllDoctors('all')" class="specialty-name">all</span>
              </swiper-slide>
              <swiper-slide v-for="DoctorSpecialty in doctors" :key="DoctorSpecialty.id">
                <span :class="{'active-class':isActive === DoctorSpecialty.id}" class="specialty-name" @click="getDoctorById(DoctorSpecialty.id)">{{DoctorSpecialty.name}}</span>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="show-doctors">
          <div v-if="!all" class="container-fluid">
            <div class="row">
              <slot v-for="doctors in allDoctors">
                <div class="col-lg-4 col-md-6 col-12 doctor-container my-2" v-for="insideDoc in doctors.doctors" :key="insideDoc.id">
                  <nuxt-link :to="localePath(`/doctor/${insideDoc.slug}`)">
                    <img :src="insideDoc.photo" alt="fixedNow" title="fixedNow" class="img-fluid doctor-img">
                    <h3 class="doctor-title">{{insideDoc.title}}</h3>
                    <div class="doctor-description">
                      {{insideDoc.small_description | cutLongString}}
                    </div>
                  </nuxt-link>
                </div>
              </slot>
            </div>
          </div>
          <swiper class="swiper-all-doctors" :options="swiperOptionTest" v-if="all">
            <slot v-for="doctors in allDoctors">
            <swiper-slide v-for="insideDoc in doctors.doctors" :key="insideDoc.id">
              <nuxt-link :to="localePath(`/doctor/${insideDoc.slug}`)">
                <img :src="insideDoc.photo" alt="fixedNow" title="fixedNow" class="img-fluid doctor-img">
                <h3 class="doctor-title">{{insideDoc.title}}</h3>
                <div class="doctor-description">
                  {{insideDoc.small_description | cutLongString}}
                </div>
              </nuxt-link>
            </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </slot>
          </swiper>
        </div>
      </div>
    </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import HomeTitle from "../../components/home/shared/HomeTitle";
    export default {
      name: "index",
      components: {Swiper,SwiperSlide,HomeTitle},
      asyncData(context){
        return context.$axios.get(`/api/doctors_by_speciality_id/all?lang=${context.app.i18n.locale}`).then(res =>{
          console.log('doctors:');
          console.log(res);
          return {
            doctors: res.data.data,
            allDoctors :res.data.data
          }
        }).catch(error => console.log(error.data));
      },
      data(){
        return{
          swiperOption: {
            slidesPerView: 6,
            breakpoints:{
              320: {
                slidesPerView: 2,
              },
              565:{
                slidesPerView: 2,
              },
              // when window width is >= 480px
              768: {
                slidesPerView: 4,
                spaceBetween:40
              },
              // when window width is >= 640px
              992: {
                slidesPerView: 6,
                spaceBetween:40
              }
            }
          },
          swiperOptionTest: {
            slidesPerView: 3,
            slidesPerColumn: 3,
            spaceBetween:20,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            breakpoints: {
              320: {
                slidesPerView: 1,
                slidesPerColumn: 0,
              },
              565:{
                slidesPerView: 1,
                slidesPerColumn: 0,
              },
              // when window width is >= 480px
              768: {
                slidesPerView: 3,
                slidesPerColumn: 3,
                spaceBetween:20,
              },
              // when window width is >= 640px
            }
          },
          isActive:0,
          all:true,
        }
      },
      filters: {
        cutLongString(value) {
          if (value.length > 180) {
            return value.substr(0, 120) + '...'
          } else {
            return value;
          }
        }
      },
      methods:{
        getDoctorById(id){
          console.log(id);
          this.isActive = id;
          this.all = false;
          this.$axios.get(`/api/doctors_by_speciality_id/${id}?lang=${this.$i18n.locale}`).then( res =>{
            this.allDoctors = res.data.data;
            console.log("this.allDoctors");
            console.log(this.allDoctors);
          }).catch(error => console.log(error.data));
        },
        getAllDoctors(all){
          this.isActive = 0;
          this.all = true;
          this.$axios.get(`/api/doctors_by_speciality_id/${all}?lang=${this.$i18n.locale}`).then( res =>{
            this.allDoctors = res.data.data;
            console.log(this.allDoctors)
          }).catch(error => console.log(error.data));
        }
      }
    }
</script>

<style scoped lang="scss">
.about-us-title {
  margin-top: -5rem;
  margin-bottom: 0;
  z-index: 30;
  h5{
    font-family: "Conv_TuesdayNight-Regular", Sans-Serif;
    opacity: 0.8;
    font-size: 3rem;
    color: #d18c2f;
    top: 2rem;
  }
  h3{
    font-weight: bolder;
    color: #fff;
    font-size: 6rem;
    z-index: 22;
  }
  @media (max-width: 1200px) {
    margin-top: 12rem;
  }
}
  .show-doctors{
    padding: 0 2rem;
  }
  .swiper-all-doctors {
    height: 1297px;
    margin-left: auto;
    margin-right: auto;
    .hold-doctors-items{
      padding: 0 2rem;
      @media (max-width: 768px) {
        padding: 0;
      }
    }
    @media (max-width: 768px) {
      height: 500px;
    }
    .swiper-slide {
      height: 365px;
      margin: 2rem 0;
      transition:  all ease-in-out .3s;
      a{
        display: block;
        color: #040404;
        transition:  all ease-in-out .3s;
      }
    }
    .doctor-img{
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition:  all ease-in-out .3s;
    }
  }

  .doctor-background{
    height: calc(100vh - 145px);
    background: url("../../assets/images/doctor-background.jpg") fixed no-repeat;
    background-position: 50% 0;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .title{
      margin: 0;
      h3{
        color: #F5F5F5;
      }
    }
  }
  .filter-items{
    margin: 3rem 0;
  }
  .active-class{
    border-bottom: 1px solid #c7843d !important;
    transition: all ease-in-out .3s;
  }
  .specialty-name{
    display: block;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    text-transform: capitalize;
    border-bottom: 1px solid transparent;
    padding-bottom: .5rem;
  }
  .doctor-container{
    a{
      display: block;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: #040404;
      transition:  all ease-in-out .3s;
    }
  }
  .doctor-img{
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
    transition:  all ease-in-out .3s;
  }
  .doctor-title{
    margin: 1rem 0;
    width: 90%;
  }
  .doctor-description{
    color: #9a9a9a;
    line-height: 1.7;
    width: 90%;
  }
  html:lang(ar){
    .swiper-slide {
      a{
        text-align: right;
      }
    }
  }
</style>
