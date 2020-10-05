<template>
  <div>
    <PageTitle :title="$t('events')" bgImg="events.png" />
    <div class="container-fluid mt-5 mb-5">
      <div class="row">
        <div class="col-md-1 d-none d-sm-block slogan">
          Andalusia For Ladies Wellness
        </div>
        <div class="col-md-11">
          <section>
            <no-ssr>
              <full-calendar
                :events="events"
                :config="config"
                ref="calendar"
                @event-selected="eventSelected"
                @event-mouseover="eventHover"
                @event-mouseout="eventMouseOut"
                @event-render="eventRender"
              ></full-calendar>
            </no-ssr>
          </section>

          <section class="mt-4"><TopEvent :topEvent="topEvent" /></section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopEvent from "@/components/events/TopEvent";
export default {
  scrollToTop: true,
  data() {
    return {
      config: {
        defaultView: "month",
        // locale: this.$i18n.locale,
        height: 1100,
      },
    };
  },
  methods: {
    // fcTodayColor
    fcTodayColor(color){
      let fcToday = document.querySelectorAll('.fc-today');
       fcToday.forEach(tod => {
         tod.style.backgroundColor = color;
       })
    },
    // On event clicked
    eventSelected(event) {
      if (this.$i18n.locale == "ar") {
        this.$router.push(`/${this.$i18n.locale}/event/${event.slug}`);
      } else {
        this.$router.push(`/event/${event.slug}`);
      }
    },
    // On event hovered
    eventHover(event, jsEvent, view) {
      let fcDayTop = document.querySelector( `.fc-day-top[data-date="${event.event_date}"]` ).children[0];
      let eventDay = document.querySelector( `.fc-day[data-date="${event.event_date}"]` );
      eventDay.style.backgroundColor = "#ffd8e5";
      fcDayTop.style.cssText = "color: #000 !important";
      this.fcTodayColor('#ffd8e5');
    },
    // On event mouse out
    eventMouseOut(event, jsEvent, view) {
      let fcDayTop = document.querySelector(
        `.fc-day-top[data-date="${event.event_date}"]`
      ).children[0];
      let eventDay = document.querySelector(
        `.fc-widget-content[data-date="${event.event_date}"]`
      );
      // let fcToday = document.querySelector(`.fc-today[data-date="${event.event_date}"]`);
      eventDay.style.backgroundColor = "#fff";
      fcDayTop.style.cssText = "color: #daa358 !important";
      // fcToday.style.cssText = 'background: #c7843d !important';
      this.fcTodayColor('#c7843d');
    },
    // Day & Night icons
    eventRender(event, element) {
      let fcDayTop = document.querySelector(
        `.fc-day-top[data-date="${event.event_date}"]`
      );
      if (event.time.indexOf("AM") != -1) {
        element
          .find(".fc-time")
          .prepend('<i class="far fa-sun icon-style"></i>');
        //  fcDayTop.innerHTML += '<i class="far fa-sun"></i>';
      } else {
        element
          .find(".fc-time")
          .prepend('<i class="fas fa-moon icon-style"></i>');
        // fcDayTop.innerHTML += '<i class="fas fa-moon"></i>';
      };
       this.fcTodayColor('#c7843d');
       
       }
  },
  // Get Events & Top Event
  async asyncData(context) {
    let events = await context.$axios.get(`/api/events?lang=${context.app.i18n.locale}`);
    let topEvent = await context.$axios.get( `/api/topevent?lang=${context.app.i18n.locale}` );
    return {
      events: events.data.data,
      topEvent: topEvent.data.data,
    };
  },
};
</script>


<style lang="scss" scoped>
@import "assets/scss/variable";
.slogan {
  font-family: "Conv_TuesdayNight-Regular", Sans-Serif;
  opacity: 0.69;
  font-size: 80px;
  line-height: 2.15;
  color: $mainColor;
  writing-mode: vertical-rl;
  position: relative;
  left: 30px;
  top: 240px;
}
::v-deep {
  .fc-toolbar .fc-right {
    display: none !important;
  }
  .fc-event,
  .fc-event-dot {
    background-color: $mainColor !important;
    border: 1px solid $mainColor !important;
    border-radius: 0 !important;
    &:hover {
      background-color: #ffd8e5 !important;
      border: 1px solid #ffd8e5 !important;
    }
  }
  .fc-event .fc-content {
    font-size: 15px !important;
    font-weight: bold !important;
    letter-spacing: 0.47px !important;
    &:hover {
      color: #000 !important;
      white-space: break-spaces !important;
    }
  }
  .fc-state-default {
    border: none !important;
    background-color: $mainColor !important;
    background-image: none !important;
    border-color: transparent !important;
    color: #fff !important;
    text-shadow: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    text-transform: capitalize !important;
    font-weight: bold !important;
    font-size: 20px !important;
    font-weight: bold !important;
  }
  .fc .fc-button-group > * {
    margin: 0 0 0 25px !important;
  }
  .fc button {
    height: 30px !important;
  }
  .fc-state-disabled {
    opacity: 1 !important;
  }
  .fc-day-top {
    padding: 5px;
  }
  .fc-toolbar h2 {
    font-size: 50px !important;
    font-weight: 600 !important;
    color: #a7a7a7 !important;
  }
  .fc-ltr .fc-basic-view .fc-day-top .fc-day-number {
    font-size: 30px !important;
    font-weight: 600 !important;
    color: #daa358 !important;
  }

  .fc-day-grid-event .fc-content,
  .fc-icon,
  .fc-row.fc-rigid,
  .fc-time-grid-event {
    overflow: visible !important;
  }
  .fc-highlight {
    background: transparent !important;
  }
  .icon-style {
    position: absolute;
    color: #000;
    top: -53px;
    left: 5px;
  }
}
</style>

