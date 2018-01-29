import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ListaDetalhePageRoutingModule } from "./ListaDetalhePage-routing.module";
import { ListaDetalhePageComponent } from "./ListaDetalhePage.component";

@NgModule({
    imports: [
        NativeScriptModule,
        ListaDetalhePageRoutingModule
    ],
    declarations: [
        ListaDetalhePageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ListaDetalhePageModule { }
