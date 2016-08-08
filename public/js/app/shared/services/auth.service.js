"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var a,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(s=(n<3?a(s):n>3?a(t,r,s):a(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),http_1=require("@angular/http"),router_1=require("@angular/router"),Observable_1=require("rxjs/Observable"),angular2_jwt_1=require("angular2-jwt");require("rxjs/add/observable/of"),require("rxjs/add/operator/do"),require("rxjs/add/operator/delay"),require("rxjs/add/operator/catch"),require("rxjs/add/operator/map");var AuthService=function(){function e(e,t,r){this.http=e,this.authHttp=t,this.router=r,this.isLoggedIn=!1}return e.prototype.getCurrentUser=function(e){return this.authHttp.get("/api/user/currentUser/"+e).map(this.handelResponse)["catch"](this.handelError)},e.prototype.signUp=function(e){return this.http.post("/api/user/signup",e).map(this.handelResponse)["catch"](this.handelError)},e.prototype.logUserIn=function(e){return this.http.post("/api/user/login",e).map(this.handelResponse)["catch"](this.handelError)},e.prototype.logUserOut=function(){return localStorage.removeItem("id_token"),localStorage.removeItem("current_user"),this.isLoggedIn=!1,this.router.navigate(["/"]),"logout"},e.prototype.handelResponse=function(e){var t=e.json();return this.isLoggedIn=!0,console.log("response @authService",t),t||{}},e.prototype.handelError=function(e){return console.log("err @authService: ",e),this.isLoggedIn=!1,Observable_1.Observable["throw"](e)},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http,angular2_jwt_1.AuthHttp,router_1.Router])],e)}();exports.AuthService=AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCJzaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIl9fZGVjb3JhdGUiLCJ0aGlzIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJkIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX21ldGFkYXRhIiwiayIsInYiLCJtZXRhZGF0YSIsImNvcmVfMSIsInJlcXVpcmUiLCJodHRwXzEiLCJyb3V0ZXJfMSIsIk9ic2VydmFibGVfMSIsImFuZ3VsYXIyX2p3dF8xIiwiQXV0aFNlcnZpY2UiLCJodHRwIiwiYXV0aEh0dHAiLCJyb3V0ZXIiLCJpc0xvZ2dlZEluIiwicHJvdG90eXBlIiwiZ2V0Q3VycmVudFVzZXIiLCJ1c2VySWQiLCJnZXQiLCJtYXAiLCJoYW5kZWxSZXNwb25zZSIsImhhbmRlbEVycm9yIiwic2lnblVwIiwiZGF0YSIsInBvc3QiLCJsb2dVc2VySW4iLCJsb2dVc2VyT3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIm5hdmlnYXRlIiwicmVzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJPYnNlcnZhYmxlIiwiSW5qZWN0YWJsZSIsIkh0dHAiLCJBdXRoSHR0cCIsIlJvdXRlciIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQ0EsSUFBSUEsWUFBY0MsTUFBUUEsS0FBS0QsWUFBZSxTQUFVRSxFQUFZQyxFQUFRQyxFQUFLQyxHQUM3RSxHQUEySEMsR0FBdkhDLEVBQUlDLFVBQVVDLE9BQVFDLEVBQUlILEVBQUksRUFBSUosRUFBa0IsT0FBVEUsRUFBZ0JBLEVBQU9NLE9BQU9DLHlCQUF5QlQsRUFBUUMsR0FBT0MsQ0FDckgsSUFBdUIsZ0JBQVpRLFVBQW9ELGtCQUFyQkEsU0FBUUMsU0FBeUJKLEVBQUlHLFFBQVFDLFNBQVNaLEVBQVlDLEVBQVFDLEVBQUtDLE9BQ3BILEtBQUssR0FBSVUsR0FBSWIsRUFBV08sT0FBUyxFQUFHTSxHQUFLLEVBQUdBLEtBQVNULEVBQUlKLEVBQVdhLE1BQUlMLEdBQUtILEVBQUksRUFBSUQsRUFBRUksR0FBS0gsRUFBSSxFQUFJRCxFQUFFSCxFQUFRQyxFQUFLTSxHQUFLSixFQUFFSCxFQUFRQyxLQUFTTSxFQUNoSixPQUFPSCxHQUFJLEdBQUtHLEdBQUtDLE9BQU9LLGVBQWViLEVBQVFDLEVBQUtNLEdBQUlBLEdBRTVETyxXQUFjaEIsTUFBUUEsS0FBS2dCLFlBQWUsU0FBVUMsRUFBR0MsR0FDdkQsR0FBdUIsZ0JBQVpOLFVBQW9ELGtCQUFyQkEsU0FBUU8sU0FBeUIsTUFBT1AsU0FBUU8sU0FBU0YsRUFBR0MsSUNSMUdFLE9BQUFDLFFBQTJCLGlCQUMzQkMsT0FBQUQsUUFBK0IsaUJBQy9CRSxTQUFBRixRQUF1QixtQkFDdkJHLGFBQUFILFFBQTJCLG1CQUMzQkksZUFBQUosUUFBeUIsZUFFekJBLFNBQU8sMEJBQ1BBLFFBQU8sd0JBQ1BBLFFBQU8sMkJBQ1BBLFFBQU8sMkJBQ1BBLFFBQU8sd0JBT1AsSUFBQUssYUFBQSxXQUlJLFFBQUFBLEdBQ1dDLEVBQ0FDLEVBQ0NDLEdBRkQ3QixLQUFBMkIsS0FBQUEsRUFDQTNCLEtBQUE0QixTQUFBQSxFQUNDNUIsS0FBQTZCLE9BQUFBLEVBTlo3QixLQUFBOEIsWUFBc0IsRUErQzFCLE1BdENJSixHQUFBSyxVQUFBQyxlQUFBLFNBQWVDLEdBQ1gsTUFBT2pDLE1BQUs0QixTQUFTTSxJQUFJLHlCQUF5QkQsR0FDN0NFLElBQUluQyxLQUFLb0MsZ0JBRFBwQyxTQUVJQSxLQUFLcUMsY0FHcEJYLEVBQUFLLFVBQUFPLE9BQUEsU0FBUUMsR0FDSixNQUFPdkMsTUFBSzJCLEtBQUthLEtBQUssbUJBQW9CRCxHQUNyQ0osSUFBSW5DLEtBQUtvQyxnQkFEUHBDLFNBRUlBLEtBQUtxQyxjQUdwQlgsRUFBQUssVUFBQVUsVUFBQSxTQUFXRixHQUNQLE1BQU92QyxNQUFLMkIsS0FBS2EsS0FBSyxrQkFBbUJELEdBQ3BDSixJQUFJbkMsS0FBS29DLGdCQURQcEMsU0FFSUEsS0FBS3FDLGNBR3BCWCxFQUFBSyxVQUFBVyxXQUFBLFdBS0ksTUFKQUMsY0FBYUMsV0FBVyxZQUN4QkQsYUFBYUMsV0FBVyxnQkFDeEI1QyxLQUFLOEIsWUFBYSxFQUNsQjlCLEtBQUs2QixPQUFPZ0IsVUFBVSxNQUNmLFVBR0huQixFQUFBSyxVQUFBSyxlQUFSLFNBQXVCVSxHQUNuQixHQUFJUCxHQUFPTyxFQUFJQyxNQUdmLE9BRkEvQyxNQUFLOEIsWUFBYSxFQUNsQmtCLFFBQVFDLElBQUksd0JBQXlCVixHQUM5QkEsT0FFSGIsRUFBQUssVUFBQU0sWUFBUixTQUFvQmEsR0FHaEIsTUFGQUYsU0FBUUMsSUFBSSxxQkFBc0JDLEdBQ2xDbEQsS0FBSzhCLFlBQWEsRUFDWE4sYUFBQTJCLFdBQUEzQixTQUFpQjBCLElBOUNoQ3hCLEVBQUEzQixZQUFDcUIsT0FBQWdDLGFEK0NPcEMsV0FBVyxxQkFBc0JNLE9BQU8rQixLQUFNNUIsZUFBZTZCLFNBQVUvQixTQUFTZ0MsVUFDakY3QixLQy9DTThCLFNBQUE5QixZQUFXQSIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciBodHRwXzEgPSByZXF1aXJlKCdAYW5ndWxhci9odHRwJyk7XG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcbnZhciBPYnNlcnZhYmxlXzEgPSByZXF1aXJlKCdyeGpzL09ic2VydmFibGUnKTtcbnZhciBhbmd1bGFyMl9qd3RfMSA9IHJlcXVpcmUoJ2FuZ3VsYXIyLWp3dCcpO1xucmVxdWlyZSgncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZicpO1xucmVxdWlyZSgncnhqcy9hZGQvb3BlcmF0b3IvZG8nKTtcbnJlcXVpcmUoJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5Jyk7XG5yZXF1aXJlKCdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCcpO1xucmVxdWlyZSgncnhqcy9hZGQvb3BlcmF0b3IvbWFwJyk7XG4vLyBVc2luZyBhdXRoIHNlcnZpY2UgdG8ga2VlcCB0cmFjayBvZiB1c2VycycgbG9naW4gc3RhdHVzIGFjcm9zcyBhbGwgY29tcG9uZW50XG52YXIgQXV0aFNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEF1dGhTZXJ2aWNlKGh0dHAsIGF1dGhIdHRwLCByb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgdGhpcy5hdXRoSHR0cCA9IGF1dGhIdHRwO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgfVxuICAgIEF1dGhTZXJ2aWNlLnByb3RvdHlwZS5nZXRDdXJyZW50VXNlciA9IGZ1bmN0aW9uICh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KFwiL2FwaS91c2VyL2N1cnJlbnRVc2VyL1wiICsgdXNlcklkKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpO1xuICAgIH07XG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLnNpZ25VcCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS91c2VyL3NpZ251cCcsIGRhdGEpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcik7XG4gICAgfTtcbiAgICBBdXRoU2VydmljZS5wcm90b3R5cGUubG9nVXNlckluID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCcvYXBpL3VzZXIvbG9naW4nLCBkYXRhKVxuICAgICAgICAgICAgLm1hcCh0aGlzLmhhbmRlbFJlc3BvbnNlKVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGVsRXJyb3IpO1xuICAgIH07XG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmxvZ1VzZXJPdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY3VycmVudF91c2VyJyk7XG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XG4gICAgICAgIHJldHVybiAnbG9nb3V0JztcbiAgICB9O1xuICAgIEF1dGhTZXJ2aWNlLnByb3RvdHlwZS5oYW5kZWxSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIGRhdGEgPSByZXMuanNvbigpO1xuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UgQGF1dGhTZXJ2aWNlJywgZGF0YSk7XG4gICAgICAgIHJldHVybiBkYXRhIHx8IHt9O1xuICAgIH07XG4gICAgQXV0aFNlcnZpY2UucHJvdG90eXBlLmhhbmRlbEVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyIEBhdXRoU2VydmljZTogJywgZXJyKTtcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlXzEuT2JzZXJ2YWJsZS50aHJvdyhlcnIpO1xuICAgIH07XG4gICAgQXV0aFNlcnZpY2UgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2h0dHBfMS5IdHRwLCBhbmd1bGFyMl9qd3RfMS5BdXRoSHR0cCwgcm91dGVyXzEuUm91dGVyXSlcbiAgICBdLCBBdXRoU2VydmljZSk7XG4gICAgcmV0dXJuIEF1dGhTZXJ2aWNlO1xufSgpKTtcbmV4cG9ydHMuQXV0aFNlcnZpY2UgPSBBdXRoU2VydmljZTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBBdXRoSHR0cCB9IGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5cbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVsYXknO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7IEF1dGggfSBmcm9tICcuLi90eXBlcy9hdXRoJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi90eXBlcy91c2VyJztcblxuLy8gVXNpbmcgYXV0aCBzZXJ2aWNlIHRvIGtlZXAgdHJhY2sgb2YgdXNlcnMnIGxvZ2luIHN0YXR1cyBhY3Jvc3MgYWxsIGNvbXBvbmVudFxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICBpc0xvZ2dlZEluOiBib29sZWFuID0gZmFsc2U7XG4gICAgcmVkaXJlY3RVcmw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cCxcbiAgICAgICAgcHVibGljIGF1dGhIdHRwOiBBdXRoSHR0cCxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICkgeyB9XG5cbiAgICBnZXRDdXJyZW50VXNlcih1c2VySWQpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aEh0dHAuZ2V0KGAvYXBpL3VzZXIvY3VycmVudFVzZXIvJHt1c2VySWR9YClcbiAgICAgICAgICAgIC5tYXAodGhpcy5oYW5kZWxSZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRlbEVycm9yKVxuICAgIH1cblxuICAgIHNpZ25VcCAoZGF0YTogQXV0aCk6IE9ic2VydmFibGU8QXV0aD57XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnL2FwaS91c2VyL3NpZ251cCcsIGRhdGEpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBsb2dVc2VySW4gKGRhdGE6IEF1dGgpOiBPYnNlcnZhYmxlPEF1dGg+e1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJy9hcGkvdXNlci9sb2dpbicsIGRhdGEpXG4gICAgICAgICAgICAubWFwKHRoaXMuaGFuZGVsUmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kZWxFcnJvcilcbiAgICB9XG5cbiAgICBsb2dVc2VyT3V0ICgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2N1cnJlbnRfdXNlcicpXG4gICAgICAgIHRoaXMuaXNMb2dnZWRJbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSlcbiAgICAgICAgcmV0dXJuICdsb2dvdXQnO1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGVsUmVzcG9uc2UocmVzOiBSZXNwb25zZSkge1xuICAgICAgICBsZXQgZGF0YSA9IHJlcy5qc29uKClcbiAgICAgICAgdGhpcy5pc0xvZ2dlZEluID0gdHJ1ZVxuICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UgQGF1dGhTZXJ2aWNlJywgZGF0YSk7XG4gICAgICAgIHJldHVybiBkYXRhIHx8IHt9O1xuICAgIH1cbiAgICBwcml2YXRlIGhhbmRlbEVycm9yKGVycjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnIgQGF1dGhTZXJ2aWNlOiAnLCBlcnIpO1xuICAgICAgICB0aGlzLmlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
