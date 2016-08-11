"use strict";var __decorate=this&&this.__decorate||function(e,t,s,r){var i,n=arguments.length,o=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(n<3?i(o):n>3?i(t,s,o):i(t,s))||o);return n>3&&o&&Object.defineProperty(t,s,o),o},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),router_1=require("@angular/router"),moment=require("moment"),index_1=require("../../shared/services/index"),SalesComponent=function(){function e(e,t,s,r){this.router=e,this.authService=t,this.adminService=s,this.userDataService=r,this.currentUser={},this.userDataList={},this.arrayOfUsersKeys=[],this.selectedUser={},this.studentsList=[],this.advisorsList=[],this.adminsList=[]}return e.prototype.getUser=function(){var e=this;this.authService.getCurrentUser(JSON.parse(localStorage.getItem("current_user"))._id).subscribe(function(t){e.currentUser=t},function(t){e.authService.logUserOut(),console.log(t)})},e.prototype.getUsers=function(){var e=this;this.adminService.getAllUsers().subscribe(function(t){console.log("All Users: ",t),e.userDataList=t,e.arrayOfUsersKeys=Object.keys(t)},function(t){e.authService.logUserOut(),console.log(t)})},e.prototype.showSummary=function(){var e=this;return this.studentsList=[],this.advisorsList=[],this.adminsList=[],this.arrayOfUsersKeys.forEach(function(t){switch(console.log(t,e.userDataList[t]),e.userDataList[t].role){case"student":e.studentsList.push(e.userDataList[t]);break;case"advisor":e.advisorsList.push(e.userDataList[t]);break;case"admin":e.adminsList.push(e.userDataList[t])}}),"Total: "+this.arrayOfUsersKeys.length+" users ("+this.studentsList.length+" students, "+this.advisorsList.length+" advisors, "+this.adminsList.length+" admins)"},e.prototype.renderLLT=function(e){return moment(e).format("LLL")},e.prototype.getSingleUser=function(e){var t=this;this.selectedUserId=e,this.userDataService.getSingleUser(e).subscribe(function(e){e._id==t.selectedUserId&&(console.log("Single User: ",e),t.selectedUser=e)},function(e){console.log(e)})},e.prototype.ngOnInit=function(){this.currentUser=JSON.parse(localStorage.getItem("current_user")),this.getUser()},e=__decorate([core_1.Component({moduleId:module.id,selector:"yeah-sales",templateUrl:"sales.component.html",styleUrls:["company.style.css"],directives:[router_1.ROUTER_DIRECTIVES],providers:[index_1.AuthService,index_1.AdminService,index_1.UserDataService]}),__metadata("design:paramtypes",[router_1.Router,index_1.AuthService,index_1.AdminService,index_1.UserDataService])],e)}();exports.SalesComponent=SalesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9jb21wYW55Mi9zYWxlcy5jb21wb25lbnQuanMiLCJkYXNoYm9hcmQvY29tcGFueTIvc2FsZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIl9fZGVjb3JhdGUiLCJ0aGlzIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJkIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX21ldGFkYXRhIiwiayIsInYiLCJtZXRhZGF0YSIsImNvcmVfMSIsInJlcXVpcmUiLCJyb3V0ZXJfMSIsIm1vbWVudCIsImluZGV4XzEiLCJTYWxlc0NvbXBvbmVudCIsInJvdXRlciIsImF1dGhTZXJ2aWNlIiwiYWRtaW5TZXJ2aWNlIiwidXNlckRhdGFTZXJ2aWNlIiwiY3VycmVudFVzZXIiLCJ1c2VyRGF0YUxpc3QiLCJhcnJheU9mVXNlcnNLZXlzIiwic2VsZWN0ZWRVc2VyIiwic3R1ZGVudHNMaXN0IiwiYWR2aXNvcnNMaXN0IiwiYWRtaW5zTGlzdCIsInByb3RvdHlwZSIsImdldFVzZXIiLCJfdGhpcyIsImdldEN1cnJlbnRVc2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIl9pZCIsInN1YnNjcmliZSIsInVzZXIiLCJlcnJvciIsImxvZ1VzZXJPdXQiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlcnMiLCJnZXRBbGxVc2VycyIsInVzZXJzIiwia2V5cyIsInNob3dTdW1tYXJ5IiwiZm9yRWFjaCIsInVzZXJLZXkiLCJyb2xlIiwicHVzaCIsInJlbmRlckxMVCIsInVuaXgiLCJmb3JtYXQiLCJnZXRTaW5nbGVVc2VyIiwidXNlcklkIiwic2VsZWN0ZWRVc2VySWQiLCJuZ09uSW5pdCIsIkNvbXBvbmVudCIsIm1vZHVsZUlkIiwibW9kdWxlIiwiaWQiLCJzZWxlY3RvciIsInRlbXBsYXRlVXJsIiwic3R5bGVVcmxzIiwiZGlyZWN0aXZlcyIsIlJPVVRFUl9ESVJFQ1RJVkVTIiwicHJvdmlkZXJzIiwiQXV0aFNlcnZpY2UiLCJBZG1pblNlcnZpY2UiLCJVc2VyRGF0YVNlcnZpY2UiLCJSb3V0ZXIiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUNBLElBQUlBLFlBQWNDLE1BQVFBLEtBQUtELFlBQWUsU0FBVUUsRUFBWUMsRUFBUUMsRUFBS0MsR0FDN0UsR0FBMkhDLEdBQXZIQyxFQUFJQyxVQUFVQyxPQUFRQyxFQUFJSCxFQUFJLEVBQUlKLEVBQWtCLE9BQVRFLEVBQWdCQSxFQUFPTSxPQUFPQyx5QkFBeUJULEVBQVFDLEdBQU9DLENBQ3JILElBQXVCLGdCQUFaUSxVQUFvRCxrQkFBckJBLFNBQVFDLFNBQXlCSixFQUFJRyxRQUFRQyxTQUFTWixFQUFZQyxFQUFRQyxFQUFLQyxPQUNwSCxLQUFLLEdBQUlVLEdBQUliLEVBQVdPLE9BQVMsRUFBR00sR0FBSyxFQUFHQSxLQUFTVCxFQUFJSixFQUFXYSxNQUFJTCxHQUFLSCxFQUFJLEVBQUlELEVBQUVJLEdBQUtILEVBQUksRUFBSUQsRUFBRUgsRUFBUUMsRUFBS00sR0FBS0osRUFBRUgsRUFBUUMsS0FBU00sRUFDaEosT0FBT0gsR0FBSSxHQUFLRyxHQUFLQyxPQUFPSyxlQUFlYixFQUFRQyxFQUFLTSxHQUFJQSxHQUU1RE8sV0FBY2hCLE1BQVFBLEtBQUtnQixZQUFlLFNBQVVDLEVBQUdDLEdBQ3ZELEdBQXVCLGdCQUFaTixVQUFvRCxrQkFBckJBLFNBQVFPLFNBQXlCLE1BQU9QLFNBQVFPLFNBQVNGLEVBQUdDLElDUjFHRSxPQUFBQyxRQUFrQyxpQkFDbENDLFNBQUFELFFBQTZDLG1CQUN0Q0UsT0FBTUYsUUFBVyxVQUd4QkcsUUFBQUgsUUFBMkQsK0JBVTNESSxlQUFBLFdBV0ksUUFBQUEsR0FDWUMsRUFDQUMsRUFDQUMsRUFDQUMsR0FIQTdCLEtBQUEwQixPQUFBQSxFQUNBMUIsS0FBQTJCLFlBQUFBLEVBQ0EzQixLQUFBNEIsYUFBQUEsRUFDQTVCLEtBQUE2QixnQkFBQUEsRUFkSjdCLEtBQUE4QixlQUNBOUIsS0FBQStCLGdCQUNBL0IsS0FBQWdDLG9CQUVBaEMsS0FBQWlDLGdCQUVBakMsS0FBQWtDLGdCQUNBbEMsS0FBQW1DLGdCQUNBbkMsS0FBQW9DLGNBZ0ZaLE1BdkVJWCxHQUFBWSxVQUFBQyxRQUFBLFdBQUEsR0FBQUMsR0FBQXZDLElBQ0lBLE1BQUsyQixZQUFZYSxlQUFlQyxLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLGlCQUFpQkMsS0FDNUVDLFVBQ0QsU0FBQUMsR0FDSVIsRUFBS1QsWUFBY2lCLEdBRXZCLFNBQUFDLEdBQ0lULEVBQUtaLFlBQVlzQixhQUNqQkMsUUFBUUMsSUFBU0gsTUFJN0J2QixFQUFBWSxVQUFBZSxTQUFBLFdBQUEsR0FBQWIsR0FBQXZDLElBQ0lBLE1BQUs0QixhQUFheUIsY0FDYlAsVUFDRCxTQUFBUSxHQUNJSixRQUFRQyxJQUFJLGNBQWVHLEdBQzNCZixFQUFLUixhQUFldUIsRUFDcEJmLEVBQUtQLGlCQUFtQnRCLE9BQU82QyxLQUFLRCxJQUV4QyxTQUFBTixHQUNJVCxFQUFLWixZQUFZc0IsYUFDakJDLFFBQVFDLElBQVNILE1BSTdCdkIsRUFBQVksVUFBQW1CLFlBQUEsV0FBQSxHQUFBakIsR0FBQXZDLElBa0JJLE9BakJBQSxNQUFLa0MsZ0JBQ0xsQyxLQUFLbUMsZ0JBQ0xuQyxLQUFLb0MsY0FDTHBDLEtBQUtnQyxpQkFBaUJ5QixRQUFRLFNBQUFDLEdBRTFCLE9BREFSLFFBQVFDLElBQUlPLEVBQVNuQixFQUFLUixhQUFhMkIsSUFDL0JuQixFQUFLUixhQUFhMkIsR0FBU0MsTUFDL0IsSUFBSyxVQUNEcEIsRUFBS0wsYUFBYTBCLEtBQUtyQixFQUFLUixhQUFhMkIsR0FDekMsTUFDSixLQUFLLFVBQ0RuQixFQUFLSixhQUFheUIsS0FBS3JCLEVBQUtSLGFBQWEyQixHQUN6QyxNQUNKLEtBQUssUUFDRG5CLEVBQUtILFdBQVd3QixLQUFLckIsRUFBS1IsYUFBYTJCLE9BSTVDLFVBQVUxRCxLQUFLZ0MsaUJBQWlCeEIsT0FBTSxXQUFXUixLQUFLa0MsYUFBYTFCLE9BQU0sY0FBY1IsS0FBS21DLGFBQWEzQixPQUFNLGNBQWNSLEtBQUtvQyxXQUFXNUIsT0FBTSxZQUc5SmlCLEVBQUFZLFVBQUF3QixVQUFBLFNBQVVDLEdBQ04sTUFBT3ZDLFFBQU91QyxHQUFNQyxPQUFPLFFBRy9CdEMsRUFBQVksVUFBQTJCLGNBQUEsU0FBY0MsR0FBZCxHQUFBMUIsR0FBQXZDLElBQ0lBLE1BQUtrRSxlQUFpQkQsRUFDdEJqRSxLQUFLNkIsZ0JBQWdCbUMsY0FBY0MsR0FDOUJuQixVQUNELFNBQUFDLEdBQ1FBLEVBQUtGLEtBQU9OLEVBQUsyQixpQkFDakJoQixRQUFRQyxJQUFJLGdCQUFpQkosR0FDN0JSLEVBQUtOLGFBQWVjLElBRzVCLFNBQUFDLEdBQ0lFLFFBQVFDLElBQVNILE1BSzdCdkIsRUFBQVksVUFBQThCLFNBQUEsV0FDSW5FLEtBQUs4QixZQUFjVyxLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLGlCQUNuRDVDLEtBQUtzQyxXQS9GYmIsRUFBQTFCLFlBQUNxQixPQUFBZ0QsV0FDR0MsU0FBVUMsT0FBT0MsR0FDakJDLFNBQVUsYUFDVkMsWUFBYSx1QkFDYkMsV0FBWSxxQkFDWkMsWUFBYXJELFNBQUFzRCxtQkFDYkMsV0FBWXJELFFBQUFzRCxZQUFhdEQsUUFBQXVELGFBQWN2RCxRQUFBd0QsbUJEdUZuQ2hFLFdBQVcscUJBQXNCTSxTQUFTMkQsT0FBUXpELFFBQVFzRCxZQUFhdEQsUUFBUXVELGFBQWN2RCxRQUFRd0QsbUJBQ3RHdkQsS0N0Rk15RCxTQUFBekQsZUFBY0EiLCJmaWxlIjoiZGFzaGJvYXJkL2NvbXBhbnkyL3NhbGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcbnZhciBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcbnZhciBpbmRleF8xID0gcmVxdWlyZSgnLi4vLi4vc2hhcmVkL3NlcnZpY2VzL2luZGV4Jyk7XG52YXIgU2FsZXNDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNhbGVzQ29tcG9uZW50KHJvdXRlciwgYXV0aFNlcnZpY2UsIGFkbWluU2VydmljZSwgdXNlckRhdGFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XG4gICAgICAgIHRoaXMuYWRtaW5TZXJ2aWNlID0gYWRtaW5TZXJ2aWNlO1xuICAgICAgICB0aGlzLnVzZXJEYXRhU2VydmljZSA9IHVzZXJEYXRhU2VydmljZTtcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHt9O1xuICAgICAgICB0aGlzLnVzZXJEYXRhTGlzdCA9IHt9O1xuICAgICAgICB0aGlzLmFycmF5T2ZVc2Vyc0tleXMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXIgPSB7fTtcbiAgICAgICAgdGhpcy5zdHVkZW50c0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5hZHZpc29yc0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5hZG1pbnNMaXN0ID0gW107XG4gICAgfVxuICAgIFNhbGVzQ29tcG9uZW50LnByb3RvdHlwZS5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKS5faWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgICAgICBfdGhpcy5jdXJyZW50VXNlciA9IHVzZXI7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgX3RoaXMuYXV0aFNlcnZpY2UubG9nVXNlck91dCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNhbGVzQ29tcG9uZW50LnByb3RvdHlwZS5nZXRVc2VycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZG1pblNlcnZpY2UuZ2V0QWxsVXNlcnMoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShmdW5jdGlvbiAodXNlcnMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbGwgVXNlcnM6ICcsIHVzZXJzKTtcbiAgICAgICAgICAgIF90aGlzLnVzZXJEYXRhTGlzdCA9IHVzZXJzO1xuICAgICAgICAgICAgX3RoaXMuYXJyYXlPZlVzZXJzS2V5cyA9IE9iamVjdC5rZXlzKHVzZXJzKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2FsZXNDb21wb25lbnQucHJvdG90eXBlLnNob3dTdW1tYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0dWRlbnRzTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmFkdmlzb3JzTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmFkbWluc0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5hcnJheU9mVXNlcnNLZXlzLmZvckVhY2goZnVuY3Rpb24gKHVzZXJLZXkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJLZXksIF90aGlzLnVzZXJEYXRhTGlzdFt1c2VyS2V5XSk7XG4gICAgICAgICAgICBzd2l0Y2ggKF90aGlzLnVzZXJEYXRhTGlzdFt1c2VyS2V5XS5yb2xlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnc3R1ZGVudCc6XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnN0dWRlbnRzTGlzdC5wdXNoKF90aGlzLnVzZXJEYXRhTGlzdFt1c2VyS2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2Fkdmlzb3InOlxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZHZpc29yc0xpc3QucHVzaChfdGhpcy51c2VyRGF0YUxpc3RbdXNlcktleV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdhZG1pbic6XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkbWluc0xpc3QucHVzaChfdGhpcy51c2VyRGF0YUxpc3RbdXNlcktleV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBcIlRvdGFsOiBcIiArIHRoaXMuYXJyYXlPZlVzZXJzS2V5cy5sZW5ndGggKyBcIiB1c2VycyAoXCIgKyB0aGlzLnN0dWRlbnRzTGlzdC5sZW5ndGggKyBcIiBzdHVkZW50cywgXCIgKyB0aGlzLmFkdmlzb3JzTGlzdC5sZW5ndGggKyBcIiBhZHZpc29ycywgXCIgKyB0aGlzLmFkbWluc0xpc3QubGVuZ3RoICsgXCIgYWRtaW5zKVwiO1xuICAgIH07XG4gICAgU2FsZXNDb21wb25lbnQucHJvdG90eXBlLnJlbmRlckxMVCA9IGZ1bmN0aW9uICh1bml4KSB7XG4gICAgICAgIHJldHVybiBtb21lbnQodW5peCkuZm9ybWF0KCdMTEwnKTtcbiAgICB9O1xuICAgIFNhbGVzQ29tcG9uZW50LnByb3RvdHlwZS5nZXRTaW5nbGVVc2VyID0gZnVuY3Rpb24gKHVzZXJJZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNlbGVjdGVkVXNlcklkID0gdXNlcklkO1xuICAgICAgICB0aGlzLnVzZXJEYXRhU2VydmljZS5nZXRTaW5nbGVVc2VyKHVzZXJJZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgICAgICAgIGlmICh1c2VyLl9pZCA9PSBfdGhpcy5zZWxlY3RlZFVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaW5nbGUgVXNlcjogJywgdXNlcik7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2VsZWN0ZWRVc2VyID0gdXNlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2FsZXNDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpO1xuICAgICAgICB0aGlzLmdldFVzZXIoKTtcbiAgICB9O1xuICAgIFNhbGVzQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICAgICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAneWVhaC1zYWxlcycsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3NhbGVzLmNvbXBvbmVudC5odG1sJyxcbiAgICAgICAgICAgIHN0eWxlVXJsczogWydjb21wYW55LnN0eWxlLmNzcyddLFxuICAgICAgICAgICAgZGlyZWN0aXZlczogW3JvdXRlcl8xLlJPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW2luZGV4XzEuQXV0aFNlcnZpY2UsIGluZGV4XzEuQWRtaW5TZXJ2aWNlLCBpbmRleF8xLlVzZXJEYXRhU2VydmljZV1cbiAgICAgICAgfSksIFxuICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtyb3V0ZXJfMS5Sb3V0ZXIsIGluZGV4XzEuQXV0aFNlcnZpY2UsIGluZGV4XzEuQWRtaW5TZXJ2aWNlLCBpbmRleF8xLlVzZXJEYXRhU2VydmljZV0pXG4gICAgXSwgU2FsZXNDb21wb25lbnQpO1xuICAgIHJldHVybiBTYWxlc0NvbXBvbmVudDtcbn0oKSk7XG5leHBvcnRzLlNhbGVzQ29tcG9uZW50ID0gU2FsZXNDb21wb25lbnQ7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUyB9ICAgIGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9zaGFyZWQvdHlwZXMvdXNlcidcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBBZG1pblNlcnZpY2UsIFVzZXJEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICd5ZWFoLXNhbGVzJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NhbGVzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnY29tcGFueS5zdHlsZS5jc3MnXSxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHByb3ZpZGVyczogW0F1dGhTZXJ2aWNlLCBBZG1pblNlcnZpY2UsIFVzZXJEYXRhU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU2FsZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgY3VycmVudFVzZXIgPSB7fTtcbiAgICBwcml2YXRlIHVzZXJEYXRhTGlzdCA9IHt9O1xuICAgIHByaXZhdGUgYXJyYXlPZlVzZXJzS2V5cyA9IFtdO1xuICAgIHByaXZhdGUgc2VsZWN0ZWRVc2VySWQ6IHN0cmluZztcbiAgICBwcml2YXRlIHNlbGVjdGVkVXNlciA9IHt9O1xuXG4gICAgcHJpdmF0ZSBzdHVkZW50c0xpc3QgPSBbXTtcbiAgICBwcml2YXRlIGFkdmlzb3JzTGlzdCA9IFtdO1xuICAgIHByaXZhdGUgYWRtaW5zTGlzdCA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGFkbWluU2VydmljZTogQWRtaW5TZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHVzZXJEYXRhU2VydmljZTogVXNlckRhdGFTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIGdldFVzZXIoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0Q3VycmVudFVzZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpLl9pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICB1c2VyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJPdXQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyg8YW55PmVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFVzZXJzKCkge1xuICAgICAgICB0aGlzLmFkbWluU2VydmljZS5nZXRBbGxVc2VycygpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgdXNlcnMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBbGwgVXNlcnM6ICcsIHVzZXJzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJEYXRhTGlzdCA9IHVzZXJzO1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlPZlVzZXJzS2V5cyA9IE9iamVjdC5rZXlzKHVzZXJzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dVc2VyT3V0KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coPGFueT5lcnJvcilcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dTdW1tYXJ5KCkge1xuICAgICAgICB0aGlzLnN0dWRlbnRzTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmFkdmlzb3JzTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmFkbWluc0xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5hcnJheU9mVXNlcnNLZXlzLmZvckVhY2godXNlcktleSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyS2V5LCB0aGlzLnVzZXJEYXRhTGlzdFt1c2VyS2V5XSk7XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMudXNlckRhdGFMaXN0W3VzZXJLZXldLnJvbGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzdHVkZW50JzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHVkZW50c0xpc3QucHVzaCh0aGlzLnVzZXJEYXRhTGlzdFt1c2VyS2V5XSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWR2aXNvcic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWR2aXNvcnNMaXN0LnB1c2godGhpcy51c2VyRGF0YUxpc3RbdXNlcktleV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2FkbWluJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZG1pbnNMaXN0LnB1c2godGhpcy51c2VyRGF0YUxpc3RbdXNlcktleV0pXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYFRvdGFsOiAke3RoaXMuYXJyYXlPZlVzZXJzS2V5cy5sZW5ndGh9IHVzZXJzICgke3RoaXMuc3R1ZGVudHNMaXN0Lmxlbmd0aH0gc3R1ZGVudHMsICR7dGhpcy5hZHZpc29yc0xpc3QubGVuZ3RofSBhZHZpc29ycywgJHt0aGlzLmFkbWluc0xpc3QubGVuZ3RofSBhZG1pbnMpYFxuICAgIH1cblxuICAgIHJlbmRlckxMVCh1bml4KSB7XG4gICAgICAgIHJldHVybiBtb21lbnQodW5peCkuZm9ybWF0KCdMTEwnKTtcbiAgICB9XG5cbiAgICBnZXRTaW5nbGVVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRVc2VySWQgPSB1c2VySWQ7XG4gICAgICAgIHRoaXMudXNlckRhdGFTZXJ2aWNlLmdldFNpbmdsZVVzZXIodXNlcklkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyLl9pZCA9PSB0aGlzLnNlbGVjdGVkVXNlcklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaW5nbGUgVXNlcjogJywgdXNlcik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRVc2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKDxhbnk+ZXJyb3IpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudF91c2VyJykpO1xuICAgICAgICB0aGlzLmdldFVzZXIoKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
