"use strict";var __decorate=this&&this.__decorate||function(e,t,o,r){var i,c=arguments.length,n=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(c<3?i(n):c>3?i(t,o,n):i(t,o))||n);return c>3&&n&&Object.defineProperty(t,o,n),n},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),router_1=require("@angular/router"),auth_service_1=require("../shared/services/auth.service"),notification_service_1=require("../shared/services/notification.service"),socket_service_1=require("../shared/services/socket.service"),DashboardComponent=function(){function e(e,t,o,r){this.authService=e,this.router=t,this.socket=o,this.noticeService=r,this.profileToggled=!1,this.inboxToggled=!1}return e.prototype.checkMenuStyle=function(e){this.currentSession=e},e.prototype.logout=function(){this.authService.logUserOut()},e.prototype.getUser=function(){var e=this;this.authService.getCurrentUser(JSON.parse(localStorage.getItem("current_user"))._id).subscribe(function(t){e.currentUserRole=t.role,e.currentUser=t},function(t){e.authService.logUserOut(),console.log(t)})},e.prototype.getNotification=function(e){var t=this;this.noticeService.getThree().subscribe(function(o){console.log("notifications",o),t.notifications=o,e()},function(t){console.log(t),e()})},e.prototype.ngOnInit=function(){this.currentUser=JSON.parse(localStorage.getItem("current_user")),this.getUser();var e=this;this.getNotification(function(){e.socket.syncById("notification",e.currentUser._id,function(e){console.log("got notification",e)})})},e.prototype.ngOnDestroy=function(){this.socket.unsyncById("notification",this.currentUser._id)},e=__decorate([core_1.Component({moduleId:module.id,selector:"yeah-dashboard",templateUrl:"dashboard.component.html",directives:[router_1.ROUTER_DIRECTIVES],providers:[auth_service_1.AuthService,socket_service_1.SocketService,notification_service_1.NotificationService],styleUrls:["dashboard.style.css"]}),__metadata("design:paramtypes",[auth_service_1.AuthService,router_1.Router,socket_service_1.SocketService,notification_service_1.NotificationService])],e)}();exports.DashboardComponent=DashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwiZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiX19kZWNvcmF0ZSIsInRoaXMiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImQiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiY29yZV8xIiwicmVxdWlyZSIsInJvdXRlcl8xIiwiYXV0aF9zZXJ2aWNlXzEiLCJub3RpZmljYXRpb25fc2VydmljZV8xIiwic29ja2V0X3NlcnZpY2VfMSIsIkRhc2hib2FyZENvbXBvbmVudCIsImF1dGhTZXJ2aWNlIiwicm91dGVyIiwic29ja2V0Iiwibm90aWNlU2VydmljZSIsInByb2ZpbGVUb2dnbGVkIiwiaW5ib3hUb2dnbGVkIiwicHJvdG90eXBlIiwiY2hlY2tNZW51U3R5bGUiLCJpdGVtIiwiY3VycmVudFNlc3Npb24iLCJsb2dvdXQiLCJsb2dVc2VyT3V0IiwiZ2V0VXNlciIsIl90aGlzIiwiZ2V0Q3VycmVudFVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX2lkIiwic3Vic2NyaWJlIiwidXNlciIsImN1cnJlbnRVc2VyUm9sZSIsInJvbGUiLCJjdXJyZW50VXNlciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdldE5vdGlmaWNhdGlvbiIsImNiIiwiZ2V0VGhyZWUiLCJub3RpY2VzIiwibm90aWZpY2F0aW9ucyIsIm5nT25Jbml0Iiwic2VsZiIsInN5bmNCeUlkIiwibm90aWNlIiwibmdPbkRlc3Ryb3kiLCJ1bnN5bmNCeUlkIiwiQ29tcG9uZW50IiwibW9kdWxlSWQiLCJtb2R1bGUiLCJpZCIsInNlbGVjdG9yIiwidGVtcGxhdGVVcmwiLCJkaXJlY3RpdmVzIiwiUk9VVEVSX0RJUkVDVElWRVMiLCJwcm92aWRlcnMiLCJBdXRoU2VydmljZSIsIlNvY2tldFNlcnZpY2UiLCJOb3RpZmljYXRpb25TZXJ2aWNlIiwic3R5bGVVcmxzIiwiUm91dGVyIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFDQSxJQUFJQSxZQUFjQyxNQUFRQSxLQUFLRCxZQUFlLFNBQVVFLEVBQVlDLEVBQVFDLEVBQUtDLEdBQzdFLEdBQTJIQyxHQUF2SEMsRUFBSUMsVUFBVUMsT0FBUUMsRUFBSUgsRUFBSSxFQUFJSixFQUFrQixPQUFURSxFQUFnQkEsRUFBT00sT0FBT0MseUJBQXlCVCxFQUFRQyxHQUFPQyxDQUNySCxJQUF1QixnQkFBWlEsVUFBb0Qsa0JBQXJCQSxTQUFRQyxTQUF5QkosRUFBSUcsUUFBUUMsU0FBU1osRUFBWUMsRUFBUUMsRUFBS0MsT0FDcEgsS0FBSyxHQUFJVSxHQUFJYixFQUFXTyxPQUFTLEVBQUdNLEdBQUssRUFBR0EsS0FBU1QsRUFBSUosRUFBV2EsTUFBSUwsR0FBS0gsRUFBSSxFQUFJRCxFQUFFSSxHQUFLSCxFQUFJLEVBQUlELEVBQUVILEVBQVFDLEVBQUtNLEdBQUtKLEVBQUVILEVBQVFDLEtBQVNNLEVBQ2hKLE9BQU9ILEdBQUksR0FBS0csR0FBS0MsT0FBT0ssZUFBZWIsRUFBUUMsRUFBS00sR0FBSUEsR0FFNURPLFdBQWNoQixNQUFRQSxLQUFLZ0IsWUFBZSxTQUFVQyxFQUFHQyxHQUN2RCxHQUF1QixnQkFBWk4sVUFBb0Qsa0JBQXJCQSxTQUFRTyxTQUF5QixNQUFPUCxTQUFRTyxTQUFTRixFQUFHQyxJQ1IxR0UsT0FBQUMsUUFBNkMsaUJBQzdDQyxTQUFBRCxRQUEwQyxtQkFFMUNFLGVBQUFGLFFBQTRCLG1DQUM1QkcsdUJBQUFILFFBQW9DLDJDQUNwQ0ksaUJBQUFKLFFBQThCLHFDQWM5QkssbUJBQUEsV0FTSSxRQUFBQSxHQUNZQyxFQUNBQyxFQUNBQyxFQUNBQyxHQUhBOUIsS0FBQTJCLFlBQUFBLEVBQ0EzQixLQUFBNEIsT0FBQUEsRUFDQTVCLEtBQUE2QixPQUFBQSxFQUNBN0IsS0FBQThCLGNBQUFBLEVBVlo5QixLQUFBK0IsZ0JBQTBCLEVBQzFCL0IsS0FBQWdDLGNBQXdCLEVBa0U1QixNQXRESU4sR0FBQU8sVUFBQUMsZUFBQSxTQUFlQyxHQUNYbkMsS0FBS29DLGVBQWlCRCxHQUcxQlQsRUFBQU8sVUFBQUksT0FBQSxXQUdJckMsS0FBSzJCLFlBQVlXLGNBR3JCWixFQUFBTyxVQUFBTSxRQUFBLFdBQUEsR0FBQUMsR0FBQXhDLElBQ0lBLE1BQUsyQixZQUFZYyxlQUFlQyxLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLGlCQUFpQkMsS0FDNUVDLFVBQ0QsU0FBQUMsR0FDSVIsRUFBS1MsZ0JBQWtCRCxFQUFLRSxLQUM1QlYsRUFBS1csWUFBY0gsR0FFdkIsU0FBQUksR0FDSVosRUFBS2IsWUFBWVcsYUFDakJlLFFBQVFDLElBQVNGLE1BSTdCMUIsRUFBQU8sVUFBQXNCLGdCQUFBLFNBQWdCQyxHQUFoQixHQUFBaEIsR0FBQXhDLElBRUlBLE1BQUs4QixjQUFjMkIsV0FDZFYsVUFDRCxTQUFBVyxHQUNJTCxRQUFRQyxJQUFJLGdCQUFpQkksR0FDN0JsQixFQUFLbUIsY0FBZ0JELEVBQ3JCRixLQUVKLFNBQUFKLEdBQ0lDLFFBQVFDLElBQVNGLEdBQ2pCSSxPQUlaOUIsRUFBQU8sVUFBQTJCLFNBQUEsV0FDSTVELEtBQUttRCxZQUFjVCxLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLGlCQUNuRDdDLEtBQUt1QyxTQUNMLElBQUlzQixHQUFPN0QsSUFDWEEsTUFBS3VELGdCQUFnQixXQUVqQk0sRUFBS2hDLE9BQU9pQyxTQUFTLGVBQWdCRCxFQUFLVixZQUFZTCxJQUFLLFNBQVNpQixHQUNoRVYsUUFBUUMsSUFBSSxtQkFBb0JTLFFBTTVDckMsRUFBQU8sVUFBQStCLFlBQUEsV0FDSWhFLEtBQUs2QixPQUFPb0MsV0FBVyxlQUFnQmpFLEtBQUttRCxZQUFZTCxNQTdFaEVwQixFQUFBM0IsWUFBQ3FCLE9BQUE4QyxXQUNHQyxTQUFVQyxPQUFPQyxHQUNqQkMsU0FBVSxpQkFDVkMsWUFBYSwyQkFDYkMsWUFBYWxELFNBQUFtRCxtQkFDYkMsV0FBWW5ELGVBQUFvRCxZQUFhbEQsaUJBQUFtRCxjQUFlcEQsdUJBQUFxRCxxQkFDeENDLFdBQVkseUJEK0RSOUQsV0FBVyxxQkFBc0JPLGVBQWVvRCxZQUFhckQsU0FBU3lELE9BQVF0RCxpQkFBaUJtRCxjQUFlcEQsdUJBQXVCcUQsdUJBQ3RJbkQsS0M3RE1zRCxTQUFBdEQsbUJBQWtCQSIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcbnZhciBhdXRoX3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnKTtcbnZhciBub3RpZmljYXRpb25fc2VydmljZV8xID0gcmVxdWlyZSgnLi4vc2hhcmVkL3NlcnZpY2VzL25vdGlmaWNhdGlvbi5zZXJ2aWNlJyk7XG52YXIgc29ja2V0X3NlcnZpY2VfMSA9IHJlcXVpcmUoJy4uL3NoYXJlZC9zZXJ2aWNlcy9zb2NrZXQuc2VydmljZScpO1xudmFyIERhc2hib2FyZENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGFzaGJvYXJkQ29tcG9uZW50KGF1dGhTZXJ2aWNlLCByb3V0ZXIsIHNvY2tldCwgbm90aWNlU2VydmljZSkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLnNvY2tldCA9IHNvY2tldDtcbiAgICAgICAgdGhpcy5ub3RpY2VTZXJ2aWNlID0gbm90aWNlU2VydmljZTtcbiAgICAgICAgdGhpcy5wcm9maWxlVG9nZ2xlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluYm94VG9nZ2xlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBEYXNoYm9hcmRDb21wb25lbnQucHJvdG90eXBlLmNoZWNrTWVudVN0eWxlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2Vzc2lvbiA9IGl0ZW07XG4gICAgfTtcbiAgICBEYXNoYm9hcmRDb21wb25lbnQucHJvdG90eXBlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gdGhlIHNlcnZpY2Ugd2lsbCBkZWxldGUgdXNlciBkYXRhIGFuZCB0b2tlbiBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgICAgLy8gYW5kIGJyaW5nIHVzZXIgb3V0IG9mIHRoZSBkYXNoYm9hcmRcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KCk7XG4gICAgfTtcbiAgICBEYXNoYm9hcmRDb21wb25lbnQucHJvdG90eXBlLmdldFVzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpLl9pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgICAgIF90aGlzLmN1cnJlbnRVc2VyUm9sZSA9IHVzZXIucm9sZTtcbiAgICAgICAgICAgIF90aGlzLmN1cnJlbnRVc2VyID0gdXNlcjtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGFzaGJvYXJkQ29tcG9uZW50LnByb3RvdHlwZS5nZXROb3RpZmljYXRpb24gPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm5vdGljZVNlcnZpY2UuZ2V0VGhyZWUoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAobm90aWNlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vdGlmaWNhdGlvbnMnLCBub3RpY2VzKTtcbiAgICAgICAgICAgIF90aGlzLm5vdGlmaWNhdGlvbnMgPSBub3RpY2VzO1xuICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICBjYigpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIERhc2hib2FyZENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgICAgIHRoaXMuZ2V0VXNlcigpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZ2V0Tm90aWZpY2F0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vTGlzdGVuIHRvIHVwZGF0ZXMgYWZ0ZXIgbG9hZGluZyB0aGUgZmlyc3QgdGhyZWUgbm90aWZpY2F0aW9uc1xuICAgICAgICAgICAgc2VsZi5zb2NrZXQuc3luY0J5SWQoJ25vdGlmaWNhdGlvbicsIHNlbGYuY3VycmVudFVzZXIuX2lkLCBmdW5jdGlvbiAobm90aWNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvdCBub3RpZmljYXRpb24nLCBub3RpY2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGFzaGJvYXJkQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgdGhpcy5jdXJyZW50VXNlci5faWQpO1xuICAgIH07XG4gICAgRGFzaGJvYXJkQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICAgICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAneWVhaC1kYXNoYm9hcmQnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdkYXNoYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgICAgICAgICAgZGlyZWN0aXZlczogW3JvdXRlcl8xLlJPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW2F1dGhfc2VydmljZV8xLkF1dGhTZXJ2aWNlLCBzb2NrZXRfc2VydmljZV8xLlNvY2tldFNlcnZpY2UsIG5vdGlmaWNhdGlvbl9zZXJ2aWNlXzEuTm90aWZpY2F0aW9uU2VydmljZV0sXG4gICAgICAgICAgICBzdHlsZVVybHM6IFsnZGFzaGJvYXJkLnN0eWxlLmNzcyddXG4gICAgICAgIH0pLCBcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbYXV0aF9zZXJ2aWNlXzEuQXV0aFNlcnZpY2UsIHJvdXRlcl8xLlJvdXRlciwgc29ja2V0X3NlcnZpY2VfMS5Tb2NrZXRTZXJ2aWNlLCBub3RpZmljYXRpb25fc2VydmljZV8xLk5vdGlmaWNhdGlvblNlcnZpY2VdKVxuICAgIF0sIERhc2hib2FyZENvbXBvbmVudCk7XG4gICAgcmV0dXJuIERhc2hib2FyZENvbXBvbmVudDtcbn0oKSk7XG5leHBvcnRzLkRhc2hib2FyZENvbXBvbmVudCA9IERhc2hib2FyZENvbXBvbmVudDtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTb2NrZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3NvY2tldC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvdXNlcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvdHlwZXMvbm90aWZpY2F0aW9uJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAneWVhaC1kYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBTb2NrZXRTZXJ2aWNlLCBOb3RpZmljYXRpb25TZXJ2aWNlXSxcbiAgICBzdHlsZVVybHM6IFsnZGFzaGJvYXJkLnN0eWxlLmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XG4gICAgLy8gc2VydmUgZm9yIHRoZSB0d28gZHJvcGRvd24gbGlzdCBpbiB0b3AtcmlnaHQgb2YgdGhlIG5hdmJhclxuICAgIGN1cnJlbnRVc2VyOiBVc2VyO1xuICAgIHByb2ZpbGVUb2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgaW5ib3hUb2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgY3VycmVudFNlc3Npb246IHN0cmluZztcbiAgICBjdXJyZW50VXNlclJvbGU6IHN0cmluZztcbiAgICBub3RpZmljYXRpb25zOiBBcnJheTxOb3RpZmljYXRpb24+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHNvY2tldDogU29ja2V0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBub3RpY2VTZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlXG4gICAgKXt9XG5cbiAgICBjaGVja01lbnVTdHlsZShpdGVtOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U2Vzc2lvbiA9IGl0ZW07XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICAvLyB0aGUgc2VydmljZSB3aWxsIGRlbGV0ZSB1c2VyIGRhdGEgYW5kIHRva2VuIGluIGxvY2FsU3RvcmFnZVxuICAgICAgICAvLyBhbmQgYnJpbmcgdXNlciBvdXQgb2YgdGhlIGRhc2hib2FyZFxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKVxuICAgIH1cblxuICAgIGdldFVzZXIoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpLl9pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyUm9sZSA9IHVzZXIucm9sZTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Tm90aWZpY2F0aW9uKGNiKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub3RpY2VTZXJ2aWNlLmdldFRocmVlKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBub3RpY2VzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90aWZpY2F0aW9ucycsIG5vdGljZXMpXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25zID0gbm90aWNlcztcbiAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKVxuICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKTtcbiAgICAgICAgdGhpcy5nZXRVc2VyKCk7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5nZXROb3RpZmljYXRpb24oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvL0xpc3RlbiB0byB1cGRhdGVzIGFmdGVyIGxvYWRpbmcgdGhlIGZpcnN0IHRocmVlIG5vdGlmaWNhdGlvbnNcbiAgICAgICAgICAgIHNlbGYuc29ja2V0LnN5bmNCeUlkKCdub3RpZmljYXRpb24nLCBzZWxmLmN1cnJlbnRVc2VyLl9pZCwgZnVuY3Rpb24obm90aWNlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvdCBub3RpZmljYXRpb24nLCBub3RpY2UpO1xuICAgICAgICAgICAgfSk7ICAgXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zb2NrZXQudW5zeW5jQnlJZCgnbm90aWZpY2F0aW9uJywgdGhpcy5jdXJyZW50VXNlci5faWQpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
