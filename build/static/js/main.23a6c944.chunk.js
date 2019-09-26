(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),o=n.n(c),u=n(14),s=n(2),l=n(3),i=n.n(l),m="http://localhost:3001/api/persons",f=function(){return i.a.get(m).then((function(e){return e.data}))},d=function(e){return i.a.post(m,e).then((function(e){return e.data}))},b=function(e){return i.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},p=function(e,t){return i.a.put("".concat(m,"/").concat(e),t).then((function(e){return e.data}))};n(37);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var g=function(e){var t=e.newName,n=e.newPerson,r=e.handleNameChange,c=e.newNumber,o=e.handleNumberChange;return a.a.createElement("form",{onSubmit:n},a.a.createElement("div",null,"name: ",a.a.createElement("input",{required:!0,value:t,onChange:r}),a.a.createElement("br",null),"number: ",a.a.createElement("input",{required:!0,value:c,onChange:o})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add")))},v=function(e){var t=e.person,n=e.setPersons,r=e.persons,c=e.setMessage,o=e.setType;return a.a.createElement("div",null,a.a.createElement("p",null,t.name," ",t.number,a.a.createElement("button",{"data-id":t.id,onClick:function(e){var t=Number(e.target.dataset.id),a=r.filter((function(e){return e.id===t}))[0].name;window.confirm("Remove ".concat(a,"?"))&&b(t).then((function(){n(r.filter((function(e){return e.id!==t}))),o("success"),c("Deleted ".concat(a)),setTimeout((function(){c(null)}),5e3)})).catch((function(e){return console.log(e.message)}))}},"delete")))},w=function(e){var t=e.persons,n=e.filtered,r=e.newSearch,c=e.setPersons,o=e.setMessage,u=e.setType,s=t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())})),l=n?s:t;return 0===l.length?a.a.createElement("p",null,"No numbers matching those search terms."):l.map((function(e){return a.a.createElement(v,{key:e.name,person:e,setPersons:c,persons:t,setMessage:o,setType:u})}))},O=function(e){var t=e.message,n=e.type;return null===t?null:"success"===n?a.a.createElement("div",{className:"success"},t):a.a.createElement("div",{className:"error"},t)},E=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),l=Object(s.a)(o,2),i=l[0],m=l[1],b=Object(r.useState)(""),v=Object(s.a)(b,2),E=v[0],j=v[1],y=Object(r.useState)(""),N=Object(s.a)(y,2),P=N[0],S=N[1],C=Object(r.useState)(!1),k=Object(s.a)(C,2),T=k[0],D=k[1],M=Object(r.useState)(null),q=Object(s.a)(M,2),A=q[0],I=q[1],J=Object(r.useState)(null),L=Object(s.a)(J,2),R=L[0],x=L[1];Object(r.useEffect)((function(){f().then((function(e){c(e)}))}),[]);return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(O,{message:A,type:R}),a.a.createElement("div",null,"filter shown with ",a.a.createElement("input",{value:P,onChange:function(e){S(e.target.value),D(""!==e.target.value)}})),a.a.createElement("h2",null,"Add New"),a.a.createElement(g,{newPerson:function(e){e.preventDefault();var t={name:i,number:E},r=t.name,a=t.number;if(n.some((function(e){return e.name===r}))){if(window.confirm("".concat(r," already in phone book. Replace old number with a new one?"))){var o=n.find((function(e){return e.name===r})),s=o.id,l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o,{number:a});p(o.id,l).then((function(e){return c(n.map((function(t){return t.id!==s?t:e})))})).catch((function(e){console.log(e.message),I("Information for ".concat(r," has already been removed from the server")),x("error")})),I("Updated phone number for ".concat(r)),x("success"),setTimeout((function(){I(null)}),5e3),m(""),j("")}return m(""),void j("")}d(t).then((function(e){c(n.concat(e)),I("Added ".concat(r)),x("success"),setTimeout((function(){I(null)}),5e3),m(""),j("")}))},newName:i,setNewName:m,newNumber:E,setNewNumber:j,handleNameChange:function(e){m(e.target.value)},handleNumberChange:function(e){j(e.target.value)}}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(w,{persons:n,filtered:T,newSearch:P,setPersons:c,setMessage:I,setType:x}))};o.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.23a6c944.chunk.js.map