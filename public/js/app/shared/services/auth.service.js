"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var a,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(s=(n<3?a(s):n>3?a(t,r,s):a(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),http_1=require("@angular/http"),router_1=require("@angular/router"),Observable_1=require("rxjs/Observable"),angular2_jwt_1=require("angular2-jwt");require("rxjs/add/observable/of"),require("rxjs/add/operator/do"),require("rxjs/add/operator/delay"),require("rxjs/add/operator/catch"),require("rxjs/add/operator/map");var AuthService=function(){function e(e,t,r){this.http=e,this.authHttp=t,this.router=r}return e.prototype.getCurrentUser=function(e){return this.authHttp.get("/api/user/currentUser/"+e).map(this.handelResponse)["catch"](this.handelError)},e.prototype.getUserByEmail=function(e){return this.authHttp.get("/api/user/getUserByEmail/"+e).map(function(e){return e.json()||{}})["catch"](function(e){return Observable_1.Observable["throw"](e)})},e.prototype.signUp=function(e){return this.http.post("/api/user/signup",e).map(this.handelResponse)["catch"](this.handelError)},e.prototype.logUserIn=function(e){return this.http.post("/api/user/login",e).map(this.handelResponse)["catch"](this.handelError)},e.prototype.logUserOut=function(){return localStorage.removeItem("id_token"),localStorage.removeItem("current_user"),this.isLoggedIn=!1,this.router.navigate(["/"]),"logout"},e.prototype.updateCurrentUser=function(e){return(null===e.password||e.password)&&delete e.password,this.authHttp.post("/api/user/update",e).map(this.handelResponse)["catch"](this.handelError)},e.prototype.checkAuthority=function(e,t){var r=["student","advisor","supervisor","admin","superadmin"];return!!(t&&r.indexOf(t)>=r.indexOf(e))},e.prototype.handelResponse=function(e){var t=e.json();return this.isLoggedIn=!0,this.currentUser=t,t||{}},e.prototype.handelError=function(e){return console.log("err @authService: ",e),this.isLoggedIn=!1,Observable_1.Observable["throw"](e)},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http,angular2_jwt_1.AuthHttp,router_1.Router])],e)}();exports.AuthService=AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJzaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIl9fZGVjb3JhdGUiLCJ0aGlzIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJkIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX21ldGFkYXRhIiwiayIsInYiLCJtZXRhZGF0YSIsImNvcmVfMSIsInJlcXVpcmUiLCJodHRwXzEiLCJyb3V0ZXJfMSIsIk9ic2VydmFibGVfMSIsImFuZ3VsYXIyX2p3dF8xIiwiQXV0aFNlcnZpY2UiLCJodHRwIiwiYXV0aEh0dHAiLCJyb3V0ZXIiLCJwcm90b3R5cGUiLCJnZXRDdXJyZW50VXNlciIsInVzZXJJZCIsImdldCIsIm1hcCIsImhhbmRlbFJlc3BvbnNlIiwiaGFuZGVsRXJyb3IiLCJnZXRVc2VyQnlFbWFpbCIsImVtYWlsIiwicmVzIiwianNvbiIsImVyciIsIk9ic2VydmFibGUiLCJzaWduVXAiLCJkYXRhIiwicG9zdCIsImxvZ1VzZXJJbiIsImxvZ1VzZXJPdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiaXNMb2dnZWRJbiIsIm5hdmlnYXRlIiwidXBkYXRlQ3VycmVudFVzZXIiLCJwYXNzd29yZCIsImNoZWNrQXV0aG9yaXR5IiwicmVxdWlyZWRSb2xlIiwidXNlclJvbGUiLCJyb2xlc0FycmF5IiwiaW5kZXhPZiIsImN1cnJlbnRVc2VyIiwiY29uc29sZSIsImxvZyIsIkluamVjdGFibGUiLCJIdHRwIiwiQXV0aEh0dHAiLCJSb3V0ZXIiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUNBLElBQUlBLFlBQWNDLE1BQVFBLEtBQUtELFlBQWUsU0FBVUUsRUFBWUMsRUFBUUMsRUFB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SSxVQUFBTSxZQUFBLFNBQVlLLEdBR1QsTUFGQW1CLFNBQVFDLElBQUkscUJBQXNCcEIsR0FDbEN6QyxLQUFLa0QsWUFBYSxFQUNYMUIsYUFBQWtCLFdBQUFsQixTQUFpQmlCLElBL0VoQ2YsRUFBQTNCLFlBQUNxQixPQUFBMEMsYUR3RU85QyxXQUFXLHFCQUFzQk0sT0FBT3lDLEtBQU10QyxlQUFldUMsU0FBVXpDLFNBQVMwQyxVQUNqRnZDLEtDeEVNd0MsU0FBQXhDLFlBQVdBIiwiZmlsZSI6InNoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIGh0dHBfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2h0dHAnKTtcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3JvdXRlcicpO1xudmFyIE9ic2VydmFibGVfMSA9IHJlcXVpcmUoJ3J4anMvT2JzZXJ2YWJsZScpO1xudmFyIGFuZ3VsYXIyX2p3dF8xID0gcmVxdWlyZSgnYW5ndWxhcjItand0Jyk7XG5yZXF1aXJlKCdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJyk7XG5yZXF1aXJlKCdyeGpzL2FkZC9vcGVyYXRvci9kbycpO1xucmVxdWlyZSgncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknKTtcbnJlcXVpcmUoJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJyk7XG5yZXF1aXJlKCdyeGpzL2FkZC9vcGVyYXRvci9tYXAnKTtcbi8vIFVzaW5nIGF1dGggc2VydmljZSB0byBrZWVwIHRyYWNrIG9mIHVzZXJzJyBsb2dpbiBzdGF0dXMgYWNyb3NzIGFsbCBjb21wb25lbnRcbnZhciBBdXRoU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXV0aFNlcnZpY2UoaHR0cCwgYXV0aEh0dHAsIHJvdXRlcikge1xuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xuICAgICAgICB0aGlzLmF1dGhIdHRwID0gYXV0aEh0dHA7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIH1cbiAgICBBdXRoU2VydmljZS5wcm90b3R5cGUuZ2V0Q3VycmVudFVzZXIgPSBmdW5jdGlvbiAodXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLmdldChcIi9hcGkvdXNlci9jdXJyZW50VXNlci9cIiArIHVzZXJJZClcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKTtcbiAgICB9O1xuICAgIEF1dGhTZXJ2aWNlLnByb3RvdHlwZS5nZXRVc2VyQnlFbWFpbCA9IGZ1bmN0aW9uIChlbWFpbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoXCIvYXBpL3VzZXIvZ2V0VXNlckJ5RW1haWwvXCIgKyBlbWFpbClcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKSB8fCB7fTsgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZV8xLk9ic2VydmFibGUudGhyb3coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBBdXRoU2VydmljZS5wcm90b3R5cGUuc2lnblVwID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3VzZXIvc2lnbnVwJywgZGF0YSlcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKTtcbiAgICB9O1xuICAgIEF1dGhTZXJ2aWNlLnByb3RvdHlwZS5sb2dVc2VySW4gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvdXNlci9sb2dpbicsIGRhdGEpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcik7XG4gICAgfTtcbiAgICBBdXRoU2VydmljZS5wcm90b3R5cGUubG9nVXNlck91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50X3VzZXInKTtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKTtcbiAgICAgICAgcmV0dXJuICdsb2dvdXQnO1xuICAgIH07XG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLnVwZGF0ZUN1cnJlbnRVc2VyID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy9Eb24ndCBsZXQgdGhpcyBudWxsIHBhc3N3b3JkIHJlcGxhY2UgdGhlIGJhY2tlbmQgcGFzc3dvcmRcbiAgICAgICAgLy8gYnV0IHVzZXIgY2FuIHJlcGxhY2UgdGgzIGJhY2tlbmQgcGFzc3dvcmQgdGhyb3VnaCBlbWFpbCBwdyByZXNldCAoLXRvZG8pXG4gICAgICAgIGlmIChkYXRhLnBhc3N3b3JkID09PSBudWxsIHx8IGRhdGEucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhLnBhc3N3b3JkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLnBvc3QoJy9hcGkvdXNlci91cGRhdGUnLCBkYXRhKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpO1xuICAgIH07XG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmNoZWNrQXV0aG9yaXR5ID0gZnVuY3Rpb24gKHJlcXVpcmVkUm9sZSwgdXNlclJvbGUpIHtcbiAgICAgICAgdmFyIHJvbGVzQXJyYXkgPSBbJ3N0dWRlbnQnLCAnYWR2aXNvcicsICdzdXBlcnZpc29yJywgJ2FkbWluJywgJ3N1cGVyYWRtaW4nXTtcbiAgICAgICAgaWYgKHVzZXJSb2xlKSB7XG4gICAgICAgICAgICBpZiAocm9sZXNBcnJheS5pbmRleE9mKHVzZXJSb2xlKSA+PSByb2xlc0FycmF5LmluZGV4T2YocmVxdWlyZWRSb2xlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIEF1dGhTZXJ2aWNlLnByb3RvdHlwZS5oYW5kZWxSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIGRhdGEgPSByZXMuanNvbigpO1xuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIGRhdGEgfHwge307XG4gICAgfTtcbiAgICBBdXRoU2VydmljZS5wcm90b3R5cGUuaGFuZGVsRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnIgQGF1dGhTZXJ2aWNlOiAnLCBlcnIpO1xuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGVfMS5PYnNlcnZhYmxlLnRocm93KGVycik7XG4gICAgfTtcbiAgICBBdXRoU2VydmljZSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLCBcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbaHR0cF8xLkh0dHAsIGFuZ3VsYXIyX2p3dF8xLkF1dGhIdHRwLCByb3V0ZXJfMS5Sb3V0ZXJdKVxuICAgIF0sIEF1dGhTZXJ2aWNlKTtcbiAgICByZXR1cm4gQXV0aFNlcnZpY2U7XG59KCkpO1xuZXhwb3J0cy5BdXRoU2VydmljZSA9IEF1dGhTZXJ2aWNlO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEF1dGhIdHRwIH0gZnJvbSAnYW5ndWxhcjItand0JztcblxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuaW1wb3J0IHsgQXV0aCB9IGZyb20gJy4uL3R5cGVzL2F1dGgnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3R5cGVzL3VzZXInO1xuXG4vLyBVc2luZyBhdXRoIHNlcnZpY2UgdG8ga2VlcCB0cmFjayBvZiB1c2VycycgbG9naW4gc3RhdHVzIGFjcm9zcyBhbGwgY29tcG9uZW50XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgICBwdWJsaWMgaXNMb2dnZWRJbjogYm9vbGVhbjtcbiAgICAgcHVibGljIHJlZGlyZWN0VXJsOiBzdHJpbmc7XG4gICAgIHB1YmxpYyBjdXJyZW50VXNlcjogVXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgICAgIHByaXZhdGUgYXV0aEh0dHA6IEF1dGhIdHRwLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICAgKSB7IH1cblxuICAgIGdldEN1cnJlbnRVc2VyKHVzZXJJZCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoSHR0cC5nZXQoYC9hcGkvdXNlci9jdXJyZW50VXNlci8ke3VzZXJJZH1gKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgZ2V0VXNlckJ5RW1haWwoZW1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLmdldChgL2FwaS91c2VyL2dldFVzZXJCeUVtYWlsLyR7ZW1haWx9YClcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkgfHwge30pXG4gICAgICAgICAgICAuY2F0Y2goKGVycjogYW55KSA9PlxuICAgICAgICAgICAgICAgT2JzZXJ2YWJsZS50aHJvdyhlcnIpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgc2lnblVwKGRhdGE6IEF1dGgpOiBPYnNlcnZhYmxlPEF1dGg+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3VzZXIvc2lnbnVwJywgZGF0YSlcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGxvZ1VzZXJJbihkYXRhOiBBdXRoKTogT2JzZXJ2YWJsZTxBdXRoPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS91c2VyL2xvZ2luJywgZGF0YSlcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIGxvZ1VzZXJPdXQoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjdXJyZW50X3VzZXInKVxuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pXG4gICAgICAgIHJldHVybiAnbG9nb3V0JztcbiAgICB9XG4gICBcbiAgICB1cGRhdGVDdXJyZW50VXNlcihkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICAvL0Rvbid0IGxldCB0aGlzIG51bGwgcGFzc3dvcmQgcmVwbGFjZSB0aGUgYmFja2VuZCBwYXNzd29yZFxuICAgICAgICAvLyBidXQgdXNlciBjYW4gcmVwbGFjZSB0aDMgYmFja2VuZCBwYXNzd29yZCB0aHJvdWdoIGVtYWlsIHB3IHJlc2V0ICgtdG9kbylcbiAgICAgICAgaWYoZGF0YS5wYXNzd29yZCA9PT0gbnVsbCB8fCBkYXRhLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICBkZWxldGUgZGF0YS5wYXNzd29yZFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhIdHRwLnBvc3QoJy9hcGkvdXNlci91cGRhdGUnLCBkYXRhKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpXG4gICAgfVxuXG4gICAgY2hlY2tBdXRob3JpdHkocmVxdWlyZWRSb2xlOiBzdHJpbmcsIHVzZXJSb2xlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgcm9sZXNBcnJheSA9IFsnc3R1ZGVudCcsICdhZHZpc29yJywgJ3N1cGVydmlzb3InLCAnYWRtaW4nLCAnc3VwZXJhZG1pbiddO1xuICAgICAgICBcbiAgICAgICAgaWYodXNlclJvbGUpIHtcbiAgICAgICAgICAgIGlmKHJvbGVzQXJyYXkuaW5kZXhPZih1c2VyUm9sZSkgPj0gcm9sZXNBcnJheS5pbmRleE9mKHJlcXVpcmVkUm9sZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaGFuZGVsUmVzcG9uc2UocmVzOiBSZXNwb25zZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKCk7XG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBkYXRhO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRhdGEgfHwge307XG4gICAgfVxuICAgIFxuICAgICBoYW5kZWxFcnJvcihlcnI6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyIEBhdXRoU2VydmljZTogJywgZXJyKTtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycik7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
