# PROJECT WITH MONGODB, EXPRESS, ANGULAR AND NODE
Create a folder where you gonna create two folders: one for front-end and another one for back-end.
## FRONT-END
### Creating an angular project
Create an Angular project with routing and css.
````
ng new nameProject
````
Install bootstrap inside the folder of the Angular's project. (We are installing Bootstrap 5)
````
npm install bootstrap
````
Modify the file named: angular.json and add this line of code in styles:
````
"node_modules/bootstrap/dist/css/bootstrap.min.css"
````
Create the folders components, services and models inside src/app. 
Then, generate components inside the folder components:
````
ng generate component folderName/nameComponent
````
Generate services inside the folder services:
````
ng generate service folderName/nameService
````
Create the models you need using the interface and then do the routing in app-routing.module.ts:
````
const routes: Routes = [ 
  { path: '', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
````
If you want to use this routes in a button, use: 
````
routerLink="/"
````
