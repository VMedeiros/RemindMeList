import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ListaPageRoutingModule } from "./ListaPage-routing.module";
import { ListaPageComponent } from "./ListaPage.component";

@NgModule({
    imports: [
        NativeScriptModule,
        ListaPageRoutingModule
    ],
    declarations: [
        ListaPageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ListaPageModule { }
