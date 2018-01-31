"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var list_detail_routes_1 = require("./list-detail.routes");
var list_detail_component_1 = require("./list-detail.component");
var ListDetailModule = (function () {
    function ListDetailModule() {
    }
    return ListDetailModule;
}());
ListDetailModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            list_detail_routes_1.listDetailRouting
        ],
        declarations: [
            list_detail_component_1.ListDetailComponent
        ]
    })
], ListDetailModule);
exports.ListDetailModule = ListDetailModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1kZXRhaWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC1kZXRhaWwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxzQ0FBeUM7QUFFekMsMkRBQXlEO0FBQ3pELGlFQUE4RDtBQVk5RCxJQUFhLGdCQUFnQjtJQUE3QjtJQUFnQyxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBQWpDLElBQWlDO0FBQXBCLGdCQUFnQjtJQVY1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLHNDQUFpQjtTQUNsQjtRQUNELFlBQVksRUFBRTtZQUNaLDJDQUFtQjtTQUNwQjtLQUNGLENBQUM7R0FDVyxnQkFBZ0IsQ0FBSTtBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgbGlzdERldGFpbFJvdXRpbmcgfSBmcm9tIFwiLi9saXN0LWRldGFpbC5yb3V0ZXNcIjtcbmltcG9ydCB7IExpc3REZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9saXN0LWRldGFpbC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICBsaXN0RGV0YWlsUm91dGluZ1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMaXN0RGV0YWlsQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdERldGFpbE1vZHVsZSB7IH1cbiJdfQ==