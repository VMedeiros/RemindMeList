import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { LoginPageComponent } from "./LoginPage.component";

const routes: Routes = [
    { path: "", component: LoginPageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class LoginPageRoutingModule { }
