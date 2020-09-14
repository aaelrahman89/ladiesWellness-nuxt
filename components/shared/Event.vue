<template>
  <div class="event">
    <div class="description-event">
      <h1 class="event-name">original style</h1>
    </div>
    <div class="image-event">
      <img src="@/assets/images/event-img.png" alt="event-img">
      <img src="@/assets/images/background-event.png" alt="background-event">
    </div>
  </div>
</template>

<script>
    export default {
        name: "Event"
    }
</script>

<style scoped lang="scss">
  .event{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 500px;
    .description-event{
      width: 70%;
    }
    .image-event{
      width: 30%;
      position: relative;
      img{
        &:first-of-type{
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
</style>
