"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var n,u=arguments.length,c=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(u<3?n(c):u>3?n(t,r,c):n(t,r))||c);return u>3&&c&&Object.defineProperty(t,r,c),c},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),router_1=require("@angular/router"),auth_service_1=require("../../shared/services/auth.service"),SignupStudentComponent=function(){function e(e,t){this.authService=e,this.router=t}return e.prototype.onSubmit=function(e){console.log("check"),console.log("auth: ",e),e.role="student"},e.prototype.ngOnInit=function(){},e=__decorate([core_1.Component({moduleId:module.id,selector:"signup-student",templateUrl:"student.component.html",styleUrls:["../auth.style.css"],providers:[auth_service_1.AuthService]}),__metadata("design:paramtypes",[auth_service_1.AuthService,router_1.Router])],e)}();exports.SignupStudentComponent=SignupStudentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC9zdHVkZW50Mi9zdHVkZW50LmNvbXBvbmVudC5qcyIsInNpZ251cC9zdHVkZW50Mi9zdHVkZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJfX2RlY29yYXRlIiwidGhpcyIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiZCIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiaSIsImRlZmluZVByb3BlcnR5IiwiX19tZXRhZGF0YSIsImsiLCJ2IiwibWV0YWRhdGEiLCJjb3JlXzEiLCJyZXF1aXJlIiwicm91dGVyXzEiLCJhdXRoX3NlcnZpY2VfMSIsIlNpZ251cFN0dWRlbnRDb21wb25lbnQiLCJhdXRoU2VydmljZSIsInJvdXRlciIsInByb3RvdHlwZSIsIm9uU3VibWl0IiwiYXV0aCIsImNvbnNvbGUiLCJsb2ciLCJyb2xlIiwibmdPbkluaXQiLCJDb21wb25lbnQiLCJtb2R1bGVJZCIsIm1vZHVsZSIsImlkIiwic2VsZWN0b3IiLCJ0ZW1wbGF0ZVVybCIsInN0eWxlVXJscyIsInByb3ZpZGVycyIsIkF1dGhTZXJ2aWNlIiwiUm91dGVyIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFDQSxJQUFJQSxZQUFjQyxNQUFRQSxLQUFLRCxZQUFlLFNBQVVFLEVBQVlDLEVBQVFDLEVBQUtDLEdBQzdFLEdBQTJIQyxHQUF2SEMsRUFBSUMsVUFBVUMsT0FBUUMsRUFBSUgsRUFBSSxFQUFJSixFQUFrQixPQUFURSxFQUFnQkEsRUFBT00sT0FBT0MseUJBQXlCVCxFQUFRQyxHQUFPQyxDQUNySCxJQUF1QixnQkFBWlEsVUFBb0Qsa0JBQXJCQSxTQUFRQyxTQUF5QkosRUFBSUcsUUFBUUMsU0FBU1osRUFBWUMsRUFBUUMsRUFBS0MsT0FDcEgsS0FBSyxHQUFJVSxHQUFJYixFQUFXTyxPQUFTLEVBQUdNLEdBQUssRUFBR0EsS0FBU1QsRUFBSUosRUFBV2EsTUFBSUwsR0FBS0gsRUFBSSxFQUFJRCxFQUFFSSxHQUFLSCxFQUFJLEVBQUlELEVBQUVILEVBQVFDLEVBQUtNLEdBQUtKLEVBQUVILEVBQVFDLEtBQVNNLEVBQ2hKLE9BQU9ILEdBQUksR0FBS0csR0FBS0MsT0FBT0ssZUFBZWIsRUFBUUMsRUFBS00sR0FBSUEsR0FFNURPLFdBQWNoQixNQUFRQSxLQUFLZ0IsWUFBZSxTQUFVQyxFQUFHQyxHQUN2RCxHQUF1QixnQkFBWk4sVUFBb0Qsa0JBQXJCQSxTQUFRTyxTQUF5QixNQUFPUCxTQUFRTyxTQUFTRixFQUFHQyxJQ1IxR0UsT0FBQUMsUUFBa0MsaUJBRWxDQyxTQUFBRCxRQUF1QixtQkFFdkJFLGVBQUFGLFFBQTRCLHNDQVU1QkcsdUJBQUEsV0FDSSxRQUFBQSxHQUFvQkMsRUFDUkMsR0FEUTFCLEtBQUF5QixZQUFBQSxFQUNSekIsS0FBQTBCLE9BQUFBLEVBd0JoQixNQXRCSUYsR0FBQUcsVUFBQUMsU0FBQSxTQUFTQyxHQUNMQyxRQUFRQyxJQUFJLFNBQ1pELFFBQVFDLElBQUksU0FBVUYsR0FDdEJBLEVBQUtHLEtBQU8sV0FpQmhCUixFQUFBRyxVQUFBTSxTQUFBLGFBL0JKVCxFQUFBekIsWUFBQ3FCLE9BQUFjLFdBQ0dDLFNBQVVDLE9BQU9DLEdBQ2pCQyxTQUFVLGlCQUNWQyxZQUFhLHlCQUNiQyxXQUFZLHFCQUNaQyxXQUFZbEIsZUFBQW1CLGVEZ0NSMUIsV0FBVyxxQkFBc0JPLGVBQWVtQixZQUFhcEIsU0FBU3FCLFVBQ3ZFbkIsS0MvQk1vQixTQUFBcEIsdUJBQXNCQSIsImZpbGUiOiJzaWdudXAvc3R1ZGVudDIvc3R1ZGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XG52YXIgYXV0aF9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJyk7XG52YXIgU2lnbnVwU3R1ZGVudENvbXBvbmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2lnbnVwU3R1ZGVudENvbXBvbmVudChhdXRoU2VydmljZSwgcm91dGVyKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBhdXRoU2VydmljZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgfVxuICAgIFNpZ251cFN0dWRlbnRDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKGF1dGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhdXRoOiAnLCBhdXRoKTtcbiAgICAgICAgYXV0aC5yb2xlID0gJ3N0dWRlbnQnO1xuICAgICAgICAvLyB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIHRoaXMuYXV0aFNlcnZpY2UubG9nVXNlckluKGF1dGgpXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAvLyAgICAgcmVzID0+IGhhbmRsZVJlc3BvbnNlKHJlcyksXG4gICAgICAgIC8vICAgICBlcnIgPT4gY29uc29sZS5sb2coJ2VyciByZXM6ICcsIGVycilcbiAgICAgICAgLy8gICAgIClcbiAgICAgICAgLy8gZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzKSB7XG4gICAgICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBKU09OLnN0cmluZ2lmeShyZXMudG9rZW4pKTtcbiAgICAgICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50X3VzZXInLCBKU09OLnN0cmluZ2lmeShyZXMudXNlcikpO1xuICAgICAgICAvLyAgICAgLy8gc2VsZi5yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQvcGxhbnMnXSlcbiAgICAgICAgLy8gICAgIHNlbGYucm91dGVyLm5hdmlnYXRlKFsnZGFzaGJvYXJkL2FjY291bnQnXSlcbiAgICAgICAgLy8gfVxuICAgIH07XG4gICAgU2lnbnVwU3R1ZGVudENvbXBvbmVudC5wcm90b3R5cGUubmdPbkluaXQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgU2lnbnVwU3R1ZGVudENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcbiAgICAgICAgICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NpZ251cC1zdHVkZW50JyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc3R1ZGVudC5jb21wb25lbnQuaHRtbCcsXG4gICAgICAgICAgICBzdHlsZVVybHM6IFsnLi4vYXV0aC5zdHlsZS5jc3MnXSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW2F1dGhfc2VydmljZV8xLkF1dGhTZXJ2aWNlXVxuICAgICAgICB9KSwgXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW2F1dGhfc2VydmljZV8xLkF1dGhTZXJ2aWNlLCByb3V0ZXJfMS5Sb3V0ZXJdKVxuICAgIF0sIFNpZ251cFN0dWRlbnRDb21wb25lbnQpO1xuICAgIHJldHVybiBTaWdudXBTdHVkZW50Q29tcG9uZW50O1xufSgpKTtcbmV4cG9ydHMuU2lnbnVwU3R1ZGVudENvbXBvbmVudCA9IFNpZ251cFN0dWRlbnRDb21wb25lbnQ7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGggfSBmcm9tICcuLi8uLi9zaGFyZWQvdHlwZXMvYXV0aCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzaWdudXAtc3R1ZGVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICdzdHVkZW50LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi4vYXV0aC5zdHlsZS5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtBdXRoU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU2lnbnVwU3R1ZGVudENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgICBvblN1Ym1pdChhdXRoOiBBdXRoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGVjaycpO1xuICAgICAgICBjb25zb2xlLmxvZygnYXV0aDogJywgYXV0aCk7XG4gICAgICAgIGF1dGgucm9sZSA9ICdzdHVkZW50J1xuICAgICAgICBcbiAgICAgICAgLy8gdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJJbihhdXRoKVxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShcbiAgICAgICAgLy8gICAgIHJlcyA9PiBoYW5kbGVSZXNwb25zZShyZXMpLFxuICAgICAgICAvLyAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdlcnIgcmVzOiAnLCBlcnIpXG4gICAgICAgIC8vICAgICApXG5cbiAgICAgICAgLy8gZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzKSB7XG4gICAgICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBKU09OLnN0cmluZ2lmeShyZXMudG9rZW4pKTtcbiAgICAgICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50X3VzZXInLCBKU09OLnN0cmluZ2lmeShyZXMudXNlcikpO1xuICAgICAgICAvLyAgICAgLy8gc2VsZi5yb3V0ZXIubmF2aWdhdGUoWydkYXNoYm9hcmQvcGxhbnMnXSlcbiAgICAgICAgLy8gICAgIHNlbGYucm91dGVyLm5hdmlnYXRlKFsnZGFzaGJvYXJkL2FjY291bnQnXSlcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
