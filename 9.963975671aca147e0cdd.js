(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{fOPi:function(t,n,e){"use strict";e.r(n),e.d(n,"playerFactory",(function(){return m})),e.d(n,"StudentDetailsModule",(function(){return g}));var s=e("ofXK"),i=e("tyNb"),o=e("+mZg"),a=e("fXoL"),r=e("njzu"),c=e("DPnb");function d(t,n){if(1&t&&(a.Ob(0,"div"),a.Yb(1,"lowercase"),a.Ob(2,"div",3),a.Ob(3,"div",4),a.Mb(4,"ng-lottie",5),a.Nb(),a.Ob(5,"div",6),a.mc(6),a.Nb(),a.Ob(7,"div",7),a.Ob(8,"span",8),a.mc(9,"Roll"),a.Nb(),a.mc(10),a.Nb(),a.Ob(11,"div",9),a.Ob(12,"span",8),a.mc(13,"Dept"),a.Nb(),a.mc(14),a.Nb(),a.Ob(15,"div",10),a.mc(16),a.Nb(),a.Ob(17,"div",11),a.mc(18),a.Nb(),a.Ob(19,"div"),a.Yb(20,"lowercase"),a.Mb(21,"i",12),a.mc(22),a.Nb(),a.Ob(23,"div",13),a.Mb(24,"i",14),a.mc(25),a.Nb(),a.Nb(),a.Nb()),2&t){const t=a.Xb();a.Cb("student-card ",a.Zb(1,14,t.student.dept),"-shadow"),a.zb(4),a.cc("options",t.options),a.zb(2),a.nc(t.student.name),a.zb(4),a.oc("",t.student.roll," "),a.zb(4),a.oc("",t.student.dept," "),a.zb(2),a.oc("",t.setSubscript(t.student.year)," Year"),a.zb(2),a.nc(t.student.sex),a.zb(1),a.Cb("card-phone ",a.Zb(20,16,t.student.dept),"-card-phone"),a.zb(3),a.oc("",t.student.phone," "),a.zb(3),a.oc("",t.student.address," ")}}function b(t,n){if(1&t&&(a.Ob(0,"div",15),a.Mb(1,"ng-lottie",5),a.Nb()),2&t){const t=a.Xb();a.zb(1),a.cc("options",t.options)}}function u(t,n){if(1&t&&(a.Ob(0,"div",16),a.Ob(1,"div",4),a.Mb(2,"ng-lottie",5),a.Nb(),a.Ob(3,"div",17),a.mc(4,"Student record not found"),a.Nb(),a.Nb()),2&t){const t=a.Xb();a.zb(2),a.cc("options",t.options)}}const p=[{path:"",component:(()=>{class t{constructor(t,n){this.fetchData=t,this.route=n}ngOnInit(){this.options={path:"assets/animations/loading.json"},this.searching=!0,this.route.paramMap.subscribe(t=>{console.log(t),this.fetchData.getIndividualStudent(t.get("roll"),t.get("year"),t.get("dept")).subscribe(t=>{t.then(t=>{this.searching=!1,"OK"==t.status&&(this.student=t.student,this.options={path:"assets/animations/"+this.student.sex.toLowerCase()+".json"}),this.student||(this.options={path:"assets/animations/tryagain.json",loop:-1})})})})}setSubscript(t){return o.a.setSubscript(t)}}return t.\u0275fac=function(n){return new(n||t)(a.Lb(r.a),a.Lb(i.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-student-details"]],decls:3,vars:3,consts:[[3,"class",4,"ngIf"],["style","width: 50%; margin: auto; color: white; font-size: 2rem;",4,"ngIf"],["style","width: 50%; margin: auto; color:red; font-size: 2rem;",4,"ngIf"],[1,"student-card-inner"],[2,"width","50%","height","auto","margin","auto"],[3,"options"],[1,"card-name"],[1,"card-roll"],[2,"font-size","small","margin","0px 15px 0px 0px"],[1,"card-dept"],[1,"card-year"],[1,"card-sex"],[1,"fas","fa-phone-alt",2,"margin-right","10px"],[1,"card-address"],[1,"fas","fa-home",2,"margin-right","10px","font-size","larger"],[2,"width","50%","margin","auto","color","white","font-size","2rem"],[2,"width","50%","margin","auto","color","red","font-size","2rem"],[2,"width","50%","margin","auto","font-weight","bold","text-align","center"]],template:function(t,n){1&t&&(a.lc(0,d,26,18,"div",0),a.lc(1,b,2,1,"div",1),a.lc(2,u,5,1,"div",2)),2&t&&(a.cc("ngIf",n.student),a.zb(1),a.cc("ngIf",n.searching),a.zb(1),a.cc("ngIf",!n.searching&&!n.student))},directives:[s.k,c.a],pipes:[s.h],styles:[""]}),t})()}];let l=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(n){return new(n||t)},imports:[[i.d.forChild(p)],i.d]}),t})();var h=e("lPHp"),f=e.n(h);function m(){return f.a}let g=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(n){return new(n||t)},imports:[[s.b,l,c.b.forRoot({player:m})]]}),t})()}}]);