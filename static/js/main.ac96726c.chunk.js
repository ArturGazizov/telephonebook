(this.webpackJsonptelephonebook=this.webpackJsonptelephonebook||[]).push([[0],{18:function(e,n,t){e.exports=t(40)},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),o=t.n(u),m=t(14),c=t(15),l=t(2),i=t(17),s=t(16),h=function(e){var n=e.persons,t=e.functions;return r.a.createElement("div",null,r.a.createElement("h2",null,"Numerot"),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.id},e.name,r.a.createElement("button",{onClick:t(e.id)}," poista "))}))))},d=function(e){var n=e.addName,t=e.handleNameChange,a=e.handleNumberChange,u=e.newName,o=e.newNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"nimi: ",r.a.createElement("input",{value:u,onChange:t}),"numero: ",r.a.createElement("input",{value:o,onChange:a})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},N=t(3),b=t.n(N),f="http://localhost:3001/persons",p=function(){return b.a.get(f)},v=function(e){return b.a.post(f,e)},g=function(e){return b.a.delete("".concat(f,"/").concat(e))},w=function(e){return b.a.get("".concat(f,"/").concat(e))},E=function(e){Object(i.a)(t,e);var n=Object(s.a)(t);function t(e){var a;return Object(m.a)(this,t),(a=n.call(this,e)).removeName=function(e){return function(){w(e).then((function(n){window.confirm("Poistetaanko ".concat(n.data.name," ?"))&&g(e).then((function(){return p().then((function(e){a.setState({persons:e.data})}))}))}))}},a.addName=function(e){e.preventDefault();var n={name:a.state.newName,number:a.state.newNumber};a.state.persons.find((function(e){return e.name==a.state.newName}))?alert("already had added such name"):v(n).then((function(e){a.setState({persons:a.state.persons.concat(e.data),newName:"",newNumber:""})}))},a.handleNameChange=function(e){a.setState({newName:e.target.value})},a.handleNumberChange=function(e){a.setState({newNumber:e.target.value})},a.state={persons:[{name:"Arto Hellas"}],newName:"",newNumber:""},a.addName=a.addName.bind(Object(l.a)(a)),a.handleNumberChange=a.handleNumberChange.bind(Object(l.a)(a)),a.handleNameChange=a.handleNameChange.bind(Object(l.a)(a)),a.removeName=a.removeName.bind(Object(l.a)(a)),a}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p().then((function(n){e.setState({persons:n.data})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Puhelinluettelo"),r.a.createElement(d,{addName:this.addName,handleNameChange:this.handleNameChange,handleNumberChange:this.handleNumberChange,newName:this.state.newName,newNumber:this.state.newNumber}),r.a.createElement(h,{persons:this.state.persons,functions:this.removeName}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.ac96726c.chunk.js.map