import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ListaPageComponent } from "./ListaPage.component";

const routes: Routes = [
    { path: "", component: ListaPageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ListaPageRoutingModule { }
