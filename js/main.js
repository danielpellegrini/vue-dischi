// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Stampiamo tutto a schermo.

var app = new Vue({
  el: '#app',
  data: {

    songArray: []

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
