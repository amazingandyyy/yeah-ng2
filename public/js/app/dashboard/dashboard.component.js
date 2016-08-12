"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var c,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(c=e[n])&&(i=(s<3?c(i):s>3?c(t,r,i):c(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),router_1=require("@angular/router"),auth_service_1=require("../shared/services/auth.service"),socket_service_1=require("../shared/services/socket.service"),DashboardComponent=function(){function e(e,t,r){this.authService=e,this.router=t,this.socket=r,this.currentUser={},this.profileToggled=!1,this.inboxToggled=!1}return e.prototype.checkMenuStyle=function(e){this.currentSession=e},e.prototype.logout=function(){this.authService.logUserOut()},e.prototype.getUser=function(){var e=this;this.authService.getCurrentUser(JSON.parse(localStorage.getItem("current_user"))._id).subscribe(function(t){e.currentUserRole=t.role,e.currentUser=t},function(t){e.authService.logUserOut(),console.log(t)})},e.prototype.ngOnInit=function(){console.log("check"),this.currentUser=JSON.parse(localStorage.getItem("current_user")),this.getUser()},e=__decorate([core_1.Component({moduleId:module.id,selector:"yeah-dashboard",templateUrl:"dashboard.component.html",directives:[router_1.ROUTER_DIRECTIVES],providers:[auth_service_1.AuthService,socket_service_1.SocketService],styleUrls:["dashboard.style.css"]}),__metadata("design:paramtypes",[auth_service_1.AuthService,router_1.Router,socket_service_1.SocketService])],e)}();exports.DashboardComponent=DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiX19kZWNvcmF0ZSIsInRoaXMiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImQiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiY29yZV8xIiwicmVxdWlyZSIsInJvdXRlcl8xIiwiYXV0aF9zZXJ2aWNlXzEiLCJzb2NrZXRfc2VydmljZV8xIiwiRGFzaGJvYXJkQ29tcG9uZW50IiwiYXV0aFNlcnZpY2UiLCJyb3V0ZXIiLCJzb2NrZXQiLCJjdXJyZW50VXNlciIsInByb2ZpbGVUb2dnbGVkIiwiaW5ib3hUb2dnbGVkIiwicHJvdG90eXBlIiwiY2hlY2tNZW51U3R5bGUiLCJpdGVtIiwiY3VycmVudFNlc3Npb24iLCJsb2dvdXQiLCJsb2dVc2VyT3V0IiwiZ2V0VXNlciIsIl90aGlzIiwiZ2V0Q3VycmVudFVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX2lkIiwic3Vic2NyaWJlIiwidXNlciIsImN1cnJlbnRVc2VyUm9sZSIsInJvbGUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJuZ09uSW5pdCIsIkNvbXBvbmVudCIsIm1vZHVsZUlkIiwibW9kdWxlIiwiaWQiLCJzZWxlY3RvciIsInRlbXBsYXRlVXJsIiwiZGlyZWN0aXZlcyIsIlJPVVRFUl9ESVJFQ1RJVkVTIiwicHJvdmlkZXJzIiwiQXV0aFNlcnZpY2UiLCJTb2NrZXRTZXJ2aWNlIiwic3R5bGVVcmxzIiwiUm91dGVyIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFDQSxJQUFJQSxZQUFjQyxNQUFRQSxLQUFLRCxZQUFlLFNBQVVFLEVBQVlDLEVBQVFDLEVBQUtDLEdBQzdFLEdBQTJIQyxHQUF2SEMsRUFBSUMsVUFBVUMsT0FBUUMsRUFBSUgsRUFBSSxFQUFJSixFQUFrQixPQUFURSxFQUFnQkEsRUFBT00sT0FBT0MseUJBQXlCVCxFQUFRQyxHQUFPQyxDQUNySCxJQUF1QixnQkFBWlEsVUFBb0Qsa0JBQXJCQSxTQUFRQyxTQUF5QkosRUFBSUcsUUFBUUMsU0FBU1osRUFBWUMsRUFBUUMsRUFBS0MsT0FDcEgsS0FBSyxHQUFJVSxHQUFJYixFQUFXTyxPQUFTLEVBQUdNLEdBQUssRUFBR0EsS0FBU1QsRUFBSUosRUFBV2EsTUFBSUwsR0FBS0gsRUFBSSxFQUFJRCxFQUFFSSxHQUFLSCxFQUFJLEVBQUlELEVBQUVILEVBQVFDLEVBQUtNLEdBQUtKLEVBQUVILEVBQVFDLEtBQVNNLEVBQ2hKLE9BQU9ILEdBQUksR0FBS0csR0FBS0MsT0FBT0ssZUFBZWIsRUFBUUMsRUFBS00sR0FBSUEsR0FFNURPLFdBQWNoQixNQUFRQSxLQUFLZ0IsWUFBZSxTQUFVQyxFQUFHQyxHQUN2RCxHQUF1QixnQkFBWk4sVUFBb0Qsa0JBQXJCQSxTQUFRTyxTQUF5QixNQUFPUCxTQUFRTyxTQUFTRixFQUFHQyxJQ1IxR0UsT0FBQUMsUUFBa0MsaUJBQ2xDQyxTQUFBRCxRQUEwQyxtQkFFMUNFLGVBQUFGLFFBQTRCLG1DQUM1QkcsaUJBQUFILFFBQThCLHFDQVk5QkksbUJBQUEsV0FRSSxRQUFBQSxHQUNZQyxFQUNBQyxFQUNBQyxHQUZBNUIsS0FBQTBCLFlBQUFBLEVBQ0ExQixLQUFBMkIsT0FBQUEsRUFDQTNCLEtBQUE0QixPQUFBQSxFQVRaNUIsS0FBQTZCLGVBQ0E3QixLQUFBOEIsZ0JBQTBCLEVBQzFCOUIsS0FBQStCLGNBQXdCLEVBdUM1QixNQTdCSU4sR0FBQU8sVUFBQUMsZUFBQSxTQUFlQyxHQUNYbEMsS0FBS21DLGVBQWlCRCxHQUcxQlQsRUFBQU8sVUFBQUksT0FBQSxXQUdJcEMsS0FBSzBCLFlBQVlXLGNBR3JCWixFQUFBTyxVQUFBTSxRQUFBLFdBQUEsR0FBQUMsR0FBQXZDLElBQ0lBLE1BQUswQixZQUFZYyxlQUFlQyxLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLGlCQUFpQkMsS0FDNUVDLFVBQ0QsU0FBQUMsR0FDSVIsRUFBS1MsZ0JBQWtCRCxFQUFLRSxLQUM1QlYsRUFBS1YsWUFBY2tCLEdBRXZCLFNBQUFHLEdBQ0lYLEVBQUtiLFlBQVlXLGFBQ2pCYyxRQUFRQyxJQUFTRixNQUk3QnpCLEVBQUFPLFVBQUFxQixTQUFBLFdBQ0lGLFFBQVFDLElBQUksU0FDWnBELEtBQUs2QixZQUFjWSxLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLGlCQUNuRDVDLEtBQUtzQyxXQWpEYmIsRUFBQTFCLFlBQUNxQixPQUFBa0MsV0FDR0MsU0FBVUMsT0FBT0MsR0FDakJDLFNBQVUsaUJBQ1ZDLFlBQWEsMkJBQ2JDLFlBQWF0QyxTQUFBdUMsbUJBQ2JDLFdBQVl2QyxlQUFBd0MsWUFBYXZDLGlCQUFBd0MsZUFDekJDLFdBQVkseUJENENSakQsV0FBVyxxQkFBc0JPLGVBQWV3QyxZQUFhekMsU0FBUzRDLE9BQVExQyxpQkFBaUJ3QyxpQkFDaEd2QyxLQzFDTTBDLFNBQUExQyxtQkFBa0JBIiwiZmlsZSI6ImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3JvdXRlcicpO1xudmFyIGF1dGhfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZScpO1xudmFyIHNvY2tldF9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9zaGFyZWQvc2VydmljZXMvc29ja2V0LnNlcnZpY2UnKTtcbnZhciBEYXNoYm9hcmRDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERhc2hib2FyZENvbXBvbmVudChhdXRoU2VydmljZSwgcm91dGVyLCBzb2NrZXQpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZSA9IGF1dGhTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XG4gICAgICAgIC8vIHNlcnZlIGZvciB0aGUgdHdvIGRyb3Bkb3duIGxpc3QgaW4gdG9wLXJpZ2h0IG9mIHRoZSBuYXZiYXJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHt9O1xuICAgICAgICB0aGlzLnByb2ZpbGVUb2dnbGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5ib3hUb2dnbGVkID0gZmFsc2U7XG4gICAgfVxuICAgIERhc2hib2FyZENvbXBvbmVudC5wcm90b3R5cGUuY2hlY2tNZW51U3R5bGUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRTZXNzaW9uID0gaXRlbTtcbiAgICB9O1xuICAgIERhc2hib2FyZENvbXBvbmVudC5wcm90b3R5cGUubG9nb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyB0aGUgc2VydmljZSB3aWxsIGRlbGV0ZSB1c2VyIGRhdGEgYW5kIHRva2VuIGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAvLyBhbmQgYnJpbmcgdXNlciBvdXQgb2YgdGhlIGRhc2hib2FyZFxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKTtcbiAgICB9O1xuICAgIERhc2hib2FyZENvbXBvbmVudC5wcm90b3R5cGUuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSkuX2lkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAodXNlcikge1xuICAgICAgICAgICAgX3RoaXMuY3VycmVudFVzZXJSb2xlID0gdXNlci5yb2xlO1xuICAgICAgICAgICAgX3RoaXMuY3VycmVudFVzZXIgPSB1c2VyO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEYXNoYm9hcmRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2snKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKTtcbiAgICAgICAgdGhpcy5nZXRVc2VyKCk7XG4gICAgfTtcbiAgICBEYXNoYm9hcmRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XG4gICAgICAgICAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICd5ZWFoLWRhc2hib2FyZCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbcm91dGVyXzEuUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbYXV0aF9zZXJ2aWNlXzEuQXV0aFNlcnZpY2UsIHNvY2tldF9zZXJ2aWNlXzEuU29ja2V0U2VydmljZV0sXG4gICAgICAgICAgICBzdHlsZVVybHM6IFsnZGFzaGJvYXJkLnN0eWxlLmNzcyddXG4gICAgICAgIH0pLCBcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbYXV0aF9zZXJ2aWNlXzEuQXV0aFNlcnZpY2UsIHJvdXRlcl8xLlJvdXRlciwgc29ja2V0X3NlcnZpY2VfMS5Tb2NrZXRTZXJ2aWNlXSlcbiAgICBdLCBEYXNoYm9hcmRDb21wb25lbnQpO1xuICAgIHJldHVybiBEYXNoYm9hcmRDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0cy5EYXNoYm9hcmRDb21wb25lbnQgPSBEYXNoYm9hcmRDb21wb25lbnQ7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAneWVhaC1kYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBTb2NrZXRTZXJ2aWNlXSxcbiAgICBzdHlsZVVybHM6IFsnZGFzaGJvYXJkLnN0eWxlLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIC8vIHNlcnZlIGZvciB0aGUgdHdvIGRyb3Bkb3duIGxpc3QgaW4gdG9wLXJpZ2h0IG9mIHRoZSBuYXZiYXJcbiAgICBjdXJyZW50VXNlciA9IHt9O1xuICAgIHByb2ZpbGVUb2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW5ib3hUb2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgY3VycmVudFNlc3Npb246IHN0cmluZztcbiAgICBjdXJyZW50VXNlclJvbGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBzb2NrZXQ6IFNvY2tldFNlcnZpY2VcbiAgICApe31cblxuICAgIGNoZWNrTWVudVN0eWxlKGl0ZW06IHN0cmluZykge1xuICAgICAgICB0aGlzLmN1cnJlbnRTZXNzaW9uID0gaXRlbTtcbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIC8vIHRoZSBzZXJ2aWNlIHdpbGwgZGVsZXRlIHVzZXIgZGF0YSBhbmQgdG9rZW4gaW4gbG9jYWxTdG9yYWdlXG4gICAgICAgIC8vIGFuZCBicmluZyB1c2VyIG91dCBvZiB0aGUgZGFzaGJvYXJkXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpXG4gICAgfVxuXG4gICAgZ2V0VXNlcigpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRDdXJyZW50VXNlcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSkuX2lkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXJSb2xlID0gdXNlci5yb2xlO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgICAgICBcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
