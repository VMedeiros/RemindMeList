"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fs = require("file-system");
var UtilsService = (function () {
    function UtilsService() {
    }
    UtilsService.prototype.getFilename = function (path) {
        var parts = path.split('/');
        return parts[parts.length - 1];
    };
    UtilsService.prototype.documentsPath = function (filename) {
        return fs.knownFolders.documents().path + "/" + filename;
    };
    return UtilsService;
}());
UtilsService = __decorate([
    core_1.Injectable()
], UtilsService);
exports.UtilsService = UtilsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQsZ0NBQWtDO0FBR2xDLElBQWEsWUFBWTtJQUF6QjtJQVVBLENBQUM7SUFSUSxrQ0FBVyxHQUFsQixVQUFtQixJQUFZO1FBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxvQ0FBYSxHQUFwQixVQUFxQixRQUFnQjtRQUNuQyxNQUFNLENBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLFNBQUksUUFBVSxDQUFDO0lBQzNELENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksWUFBWTtJQUR4QixpQkFBVSxFQUFFO0dBQ0EsWUFBWSxDQVV4QjtBQVZZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZmlsZS1zeXN0ZW0nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXRpbHNTZXJ2aWNlIHtcblxuICBwdWJsaWMgZ2V0RmlsZW5hbWUocGF0aDogc3RyaW5nKSB7XG4gICAgbGV0IHBhcnRzID0gcGF0aC5zcGxpdCgnLycpO1xuICAgIHJldHVybiBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIHB1YmxpYyBkb2N1bWVudHNQYXRoKGZpbGVuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYCR7ZnMua25vd25Gb2xkZXJzLmRvY3VtZW50cygpLnBhdGh9LyR7ZmlsZW5hbWV9YDtcbiAgfVxufVxuIl19