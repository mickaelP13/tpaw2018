window.onload = function () {

    var cityListJSON = [];

    Vue.component('city-item', {
        // The city-item component now accepts a
        // "prop", which is like a custom attribute.
        // This prop is called city.
        props: ['city'],
        template: '<li>{{ city.name }}</li>'
      })

    var app = new Vue({
        el: '#cityListHTML',
        data: {
            loading: false,
            cityName: '',
            message: 'Vue Loaded!',
            messageForm: '',
            cityList: cityListJSON,
        },
        // define methods under the `methods` object
        methods: {
          addCity: function (event) {
              event.preventDefault(); // pour ne pas recharger la page à la soumission du formulaire
                if(this.isCityExist(this.cityName)){
                    this.messageForm = 'existe déjà';
                }else{
                    this.cityList.push({name : this.cityName, temp : null});
                    // `this` inside methods points to the Vue instance
                    this.messageForm = '';
                    this.cityName = '';
                }
          },
          isCityExist: function (_cityName){
            return this.cityList.filter(city => 
                city.name.toUpperCase() == _cityName.toUpperCase()
            ).length>0
          },
          remove: function(_city){
              this.cityList = this.cityList.filter(city => 
                city.name != _city.name
            );
          }
        }
    });

}
