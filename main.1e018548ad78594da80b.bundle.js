webpackJsonp([2],{1021:function(t,e){t.exports=".loading-indicator{position:absolute;left:0;top:0;width:100%;height:100%;background-color:#000;opacity:.3}.spinner{width:40px;height:40px;position:relative;margin:100px auto}.double-bounce1,.double-bounce2{width:100%;height:100%;border-radius:50%;background-color:#fff;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:sk-bounce 2s infinite ease-in-out;animation:sk-bounce 2s infinite ease-in-out}.double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-bounce{0%,to{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes sk-bounce{0%,to{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}"},1022:function(t,e){t.exports="input.ng-valid{border-left-color:#228b22}input.ng-invalid,input.ng-valid{border-left-style:solid;border-left-width:5px}input.ng-invalid{border-left-color:hotpink}"},1023:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(455),r=n(456);n(1);n.i(i.a)().bootstrapModule(r.a).catch((function(t){return console.error(t)}))},175:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(137),a=n(288),s=n(197);n.n(s);n.d(e,"a",(function(){return u}));var u=(function(){function t(t,e,n){this.oauthService=t,this.http=e,this.baseUrl=n,this.passengers=[]}return t.prototype.findById=function(t){var e=this.baseUrl+"/api/passenger",n=new o.Headers;n.set("Accept","text/json"),n.set("Authorization","Bearer "+this.oauthService.getAccessToken());var i=new o.URLSearchParams;return i.set("id",t),this.http.get(e,{headers:n,search:i}).map((function(t){return t.json()}))},t.prototype.find=function(t){var e=this,n=this.baseUrl+"/api/passenger",i=new o.Headers;i.set("Accept","text/json"),i.set("Authorization","Bearer "+this.oauthService.getAccessToken());var r=new o.URLSearchParams;r.set("name",t),this.http.get(n,{headers:i,search:r}).map((function(t){return t.json()})).subscribe((function(t){e.passengers=t}),(function(t){console.warn(t)}))},t})();u=i.a([n.i(r.Injectable)(),i.c(2,n.i(r.Inject)(a.a)),i.b("design:paramtypes",[s.OAuthService,o.Http,String])],u)},288:function(t,e,n){"use strict";var i=n(1);n.d(e,"a",(function(){return r}));var r=new i.OpaqueToken("BASE_URL")},289:function(t,e,n){"use strict";var i=n(8),r=n(1);n.d(e,"a",(function(){return o}));var o=(function(){function t(){}return t.prototype.canDeactivate=function(t,e,n){return t.canDeactivate()},t})();o=i.a([n.i(r.Injectable)()],o)},290:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(58),a=n(74),s=n(595),u=n(602),c=n(603),l=n(601),p=n(592),d=n(594),f=n(272),h=n(605),g=n(597),v=n(600),m=n(598),y=n(381),b=n(599),w=n(604),x=n(593),k=n(591);n.d(e,"a",(function(){return C}));var C=(function(){function t(){}return t})();C=i.a([n.i(r.NgModule)({imports:[o.a,a.CommonModule],declarations:[s.a,u.a,l.a,c.a,p.a,x.a,k.a,d.a,h.a,g.a,v.a,m.a,y.a,b.a,w.a],exports:[s.a,u.a,l.a,c.a,p.a,x.a,k.a,d.a,f.b,h.a,g.a,v.a,m.a,y.a,b.a,w.a],entryComponents:[y.a]})],C)},375:function(t,e,n){"use strict";var i=n(8),r=n(1);n.d(e,"a",(function(){return o}));var o=(function(){function t(){}return t})();o=i.a([n.i(r.Component)({template:'\n<div class="list-group">\n  <a href="#" class="list-group-item disabled">\n    History\n  </a>\n  <a class="list-group-item">Graz - Hamburg</a>\n  <a class="list-group-item">Graz - Frankfurt</a>\n  <a class="list-group-item">Hamburg - Graz</a>\n  <a class="list-group-item">Frankfurt - Graz</a>\n</div>\n    '})],o)},376:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(90);n.d(e,"a",(function(){return a}));var a=(function(){function t(t){this.route=t}return t.prototype.ngOnInit=function(){var t=this;this.route.params.subscribe((function(e){t.needLogin="true"===e.needLogin}))},t})();a=i.a([n.i(r.Component)({template:n(755)}),i.b("design:paramtypes",[o.a])],a)},377:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(90),a=n(175);n.d(e,"a",(function(){return s}));var s=(function(){function t(t,e){this.passengerService=t,this.route=e,this.exitWarning={show:!1,resolve:null}}return t.prototype.ngOnInit=function(){var t=this;this.route.params.subscribe((function(e){t.id=e.id})),this.route.data.subscribe((function(e){var n=e.passenger;n?t.passenger=n:t.passenger={}}))},t.prototype.save=function(){console.warn("save is not implemented")},t.prototype.decide=function(t){this.exitWarning.show=!1,this.exitWarning.resolve(t)},t.prototype.canDeactivate=function(){var t=this;return this.exitWarning.show=!0,new Promise(function(e){t.exitWarning.resolve=e})},t.prototype.remove=function(){console.log("remove is not implemented")},t})();s=i.a([n.i(r.Component)({template:n(757)}),i.b("design:paramtypes",[a.a,o.a])],s)},378:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(90),a=n(175);n.d(e,"a",(function(){return s}));var s=(function(){function t(t,e){this.passengerService=t,this.name="Doe",e.queryParams.subscribe((function(t){}))}return Object.defineProperty(t.prototype,"passengers",{get:function(){return this.passengerService.passengers},enumerable:!0,configurable:!0}),t.prototype.select=function(t){this.selectedPassenger=t},t.prototype.search=function(){this.passengerService.find(this.name)},t.prototype.disableButton=function(t){console.log(t)},t})();s=i.a([n.i(r.Component)({selector:"passenger-search",template:n(758),styles:[n(1022)]}),i.b("design:paramtypes",[a.a,o.a])],s)},379:function(t,e,n){"use strict";var i=n(8),r=n(0),o=(n.n(r),n(175)),a=n(1);n.d(e,"a",(function(){return s}));var s=(function(){function t(t){this.passengerService=t}return t.prototype.resolve=function(t,e){var n=t.params.id;return"0"==n?r.Observable.of(null):this.passengerService.findById(n)},t})();s=i.a([n.i(a.Injectable)(),i.b("design:paramtypes",[o.a])],s)},380:function(t,e,n){"use strict";var i=n(8),r=n(1);n.d(e,"a",(function(){return o}));var o=(function(){function t(){}return t})();o=i.a([n.i(r.Component)({selector:"passenger",template:n(759)})],o)},381:function(t,e,n){"use strict";var i=n(8),r=n(1);n.d(e,"a",(function(){return o}));var o=(function(){function t(){}return t})();o=i.a([n.i(r.Component)({selector:"flight-tooltip",template:'\n        <div class="tooltip-bg">\n            <b>Tipp:</b>\n            <ng-content></ng-content>\n        </div>\n    ',styles:["\n        .tooltip-bg {\n            background-color: yellow; \n            border: solid 2px darkkhaki\n        }\n    "]})],o)},454:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=454},456:function(t,e,n){"use strict";function i(t){return new g.a(t,"./i18n",".json")}var r=n(8),o=n(584),a=n(1),s=n(172),u=n(137),c=n(58),l=n(288),p=n(290),d=n(585),f=n(376),h=n(375),g=n(272),v=n(197),m=(n.n(v),n(589)),y=n(586);n.d(e,"a",(function(){return b}));var b=(function(){function t(){}return t})();b=r.a([n.i(a.NgModule)({imports:[s.a,u.HttpModule,c.a,c.b,p.a,y.a,d.a,v.OAuthModule.forRoot(),g.b.forRoot({provide:g.c,useFactory:i,deps:[u.Http]}),m.a],declarations:[o.a,f.a,h.a],providers:[{provide:l.a,useValue:"http://www.angular.at"}],bootstrap:[o.a]})],b)},584:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(197),a=(n.n(o),n(90)),s=n(272);n.d(e,"a",(function(){return u}));var u=(function(){function t(t,e,n){this.router=t,this.oauthService=e,this.translate=n,this.info="Welt",this.showWaitInfo=!0}return t.prototype.ngOnInit=function(){this.initNgTranslate(),this.initRouterEvents(),this.initAuth()},t.prototype.initNgTranslate=function(){},t.prototype.initRouterEvents=function(){var t=this;this.router.events.subscribe((function(e){e instanceof a.b&&(t.showWaitInfo=!0),(e instanceof a.c||e instanceof a.d||e instanceof a.e)&&(t.showWaitInfo=!1)}))},t.prototype.initAuth=function(){},t})();u=i.a([n.i(r.Component)({selector:"flight-app",template:n(754),styles:[n(1021)]}),i.b("design:paramtypes",[a.f,o.OAuthService,s.d])],u)},585:function(t,e,n){"use strict";var i=n(90),r=n(376),o=n(375);n.d(e,"a",(function(){return s}));var a=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:r.a},{path:"flight-booking",loadChildren:function(){return n.e(0).then(n.bind(null,1025)).then((function(t){return t.FlightBookingModule}))}},{path:"history",component:o.a,outlet:"aux"},{path:"**",redirectTo:"home"}],s=i.g.forRoot(a)},586:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(289),a=n(596);n.d(e,"a",(function(){return s}));var s=(function(){function t(){}return t})();s=i.a([n.i(r.NgModule)({imports:[],declarations:[],providers:[o.a,a.a],exports:[]})],s)},587:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=(function(){function t(){}return t})()},588:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(587);n.d(e,"a",(function(){return a}));var a=(function(){function t(){this.selectedItemChange=new r.EventEmitter}return t.prototype.isSelected=function(){if(this.selectedItem)return this.selectedItem===this.item?"yes":"no"},t.prototype.select=function(){this.selectedItemChange.emit(this.item)},t})();i.a([n.i(r.Input)(),i.b("design:type",o.a)],a.prototype,"item",void 0),i.a([n.i(r.Input)(),i.b("design:type",o.a)],a.prototype,"selectedItem",void 0),i.a([n.i(r.Output)(),i.b("design:type",Object)],a.prototype,"selectedItemChange",void 0),a=i.a([n.i(r.Component)({selector:"passenger-card",template:n(756)})],a)},589:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(378),a=n(588),s=n(377),u=n(74),c=n(58),l=n(290),p=n(590),d=n(380),f=n(175),h=n(379);n.d(e,"a",(function(){return g}));var g=(function(){function t(){}return t})();g=i.a([n.i(r.NgModule)({imports:[u.CommonModule,c.a,c.b,l.a,p.a],declarations:[o.a,a.a,s.a,d.a],providers:[f.a,h.a],exports:[]})],g)},590:function(t,e,n){"use strict";var i=n(90),r=n(378),o=n(377),a=n(380),s=n(379),u=n(289);n.d(e,"a",(function(){return l}));var c=[{path:"passenger",component:a.a,children:[{path:"",redirectTo:"passenger-search",pathMatch:"full"},{path:"passenger-search",component:r.a},{path:"passenger-edit/:id",component:o.a,canDeactivate:[u.a],data:{restricted:!0},resolve:{passenger:s.a}}]}],l=i.g.forChild(c)},591:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(58);n.d(e,"a",(function(){return a}));var a=s=(function(){function t(t,e){this._renderer=t,this._elementRef=e,this.onChange=function(t){},this.onTouched=function(){}}return t.prototype.registerOnChange=function(t){this.onChange=t},t.prototype.registerOnTouched=function(t){this.onTouched=t},t.prototype.blur=function(){this.onTouched()},t.prototype.input=function(t){t&&(t=t.split(/\./),t=t[2]+"-"+t[1]+"-"+t[0]),this.onChange(t)},t.prototype.writeValue=function(t){if(t){var e=new Date(t);t=e.getDate()+"."+(e.getMonth()+1)+"."+e.getFullYear()}var n=t?t:"";this._renderer.setElementProperty(this._elementRef.nativeElement,"value",n)},t})();a=s=i.a([n.i(r.Directive)({selector:"[flightDate]",providers:[{provide:o.c,useExisting:n.i(r.forwardRef)((function(){return s})),multi:!0}]}),i.b("design:paramtypes",[r.Renderer,r.ElementRef])],a);var s},592:function(t,e,n){"use strict";var i=n(8),r=n(1);n.d(e,"a",(function(){return o}));var o=(function(){function t(){this.dateChange=new r.EventEmitter,console.debug("date in constructor",this.date)}return t.prototype.ngOnInit=function(){console.debug("date in ngOnInit",this.date)},t.prototype.ngOnChanges=function(t){console.debug("date in ngOnChanges",this.date);var e=new Date(this.date);this.day=e.getDate(),this.month=e.getMonth()+1,this.year=e.getFullYear(),this.hour=e.getHours(),this.minute=e.getMinutes()},t.prototype.apply=function(){var t=new Date(this.year,this.month-1,this.day,this.hour,this.minute);this.dateChange.next(t.toISOString())},t})();i.a([n.i(r.Input)(),i.b("design:type",String)],o.prototype,"date",void 0),i.a([n.i(r.Output)(),i.b("design:type",Object)],o.prototype,"dateChange",void 0),o=i.a([n.i(r.Component)({selector:"flight-date-component",template:n(760)}),i.b("design:paramtypes",[])],o)},593:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(58);n.d(e,"a",(function(){return a}));var a=(function(){function t(t){this.c=t,this.onChange=function(t){},this.onTouched=function(){},t.valueAccessor=this}return t.prototype.writeValue=function(t){this.splitDate(t)},t.prototype.registerOnChange=function(t){this.onChange=t},t.prototype.registerOnTouched=function(t){this.onTouched=t},t.prototype.splitDate=function(t){var e=new Date(t);this.day=e.getDate(),this.month=e.getMonth()+1,this.year=e.getFullYear(),this.hour=e.getHours(),this.minute=e.getMinutes()},t.prototype.apply=function(){var t=new Date(this.year,this.month-1,this.day,this.hour,this.minute);this.onChange(t.toISOString()),this.onTouched()},t})();a=i.a([n.i(r.Component)({selector:"flight-date-control",template:n(761)}),i.b("design:paramtypes",[o.d])],a)},594:function(t,e,n){"use strict";var i=n(8),r=n(1);n.d(e,"a",(function(){return o}));var o=(function(){function t(t,e){this.el=t,this.renderer=e}return Object.defineProperty(t.prototype,"flightE2eLocator",{set:function(t){this.renderer.setElementAttribute(this.el.nativeElement,"flightE2eLocator",t)},enumerable:!0,configurable:!0}),t})();i.a([n.i(r.Input)(),i.b("design:type",String),i.b("design:paramtypes",[String])],o.prototype,"flightE2eLocator",null),o=i.a([n.i(r.Directive)({selector:"[flightE2eLocator]"}),i.b("design:paramtypes",[r.ElementRef,r.Renderer])],o)},595:function(t,e,n){"use strict";var i=n(8),r=n(1);n.d(e,"a",(function(){return o}));var o=(function(){function t(){}return t.prototype.transform=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var i,r,o=e[0];switch(t){case"Graz":r="Flughafen Graz Thalerhof",i="GRZ";break;case"Hamburg":r="Airport Hamburg Fuhlsbüttl Helmut Schmidt",i="HAM";break;default:r=i="ROM"}return"short"===o?i:r},t})();o=i.a([n.i(r.Pipe)({name:"flightCity",pure:!0})],o)},596:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=(function(){function t(){}return t.prototype.preload=function(t,e){return e()},t})()},597:function(t,e,n){"use strict";var i=n(8),r=n(1);n.d(e,"a",(function(){return o}));var o=(function(){function t(t,e){this.templateRef=t,this.viewContainer=e}return Object.defineProperty(t.prototype,"flightRepeateOf",{set:function(t){this.viewContainer.clear();for(var e=0,n=0,i=t;n<i.length;n++){var r=i[n];e++;var o={$implicit:r,index:e-1,odd:e%2===1};this.viewContainer.createEmbeddedView(this.templateRef,o)}},enumerable:!0,configurable:!0}),t})();i.a([n.i(r.Input)(),i.b("design:type",Array),i.b("design:paramtypes",[Array])],o.prototype,"flightRepeateOf",null),o=i.a([n.i(r.Directive)({selector:"[flightRepeate]"}),i.b("design:paramtypes",[r.TemplateRef,r.ViewContainerRef])],o)},598:function(t,e,n){"use strict";var i=n(8),r=n(1);n.d(e,"a",(function(){return o}));var o=(function(){function t(t,e){this.viewContainer=t,this.renderer=e}return t.prototype.handleMouseover=function(t){this.embeddedViewRef=this.viewContainer.createEmbeddedView(this.template);var e=this.embeddedViewRef.rootNodes.find((function(t){return 1===t.nodeType}));if(e){var n=t.target.offsetLeft+"px",i=t.target.offsetTop+t.target.offsetHeight+5+"px";this.renderer.setElementStyle(e,"position","absolute"),this.renderer.setElementStyle(e,"left",n),this.renderer.setElementStyle(e,"top",i),this.renderer.setElementStyle(e,"width","200px")}},t.prototype.handleMouseout=function(){this.embeddedViewRef.destroy()},t})();i.a([n.i(r.Input)("flightTooltip"),i.b("design:type",r.TemplateRef)],o.prototype,"template",void 0),i.a([n.i(r.HostListener)("mouseover",["$event"]),i.b("design:type",Function),i.b("design:paramtypes",[Object]),i.b("design:returntype",void 0)],o.prototype,"handleMouseover",null),i.a([n.i(r.HostListener)("mouseout"),i.b("design:type",Function),i.b("design:paramtypes",[]),i.b("design:returntype",void 0)],o.prototype,"handleMouseout",null),o=i.a([n.i(r.Directive)({selector:"[flightTooltip]"}),i.b("design:paramtypes",[r.ViewContainerRef,r.Renderer])],o)},599:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(381);n.d(e,"a",(function(){return a}));var a=(function(){function t(t,e,n,i){this.viewContainer=t,this.renderer=e,this.injector=n,this.componentFactoryResolver=i}return t.prototype.handleMouseover=function(t){var e=this.componentFactoryResolver.resolveComponentFactory(o.a),n=document.createTextNode(this.message);this.componentRef=this.viewContainer.createComponent(e,null,this.injector,[[n]]);var i=this.componentRef.location.nativeElement,r=t.target.offsetLeft+"px",a=t.target.offsetTop+t.target.offsetHeight+5+"px";this.renderer.setElementStyle(i,"position","absolute"),this.renderer.setElementStyle(i,"left",r),this.renderer.setElementStyle(i,"top",a),this.renderer.setElementStyle(i,"width","200px")},t.prototype.handleMouseout=function(){this.componentRef.destroy()},t})();i.a([n.i(r.Input)("flightTooltip2"),i.b("design:type",String)],a.prototype,"message",void 0),i.a([n.i(r.HostListener)("mouseover",["$event"]),i.b("design:type",Function),i.b("design:paramtypes",[Object]),i.b("design:returntype",void 0)],a.prototype,"handleMouseover",null),i.a([n.i(r.HostListener)("mouseout"),i.b("design:type",Function),i.b("design:paramtypes",[]),i.b("design:returntype",void 0)],a.prototype,"handleMouseout",null),a=i.a([n.i(r.Directive)({selector:"[flightTooltip2]"}),i.b("design:paramtypes",[r.ViewContainerRef,r.Renderer,r.Injector,r.ComponentFactoryResolver])],a)},600:function(t,e,n){"use strict";var i=n(8),r=n(1);n.d(e,"a",(function(){return o}));var o=(function(){function t(t,e){this.templateRef=t,this.viewContainer=e}return Object.defineProperty(t.prototype,"flightUnless",{set:function(t){t?this.viewContainer.clear():this.viewContainer.createEmbeddedView(this.templateRef)},enumerable:!0,configurable:!0}),t})();i.a([n.i(r.Input)(),i.b("design:type",Boolean),i.b("design:paramtypes",[Boolean])],o.prototype,"flightUnless",null),o=i.a([n.i(r.Directive)({selector:"[flightUnless]"}),i.b("design:paramtypes",[r.TemplateRef,r.ViewContainerRef])],o)},601:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(58);n.d(e,"a",(function(){return a}));var a=s=(function(){function t(){}return t.prototype.validate=function(t){return new Promise(function(e){setTimeout((function(){return"Graz"===t.value||"Hamburg"===t.value?void e({}):void e({"async-city":!1})}),100)})},t})();a=s=i.a([n.i(r.Directive)({selector:"[flightAsyncCity]",providers:[{provide:o.f,useExisting:s,multi:!0}]})],a);var s},602:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(58);n.d(e,"a",(function(){return a}));var a=s=(function(){function t(){}return t.prototype.validate=function(t){var e=t.root,n=e.controls.to;if(!n)return{};var i=n.value;if(i===t.value)return{city:"rundflug"};if(!this.city)return{};var r=this.city.split(",");return r.indexOf(t.value)===-1?{city:!0}:{}},t})();i.a([n.i(r.Input)(),i.b("design:type",String)],a.prototype,"city",void 0),a=s=i.a([n.i(r.Directive)({selector:"[flightCity]",providers:[{provide:o.e,useExisting:s,multi:!0}]}),i.b("design:paramtypes",[])],a);var s},603:function(t,e,n){"use strict";var i=n(8),r=n(1),o=n(58);n.d(e,"a",(function(){return a}));var a=s=(function(){function t(){}return t.prototype.validate=function(t){var e=t,n=e.controls.from,i=e.controls.to;if(!n||!i)return{};var r=n.value,o=i.value;return r===o?{"round-trip":{city:r}}:{}},t})();a=s=i.a([n.i(r.Directive)({selector:"[flightRoundTrip]",providers:[{provide:o.e,useExisting:s,multi:!0}]})],a);var s},604:function(t,e,n){"use strict";var i=n(8),r=n(1);n.d(e,"a",(function(){return o}));var o=(function(){function t(){}return t})();i.a([n.i(r.Input)(),i.b("design:type",Object)],o.prototype,"errors",void 0),o=i.a([n.i(r.Component)({selector:"flight-validation-errors",template:'\n        <div *ngIf="errors && errors.required">\n            This field is required\n        </div>\n        <div *ngIf="errors && errors.minlength">\n            Please enter at least {{ errors.minlength.expected }} characters\n        </div>\n        <div *ngIf="errors && errors.city">\n            This city is now allowed\n        </div>\n    '})],o)},605:function(t,e,n){"use strict";var i=n(8),r=n(1);n.d(e,"a",(function(){return o}));var o=(function(){function t(t,e){this.elementRef=t,this.renderer=e,this.warning="Are you sure?",this.flightClickWithWarning=new r.EventEmitter}return t.prototype.ngOnInit=function(){this.renderer.setElementAttribute(this.elementRef.nativeElement,"class","btn btn-danger")},t.prototype.handleClick=function(t){console.log("handleClick",t),confirm(this.warning)&&this.flightClickWithWarning.emit()},t})();i.a([n.i(r.Input)(),i.b("design:type",String)],o.prototype,"warning",void 0),i.a([n.i(r.Output)(),i.b("design:type",Object)],o.prototype,"flightClickWithWarning",void 0),i.a([n.i(r.HostListener)("click",["$event"]),i.b("design:type",Function),i.b("design:paramtypes",[Object]),i.b("design:returntype",void 0)],o.prototype,"handleClick",null),o=i.a([n.i(r.Directive)({selector:"[flightClickWithWarning]"}),i.b("design:paramtypes",[r.ElementRef,r.Renderer])],o)},754:function(t,e){t.exports='<nav class="navbar navbar-default">\n    <ul class="nav navbar-nav">\n        <li routerLinkActive="active"><a [routerLink]="[\'/home\', {showDetail:false}]">Home</a></li>\n        <li routerLinkActive="active"><a [routerLink]="[\'/flight-booking\']">Book a flight</a></li>\n        <li routerLinkActive="active"><a [routerLink]="[\'/passenger\']">Passenger</a></li>\n        <li><a [routerLink]="[{outlets: { aux: [\'history\', {showDetail: true}] }}]">Show History</a></li>\n        <li><a [routerLink]="[{outlets: { aux: null }}]">Hide History</a></li>\n\n    </ul>\n</nav>\n\n<div class="container">\n\n    <div class="row">\n        <router-outlet></router-outlet>\n    </div>\n\n    <div class="row">\n        <router-outlet name="aux"></router-outlet>\n    </div>\n\n</div>\n\n<div class="loading-indicator" *ngIf="showWaitInfo">\n    <div class="spinner">\n        <div class="double-bounce1"></div>\n        <div class="double-bounce2"></div>\n    </div>\n</div>\n'},755:function(t,e){t.exports="<h1>Welcome!</h1>\n"},756:function(t,e){t.exports='<div style="padding:20px;"\n    [ngStyle]="{ \'background-color\': (item == selectedItem) ? \'orange\' : \'lightsteelblue\'}">\n    <h2>{{item.firstName}} - {{item.name}}</h2>\n    <p>Passenger No. #{{item.id}}</p>\n    <p>Bonus Miles {{item.bonusMiles}}</p>\n\n    <div style="height:40px">\n        <p>\n            <input type="button"\n                   value="Select"\n                   class="btn btn-default"\n                   (click)="select()"/>\n        </p>\n    </div>\n\n    <ng-content></ng-content>\n\n</div>\n'},757:function(t,e){t.exports='<h1>Edit Passenger</h1>\n\n<div *ngIf="exitWarning.show" class="alert alert-warning" style="position: fixed; top:20px; width:400px; z-index:10">\n    <div>\n      Do you really want to leave?\n    </div>\n    <div>\n        <a href="javascript:void(0)" (click)="decide(true)" class="btn btn-danger">Sure</a>\n        <a href="javascript:void(0)" (click)="decide(false)" class="btn btn-default">Nope</a>\n    </div>\n</div>\n\n<div *ngIf="message">\n    {{message}}\n</div>\n\n<div class="form-group">\n    <label>Id</label>\n    <input class="form-control" [(ngModel)]="passenger.id">\n</div>\n<div class="form-group">\n    <label>First Name</label>\n    <input class="form-control" [(ngModel)]="passenger.firstName">\n</div>\n<div class="form-group">\n    <label>Name</label>\n    <input class="form-control" [(ngModel)]="passenger.name">\n</div>\n<div class="form-group">\n    <label>Bonus Miles</label>\n    <input class="form-control" [(ngModel)]="passenger.bonusMiles">\n</div>\n<div class="form-group">\n    <button class="btn btn-primary" (click)="save()">Save</button>\n</div>\n'},758:function(t,e){t.exports='<h1>Search Passengers</h1>\n\n<form #f="ngForm" novalidate passengerRoundTrip>\n\n    <div class="form-group">\n        <label>Name</label>\n        <input class="form-control"\n               [(ngModel)]="name"\n               name="name">\n    </div>\n\n    <div class="form-group">\n        <button\n            class="btn btn-primary"\n            name="btnSearch"\n            [disabled]="!f.valid"\n            (click)="search()">Search\n        </button>\n    </div>\n\n</form>\n\n<div class="row">\n    <div *ngFor="let f of passengers" class="col-sm-6 col-md-4 col-lg-3 ">\n        <passenger-card [item]="f"\n                     [(selectedItem)]="selectedPassenger">\n\n            <a class="btn btn-default"\n               [routerLink]="[\'../passenger-edit\', f.id]">Edit</a>\n\n        </passenger-card>\n\n    </div>\n</div>\n\n<div class="row" style="margin-top:40px">\n<pre>Your Passenger\n----------------------\n{{selectedPassenger | json}}\n</pre>\n</div>\n'},759:function(t,e){t.exports='<div class="col-sm-3">\n    <ul class="nav nav-pills nav-stacked" style="margin-top:20px;">\n        <li routerLinkActive="active"><a [routerLink]="[\'./passenger-search\']">Search Passengers</a></li>\n        <li routerLinkActive="active"><a [routerLink]="[\'./passenger-edit\', 0]">Add Passenger</a></li>\n    </ul>\n</div>\n\n<div class="col-md-9">\n    <router-outlet></router-outlet>\n</div>\n'},760:function(t,e){t.exports='<form class="form-inline">\r\n    <input [(ngModel)]="day" name="day" maxlength="2" style="width:50px" class="form-control" >\r\n    .\r\n    <input [(ngModel)]="month" name="month" maxlength="2" style="width:50px" class="form-control">\r\n    .\r\n    <input [(ngModel)]="year" name="year" maxlength="4" style="width:70px" class="form-control">\r\n\r\n    <input [(ngModel)]="hour" name="hour" maxlength="2" style="width:50px" class="form-control">\r\n    :\r\n    <input [(ngModel)]="minute" name="minute" maxlength="2" style="width:50px" class="form-control">\r\n\r\n    <input type="button" value="Apply" (click)="apply()" class="btn btn-default">\r\n</form>'},761:function(t,e){t.exports='<form class="form-inline">\r\n <input [(ngModel)]="day" name="day" maxlength="2" style="width:50px" class="form-control" >\r\n .\r\n <input [(ngModel)]="month" name="month" maxlength="2" style="width:50px" class="form-control">\r\n .\r\n <input [(ngModel)]="year" name="year" maxlength="4" style="width:70px" class="form-control">\r\n\r\n <input [(ngModel)]="hour" name="hour" maxlength="2" style="width:50px" class="form-control">\r\n :\r\n <input [(ngModel)]="minute" name="minute" maxlength="2" style="width:50px" class="form-control">\r\n\r\n <input type="button" value="Apply" (click)="apply()" class="btn btn-default">\r\n</form>'}},[1023]);