(this["webpackJsonpdoc-generator-web-app"]=this["webpackJsonpdoc-generator-web-app"]||[]).push([[0],{353:function(e,t,a){e.exports=a(419)},358:function(e,t,a){},419:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),l=(a(358),a(82)),o=a(90),u=a(196),f=a(328),s=a.n(f),d=a(332),m=a.n(d),b=a(342),p=a.n(b),O=a(333),j=a.n(O),g=a(340),y=a.n(g),w=a(232),E=a.n(w),h=a(231),v=a.n(h),D=a(334),I=a.n(D),R=a(335),T=a.n(R),S=a(337),N=a.n(S),P=a(338),C=a.n(P),x=a(339),U=a.n(x),A=a(343),B=a.n(A),k=a(336),F=a.n(k),W=a(341),M=a.n(W),z=a(344),J=a.n(z),V={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(m.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(j.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(v.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(I.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(E.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(F.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(C.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(U.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(E.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(y.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(v.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(M.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(p.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(B.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement(J.a,Object.assign({},e,{ref:t}))}))};function q(e){Object(n.useEffect)((function(){!1===e.currentData&&i({columns:e.columns,data:[]}),e.liftStateUpFunc(c.data)}));var t=r.a.useState({columns:e.columns,data:[]}),a=Object(o.a)(t,2),c=a[0],i=a[1],f={onRowAdd:function(e){return new Promise((function(t){setTimeout((function(){t(),i((function(t){var a=Object(u.a)(t.data);return a.push(e),Object(l.a)(Object(l.a)({},t),{},{data:a})}))}),600)}))},onRowUpdate:function(e,t){return new Promise((function(a){setTimeout((function(){a(),t&&i((function(a){var n=Object(u.a)(a.data);return n[n.indexOf(t)]=e,Object(l.a)(Object(l.a)({},a),{},{data:n})}))}),600)}))},onRowDelete:function(e){return new Promise((function(t){setTimeout((function(){t(),i((function(t){var a=Object(u.a)(t.data);return a.splice(a.indexOf(e),1),Object(l.a)(Object(l.a)({},t),{},{data:a})}))}),600)}))}};return r.a.createElement(s.a,{icons:V,title:e.tableTitle,columns:e.columns,data:e.currentData,editable:f,localization:{header:{actions:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"},body:{emptyDataSourceMessage:"\u0422\u0443\u0442 \u043f\u043e\u043a\u0430 \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438...",addTooltip:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442",deleteTooltip:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442",editTooltip:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442",editRow:{cancelTooltip:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",saveTooltip:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}},toolbar:{searchTooltip:"\u041f\u043e\u0438\u0441\u043a",searchPlaceholder:"\u041d\u0430\u0439\u0442\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442"},pagination:{labelRowsSelect:"\u0441\u0442\u0440\u043e\u043a",labelDisplayedRows:"{count} \u0438\u0437 {from}-{to}",firstTooltip:"\u041f\u0435\u0440\u0432\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",previousTooltip:"\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",nextTooltip:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",lastTooltip:"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}}})}var L=a(305),$=a(307),G=a(226),H=a(296),K=a(225),Q=a(229),X=Object(L.a)((function(e){return Object($.a)({formControl:{margin:e.spacing(1),minWidth:300},selectEmpty:{marginTop:e.spacing(2)}})}));function Y(e){var t=X(),a=r.a.useState(""),n=Object(o.a)(a,2),c=n[0],i=n[1];return r.a.createElement("div",null,r.a.createElement(K.a,{className:t.formControl},r.a.createElement(G.a,{id:e.labelID},e.labelText),r.a.createElement(Q.a,{labelId:e.labelID,id:e.selectID,value:c,onChange:function(t){i(t.target.value),e.liftStateUpFunc(t.target.value,e.selectID)}},function(){var t=[];for(var a in e.menuItems)t.push(r.a.createElement(H.a,{value:e.menuItems[a]},a));return t}())))}var Z=a(306),_=a(345),ee=a.n(_),te=Object(L.a)((function(e){return Object($.a)({button:{margin:e.spacing(1)}})}));function ae(e){var t=te();return r.a.createElement("div",null,r.a.createElement(Z.a,{variant:"contained",color:"primary",size:"large",className:t.button,startIcon:r.a.createElement(ee.a,null),onClick:e.onClick},e.label))}var ne=[{title:"\u0424\u0418\u041e \u043a\u043b\u0438\u0435\u043d\u0442\u0430",field:"clientName"},{title:"\u0410\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043a\u043b\u0438\u043d\u0435\u0442\u0430",field:"clientAddress"},{title:"\u041d\u043e\u043c\u0435\u0440 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430",field:"docNumber"},{title:"\u041d\u043e\u043c\u0435\u0440 \u043a\u043e\u0440\u043f\u0443\u0441\u0430",field:"literNumber",type:"numeric"},{title:"\u041d\u043e\u043c\u0435\u0440 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b",field:"flatNumber",type:"numeric"},{title:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u0432\u0432\u043e\u0434",field:"statePermitDate"},{title:"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u0432\u0432\u043e\u0434",field:"statePermitID"}],re=[{title:"\u0421\u0443\u043c\u043c\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u0447\u0438\u0441\u043b\u043e\u043c",field:"paymentByNumber"},{title:"\u0421\u0443\u043c\u043c\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 \u0442\u0435\u043a\u0441\u0442\u043e\u043c",field:"paymentByText"},{title:"\u041f\u0440\u043e\u0435\u043a\u0442\u043d\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u044c",field:"areaByProject"},{title:"\u0424\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u044c",field:"areaActual"},{title:"\u0421\u0442\u043e\u043c\u043e\u0441\u0442\u044c 1 \u043a\u0432. \u043c. \u043f\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443",field:"legalOneSquareMeterCost"}],ce=[{title:"\u0424\u0418\u041e \u043a\u043b\u0438\u0435\u043d\u0442\u0430",field:"clientName"},{title:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",field:"birthDate"},{title:"\u041f\u043e\u043b \u043a\u043b\u0438\u0435\u043d\u0442\u0430",field:"sex"},{title:"\u041c\u0435\u0441\u0442\u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",field:"birthPlace"},{title:"\u0421\u0435\u0440\u0438\u044f \u0438/\u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430",field:"passportNumber"},{title:"\u041a\u0435\u043c \u0432\u044b\u0434\u0430\u043d \u043f\u0430\u0441\u043f\u043e\u0440\u0442",field:"passportIssuedBy"},{title:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438 \u043f\u0430\u0441\u043f\u043e\u0440\u0442\u0430",field:"passportIssueDate"},{title:"\u041a\u043e\u0434 \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f",field:"passportOfficeCode"},{title:"\u0410\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043a\u043b\u0438\u043d\u0435\u0442\u0430",field:"clientAddress"},{title:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u043f\u0440\u0438\u043d\u044f\u0442\u0438\u044f \u0432 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u0430",field:"wayOfTakingOwnership"},{title:"\u041d\u043e\u043c\u0435\u0440 \u043a\u043e\u0440\u043f\u0443\u0441\u0430",field:"literNumber",type:"numeric"},{title:"\u041d\u043e\u043c\u0435\u0440 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b",field:"flatNumber",type:"numeric"},{title:"\u042d\u0442\u0430\u0436",field:"floorNumber",type:"numeric"},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u043c\u043d\u0430\u0442",field:"roomsNumber",type:"numeric"},{title:"\u041d\u043e\u043c\u0435\u0440 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430",field:"docNumber"},{title:"\u0414\u0430\u0442\u0430 \u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0430",field:"docDate"},{title:"\u0424\u0418\u041e \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u043e",field:"shortClientName"}],ie=[{title:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c (\u0431\u0435\u0437 \u043b\u0435\u0442. \u043f\u043e\u043c.) \u043f\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443",field:"flatAreaUnderContract",type:"numeric"},{title:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c (\u0431\u0435\u0437 \u043b\u0435\u0442. \u043f\u043e\u043c.) \u043f\u043e \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u0438",field:"flatAreaUnderInventory",type:"numeric"},{title:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c (\u0441 \u043f\u043e\u043d\u0438\u0436. \u043a\u043e\u044d\u0444\u0444.) \u043f\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443",field:"flatAreaWithBalconiesUnderContract",type:"numeric"},{title:"\u041f\u043b\u043e\u0449\u0430\u0434\u044c (\u0441 \u043f\u043e\u043d\u0438\u0436. \u043a\u043e\u044d\u0444\u0444.) \u043f\u043e \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u0438",field:"flatAreaWithBalconiesUnderInventory",type:"numeric"}],le=[{title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0430",field:"clientPhone"},{title:"\u041f\u0440\u043e\u0435\u043a\u0442\u043d\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u044c \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b \u043f\u043e \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443",field:"totalAreaUnderContract",type:"numeric"},{title:"\u041f\u0440\u043e\u0435\u043a\u0442\u043d\u0430\u044f \u043f\u043b\u043e\u0449\u0430\u0434\u044c \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u044b \u043f\u043e \u0438\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u0438\u0437\u0430\u0446\u0438\u0438",field:"totalAreaUnderInventory",type:"numeric"}],oe=[{title:"\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0432 \u0440\u0443\u0431\u043b\u044f\u0445",field:"customerDebtByNumber"},{title:"\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u0434\u043e\u043b\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0442\u0435\u043a\u0441\u0442\u043e\u043c",field:"customerDebtByText"}];function ue(){var e=r.a.useState({}),t=Object(o.a)(e,2),a=t[0],c=t[1],i=r.a.useState([]),u=Object(o.a)(i,2),f=u[0],s=u[1],d=r.a.useState([]),m=Object(o.a)(d,2),b=m[0],p=m[1];function O(e,t){c((function(a){return a[t]=e,Object(l.a)({},a)})),p(!1)}Object(n.useEffect)((function(){var e=[];"notice"===a["select-doc-type"]&&(e=e.concat(ne),"noticeWithDebt"!==a["select-doc-subtype"]&&"noticeWithPayment"!==a["select-doc-subtype"]||(e=e.concat(re))),"act"===a["select-doc-type"]&&(e=e.concat(ce),e="B"===a["select-development-project"]?e.concat(le):e.concat(ie),"withDebt"===a["select-doc-subtype"]&&(e=e.concat(oe))),s(e)}),[a]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{labelText:"\u041e\u0431\u044a\u0435\u043a\u0442 \u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430",liftStateUpFunc:O,menuItems:{"\u0412\u0438\u043d\u043e\u0433\u0440\u0430\u0434 2":"V2","\u041e\u0430\u0437\u0438\u0441 2":"O2","\u0411\u0430\u043b\u0430\u043d\u0441":"B"},selectID:"select-development-project",labelID:"select-development-project-label"}),r.a.createElement(Y,{labelText:"\u0412\u0438\u0434 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430",liftStateUpFunc:O,menuItems:{"\u0410\u043a\u0442 \u043f\u0440\u0438\u0435\u043c\u0430-\u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438":"act","\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435":"notice"},selectID:"select-doc-type",labelID:"select-doc-type-label"}),r.a.createElement(Y,{labelText:"\u041f\u043e\u0434\u0432\u0438\u0434 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430",liftStateUpFunc:O,menuItems:"notice"===a["select-doc-type"]?{"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u0449\u0435\u0435":"simpleNotice","\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u0441 \u0434\u043e\u043f\u043b\u0430\u0442\u043e\u0439":"noticeWithDebt","\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435 \u0441 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043e\u043c":"noticeWithPayment"}:"act"===a["select-doc-type"]?{"\u0421 \u0434\u043e\u043b\u0433\u043e\u043c":"withDebt","\u0411\u0435\u0437 \u0434\u043e\u043b\u0433\u0430":"withoutDebt"}:void 0,selectID:"select-doc-subtype",labelID:"select-doc-subtype-label"}),r.a.createElement(q,{tableTitle:function(){if(a=={})return"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432";var e="";for(var t in a)e=e+" "+a[t];return e}(),liftStateUpFunc:function(e){p(e)},columns:f,currentData:b}),r.a.createElement(ae,{label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b",onClick:function(){console.log(a,b)}}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[353,1,2]]]);
//# sourceMappingURL=main.b35087da.chunk.js.map