import { Component, OnInit } from "@angular/core";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "ListaPage", loadChildren: "./ListaPage/ListaPage.module#ListaPageModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "ListaPage",
    moduleId: module.id,
    templateUrl: "./ListaPage.component.html"
})
export class ListaPageComponent implements OnInit {
    constructor() {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }
}
