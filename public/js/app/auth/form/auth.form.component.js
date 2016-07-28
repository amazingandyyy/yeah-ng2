"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var n,u=arguments.length,a=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(a=(u<3?n(a):u>3?n(t,r,a):n(t,r))||a);return u>3&&a&&Object.defineProperty(t,r,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),router_1=require("@angular/router"),auth_service_1=require("../../shared/services/auth.service"),AuthFormComponent=function(){function e(e,t){this.authService=e,this.router=t}return e.prototype.onSubmit=function(e){function t(e){localStorage.setItem("id_token",JSON.stringify(e.token)),localStorage.setItem("current_user",JSON.stringify(e.user)),r.router.navigate(["dashboard/account"])}var r=this;this.authService.logUserIn(e).subscribe(function(e){return t(e)},function(e){return console.log("err res: ",e)})},e.prototype.ngOnInit=function(){},e=__decorate([core_1.Component({moduleId:module.id,selector:"sp-authForm",templateUrl:"auth.form.component.html",styleUrls:["auth.form.style.css"],providers:[auth_service_1.AuthService]}),__metadata("design:paramtypes",[auth_service_1.AuthService,router_1.Router])],e)}();exports.AuthFormComponent=AuthFormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvZm9ybS9hdXRoLmZvcm0uY29tcG9uZW50LmpzIiwiYXV0aC9mb3JtL2F1dGguZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiX19kZWNvcmF0ZSIsInRoaXMiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImQiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiY29yZV8xIiwicmVxdWlyZSIsInJvdXRlcl8xIiwiYXV0aF9zZXJ2aWNlXzEiLCJBdXRoRm9ybUNvbXBvbmVudCIsImF1dGhTZXJ2aWNlIiwicm91dGVyIiwicHJvdG90eXBlIiwib25TdWJtaXQiLCJhdXRoIiwiaGFuZGxlUmVzcG9uc2UiLCJyZXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwidXNlciIsInNlbGYiLCJuYXZpZ2F0ZSIsImxvZ1VzZXJJbiIsInN1YnNjcmliZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJuZ09uSW5pdCIsIkNvbXBvbmVudCIsIm1vZHVsZUlkIiwibW9kdWxlIiwiaWQiLCJzZWxlY3RvciIsInRlbXBsYXRlVXJsIiwic3R5bGVVcmxzIiwicHJvdmlkZXJzIiwiQXV0aFNlcnZpY2UiLCJSb3V0ZXIiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUNBLElBQUlBLFlBQWNDLE1BQVFBLEtBQUtELFlBQWUsU0FBVUUsRUFBWUMsRUFBUUMsRUFBS0MsR0FDN0UsR0FBMkhDLEdBQXZIQyxFQUFJQyxVQUFVQyxPQUFRQyxFQUFJSCxFQUFJLEVBQUlKLEVBQWtCLE9BQVRFLEVBQWdCQSxFQUFPTSxPQUFPQyx5QkFBeUJULEVBQVFDLEdBQU9DLENBQ3JILElBQXVCLGdCQUFaUSxVQUFvRCxrQkFBckJBLFNBQVFDLFNBQXlCSixFQUFJRyxRQUFRQyxTQUFTWixFQUFZQyxFQUFRQyxFQUFLQyxPQUNwSCxLQUFLLEdBQUlVLEdBQUliLEVBQVdPLE9BQVMsRUFBR00sR0FBSyxFQUFHQSxLQUFTVCxFQUFJSixFQUFXYSxNQUFJTCxHQUFLSCxFQUFJLEVBQUlELEVBQUVJLEdBQUtILEVBQUksRUFBSUQsRUFBRUgsRUFBUUMsRUFBS00sR0FBS0osRUFBRUgsRUFBUUMsS0FBU00sRUFDaEosT0FBT0gsR0FBSSxHQUFLRyxHQUFLQyxPQUFPSyxlQUFlYixFQUFRQyxFQUFLTSxHQUFJQSxHQUU1RE8sV0FBY2hCLE1BQVFBLEtBQUtnQixZQUFlLFNBQVVDLEVBQUdDLEdBQ3ZELEdBQXVCLGdCQUFaTixVQUFvRCxrQkFBckJBLFNBQVFPLFNBQXlCLE1BQU9QLFNBQVFPLFNBQVNGLEVBQUdDLElDUjFHRSxPQUFBQyxRQUFrQyxpQkFFbENDLFNBQUFELFFBQXVCLG1CQUV2QkUsZUFBQUYsUUFBNEIsc0NBVzVCRyxrQkFBQSxXQUNJLFFBQUFBLEdBQW9CQyxFQUNSQyxHQURRMUIsS0FBQXlCLFlBQUFBLEVBQ1J6QixLQUFBMEIsT0FBQUEsRUFtQmhCLE1BakJJRixHQUFBRyxVQUFBQyxTQUFBLFNBQVNDLEdBUUwsUUFBQUMsR0FBd0JDLEdBQ3BCQyxhQUFhQyxRQUFRLFdBQVlDLEtBQUtDLFVBQVVKLEVBQUlLLFFBQ3BESixhQUFhQyxRQUFRLGVBQWdCQyxLQUFLQyxVQUFVSixFQUFJTSxPQUV4REMsRUFBS1osT0FBT2EsVUFBVSxzQkFYMUIsR0FBSUQsR0FBT3RDLElBQ1hBLE1BQUt5QixZQUFZZSxVQUFVWCxHQUN0QlksVUFDRCxTQUFBVixHQUFPLE1BQUFELEdBQWVDLElBQ3RCLFNBQUFXLEdBQU8sTUFBQUMsU0FBUUMsSUFBSSxZQUFhRixNQVd4Q2xCLEVBQUFHLFVBQUFrQixTQUFBLGFBNUJKckIsRUFBQXpCLFlBQUNxQixPQUFBMEIsV0FDR0MsU0FBVUMsT0FBT0MsR0FDakJDLFNBQVUsY0FDVkMsWUFBYSwyQkFDYkMsV0FBWSx1QkFDWkMsV0FBWTlCLGVBQUErQixlRDBCUnRDLFdBQVcscUJBQXNCTyxlQUFlK0IsWUFBYWhDLFNBQVNpQyxVQUN2RS9CLEtDeEJNZ0MsU0FBQWhDLGtCQUFpQkEiLCJmaWxlIjoiYXV0aC9mb3JtL2F1dGguZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XG52YXIgYXV0aF9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJyk7XG52YXIgQXV0aEZvcm1Db21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEF1dGhGb3JtQ29tcG9uZW50KGF1dGhTZXJ2aWNlLCByb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZSA9IGF1dGhTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB9XG4gICAgQXV0aEZvcm1Db21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKGF1dGgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJJbihhdXRoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAocmVzKSB7IHJldHVybiBoYW5kbGVSZXNwb25zZShyZXMpOyB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBjb25zb2xlLmxvZygnZXJyIHJlczogJywgZXJyKTsgfSk7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlcykge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgSlNPTi5zdHJpbmdpZnkocmVzLnRva2VuKSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudF91c2VyJywgSlNPTi5zdHJpbmdpZnkocmVzLnVzZXIpKTtcbiAgICAgICAgICAgIC8vIHNlbGYucm91dGVyLm5hdmlnYXRlKFsnZGFzaGJvYXJkL3BsYW5zJ10pXG4gICAgICAgICAgICBzZWxmLnJvdXRlci5uYXZpZ2F0ZShbJ2Rhc2hib2FyZC9hY2NvdW50J10pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBdXRoRm9ybUNvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgQXV0aEZvcm1Db21wb25lbnQgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XG4gICAgICAgICAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICdzcC1hdXRoRm9ybScsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2F1dGguZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gICAgICAgICAgICBzdHlsZVVybHM6IFsnYXV0aC5mb3JtLnN0eWxlLmNzcyddLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbYXV0aF9zZXJ2aWNlXzEuQXV0aFNlcnZpY2VdXG4gICAgICAgIH0pLCBcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbYXV0aF9zZXJ2aWNlXzEuQXV0aFNlcnZpY2UsIHJvdXRlcl8xLlJvdXRlcl0pXG4gICAgXSwgQXV0aEZvcm1Db21wb25lbnQpO1xuICAgIHJldHVybiBBdXRoRm9ybUNvbXBvbmVudDtcbn0oKSk7XG5leHBvcnRzLkF1dGhGb3JtQ29tcG9uZW50ID0gQXV0aEZvcm1Db21wb25lbnQ7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGggfSBmcm9tICcuLi8uLi9zaGFyZWQvdHlwZXMvYXV0aCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzcC1hdXRoRm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICdhdXRoLmZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydhdXRoLmZvcm0uc3R5bGUuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQXV0aEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cbiAgICAgICAgXG4gICAgb25TdWJtaXQoYXV0aDogQXV0aCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlckluKGF1dGgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVzID0+IGhhbmRsZVJlc3BvbnNlKHJlcyksXG4gICAgICAgICAgICBlcnIgPT4gY29uc29sZS5sb2coJ2VyciByZXM6ICcsIGVycilcbiAgICAgICAgICAgIClcblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZShyZXMpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZF90b2tlbicsIEpTT04uc3RyaW5naWZ5KHJlcy50b2tlbikpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRfdXNlcicsIEpTT04uc3RyaW5naWZ5KHJlcy51c2VyKSk7XG4gICAgICAgICAgICAvLyBzZWxmLnJvdXRlci5uYXZpZ2F0ZShbJ2Rhc2hib2FyZC9wbGFucyddKVxuICAgICAgICAgICAgc2VsZi5yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQvYWNjb3VudCddKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7IH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
