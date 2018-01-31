"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var services_1 = require("../services");
var enums = require("ui/enums");
var imageSource = require("image-source");
var camera = require("nativescript-camera");
var router_2 = require("nativescript-angular/router");
var imageModule = require("ui/image");
var img;
var ListDetailComponent = (function () {
    function ListDetailComponent(route, routerExtensions, router, ngZone, firebaseService, utilsService) {
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.router = router;
        this.ngZone = ngZone;
        this.firebaseService = firebaseService;
        this.utilsService = utilsService;
    }
    ListDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        camera.requestPermissions();
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.firebaseService.getMyGift(_this.id).subscribe(function (gift) {
                _this.ngZone.run(function () {
                    for (var prop in gift) {
                        //props
                        if (prop === "id") {
                            _this.id = gift[prop];
                        }
                        if (prop === "name") {
                            _this.name = gift[prop];
                        }
                        if (prop === "description") {
                            _this.description = gift[prop];
                        }
                        if (prop === "imagepath") {
                            _this.imagepath = gift[prop];
                        }
                    }
                });
            });
        });
    };
    ListDetailComponent.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            width: 300,
            height: 300,
            keepAspectRatio: true,
            saveToGallery: true
        };
        camera.takePicture(options)
            .then(function (imageAsset) {
            imageSource.fromAsset(imageAsset).then(function (res) {
                _this.image = res;
                //save the source image to a file, then send that file path to firebase
                _this.saveToFile(_this.image);
            });
        }).catch(function (err) {
            console.log("Error -> " + err.message);
        });
    };
    ListDetailComponent.prototype.saveToFile = function (res) {
        var imgsrc = res;
        this.imagePath = this.utilsService.documentsPath("photo-" + Date.now() + ".png");
        imgsrc.saveToFile(this.imagePath, enums.ImageFormat.png);
    };
    ListDetailComponent.prototype.cancel = function () {
        this.routerExtensions.navigate(["/list"], { clearHistory: true });
    };
    ListDetailComponent.prototype.editGift = function (id) {
        var _this = this;
        if (this.image) {
            //upload the file, then save all
            this.firebaseService.uploadFile(this.imagePath).then(function (uploadedFile) {
                _this.uploadedImageName = uploadedFile.name;
                //get downloadURL and store it as a full path;
                _this.firebaseService.getDownloadUrl(_this.uploadedImageName).then(function (downloadUrl) {
                    _this.firebaseService.editGift(id, _this.description, downloadUrl).then(function (result) {
                        alert(result);
                    }, function (error) {
                        alert(error);
                    });
                });
            }, function (error) {
                alert('File upload error: ' + error);
            });
        }
        else {
            //just edit the description
            this.firebaseService.editDescription(id, this.description).then(function (result) {
                alert(result);
            }, function (error) {
                alert(error);
            });
        }
    };
    return ListDetailComponent;
}());
ListDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "gf-list-detail",
        templateUrl: "list-detail.html"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_2.RouterExtensions,
        router_1.Router,
        core_1.NgZone,
        services_1.FirebaseService,
        services_1.UtilsService])
], ListDetailComponent);
exports.ListDetailComponent = ListDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdEO0FBRXhELDBDQUF1RDtBQUN2RCx3Q0FBNEQ7QUFFNUQsZ0NBQWtDO0FBQ2xDLDBDQUE0QztBQUk1Qyw0Q0FBOEM7QUFFOUMsc0RBQStEO0FBRS9ELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN0QyxJQUFJLEdBQUcsQ0FBQztBQU9SLElBQWEsbUJBQW1CO0lBYTlCLDZCQUNjLEtBQXFCLEVBQ3JCLGdCQUFrQyxFQUNsQyxNQUFjLEVBQ2QsTUFBYyxFQUNkLGVBQWdDLEVBQ2hDLFlBQTBCO1FBTDFCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDbkMsQ0FBQztJQUVQLHNDQUFRLEdBQVI7UUFBQSxpQkF3QkU7UUF2QkEsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFXO1lBQ2hELEtBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO2dCQUNyRCxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztvQkFDZCxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENB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LENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxLQUFJLENBQUMsV0FBVyxFQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQVU7d0JBQzdFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtvQkFDZixDQUFDLEVBQUUsVUFBQyxLQUFVO3dCQUNWLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDLEVBQUUsVUFBQyxLQUFVO2dCQUNaLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNULENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLDJCQUEyQjtZQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQVU7Z0JBQ3RFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNqQixDQUFDLEVBQUUsVUFBQyxLQUFVO2dCQUNWLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBRUQsMEJBQUM7QUFBRCxDQUFDLEFBeEdELElBd0dDO0FBeEdZLG1CQUFtQjtJQUwvQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsV0FBVyxFQUFFLGtCQUFrQjtLQUNoQyxDQUFDO3FDQWVxQix1QkFBYztRQUNILHlCQUFnQjtRQUMxQixlQUFNO1FBQ04sYUFBTTtRQUNHLDBCQUFlO1FBQ2xCLHVCQUFZO0dBbkI3QixtQkFBbUIsQ0F3Ry9CO0FBeEdZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE5nWm9uZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBGaXJlYmFzZVNlcnZpY2UsIFV0aWxzU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlc1wiO1xuaW1wb3J0IHtHaWZ0fSBmcm9tIFwiLi4vbW9kZWxzXCI7XG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tICd1aS9lbnVtcyc7XG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZSBmcm9tICdpbWFnZS1zb3VyY2UnO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuXG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSBcIm5hdGl2ZXNjcmlwdC1jYW1lcmFcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbnZhciBpbWFnZU1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9pbWFnZVwiKTtcbnZhciBpbWc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJnZi1saXN0LWRldGFpbFwiLFxuICB0ZW1wbGF0ZVVybDogXCJsaXN0LWRldGFpbC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTGlzdERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGltYWdlcGF0aDogc3RyaW5nO1xuICBpbWFnZTogYW55O1xuICBwcml2YXRlIHN1YjogYW55O1xuICBwcml2YXRlIGltYWdlUGF0aDogc3RyaW5nO1xuICBwcml2YXRlIHVwbG9hZGVkSW1hZ2VOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgdXBsb2FkZWRJbWFnZVBhdGg6IHN0cmluZztcbiAgcHVibGljIGdpZnQ6IE9ic2VydmFibGU8YW55PjtcbiAgXG4gIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgICAgICBwcml2YXRlIGZpcmViYXNlU2VydmljZTogRmlyZWJhc2VTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHV0aWxzU2VydmljZTogVXRpbHNTZXJ2aWNlXG4gICAgKSB7fVxuXG4gbmdPbkluaXQoKSB7XG4gICBjYW1lcmEucmVxdWVzdFBlcm1pc3Npb25zKCk7XG4gICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICB0aGlzLmZpcmViYXNlU2VydmljZS5nZXRNeUdpZnQodGhpcy5pZCkuc3Vic2NyaWJlKChnaWZ0KSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBnaWZ0KSB7XG4gICAgICAgICAgICAvL3Byb3BzXG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJpZFwiKSB7XG4gICAgICAgICAgICAgIHRoaXMuaWQgPSBnaWZ0W3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3AgPT09IFwibmFtZVwiKSB7XG4gICAgICAgICAgICAgIHRoaXMubmFtZSA9IGdpZnRbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBnaWZ0W3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3AgPT09IFwiaW1hZ2VwYXRoXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbWFnZXBhdGggPSBnaWZ0W3Byb3BdO1xuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pOyAgXG4gIH1cblxudGFrZVBob3RvKCkge1xuICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZSxcbiAgICAgICAgICAgIHNhdmVUb0dhbGxlcnk6IHRydWVcbiAgICAgICAgfTtcbiAgICBjYW1lcmEudGFrZVBpY3R1cmUob3B0aW9ucylcbiAgICAgICAgLnRoZW4oaW1hZ2VBc3NldCA9PiB7XG4gICAgICAgICAgICBpbWFnZVNvdXJjZS5mcm9tQXNzZXQoaW1hZ2VBc3NldCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSByZXM7XG4gICAgICAgICAgICAgICAgLy9zYXZlIHRoZSBzb3VyY2UgaW1hZ2UgdG8gYSBmaWxlLCB0aGVuIHNlbmQgdGhhdCBmaWxlIHBhdGggdG8gZmlyZWJhc2VcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVUb0ZpbGUodGhpcy5pbWFnZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIC0+IFwiICsgZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcbn1cblxuc2F2ZVRvRmlsZShyZXMpe1xuICBsZXQgaW1nc3JjID0gcmVzO1xuICAgICAgICB0aGlzLmltYWdlUGF0aCA9IHRoaXMudXRpbHNTZXJ2aWNlLmRvY3VtZW50c1BhdGgoYHBob3RvLSR7RGF0ZS5ub3coKX0ucG5nYCk7XG4gICAgICAgIGltZ3NyYy5zYXZlVG9GaWxlKHRoaXMuaW1hZ2VQYXRoLCBlbnVtcy5JbWFnZUZvcm1hdC5wbmcpOyAgICAgICBcbn1cblxuY2FuY2VsKCl7XG4gIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbGlzdFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSApO1xufVxuXG5lZGl0R2lmdChpZDogc3RyaW5nKXtcbiAgaWYodGhpcy5pbWFnZSl7XG4gICAgLy91cGxvYWQgdGhlIGZpbGUsIHRoZW4gc2F2ZSBhbGxcbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS51cGxvYWRGaWxlKHRoaXMuaW1hZ2VQYXRoKS50aGVuKCh1cGxvYWRlZEZpbGU6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMudXBsb2FkZWRJbWFnZU5hbWUgPSB1cGxvYWRlZEZpbGUubmFtZTtcbiAgICAgICAgICAvL2dldCBkb3dubG9hZFVSTCBhbmQgc3RvcmUgaXQgYXMgYSBmdWxsIHBhdGg7XG4gICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZ2V0RG93bmxvYWRVcmwodGhpcy51cGxvYWRlZEltYWdlTmFtZSkudGhlbigoZG93bmxvYWRVcmw6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgdGhpcy5maXJlYmFzZVNlcnZpY2UuZWRpdEdpZnQoaWQsdGhpcy5kZXNjcmlwdGlvbixkb3dubG9hZFVybCkudGhlbigocmVzdWx0OmFueSkgPT4ge1xuICAgICAgICAgICAgICBhbGVydChyZXN1bHQpXG4gICAgICAgICAgICB9LCAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sIChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgYWxlcnQoJ0ZpbGUgdXBsb2FkIGVycm9yOiAnICsgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgfVxuICBlbHNlIHtcbiAgICAvL2p1c3QgZWRpdCB0aGUgZGVzY3JpcHRpb25cbiAgICB0aGlzLmZpcmViYXNlU2VydmljZS5lZGl0RGVzY3JpcHRpb24oaWQsdGhpcy5kZXNjcmlwdGlvbikudGhlbigocmVzdWx0OmFueSkgPT4ge1xuICAgICAgICBhbGVydChyZXN1bHQpXG4gICAgfSwgKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgYWxlcnQoZXJyb3IpO1xuICAgIH0pO1xuICB9ICAgIFxufVxuXG59Il19