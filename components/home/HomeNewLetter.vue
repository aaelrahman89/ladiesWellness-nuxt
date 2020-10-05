<template>
  <div class="new-letter">
    <transition name="slide-fade">
      <div class="success-message" v-if="showMessage">
        you'r request sent successfully
      </div>
    </transition>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12 hold-form">
          <ValidationObserver v-slot="{ invalid }" ref="newLetterForm" class="col-12">
            <div class="row">
              <div class="col-12 px-0">
                <form @submit.prevent="SendNewLetter">
                  <div class="hold-email-input">
                    <ValidationProvider name="email" rules="required|email" v-slot="{ errors }" class="general-input">
                      <input v-model="email" type="email" :placeholder="$t('email')" id="email" class="new-email">
                      <span class="error-message">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <button type="submit" :disabled="invalid" class="btn-email">{{ $t('send') }}</button>
                </form>
              </div>
            </div>
          </ValidationObserver>
        </div>
        <div class="col-md-6 col-12">
          <img src="@/assets/images/new-letter-logo.png" alt="new-letter-logo" class="new-letter-logo">
          <p class="new-letter-slogan">Andalusia For Ladies Wellness</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: "HomeNewLetter",
    data() {
      return {
        email: '',
        showMessage : false
      }
    },
    methods:{
      SendNewLetter(){
        axios.post('/api/newsletter',{email:this.email}).then( res =>{
          this.email = "";
          this.showMessage = true;
          setTimeout( () =>{
            this.showMessage = false;
          },4000);
          this.$nextTick( () => {
            this.$refs.newLetterForm.reset();
          });
          console.log(res.data)
        }).catch( error => console.log(error.data))
      }
    }
  }
</script>

<style scoped lang="scss">
  .new-letter {
    background-color: rgba(255, 143, 182, 0.35);
    overflow: hidden;

    position: relative;
    .success-message{
      background: #040404;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
    }
  }

  .new-letter-slogan {
    font-family: "Conv_TuesdayNight-Regular", Sans-Serif;
    opacity: 0.8;
    color: #F5F5F5;
    margin-top: -5rem;
    font-size: 3rem;
    margin-left: 4rem;
    @media (max-width: 768px) {
      margin-top: -10rem;
      font-size: 2rem;
      margin-left: auto;
    }
  }

  .new-letter-logo {
    position: relative;
    right: -68%;
    @media (max-width: 768px) {
      right: -80%;
      height: 250px;
    }
  }

  .hold-form {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    form {
      display: flex;
      width: 100%;
      margin-top: 2rem;
      @media (max-width: 768px) {
        margin-top: 5rem;
        display: block;
      }
    }
    .hold-email-input{
      width: 100%;
      min-height: 120px;
      @media (max-width: 768px) {
        min-height: auto;
      }
    }
    .error-message{
      text-transform: capitalize;
      display: inline-block;
      margin: .5rem 0;
    }
  }

  .label-email {
    width: 80%;
    margin-bottom: 0;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .new-email {
    min-height: 75px;
    border: 1px solid transparent;
    outline: none;
    padding-left: 1.5rem;
    transition: all ease-in-out .4s;
    display: block;
    width: 100%;
    &:focus {
      border: 1px solid #040404;
    }
  }

  .btn-email {
    height: 75px;
    border: none;
    outline: none;
    background-color: #040404;
    width: 40%;
    display: block;
    color: #fff;
    text-transform: capitalize;
    font-weight: 500;
    transition: all ease-in-out .4s;
    font-size: 1.5rem;
    &:hover {
      background-color: rgba(4, 4, 4, 0.75);
    }

    @media (max-width: 768px) {
      width: 100%;

    }
  }
  .btn-email:disabled{
    background-color: rgba(4, 4, 4, 0.50);
    pointer-events: none;
  }
  .general-input{
    display: block;
  }

  html:lang(ar) {
    .new-letter-slogan {
      margin-left: auto;
      margin-right: 4rem;
      @media (max-width: 768px) {
        margin-right: auto;
      }
    }

    .new-letter-logo {
      right: auto;
      left: -68%;
      @media (max-width: 768px) {
        left: -80%;
      }
    }

    .new-email {
      padding-left: 0;
      padding-right: 1.5rem;
    }
  }
</style>
