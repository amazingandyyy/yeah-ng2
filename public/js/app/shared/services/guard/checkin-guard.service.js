"use strict";var __decorate=this&&this.__decorate||function(e,t,r,a){var o,n=arguments.length,c=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(n<3?o(c):n>3?o(t,r,c):o(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),router_1=require("@angular/router"),angular2_jwt_1=require("angular2-jwt"),CheckinGuard=function(){function e(e){this.router=e,this.jwtHelper=new angular2_jwt_1.JwtHelper}return e.prototype.canActivate=function(e,t){var r=JSON.parse(localStorage.getItem("current_user")),a=JSON.parse(localStorage.getItem("id_token"));return a&&!this.jwtHelper.isTokenExpired(a)&&r?(this.router.navigate(["/dashboard"]),!0):(this.router.navigate(["/login"]),!1)},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[router_1.Router])],e)}();exports.CheckinGuard=CheckinGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9ndWFyZC9jaGVja2luLWd1YXJkLnNlcnZpY2UuanMiLCJzaGFyZWQvc2VydmljZXMvZ3VhcmQvY2hlY2tpbi1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIl9fZGVjb3JhdGUiLCJ0aGlzIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJkIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX21ldGFkYXRhIiwiayIsInYiLCJtZXRhZGF0YSIsImNvcmVfMSIsInJlcXVpcmUiLCJyb3V0ZXJfMSIsImFuZ3VsYXIyX2p3dF8xIiwiQ2hlY2tpbkd1YXJkIiwicm91dGVyIiwiand0SGVscGVyIiwiSnd0SGVscGVyIiwicHJvdG90eXBlIiwiY2FuQWN0aXZhdGUiLCJyb3V0ZSIsInN0YXRlIiwiY3VycmVudF91c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwiaXNUb2tlbkV4cGlyZWQiLCJuYXZpZ2F0ZSIsIkluamVjdGFibGUiLCJSb3V0ZXIiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUNBLElBQUlBLFlBQWNDLE1BQVFBLEtBQUtELFlBQWUsU0FBVUUsRUFBWUMsRUFBUUMsRUFBS0MsR0FDN0UsR0FBMkhDLEdBQXZIQyxFQUFJQyxVQUFVQyxPQUFRQyxFQUFJSCxFQUFJLEVBQUlKLEVBQWtCLE9BQVRFLEVBQWdCQSxFQUFPTSxPQUFPQyx5QkFBeUJULEVBQVFDLEdBQU9DLENBQ3JILElBQXVCLGdCQUFaUSxVQUFvRCxrQkFBckJBLFNBQVFDLFNBQXlCSixFQUFJRyxRQUFRQyxTQUFTWixFQUFZQyxFQUFRQyxFQUFLQyxPQUNwSCxLQUFLLEdBQUlVLEdBQUliLEVBQVdPLE9BQVMsRUFBR00sR0FBSyxFQUFHQSxLQUFTVCxFQUFJSixFQUFXYSxNQUFJTCxHQUFLSCxFQUFJLEVBQUlELEVBQUVJLEdBQUtILEVBQUksRUFBSUQsRUFBRUgsRUFBUUMsRUFBS00sR0FBS0osRUFBRUgsRUFBUUMsS0FBU00sRUFDaEosT0FBT0gsR0FBSSxHQUFLRyxHQUFLQyxPQUFPSyxlQUFlYixFQUFRQyxFQUFLTSxHQUFJQSxHQUU1RE8sV0FBY2hCLE1BQVFBLEtBQUtnQixZQUFlLFNBQVVDLEVBQUdDLEdBQ3ZELEdBQXVCLGdCQUFaTixVQUFvRCxrQkFBckJBLFNBQVFPLFNBQXlCLE1BQU9QLFNBQVFPLFNBQVNGLEVBQUdDLElDUjFHRSxPQUFBQyxRQUF1QyxpQkFDdkNDLFNBQUFELFFBRXVDLG1CQUV2Q0UsZUFBQUYsUUFBdUMsZ0JBR3ZDRyxhQUFBLFdBQ0UsUUFBQUEsR0FDVUMsR0FBQXpCLEtBQUF5QixPQUFBQSxFQUdWekIsS0FBQTBCLFVBQXVCLEdBQUlILGdCQUFBSSxVQWdCN0IsTUFkRUgsR0FBQUksVUFBQUMsWUFBQSxTQUFZQyxFQUErQkMsR0FDekMsR0FBSUMsR0FBZUMsS0FBS0MsTUFBTUMsYUFBYUMsUUFBUSxpQkFDL0NDLEVBQVFKLEtBQUtDLE1BQU1DLGFBQWFDLFFBQVEsWUFFNUMsT0FBR0MsS0FDR3JDLEtBQUswQixVQUFVWSxlQUFlRCxJQUFVTCxHQUMxQ2hDLEtBQUt5QixPQUFPYyxVQUFVLGdCQUNmLElBSVh2QyxLQUFLeUIsT0FBT2MsVUFBVSxZQUNmLElBcEJYZixFQUFBekIsWUFBQ3FCLE9BQUFvQixhRHlCT3hCLFdBQVcscUJBQXNCTSxTQUFTbUIsVUFDM0NqQixLQ3pCTWtCLFNBQUFsQixhQUFZQSIsImZpbGUiOiJzaGFyZWQvc2VydmljZXMvZ3VhcmQvY2hlY2tpbi1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL3JvdXRlcicpO1xudmFyIGFuZ3VsYXIyX2p3dF8xID0gcmVxdWlyZSgnYW5ndWxhcjItand0Jyk7XG52YXIgQ2hlY2tpbkd1YXJkID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDaGVja2luR3VhcmQocm91dGVyKSB7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgICB0aGlzLmp3dEhlbHBlciA9IG5ldyBhbmd1bGFyMl9qd3RfMS5Kd3RIZWxwZXIoKTtcbiAgICB9XG4gICAgQ2hlY2tpbkd1YXJkLnByb3RvdHlwZS5jYW5BY3RpdmF0ZSA9IGZ1bmN0aW9uIChyb3V0ZSwgc3RhdGUpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRfdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRfdXNlcicpKTtcbiAgICAgICAgdmFyIHRva2VuID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmp3dEhlbHBlci5pc1Rva2VuRXhwaXJlZCh0b2tlbikgJiYgY3VycmVudF91c2VyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBDaGVja2luR3VhcmQgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLkluamVjdGFibGUoKSwgXG4gICAgICAgIF9fbWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgW3JvdXRlcl8xLlJvdXRlcl0pXG4gICAgXSwgQ2hlY2tpbkd1YXJkKTtcbiAgICByZXR1cm4gQ2hlY2tpbkd1YXJkO1xufSgpKTtcbmV4cG9ydHMuQ2hlY2tpbkd1YXJkID0gQ2hlY2tpbkd1YXJkO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlcixcbiAgICAgICAgIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgICAgICBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gICAgICAgICAgICBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgSnd0SGVscGVyIH0gICAgICAgICAgICAgIGZyb20gJ2FuZ3VsYXIyLWp3dCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGVja2luR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIGp3dEhlbHBlcjogSnd0SGVscGVyID0gbmV3IEp3dEhlbHBlcigpO1xuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIHZhciBjdXJyZW50X3VzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSlcbiAgICB2YXIgdG9rZW4gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKVxuICAgIFxuICAgIGlmKHRva2VuKXtcbiAgICAgIGlmKCF0aGlzLmp3dEhlbHBlci5pc1Rva2VuRXhwaXJlZCh0b2tlbikgJiYgY3VycmVudF91c2VyKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
