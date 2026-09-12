# TypeScript

- JavaScript with types
- Type system
- Module system (export / import)
- OOPS concepts (class, inheritance etc)
- ES6+ Features (Arrow function, Destructuring, template literals, block scoping)
- Additional types (any, void, enum, tuple, never, unknown)
- Custom types
- Namespaces
- Generics
- Decorators

## JavaScript Datatypes

- Primitive : Number, String, Boolean, Symbol
- Reference : Date, Function, Array, Object

## TypeScript Project Creation

- npm create vite@latest

## Decorators : functions; prefixed with '@' symbol

- Class : @Component(), @Directive, @Pipe, @Injectable
- Methods : @HostListener
- Properties : @Input(), @Output()
- Parameter : @Skip(), @Optional()
- Setter / Getters

# Angular & Other JavaScript Libraries / Frameworks

- Angular (super-heroic) : Shadow DOM; Templates, Components, DOM Manipulation, Animation, Form Validation, XHR, SPA etc
- AngularJS (v1.x)
- React : Library, render the UI quickly and efficiently; Virtual DOM, Diffing Algo, Reconciliation, Props, State etc; SPA -> React Router DOM, Form Validation -> Formik, useForm-hook, XHR Call -> fetch() / axios etc
- Ember\* : Framework; API changes very frequently
- Vue\* : Progressive framework; best of both the world (Angular & React); 'Evan You'
- Next : Server-side framework for React
- jQuery : DOM Manipulation, AJAX, Animation
- Knockout : 2 way data binding; MVVM Pattern
- Backbone : client side MVC
- D3 : charts
- Stencil : VDOM, Component based architecture
- Polymer : Rich Web components
- ExpressJS / Koa / Hapi / Kraken / Sails : web framework for NodeJS Platform
- NodeJS : Platform

## Angular CLI Tool (ng)

- npm install -g @angular/cli@20
- ng new frontend
- cd frontend
- npm start | ng serve

- ng g c core/users
- ng g c core/users/user-info

- npm install bootstrap
- update angular.json > build > styles
  > "./node_modules/bootstrap/dist/css/bootstrap.min.css",
