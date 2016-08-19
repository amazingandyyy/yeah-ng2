"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
// Using auth service to keep track of users' login status across all component
var UserDataService = (function () {
    function UserDataService(http) {
        this.http = http;
    }
    UserDataService.prototype.getSingleUser = function (userId) {
        return this.http.get("/api/user/singleUser/" + userId)
            .map(this.handelResponse)
            .catch(this.handelError);
    };
    UserDataService.prototype.handelResponse = function (res) {
        var data = res.json();
        return data || {};
    };
    UserDataService.prototype.handelError = function (err) {
        console.log('err @userService: ', err);
        return Observable_1.Observable.throw(err);
    };
    UserDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserDataService);
    return UserDataService;
}());
exports.UserDataService = UserDataService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy91c2VyLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUUvQywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUc3QyxRQUFPLHdCQUF3QixDQUFDLENBQUE7QUFDaEMsUUFBTyxzQkFBc0IsQ0FBQyxDQUFBO0FBQzlCLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHlCQUF5QixDQUFDLENBQUE7QUFDakMsUUFBTyx1QkFBdUIsQ0FBQyxDQUFBO0FBSy9CLCtFQUErRTtBQUUvRTtJQUVJLHlCQUNZLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQ2xCLENBQUM7SUFFTCx1Q0FBYSxHQUFiLFVBQWMsTUFBTTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQXdCLE1BQVEsQ0FBQzthQUNqRCxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUN4QixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsR0FBYTtRQUN4QixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVBLHFDQUFXLEdBQVgsVUFBWSxHQUFRO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFyQkw7UUFBQyxpQkFBVSxFQUFFOzt1QkFBQTtJQXVCYixzQkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0QlksdUJBQWUsa0JBc0IzQixDQUFBIiwiZmlsZSI6InNoYXJlZC9zZXJ2aWNlcy91c2VyLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBBdXRoSHR0cCB9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5cbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7IEF1dGggfSBmcm9tICcuLi90eXBlcy9hdXRoJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi90eXBlcy91c2VyJztcblxuLy8gVXNpbmcgYXV0aCBzZXJ2aWNlIHRvIGtlZXAgdHJhY2sgb2YgdXNlcnMnIGxvZ2luIHN0YXR1cyBhY3Jvc3MgYWxsIGNvbXBvbmVudFxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJEYXRhU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwXG4gICAgKSB7IH1cblxuICAgIGdldFNpbmdsZVVzZXIodXNlcklkKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAvYXBpL3VzZXIvc2luZ2xlVXNlci8ke3VzZXJJZH1gKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgaGFuZGVsUmVzcG9uc2UocmVzOiBSZXNwb25zZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhIHx8IHt9O1xuICAgIH1cbiAgICBcbiAgICAgaGFuZGVsRXJyb3IoZXJyOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VyciBAdXNlclNlcnZpY2U6ICcsIGVycik7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
