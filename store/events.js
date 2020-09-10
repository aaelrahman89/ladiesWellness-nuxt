
export const state = () => ({
    events: [],
    event: {}
  });

  // Getters
  export const getters = {
    allEvents: (state) => state.events,
    event: (state) => state.event
  };

  // Get from api and call mutation that update state
  export const actions = {

    // Get Events
    async fetchEvents({ commit }){
       const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/todos');
       // call mutation , and pass response as a data parameter
       commit('setEvents', response);
    },

    // Get Event
    async getEvent({ commit }, id){
        const response = await this.$axios.$get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        // call mutation , and pass response as a data parameter
        commit('setEvent', response);
     },
  };


  // Update state from mutations
  export const mutations = {

    // update state after get from api
    setEvents: (state, events) => (state.events = events),

    // update state after get by id from api
    setEvent: (state, event) => (state.event = event)

  }