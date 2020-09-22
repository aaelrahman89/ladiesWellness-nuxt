<template>
    <div class="new-letter">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12 hold-form">
            <form>
              <label for="email" class="label-email">
                <input type="email" id="email" class="new-email" placeholder="E-mail Address">
              </label>
              <button class="btn-email">send</button>
            </form>
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
    export default {
        name: "HomeNewLetter"
    }
</script>

<style scoped lang="scss">
  .new-letter{
    background-color: rgba(255, 143, 182, 0.35);
    overflow: hidden;
    padding-bottom: 4rem;
  }
  .new-letter-slogan{
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
  .new-letter-logo{
    position: relative;
    right: -68%;
    @media (max-width: 768px) {
      right: -80%;
      height: 250px;
    }
  }
  .hold-form{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    form{
      display: flex;
      width: 100%;
      @media (max-width: 768px) {
        margin-top: 5rem;
        display: block;
      }
    }
  }

  .label-email{
    width: 80%;
    margin-bottom: 0;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .new-email{
    min-height: 60px;
    border: 1px solid transparent;
    outline: none;
    padding-left: 1.5rem;
    transition: all ease-in-out .4s;
    display: block;
    width: 100%;
    &:focus{
      border: 1px solid #040404;
    }
  }
  .btn-email{
    min-height: 60px;
    border: none;
    outline: none;
    background-color: #040404;
    width: 20%;
    display: block;
    color: #fff;
    text-transform: capitalize;
    font-weight: 500;
    transition: all ease-in-out .4s;
    &:hover{
      background-color: rgba(4, 4, 4, 0.75);
    }
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 2rem;
    }
  }
  html:lang(ar){
    .new-letter-slogan{margin-left:auto;margin-right: 4rem;@media (max-width: 768px) {margin-right: auto;}}
    .new-letter-logo{right: auto;left: -68%;@media (max-width: 768px) {left: -80%;}}
    .new-email{padding-left: 0;padding-right: 1.5rem;}
  }
</style>
