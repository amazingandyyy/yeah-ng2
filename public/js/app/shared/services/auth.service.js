"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var a,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(n<3?a(s):n>3?a(t,r,s):a(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),http_1=require("@angular/http"),router_1=require("@angular/router"),Observable_1=require("rxjs/Observable"),angular2_jwt_1=require("angular2-jwt");require("rxjs/add/observable/of"),require("rxjs/add/operator/do"),require("rxjs/add/operator/delay"),require("rxjs/add/operator/catch"),require("rxjs/add/operator/map");var AuthService=function(){function e(e,t,r){this.http=e,this.authHttp=t,this.router=r}return e.prototype.getCurrentUser=function(e){return this.authHttp.get("/api/user/currentUser/"+e).map(this.handelResponse)["catch"](this.handelError)},e.prototype.signUp=function(e){return this.http.post("/api/user/signup",e).map(this.handelResponse)["catch"](this.handelError)},e.prototype.logUserIn=function(e){return this.http.post("/api/user/login",e).map(this.handelResponse)["catch"](this.handelError)},e.prototype.logUserOut=function(){return localStorage.removeItem("id_token"),localStorage.removeItem("current_user"),this.isLoggedIn=!1,this.router.navigate(["/"]),"logout"},e.prototype.updateUser=function(e){return(null===e.password||e.password)&&delete e.password,this.http.post("/api/user/update",e).map(this.handelResponse)["catch"](this.handelError)},e.prototype.checkAuthority=function(e,t){var r=["student","advisor","admin","superadmin"];return!!(t&&r.indexOf(t)>=r.indexOf(e))},e.prototype.handelResponse=function(e){var t=e.json();return this.isLoggedIn=!0,this.currentUser=t,t||{}},e.prototype.handelError=function(e){return console.log("err @authService: ",e),this.isLoggedIn=!1,Observable_1.Observable["throw"](e)},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http,angular2_jwt_1.AuthHttp,router_1.Router])],e)}();exports.AuthService=AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJzaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIl9fZGVjb3JhdGUiLCJ0aGlzIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJkIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX21ldGFkYXRhIiwiayIsInYiLCJtZXRhZGF0YSIsImNvcmVfMSIsInJlcXVpcmUiLCJodHRwXzEiLCJyb3V0ZXJfMSIsIk9ic2VydmFibGVfMSIsImFuZ3VsYXIyX2p3dF8xIiwiQXV0aFNlcnZpY2UiLCJodHRwIiwiYXV0aEh0dHAiLCJyb3V0ZXIiLCJwcm90b3R5cGUiLCJnZXRDdXJyZW50VXNlciIsInVzZXJJZCIsImdldCIsIm1hcCIsImhhbmRlbFJlc3BvbnNlIiwiaGFuZGVsRXJyb3IiLCJzaWduVXAiLCJkYXRhIiwicG9zdCIsImxvZ1VzZXJJbiIsImxvZ1VzZXJPdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiaXNMb2dnZWRJbiIsIm5hdmlnYXRlIiwidXBkYXRlVXNlciIsInBhc3N3b3JkIiwiY2hlY2tBdXRob3JpdHkiLCJyZXF1aXJlZFJvbGUiLCJ1c2VyUm9sZSIsInJvbGVzIiwiaW5kZXhPZiIsInJlcyIsImpzb24iLCJjdXJyZW50VXNlciIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJPYnNlcnZhYmxlIiwiSW5qZWN0YWJsZSIsIkh0dHAiLCJBdXRoSHR0cCIsIlJvdXRlciIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQ0EsSUFBSUEsWUFBY0MsTUFBUUEsS0FBS0QsWUFBZSxTQUFVRSxFQUFZQyxFQUFRQyxFQUFLQyxHQUM3RSxHQUEySEMsR0FBdkhDLEVBQUlDLFVBQVVDLE9B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QyxZQUFXQSIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBodHRwXzEgPSByZXF1aXJlKCdAYW5ndWxhci9odHRwJyk7XG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCdyeGpzL09ic2VydmFibGUnKTtcbnZhciBhbmd1bGFyMl9qd3RfMSA9IHJlcXVpcmUoJ2FuZ3VsYXIyLWp3dCcpO1xucmVxdWlyZSgncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZicpO1xucmVxdWlyZSgncnhqcy9hZGQvb3BlcmF0b3IvZG8nKTtcbnJlcXVpcmUoJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5Jyk7XG5yZXF1aXJlKCdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCcpO1xucmVxdWlyZSgncnhqcy9hZGQvb3BlcmF0b3IvbWFwJyk7XG4vLyBVc2luZyBhdXRoIHNlcnZpY2UgdG8ga2VlcCB0cmFjayBvZiB1c2VycycgbG9naW4gc3RhdHVzIGFjcm9zcyBhbGwgY29tcG9uZW50XG52YXIgQXV0aFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEF1dGhTZXJ2aWNlKGh0dHAsIGF1dGhIdHRwLCByb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgdGhpcy5hdXRoSHR0cCA9IGF1dGhIdHRwO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB9XG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmdldEN1cnJlbnRVc2VyID0gZnVuY3Rpb24gKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoXCIvYXBpL3VzZXIvY3VycmVudFVzZXIvXCIgKyB1c2VySWQpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcik7XG4gICAgfTtcbiAgICBBdXRoU2VydmljZS5wcm90b3R5cGUuc2lnblVwID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3VzZXIvc2lnbnVwJywgZGF0YSlcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKTtcbiAgICB9O1xuICAgIEF1dGhTZXJ2aWNlLnByb3RvdHlwZS5sb2dVc2VySW4gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvdXNlci9sb2dpbicsIGRhdGEpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcik7XG4gICAgfTtcbiAgICBBdXRoU2VydmljZS5wcm90b3R5cGUubG9nVXNlck91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50X3VzZXInKTtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgcmV0dXJuICdsb2dvdXQnO1xuICAgIH07XG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvL0Rvbid0IGxldCB1c2VyIGNoYW5nZSBwYXNzd29yZCB0aHJvdWdoIGZyb250IGVuZCwgYnV0IHRocm91Z2ggZW1haWwgcHcgcmVzZXRcbiAgICAgICAgaWYgKGRhdGEucGFzc3dvcmQgPT09IG51bGwgfHwgZGF0YS5wYXNzd29yZCkge1xuICAgICAgICAgICAgZGVsZXRlIGRhdGEucGFzc3dvcmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3VzZXIvdXBkYXRlJywgZGF0YSlcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKTtcbiAgICB9O1xuICAgIEF1dGhTZXJ2aWNlLnByb3RvdHlwZS5jaGVja0F1dGhvcml0eSA9IGZ1bmN0aW9uIChyZXF1aXJlZFJvbGUsIHVzZXJSb2xlKSB7XG4gICAgICAgIHZhciByb2xlcyA9IFsnc3R1ZGVudCcsICdhZHZpc29yJywgJ2FkbWluJywgJ3N1cGVyYWRtaW4nXTtcbiAgICAgICAgaWYgKHVzZXJSb2xlKSB7XG4gICAgICAgICAgICBpZiAocm9sZXMuaW5kZXhPZih1c2VyUm9sZSkgPj0gcm9sZXMuaW5kZXhPZihyZXF1aXJlZFJvbGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmhhbmRlbFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGVjazEnLCB0aGlzLmlzTG9nZ2VkSW4pO1xuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hlY2syJywgdGhpcy5pc0xvZ2dlZEluKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IGRhdGE7XG4gICAgICAgIHJldHVybiBkYXRhIHx8IHt9O1xuICAgIH07XG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmhhbmRlbEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyIEBhdXRoU2VydmljZTogJywgZXJyKTtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xuICAgIH07XG4gICAgQXV0aFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2h0dHBfMS5IdHRwLCBhbmd1bGFyMl9qd3RfMS5BdXRoSHR0cCwgcm91dGVyXzEuUm91dGVyXSlcbiAgICBdLCBBdXRoU2VydmljZSk7XG4gICAgcmV0dXJuIEF1dGhTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydHMuQXV0aFNlcnZpY2UgPSBBdXRoU2VydmljZTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBBdXRoSHR0cCB9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5cbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7IEF1dGggfSBmcm9tICcuLi90eXBlcy9hdXRoJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi90eXBlcy91c2VyJztcblxuLy8gVXNpbmcgYXV0aCBzZXJ2aWNlIHRvIGtlZXAgdHJhY2sgb2YgdXNlcnMnIGxvZ2luIHN0YXR1cyBhY3Jvc3MgYWxsIGNvbXBvbmVudFxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICAgcHVibGljIGlzTG9nZ2VkSW46IGJvb2xlYW47XG4gICAgIHB1YmxpYyByZWRpcmVjdFVybDogc3RyaW5nO1xuICAgICBwdWJsaWMgY3VycmVudFVzZXI6IFVzZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgICAgICBwcml2YXRlIGF1dGhIdHRwOiBBdXRoSHR0cCxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkgeyB9XG5cbiAgICBnZXRDdXJyZW50VXNlcih1c2VySWQpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KGAvYXBpL3VzZXIvY3VycmVudFVzZXIvJHt1c2VySWR9YClcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIHNpZ25VcChkYXRhOiBBdXRoKTogT2JzZXJ2YWJsZTxBdXRoPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS91c2VyL3NpZ251cCcsIGRhdGEpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBsb2dVc2VySW4oZGF0YTogQXV0aCk6IE9ic2VydmFibGU8QXV0aD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvdXNlci9sb2dpbicsIGRhdGEpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBsb2dVc2VyT3V0KCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKVxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudF91c2VyJylcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKVxuICAgICAgICByZXR1cm4gJ2xvZ291dCc7XG4gICAgfVxuICAgXG4gICAgdXBkYXRlVXNlcihkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICAvL0Rvbid0IGxldCB1c2VyIGNoYW5nZSBwYXNzd29yZCB0aHJvdWdoIGZyb250IGVuZCwgYnV0IHRocm91Z2ggZW1haWwgcHcgcmVzZXRcbiAgICAgICAgaWYoZGF0YS5wYXNzd29yZCA9PT0gbnVsbCB8fCBkYXRhLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICBkZWxldGUgZGF0YS5wYXNzd29yZFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvdXNlci91cGRhdGUnLCBkYXRhKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgY2hlY2tBdXRob3JpdHkocmVxdWlyZWRSb2xlOiBzdHJpbmcsIHVzZXJSb2xlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgcm9sZXMgPSBbJ3N0dWRlbnQnLCAnYWR2aXNvcicsICdhZG1pbicsICdzdXBlcmFkbWluJ107XG4gICAgICAgIFxuICAgICAgICBpZih1c2VyUm9sZSkge1xuICAgICAgICAgICAgaWYocm9sZXMuaW5kZXhPZih1c2VyUm9sZSkgPj0gcm9sZXMuaW5kZXhPZihyZXF1aXJlZFJvbGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaGFuZGVsUmVzcG9uc2UocmVzOiBSZXNwb25zZSkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGRhdGEgPSByZXMuanNvbigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hlY2sxJywgdGhpcy5pc0xvZ2dlZEluKTtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoZWNrMicsIHRoaXMuaXNMb2dnZWRJbik7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkYXRhO1xuICAgICAgICByZXR1cm4gZGF0YSB8fCB7fTtcbiAgICB9XG4gICAgXG4gICAgIGhhbmRlbEVycm9yKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnIgQGF1dGhTZXJ2aWNlOiAnLCBlcnIpO1xuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
