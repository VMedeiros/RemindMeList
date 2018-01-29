import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { LoginPageRoutingModule } from "./LoginPage-routing.module";
import { LoginPageComponent } from "./LoginPage.component";

@NgModule({
    imports: [
        NativeScriptModule,
        LoginPageRoutingModule
    ],
    declarations: [
        LoginPageComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginPageModule { }
