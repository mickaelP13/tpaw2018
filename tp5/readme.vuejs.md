TP5

Application Metéo
Avec VueJS (https://vuejs.org) et openweathermap (http://openweathermap.org)

* OpenWeatherMap - générer votre API Key
    * Créer un compte openweathermap sur http://openweathermap.org/appid et     récupérer votre API Key : 
        * Exemple de clé (Api Key/appid): 0ada432b59deb9716c357092c5f79be6
        * Exemple d’appel à l’API: http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=0ada432b59deb9716c357092c5f79be6

        * Analyser la structure de la réponse JSON http://openweathermap.org/current#current_JSON

        * Documentation sur toute l’API : http://openweathermap.org/current



* Developpement d'une application web pour connaitre la méteo des villes demandées de l'utilisateur.

1. Créer un formulaire pour saisir la ville
    * vérifier que le champ n'est pas vide (ajouter l'attribut ```required``` au champ de saisie)
    * stocker la ville demandée dans un tableau JSON ```cityList```

2. Afficher cette liste dans un tableau HTML avec vuejs



Filter un tableau JSON: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter
