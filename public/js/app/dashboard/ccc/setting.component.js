"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,a=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(c<3?n(a):c>3?n(t,r,a):n(t,r))||a);return c>3&&a&&Object.defineProperty(t,r,a),a},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),router_1=require("@angular/router"),auth_service_1=require("../../shared/services/auth.service"),CompanyComponent=function(){function e(e,t){this.router=e,this.authService=t,this.currentUser={}}return e.prototype.getCurrentUser=function(){var e=this;this.authService.getCurrentUser(JSON.parse(localStorage.getItem("current_user"))._id).subscribe(function(t){return e.currentUser=t},function(t){e.authService.logUserOut(),console.log(t)})},e.prototype.ngOnInit=function(){this.currentUser=JSON.parse(localStorage.getItem("current_user")),this.getCurrentUser()},e=__decorate([core_1.Component({moduleId:module.id,selector:"yeah-setting",templateUrl:"setting.component.html",styleUrls:["setting.style.css"],providers:[auth_service_1.AuthService]}),__metadata("design:paramtypes",[router_1.Router,auth_service_1.AuthService])],e)}();exports.CompanyComponent=CompanyComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jY2Mvc2V0dGluZy5jb21wb25lbnQuanMiLCJkYXNoYm9hcmQvY2NjL3NldHRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIl9fZGVjb3JhdGUiLCJ0aGlzIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJkIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX21ldGFkYXRhIiwiayIsInYiLCJtZXRhZGF0YSIsImNvcmVfMSIsInJlcXVpcmUiLCJyb3V0ZXJfMSIsImF1dGhfc2VydmljZV8xIiwiQ29tcGFueUNvbXBvbmVudCIsInJvdXRlciIsImF1dGhTZXJ2aWNlIiwiY3VycmVudFVzZXIiLCJwcm90b3R5cGUiLCJnZXRDdXJyZW50VXNlciIsIl90aGlzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIl9pZCIsInN1YnNjcmliZSIsInVzZXIiLCJlcnJvciIsImxvZ1VzZXJPdXQiLCJjb25zb2xlIiwibG9nIiwibmdPbkluaXQiLCJDb21wb25lbnQiLCJtb2R1bGVJZCIsIm1vZHVsZSIsImlkIiwic2VsZWN0b3IiLCJ0ZW1wbGF0ZVVybCIsInN0eWxlVXJscyIsInByb3ZpZGVycyIsIkF1dGhTZXJ2aWNlIiwiUm91dGVyIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFDQSxJQUFJQSxZQUFjQyxNQUFRQSxLQUFLRCxZQUFlLFNBQVVFLEVBQVlDLEVBQVFDLEVBQUtDLEdBQzdFLEdBQTJIQyxHQUF2SEMsRUFBSUMsVUFBVUMsT0FBUUMsRUFBSUgsRUFBSSxFQUFJSixFQUFrQixPQUFURSxFQUFnQkEsRUFBT00sT0FBT0MseUJBQXlCVCxFQUFRQyxHQUFPQyxDQUNySCxJQUF1QixnQkFBWlEsVUFBb0Qsa0JBQXJCQSxTQUFRQyxTQUF5QkosRUFBSUcsUUFBUUMsU0FBU1osRUFBWUMsRUFBUUMsRUFBS0MsT0FDcEgsS0FBSyxHQUFJVSxHQUFJYixFQUFXTyxPQUFTLEVBQUdNLEdBQUssRUFBR0EsS0FBU1QsRUFBSUosRUFBV2EsTUFBSUwsR0FBS0gsRUFBSSxFQUFJRCxFQUFFSSxHQUFLSCxFQUFJLEVBQUlELEVBQUVILEVBQVFDLEVBQUtNLEdBQUtKLEVBQUVILEVBQVFDLEtBQVNNLEVBQ2hKLE9BQU9ILEdBQUksR0FBS0csR0FBS0MsT0FBT0ssZUFBZWIsRUFBUUMsRUFBS00sR0FBSUEsR0FFNURPLFdBQWNoQixNQUFRQSxLQUFLZ0IsWUFBZSxTQUFVQyxFQUFHQyxHQUN2RCxHQUF1QixnQkFBWk4sVUFBb0Qsa0JBQXJCQSxTQUFRTyxTQUF5QixNQUFPUCxTQUFRTyxTQUFTRixFQUFHQyxJQ1IxR0UsT0FBQUMsUUFBa0MsaUJBQ2xDQyxTQUFBRCxRQUEwQixtQkFJMUJFLGVBQUFGLFFBQTRCLHNDQVM1QkcsaUJBQUEsV0FHSSxRQUFBQSxHQUNZQyxFQUNBQyxHQURBMUIsS0FBQXlCLE9BQUFBLEVBQ0F6QixLQUFBMEIsWUFBQUEsRUFKWjFCLEtBQUEyQixlQXNCSixNQWZJSCxHQUFBSSxVQUFBQyxlQUFBLFdBQUEsR0FBQUMsR0FBQTlCLElBQ0lBLE1BQUswQixZQUFZRyxlQUFlRSxLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLGlCQUFpQkMsS0FDNUVDLFVBQ0QsU0FBQUMsR0FBUSxNQUFBUCxHQUFLSCxZQUFjVSxHQUMzQixTQUFBQyxHQUNJUixFQUFLSixZQUFZYSxhQUNqQkMsUUFBUUMsSUFBU0gsTUFJN0JkLEVBQUFJLFVBQUFjLFNBQUEsV0FFSTFDLEtBQUsyQixZQUFjSSxLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLGlCQUNuRGxDLEtBQUs2QixrQkE1QmJMLEVBQUF6QixZQUFDcUIsT0FBQXVCLFdBQ0dDLFNBQVVDLE9BQU9DLEdBQ2pCQyxTQUFVLGVBQ1ZDLFlBQWEseUJBQ2JDLFdBQVkscUJBQ1pDLFdBQVkzQixlQUFBNEIsZUQ0QlJuQyxXQUFXLHFCQUFzQk0sU0FBUzhCLE9BQVE3QixlQUFlNEIsZUFDbEUzQixLQzNCTTZCLFNBQUE3QixpQkFBZ0JBIiwiZmlsZSI6ImRhc2hib2FyZC9jY2Mvc2V0dGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XG52YXIgYXV0aF9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJyk7XG52YXIgQ29tcGFueUNvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29tcGFueUNvbXBvbmVudChyb3V0ZXIsIGF1dGhTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB7fTtcbiAgICB9XG4gICAgQ29tcGFueUNvbXBvbmVudC5wcm90b3R5cGUuZ2V0Q3VycmVudFVzZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpLl9pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHVzZXIpIHsgcmV0dXJuIF90aGlzLmN1cnJlbnRVc2VyID0gdXNlcjsgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29tcGFueUNvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGVjayBjdXJyZW50VXNlciBkYXRhJywgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKTtcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50VXNlcigpO1xuICAgIH07XG4gICAgQ29tcGFueUNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcbiAgICAgICAgICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3llYWgtc2V0dGluZycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NldHRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICAgICAgICAgICAgc3R5bGVVcmxzOiBbJ3NldHRpbmcuc3R5bGUuY3NzJ10sXG4gICAgICAgICAgICBwcm92aWRlcnM6IFthdXRoX3NlcnZpY2VfMS5BdXRoU2VydmljZV1cbiAgICAgICAgfSksIFxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtyb3V0ZXJfMS5Sb3V0ZXIsIGF1dGhfc2VydmljZV8xLkF1dGhTZXJ2aWNlXSlcbiAgICBdLCBDb21wYW55Q29tcG9uZW50KTtcbiAgICByZXR1cm4gQ29tcGFueUNvbXBvbmVudDtcbn0oKSk7XG5leHBvcnRzLkNvbXBhbnlDb21wb25lbnQgPSBDb21wYW55Q29tcG9uZW50O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvdHlwZXMvdXNlcidcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd5ZWFoLXNldHRpbmcnLFxuICAgIHRlbXBsYXRlVXJsOiAnc2V0dGluZy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3NldHRpbmcuc3R5bGUuY3NzJ10sXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIENvbXBhbnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGN1cnJlbnRVc2VyID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgICApIHsgfVxuXG4gICAgZ2V0Q3VycmVudFVzZXIoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpLl9pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB1c2VyID0+IHRoaXMuY3VycmVudFVzZXIgPSB1c2VyLFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoZWNrIGN1cnJlbnRVc2VyIGRhdGEnLCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSkpO1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpO1xuICAgICAgICB0aGlzLmdldEN1cnJlbnRVc2VyKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
