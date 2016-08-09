"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var c,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(i=(s<3?c(i):s>3?c(t,r,i):c(t,r))||i);return s>3&&i&&Object.defineProperty(t,r,i),i},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),router_1=require("@angular/router"),auth_service_1=require("../shared/services/auth.service"),socket_service_1=require("../shared/services/socket.service"),DashboardComponent=function(){function e(e,t,r){this.authService=e,this.router=t,this.socket=r,this.profileToggled=!1,this.inboxToggled=!1}return e.prototype.checkMenuStyle=function(e){this.currentSession=e},e.prototype.logout=function(){this.authService.logUserOut()},e.prototype.ngOnInit=function(){console.log("socket",this.socket),this.socket.addEventListener("test")},e=__decorate([core_1.Component({moduleId:module.id,selector:"yeah-dashboard",templateUrl:"dashboard.component.html",directives:[router_1.ROUTER_DIRECTIVES],providers:[auth_service_1.AuthService,socket_service_1.SocketService],styleUrls:["dashboard.style.css"]}),__metadata("design:paramtypes",[auth_service_1.AuthService,router_1.Router,socket_service_1.SocketService])],e)}();exports.DashboardComponent=DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiX19kZWNvcmF0ZSIsInRoaXMiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImQiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiY29yZV8xIiwicmVxdWlyZSIsInJvdXRlcl8xIiwiYXV0aF9zZXJ2aWNlXzEiLCJzb2NrZXRfc2VydmljZV8xIiwiRGFzaGJvYXJkQ29tcG9uZW50IiwiYXV0aFNlcnZpY2UiLCJyb3V0ZXIiLCJzb2NrZXQiLCJwcm9maWxlVG9nZ2xlZCIsImluYm94VG9nZ2xlZCIsInByb3RvdHlwZSIsImNoZWNrTWVudVN0eWxlIiwiaXRlbSIsImN1cnJlbnRTZXNzaW9uIiwibG9nb3V0IiwibG9nVXNlck91dCIsIm5nT25Jbml0IiwiY29uc29sZSIsImxvZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJDb21wb25lbnQiLCJtb2R1bGVJZCIsIm1vZHVsZSIsImlkIiwic2VsZWN0b3IiLCJ0ZW1wbGF0ZVVybCIsImRpcmVjdGl2ZXMiLCJST1VURVJfRElSRUNUSVZFUyIsInByb3ZpZGVycyIsIkF1dGhTZXJ2aWNlIiwiU29ja2V0U2VydmljZSIsInN0eWxlVXJscyIsIlJvdXRlciIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQ0EsSUFBSUEsWUFBY0MsTUFBUUEsS0FBS0QsWUFBZSxTQUFVRSxFQUFZQyxFQUFRQyxFQUFLQyxHQUM3RSxHQUEySEMsR0FBdkhDLEVBQUlDLFVBQVVDLE9BQVFDLEVBQUlILEVBQUksRUFBSUosRUFBa0IsT0FBVEUsRUFBZ0JBLEVBQU9NLE9BQU9DLHlCQUF5QlQsRUFBUUMsR0FBT0MsQ0FDckgsSUFBdUIsZ0JBQVpRLFVBQW9ELGtCQUFyQkEsU0FBUUMsU0FBeUJKLEVBQUlHLFFBQVFDLFNBQVNaLEVBQVlDLEVBQVFDLEVBQUtDLE9BQ3BILEtBQUssR0FBSVUsR0FBSWIsRUFBV08sT0FBUyxFQUFHTSxHQUFLLEVBQUdBLEtBQVNULEVBQUlKLEVBQVdhLE1BQUlMLEdBQUtILEVBQUksRUFBSUQsRUFBRUksR0FBS0gsRUFBSSxFQUFJRCxFQUFFSCxFQUFRQyxFQUFLTSxHQUFLSixFQUFFSCxFQUFRQyxLQUFTTSxFQUNoSixPQUFPSCxHQUFJLEdBQUtHLEdBQUtDLE9BQU9LLGVBQWViLEVBQVFDLEVBQUtNLEdBQUlBLEdBRTVETyxXQUFjaEIsTUFBUUEsS0FBS2dCLFlBQWUsU0FBVUMsRUFBR0MsR0FDdkQsR0FBdUIsZ0JBQVpOLFVBQW9ELGtCQUFyQkEsU0FBUU8sU0FBeUIsTUFBT1AsU0FBUU8sU0FBU0YsRUFBR0MsSUNSMUdFLE9BQUFDLFFBQWtDLGlCQUNsQ0MsU0FBQUQsUUFBMEMsbUJBRTFDRSxlQUFBRixRQUE0QixtQ0FDNUJHLGlCQUFBSCxRQUE4QixxQ0FXOUJJLG1CQUFBLFdBTUksUUFBQUEsR0FDWUMsRUFDQUMsRUFDQUMsR0FGQTVCLEtBQUEwQixZQUFBQSxFQUNBMUIsS0FBQTJCLE9BQUFBLEVBQ0EzQixLQUFBNEIsT0FBQUEsRUFQWjVCLEtBQUE2QixnQkFBMEIsRUFDMUI3QixLQUFBOEIsY0FBd0IsRUF1QjVCLE1BZElMLEdBQUFNLFVBQUFDLGVBQUEsU0FBZUMsR0FDWGpDLEtBQUtrQyxlQUFpQkQsR0FHMUJSLEVBQUFNLFVBQUFJLE9BQUEsV0FHSW5DLEtBQUswQixZQUFZVSxjQUdyQlgsRUFBQU0sVUFBQU0sU0FBQSxXQUNJQyxRQUFRQyxJQUFJLFNBQVV2QyxLQUFLNEIsUUFDM0I1QixLQUFLNEIsT0FBT1ksaUJBQWlCLFNBaENyQ2YsRUFBQTFCLFlBQUNxQixPQUFBcUIsV0FDR0MsU0FBVUMsT0FBT0MsR0FDakJDLFNBQVUsaUJBQ1ZDLFlBQWEsMkJBQ2JDLFlBQWF6QixTQUFBMEIsbUJBQ2JDLFdBQVkxQixlQUFBMkIsWUFBYTFCLGlCQUFBMkIsZUFDekJDLFdBQVkseUJEK0JScEMsV0FBVyxxQkFBc0JPLGVBQWUyQixZQUFhNUIsU0FBUytCLE9BQVE3QixpQkFBaUIyQixpQkFDaEcxQixLQzlCTTZCLFNBQUE3QixtQkFBa0JBIiwiZmlsZSI6ImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3JvdXRlcicpO1xudmFyIGF1dGhfc2VydmljZV8xID0gcmVxdWlyZSgnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZScpO1xudmFyIHNvY2tldF9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi9zaGFyZWQvc2VydmljZXMvc29ja2V0LnNlcnZpY2UnKTtcbnZhciBEYXNoYm9hcmRDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERhc2hib2FyZENvbXBvbmVudChhdXRoU2VydmljZSwgcm91dGVyLCBzb2NrZXQpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZSA9IGF1dGhTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XG4gICAgICAgIC8vIHNlcnZlIGZvciB0aGUgdHdvIGRyb3Bkb3duIGxpc3QgaW4gdG9wLXJpZ2h0IG9mIHRoZSBuYXZiYXJcbiAgICAgICAgdGhpcy5wcm9maWxlVG9nZ2xlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluYm94VG9nZ2xlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBEYXNoYm9hcmRDb21wb25lbnQucHJvdG90eXBlLmNoZWNrTWVudVN0eWxlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2Vzc2lvbiA9IGl0ZW07XG4gICAgfTtcbiAgICBEYXNoYm9hcmRDb21wb25lbnQucHJvdG90eXBlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gdGhlIHNlcnZpY2Ugd2lsbCBkZWxldGUgdXNlciBkYXRhIGFuZCB0b2tlbiBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgLy8gYW5kIGJyaW5nIHVzZXIgb3V0IG9mIHRoZSBkYXNoYm9hcmRcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KCk7XG4gICAgfTtcbiAgICBEYXNoYm9hcmRDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc29ja2V0JywgdGhpcy5zb2NrZXQpO1xuICAgICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jyk7XG4gICAgfTtcbiAgICBEYXNoYm9hcmRDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XG4gICAgICAgICAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICd5ZWFoLWRhc2hib2FyZCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbcm91dGVyXzEuUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbYXV0aF9zZXJ2aWNlXzEuQXV0aFNlcnZpY2UsIHNvY2tldF9zZXJ2aWNlXzEuU29ja2V0U2VydmljZV0sXG4gICAgICAgICAgICBzdHlsZVVybHM6IFsnZGFzaGJvYXJkLnN0eWxlLmNzcyddXG4gICAgICAgIH0pLCBcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbYXV0aF9zZXJ2aWNlXzEuQXV0aFNlcnZpY2UsIHJvdXRlcl8xLlJvdXRlciwgc29ja2V0X3NlcnZpY2VfMS5Tb2NrZXRTZXJ2aWNlXSlcbiAgICBdLCBEYXNoYm9hcmRDb21wb25lbnQpO1xuICAgIHJldHVybiBEYXNoYm9hcmRDb21wb25lbnQ7XG59KCkpO1xuZXhwb3J0cy5EYXNoYm9hcmRDb21wb25lbnQgPSBEYXNoYm9hcmRDb21wb25lbnQ7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAneWVhaC1kYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBTb2NrZXRTZXJ2aWNlXSxcbiAgICBzdHlsZVVybHM6IFsnZGFzaGJvYXJkLnN0eWxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgLy8gc2VydmUgZm9yIHRoZSB0d28gZHJvcGRvd24gbGlzdCBpbiB0b3AtcmlnaHQgb2YgdGhlIG5hdmJhclxuICAgIHByb2ZpbGVUb2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW5ib3hUb2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgY3VycmVudFNlc3Npb246IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBzb2NrZXQ6IFNvY2tldFNlcnZpY2VcbiAgICApe31cblxuICAgIGNoZWNrTWVudVN0eWxlKGl0ZW06IHN0cmluZyl7XG4gICAgICAgIHRoaXMuY3VycmVudFNlc3Npb24gPSBpdGVtO1xuICAgIH1cblxuICAgIGxvZ291dCgpe1xuICAgICAgICAvLyB0aGUgc2VydmljZSB3aWxsIGRlbGV0ZSB1c2VyIGRhdGEgYW5kIHRva2VuIGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAvLyBhbmQgYnJpbmcgdXNlciBvdXQgb2YgdGhlIGRhc2hib2FyZFxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc29ja2V0JywgdGhpcy5zb2NrZXQpO1xuICAgICAgICB0aGlzLnNvY2tldC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jyk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
