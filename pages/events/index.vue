<template>
    <div class="container-fluid mb-5">    
     <full-calendar :events="events" :config="config" ref="calendar" @event-selected="eventSelected"></full-calendar>
    </div>
</template>

<script>
export default {
      data() {
    return {
      events: [
        {
            id: 1,
            title  : 'event1 ahmed ali hasan ahmed',
            start  : '2020-09-09T15:30:00',
            end    : '2020-09-06T16:30:00'
        },
        {
            id: 2,
            title  : 'event2',
            start  : '2020-09-07T13:30:00'
        }
      ],
       config: {
          defaultView: 'month'
        }
    }
  },
  methods: {
    eventSelected(event){
      console.log(event.id);
      if(this.$i18n.locale == 'ar'){
        this.$router.push(`/${this.$i18n.locale}/event/${event.slug}`)
      }else{
         this.$router.push(`/event/${event.slug}`)
      }
    }
  }
}
</script>