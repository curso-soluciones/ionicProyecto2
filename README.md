# ionicProyecto2
<div id="inicio"></div>
[Introducción](#Introduccion)<br>
[Router Provider](#stateProvider)<br>

<h1>Proyecto  que muestra cómo implementar navegación con stateProvider y urlRouterProvider</h1>

<h2 id="introduccion">Introducción</h2>
En este proyecto vamos a implementra navegación de el framework usando un routerProvider muy similar al usado en algularJS
Primero vas a crear un proyecto en ionic en blanco y le vas a poner de nombre **ionicProyecto2**, vas a hacer lo mismo en el netbbeans creando una  aplicación en blanco de tipo html5, vas a borra el indes y copias los contenidos de la carpeta **wwww** que se generón en ionic.

En el index que se generó en el index de ionic vas a sustituir las equitas de apertura y de cierre **<ion-cotent>** por las etiquetas **<ion-nav-view class="has-header"></ion-nav-view>**, tu contenido del index debera de quedar como sigue
```html
  <body ng-app="starter">

    <ion-pane>
      <ion-header-bar class="bar-stable">
        <h1 class="title">Ap navegación</h1>
      </ion-header-bar>
      <!-- Esta es la nueva etiqueta que susituiras por <ion-content>-->
      <ion-nav-view class="has-header"></ion-nav-view>
    </ion-pane>
  </body>
```

Una vez hecho esto vamos a agregar una configuración en nuestro archivo **app.js**, esta configuración va a hacer que funcione el router para la navegación. Para ello es necesario que en tu proyecto generes dos nuevas páginas html. A la primera le vas a llamar **inicio.html** y a la segunda **menu.html**.

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
[Inicio](#inicio)
