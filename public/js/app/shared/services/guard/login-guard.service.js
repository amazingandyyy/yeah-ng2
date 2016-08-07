"use strict";var __decorate=this&&this.__decorate||function(e,t,r,a){var o,n=arguments.length,c=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(n<3?o(c):n>3?o(t,r,c):o(t,r))||c);return n>3&&c&&Object.defineProperty(t,r,c),c},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),router_1=require("@angular/router"),LoginGuard=function(){function e(e){this.router=e}return e.prototype.canActivate=function(){console.log("LoginGuard#canActivate called");var e=JSON.parse(localStorage.getItem("current_user"));JSON.parse(localStorage.getItem("id_token"));return!!e||(this.router.navigate(["/login"]),!1)},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[router_1.Router])],e)}();exports.LoginGuard=LoginGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9ndWFyZC9sb2dpbi1ndWFyZC5zZXJ2aWNlLmpzIiwic2hhcmVkL3NlcnZpY2VzL2d1YXJkL2xvZ2luLWd1YXJkLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiX19kZWNvcmF0ZSIsInRoaXMiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImQiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiY29yZV8xIiwicmVxdWlyZSIsInJvdXRlcl8xIiwiTG9naW5HdWFyZCIsInJvdXRlciIsInByb3RvdHlwZSIsImNhbkFjdGl2YXRlIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRfdXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJuYXZpZ2F0ZSIsIkluamVjdGFibGUiLCJSb3V0ZXIiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFLQSxZQUNBLElBQUlBLFlBQWNDLE1BQVFBLEtBQUtELFlBQWUsU0FBVUUsRUFBWUMsRUFBUUMsRUFBS0MsR0FDN0UsR0FBMkhDLEdBQXZIQyxFQUFJQyxVQUFVQyxPQUFRQyxFQUFJSCxFQUFJLEVBQUlKLEVBQWtCLE9BQVRFLEVBQWdCQSxFQUFPTSxPQUFPQyx5QkFBeUJULEVBQVFDLEdBQU9DLENBQ3JILElBQXVCLGdCQUFaUSxVQUFvRCxrQkFBckJBLFNBQVFDLFNBQXlCSixFQUFJRyxRQUFRQyxTQUFTWixFQUFZQyxFQUFRQyxFQUFLQyxPQUNwSCxLQUFLLEdBQUlVLEdBQUliLEVBQVdPLE9BQVMsRUFBR00sR0FBSyxFQUFHQSxLQUFTVCxFQUFJSixFQUFXYSxNQUFJTCxHQUFLSCxFQUFJLEVBQUlELEVBQUVJLEdBQUtILEVBQUksRUFBSUQsRUFBRUgsRUFBUUMsRUFBS00sR0FBS0osRUFBRUgsRUFBUUMsS0FBU00sRUFDaEosT0FBT0gsR0FBSSxHQUFLRyxHQUFLQyxPQUFPSyxlQUFlYixFQUFRQyxFQUFLTSxHQUFJQSxHQUU1RE8sV0FBY2hCLE1BQVFBLEtBQUtnQixZQUFlLFNBQVVDLEVBQUdDLEdBQ3ZELEdBQXVCLGdCQUFaTixVQUFvRCxrQkFBckJBLFNBQVFPLFNBQXlCLE1BQU9QLFNBQVFPLFNBQVNGLEVBQUdDLElDa0IxR0UsT0FBQUMsUUFBdUMsaUJBQ3ZDQyxTQUFBRCxRQUV1QyxtQkFJdkNFLFdBQUEsV0FDRSxRQUFBQSxHQUVVQyxHQUFBeEIsS0FBQXdCLE9BQUFBLEVBY1osTUFYRUQsR0FBQUUsVUFBQUMsWUFBQSxXQUNFQyxRQUFRQyxJQUFJLGdDQUNaLElBQUlDLEdBQWVDLEtBQUtDLE1BQU1DLGFBQWFDLFFBQVEsZ0JBQ3ZDSCxNQUFLQyxNQUFNQyxhQUFhQyxRQUFRLFlBRTVDLFNBQUdKLElBR0g3QixLQUFLd0IsT0FBT1UsVUFBVSxZQUNmLElBaEJYWCxFQUFBeEIsWUFBQ3FCLE9BQUFlLGFEa0JPbkIsV0FBVyxxQkFBc0JNLFNBQVNjLFVBQzNDYixLQ2xCTWMsU0FBQWQsV0FBVUEiLCJmaWxlIjoic2hhcmVkL3NlcnZpY2VzL2d1YXJkL2xvZ2luLWd1YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyLFxuLy8gICAgICAgICAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbi8vICAgICAgICAgIFJvdXRlclN0YXRlU25hcHNob3QgfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSAgICAgICAgICAgIGZyb20gJy4uL2F1dGguc2VydmljZSc7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG4vLyBASW5qZWN0YWJsZSgpXG4vLyBleHBvcnQgY2xhc3MgTG9naW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbi8vICAgY29uc3RydWN0b3IoXG4vLyAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIFxuLy8gICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbi8vICAgKSB7fVxuLy8gICBjYW5BY3RpdmF0ZSgpIHtcbi8vICAgICBjb25zb2xlLmxvZygnTG9naW5HdWFyZCNjYW5BY3RpdmF0ZSBjYWxsZWQnKTtcbi8vICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9nZXRvdXQnXSlcbi8vICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgfVxuLy8gICAvLyBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbi8vICAgLy8gICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0xvZ2dlZEluKSB7IHJldHVybiB0cnVlOyB9XG4vLyAgIC8vICAgLy8gU3RvcmUgdGhlIGF0dGVtcHRlZCBVUkwgZm9yIHJlZGlyZWN0aW5nXG4vLyAgIC8vICAgdGhpcy5hdXRoU2VydmljZS5yZWRpcmVjdFVybCA9IHN0YXRlLnVybDtcbi8vICAgLy8gICAvLyBOYXZpZ2F0ZSB0byB0aGUgbG9naW4gcGFnZVxuLy8gICAvLyAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnYXV0aC9sb2dpbiddKTtcbi8vICAgLy8gICByZXR1cm4gZmFsc2U7XG4vLyAgIC8vIH1cbi8vIH1cbnZhciBjb3JlXzEgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XG52YXIgcm91dGVyXzEgPSByZXF1aXJlKCdAYW5ndWxhci9yb3V0ZXInKTtcbnZhciBMb2dpbkd1YXJkID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMb2dpbkd1YXJkKFxuICAgICAgICAvLyBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcm91dGVyKSB7XG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIH1cbiAgICBMb2dpbkd1YXJkLnByb3RvdHlwZS5jYW5BY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luR3VhcmQjY2FuQWN0aXZhdGUgY2FsbGVkJyk7XG4gICAgICAgIHZhciBjdXJyZW50X3VzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSk7XG4gICAgICAgIHZhciB0b2tlbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xuICAgICAgICBpZiAoY3VycmVudF91c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgTG9naW5HdWFyZCA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLCBcbiAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbcm91dGVyXzEuUm91dGVyXSlcbiAgICBdLCBMb2dpbkd1YXJkKTtcbiAgICByZXR1cm4gTG9naW5HdWFyZDtcbn0oKSk7XG5leHBvcnRzLkxvZ2luR3VhcmQgPSBMb2dpbkd1YXJkO1xuIiwiLy8gaW1wb3J0IHsgSW5qZWN0YWJsZSB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlcixcbi8vICAgICAgICAgIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4vLyAgICAgICAgICBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gICAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gICAgICAgICAgICBmcm9tICcuLi9hdXRoLnNlcnZpY2UnO1xuXG4vLyBASW5qZWN0YWJsZSgpXG4vLyBleHBvcnQgY2xhc3MgTG9naW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbi8vICAgY29uc3RydWN0b3IoXG4vLyAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIFxuLy8gICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbi8vICAgKSB7fVxuXG4vLyAgIGNhbkFjdGl2YXRlKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKCdMb2dpbkd1YXJkI2NhbkFjdGl2YXRlIGNhbGxlZCcpO1xuLy8gICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2dldG91dCddKVxuLy8gICAgIHJldHVybiB0cnVlO1xuLy8gICB9XG4vLyAgIC8vIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuLy8gICAvLyAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4pIHsgcmV0dXJuIHRydWU7IH1cblxuLy8gICAvLyAgIC8vIFN0b3JlIHRoZSBhdHRlbXB0ZWQgVVJMIGZvciByZWRpcmVjdGluZ1xuLy8gICAvLyAgIHRoaXMuYXV0aFNlcnZpY2UucmVkaXJlY3RVcmwgPSBzdGF0ZS51cmw7XG5cbi8vICAgLy8gICAvLyBOYXZpZ2F0ZSB0byB0aGUgbG9naW4gcGFnZVxuLy8gICAvLyAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnYXV0aC9sb2dpbiddKTtcbi8vICAgLy8gICByZXR1cm4gZmFsc2U7XG4vLyAgIC8vIH1cbi8vIH1cblxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyLFxuICAgICAgICAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICAgICAgIFJvdXRlclN0YXRlU25hcHNob3QgfSAgICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSAgICAgICAgICAgZnJvbSAnLi4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdMb2dpbkd1YXJkI2NhbkFjdGl2YXRlIGNhbGxlZCcpO1xuICAgIHZhciBjdXJyZW50X3VzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50X3VzZXInKSlcbiAgICB2YXIgdG9rZW4gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKVxuXG4gICAgaWYoY3VycmVudF91c2VyKXtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
