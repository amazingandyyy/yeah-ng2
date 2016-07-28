"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var n,u=arguments.length,c=u<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(u<3?n(c):u>3?n(t,r,c):n(t,r))||c);return u>3&&c&&Object.defineProperty(t,r,c),c},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),router_1=require("@angular/router"),auth_service_1=require("../../shared/services/auth.service"),AuthSupervisorComponent=function(){function e(e,t){this.authService=e,this.router=t}return e.prototype.onSubmit=function(e){console.log("check"),console.log("auth: ",e)},e.prototype.ngOnInit=function(){},e=__decorate([core_1.Component({moduleId:module.id,selector:"auth-supervisor",templateUrl:"supervisor.component.html",providers:[auth_service_1.AuthService]}),__metadata("design:paramtypes",[auth_service_1.AuthService,router_1.Router])],e)}();exports.AuthSupervisorComponent=AuthSupervisorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc3VwZXJ2aXNvci9zdXBlcnZpc29yLmNvbXBvbmVudC5qcyIsImF1dGgvc3VwZXJ2aXNvci9zdXBlcnZpc29yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJfX2RlY29yYXRlIiwidGhpcyIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiZCIsImMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJyIiwiT2JqZWN0IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiaSIsImRlZmluZVByb3BlcnR5IiwiX19tZXRhZGF0YSIsImsiLCJ2IiwibWV0YWRhdGEiLCJjb3JlXzEiLCJyZXF1aXJlIiwicm91dGVyXzEiLCJhdXRoX3NlcnZpY2VfMSIsIkF1dGhTdXBlcnZpc29yQ29tcG9uZW50IiwiYXV0aFNlcnZpY2UiLCJyb3V0ZXIiLCJwcm90b3R5cGUiLCJvblN1Ym1pdCIsImF1dGgiLCJjb25zb2xlIiwibG9nIiwibmdPbkluaXQiLCJDb21wb25lbnQiLCJtb2R1bGVJZCIsIm1vZHVsZSIsImlkIiwic2VsZWN0b3IiLCJ0ZW1wbGF0ZVVybCIsInByb3ZpZGVycyIsIkF1dGhTZXJ2aWNlIiwiUm91dGVyIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFDQSxJQUFJQSxZQUFjQyxNQUFRQSxLQUFLRCxZQUFlLFNBQVVFLEVBQVlDLEVBQVFDLEVBQUtDLEdBQzdFLEdBQTJIQyxHQUF2SEMsRUFBSUMsVUFBVUMsT0FBUUMsRUFBSUgsRUFBSSxFQUFJSixFQUFrQixPQUFURSxFQUFnQkEsRUFBT00sT0FBT0MseUJBQXlCVCxFQUFRQyxHQUFPQyxDQUNySCxJQUF1QixnQkFBWlEsVUFBb0Qsa0JBQXJCQSxTQUFRQyxTQUF5QkosRUFBSUcsUUFBUUMsU0FBU1osRUFBWUMsRUFBUUMsRUFBS0MsT0FDcEgsS0FBSyxHQUFJVSxHQUFJYixFQUFXTyxPQUFTLEVBQUdNLEdBQUssRUFBR0EsS0FBU1QsRUFBSUosRUFBV2EsTUFBSUwsR0FBS0gsRUFBSSxFQUFJRCxFQUFFSSxHQUFLSCxFQUFJLEVBQUlELEVBQUVILEVBQVFDLEVBQUtNLEdBQUtKLEVBQUVILEVBQVFDLEtBQVNNLEVBQ2hKLE9BQU9ILEdBQUksR0FBS0csR0FBS0MsT0FBT0ssZUFBZWIsRUFBUUMsRUFBS00sR0FBSUEsR0FFNURPLFdBQWNoQixNQUFRQSxLQUFLZ0IsWUFBZSxTQUFVQyxFQUFHQyxHQUN2RCxHQUF1QixnQkFBWk4sVUFBb0Qsa0JBQXJCQSxTQUFRTyxTQUF5QixNQUFPUCxTQUFRTyxTQUFTRixFQUFHQyxJQ1IxR0UsT0FBQUMsUUFBa0MsaUJBRWxDQyxTQUFBRCxRQUF1QixtQkFFdkJFLGVBQUFGLFFBQTRCLHNDQVM1Qkcsd0JBQUEsV0FDSSxRQUFBQSxHQUFvQkMsRUFDUkMsR0FEUTFCLEtBQUF5QixZQUFBQSxFQUNSekIsS0FBQTBCLE9BQUFBLEVBdUJoQixNQXJCSUYsR0FBQUcsVUFBQUMsU0FBQSxTQUFTQyxHQUNMQyxRQUFRQyxJQUFJLFNBQ1pELFFBQVFDLElBQUksU0FBVUYsSUFpQjFCTCxFQUFBRyxVQUFBSyxTQUFBLGFBN0JKUixFQUFBekIsWUFBQ3FCLE9BQUFhLFdBQ0dDLFNBQVVDLE9BQU9DLEdBQ2pCQyxTQUFVLGtCQUNWQyxZQUFhLDRCQUNiQyxXQUFZaEIsZUFBQWlCLGVEK0JSeEIsV0FBVyxxQkFBc0JPLGVBQWVpQixZQUFhbEIsU0FBU21CLFVBQ3ZFakIsS0M5Qk1rQixTQUFBbEIsd0JBQXVCQSIsImZpbGUiOiJhdXRoL3N1cGVydmlzb3Ivc3VwZXJ2aXNvci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgY29yZV8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xudmFyIHJvdXRlcl8xID0gcmVxdWlyZSgnQGFuZ3VsYXIvcm91dGVyJyk7XG52YXIgYXV0aF9zZXJ2aWNlXzEgPSByZXF1aXJlKCcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJyk7XG52YXIgQXV0aFN1cGVydmlzb3JDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEF1dGhTdXBlcnZpc29yQ29tcG9uZW50KGF1dGhTZXJ2aWNlLCByb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZSA9IGF1dGhTZXJ2aWNlO1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB9XG4gICAgQXV0aFN1cGVydmlzb3JDb21wb25lbnQucHJvdG90eXBlLm9uU3VibWl0ID0gZnVuY3Rpb24gKGF1dGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhdXRoOiAnLCBhdXRoKTtcbiAgICAgICAgLy8gdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLmxvZ1VzZXJJbihhdXRoKVxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShcbiAgICAgICAgLy8gICAgIHJlcyA9PiBoYW5kbGVSZXNwb25zZShyZXMpLFxuICAgICAgICAvLyAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdlcnIgcmVzOiAnLCBlcnIpXG4gICAgICAgIC8vICAgICApXG4gICAgICAgIC8vIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlcykge1xuICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgSlNPTi5zdHJpbmdpZnkocmVzLnRva2VuKSk7XG4gICAgICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudF91c2VyJywgSlNPTi5zdHJpbmdpZnkocmVzLnVzZXIpKTtcbiAgICAgICAgLy8gICAgIC8vIHNlbGYucm91dGVyLm5hdmlnYXRlKFsnZGFzaGJvYXJkL3BsYW5zJ10pXG4gICAgICAgIC8vICAgICBzZWxmLnJvdXRlci5uYXZpZ2F0ZShbJ2Rhc2hib2FyZC9hY2NvdW50J10pXG4gICAgICAgIC8vIH1cbiAgICB9O1xuICAgIEF1dGhTdXBlcnZpc29yQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICBBdXRoU3VwZXJ2aXNvckNvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcbiAgICAgICAgICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgICAgICAgICBzZWxlY3RvcjogJ2F1dGgtc3VwZXJ2aXNvcicsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3N1cGVydmlzb3IuY29tcG9uZW50Lmh0bWwnLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbYXV0aF9zZXJ2aWNlXzEuQXV0aFNlcnZpY2VdXG4gICAgICAgIH0pLCBcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbYXV0aF9zZXJ2aWNlXzEuQXV0aFNlcnZpY2UsIHJvdXRlcl8xLlJvdXRlcl0pXG4gICAgXSwgQXV0aFN1cGVydmlzb3JDb21wb25lbnQpO1xuICAgIHJldHVybiBBdXRoU3VwZXJ2aXNvckNvbXBvbmVudDtcbn0oKSk7XG5leHBvcnRzLkF1dGhTdXBlcnZpc29yQ29tcG9uZW50ID0gQXV0aFN1cGVydmlzb3JDb21wb25lbnQ7XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGggfSBmcm9tICcuLi8uLi9zaGFyZWQvdHlwZXMvYXV0aCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhdXRoLXN1cGVydmlzb3InLFxuICAgIHRlbXBsYXRlVXJsOiAnc3VwZXJ2aXNvci5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbQXV0aFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTdXBlcnZpc29yQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cblxuICAgIG9uU3VibWl0KGF1dGg6IEF1dGgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoZWNrJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhdXRoOiAnLCBhdXRoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy8gdGhpcy5hdXRoU2VydmljZS5sb2dVc2VySW4oYXV0aClcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIC8vICAgICByZXMgPT4gaGFuZGxlUmVzcG9uc2UocmVzKSxcbiAgICAgICAgLy8gICAgIGVyciA9PiBjb25zb2xlLmxvZygnZXJyIHJlczogJywgZXJyKVxuICAgICAgICAvLyAgICAgKVxuXG4gICAgICAgIC8vIGZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlKHJlcykge1xuICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgSlNPTi5zdHJpbmdpZnkocmVzLnRva2VuKSk7XG4gICAgICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudF91c2VyJywgSlNPTi5zdHJpbmdpZnkocmVzLnVzZXIpKTtcbiAgICAgICAgLy8gICAgIC8vIHNlbGYucm91dGVyLm5hdmlnYXRlKFsnZGFzaGJvYXJkL3BsYW5zJ10pXG4gICAgICAgIC8vICAgICBzZWxmLnJvdXRlci5uYXZpZ2F0ZShbJ2Rhc2hib2FyZC9hY2NvdW50J10pXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9