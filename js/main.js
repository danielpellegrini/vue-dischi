// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Stampiamo tutto a schermo.

// Bonus: Creare una select con i seguenti generi:
// pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.

var app = new Vue({
  el: '#app',
  data: {

    songArray: [],
    selected: ''

  },

  mounted() {
    const self = this;

    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function(resp) {
      const songs = resp.data.response
      console.log(songs);
      self.songArray = songs;
    });
  }

});

Vue.config.devtools = true;
