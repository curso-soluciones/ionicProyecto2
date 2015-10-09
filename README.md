# ionicProyecto2
<ul>
<li>Introducción</li>
<li><a href="#stateProvider">stateProvider</a></li>
<li>urlRouterProvider</li>
</ul>

<h1>Proyecto  que muestra cómo implementar navegación con stateProvider y urlRouterProvider</h1>

<h2>Introducción</h2>
En este proyecto vamos a implementra navegación de el framework usando un routerProvider muy similar al usado en algularJS
```javascript
.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
            .state('vista1',{
                url:'/vista1',
                templateUrl:'inicial.html'
                }
            )
            .state('vista2',{
                url:'/vista2',
                templateUrl:'otra.html'
            })
            $urlRouterProvider.otherwise('/vista1');
    
}) 
```
<h2 id="stateProvider">stateProvider</h2>
