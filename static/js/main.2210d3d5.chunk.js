(this["webpackJsonpshayla-stevenson"]=this["webpackJsonpshayla-stevenson"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"id":"0","title":"Pet Seeker Palooza","image":"./images/pet-seeker-palooza-700x410.png","liveUrl":"https://shrouded-lake-69367.herokuapp.com/","ghRepoUrl":"https://github.com/ShaylaStevenson/PetSeekerPalooza","details":"Find adoptable pets and share images in a pet-friendly, social environment"},{"id":"1","title":"Your Day in Brief","image":"./images/brief-700x410.png","liveUrl":"https://connerjm.github.io/Your-Day-in-Brief/","ghRepoUrl":"https://github.com/ShaylaStevenson/Your-Day-in-Brief","details":"Get top news stories daily, selected by category."},{"id":"2","title":"Employee Directory","image":"./images/employee-directory-700x410.png","liveUrl":"https://shaylastevenson.github.io/employee-directory/","ghRepoUrl":"https://github.com/ShaylaStevenson/employee-directory","details":""},{"id":"3","title":"Workout Tracker","image":"./images/workout-tracker-700x410.png","liveUrl":"https://dry-wildwood-27410.herokuapp.com/?id=608337663f09dc00152004e3","ghRepoUrl":"https://github.com/ShaylaStevenson/workout-tracker","details":""},{"id":"4","title":"Employee Tracker","image":"./images/employee-tracker-700x410.png","liveUrl":"","ghRepoUrl":"https://github.com/ShaylaStevenson/workout-tracker","details":""},{"id":"5","title":"Personal Portfolio","image":"./images/portfolio-700x410.png","liveUrl":"","ghRepoUrl":"https://github.com/ShaylaStevenson/shayla-stevenson","details":""}]')},function(e,t,a){},,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(6),c=a.n(r),s=a(7),i=a(8),l=a(10),o=a(9),h=a(0);var j=function(e){return Object(h.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(h.jsx)("div",{className:"navbar-brand",children:Object(h.jsx)("a",{href:"#about",onClick:function(){return e.handlePageChange("About")},className:"About"===e.currentPage?"nav-link active":"nav-link",children:"Shayla Stevenson"})}),Object(h.jsx)("div",{children:Object(h.jsxs)("ul",{className:"nav nav-tabs",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{href:"#about",onClick:function(){return e.handlePageChange("About")},className:"About"===e.currentPage?"nav-link active":"nav-link",children:"About"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{href:"#portfolio",onClick:function(){return e.handlePageChange("Portfolio")},className:"Portfolio"===e.currentPage?"nav-link active":"nav-link",children:"Portfolio"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{href:"#contact",onClick:function(){return e.handlePageChange("Contact")},className:"Contact"===e.currentPage?"nav-link active":"nav-link",children:"Contact"})})]})})]})};a(16);var d=function(e){return Object(h.jsxs)("div",{className:"hero text-center",children:["THIS IS A HEADER",e.children]})};a(17);var u=function(){return Object(h.jsx)("footer",{className:"footer",children:Object(h.jsx)("span",{children:"Add Links Here \ud83d\ude0e\ud83d\ude09\ud83e\udd1e"})})};var b=function(){return Object(h.jsx)("h1",{children:"HOME/ABOUT"})};a(18);var m=function(e){var t=e.image;return Object(h.jsx)("div",{className:"col-md-4",children:Object(h.jsx)("div",{className:"card my-1 project-card",style:{backgroundImage:"url("+t+")",height:"300px"},children:Object(h.jsxs)("div",{className:"card-content opaq-bg mx-4",children:[Object(h.jsx)("h4",{className:"card-title mt-4",children:Object(h.jsx)("strong",{children:e.title})}),Object(h.jsxs)("div",{className:"card-body card-text pt-0",children:[e.details,Object(h.jsx)("br",{}),Object(h.jsxs)("div",{className:"mt-1",children:[Object(h.jsx)("a",{href:e.liveUrl,children:Object(h.jsx)("strong",{children:"Go to Live Deployment"})}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:e.ghRepoUrl,children:Object(h.jsx)("strong",{children:"Visit Github Repository"})})]})]})]})})})},g=a(4);var p=function(e){return console.log(g),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Project List"}),Object(h.jsx)("div",{className:"row",children:g.map((function(e){return Object(h.jsx)(m,{id:e.id,title:e.title,image:e.image,liveUrl:e.liveUrl,ghRepoUrl:e.ghRepoUrl,details:e.details},e.id)}))})]})},v=a(2);var O=function(){var e=Object(n.useState)(),t=Object(v.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(),s=Object(v.a)(c,2),i=s[0],l=s[1],o=Object(n.useState)(),j=Object(v.a)(o,2),d=j[0],u=j[1],b=Object(n.useState)(),m=Object(v.a)(b,2),g=m[0],p=m[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"mt-4",children:Object(h.jsx)("h2",{children:"Reach Out"})}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("username is "+a),console.log("email is "+i),console.log("phone is "+d),console.log("message is"+g),e.target.reset()},children:[Object(h.jsxs)("div",{className:"container mt-3 px-5",children:[Object(h.jsx)("div",{className:" row form-group",children:Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("input",{className:"form-control",type:"text",placeholder:"Username",name:"username",onChange:function(e){return r(e.target.value)}})})}),Object(h.jsx)("div",{className:"row form-group",children:Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",onChange:function(e){return l(e.target.value)}})})}),Object(h.jsx)("div",{className:"row form-group",children:Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("input",{className:"form-control",type:"phone",placeholder:"Phone Number",name:"phone",onChange:function(e){return u(e.target.value)}})})}),Object(h.jsx)("div",{className:"row form-group",children:Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("input",{className:"form-control",type:"message",placeholder:"Leave a message",name:"message",onChange:function(e){return p(e.target.value)}})})}),Object(h.jsx)("button",{className:"btn btn-success",type:"submit",children:"Submit"})]}),Object(h.jsxs)("div",{className:"container mt-4",children:[Object(h.jsxs)("h3",{children:["Hello ",a,"!"]}),Object(h.jsxs)("p",{children:[" your email is ",i,"!"]}),Object(h.jsxs)("p",{children:[" your phone number is ",d,"!"]}),Object(h.jsxs)("p",{children:[" your message is ",g,"!"]})]})]})]})},x=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentPage:"About"},e.handlePageChange=function(t){e.setState({currentPage:t})},e.renderPage=function(){return"About"===e.state.currentPage?Object(h.jsx)(b,{}):"Portfolio"===e.state.currentPage?Object(h.jsx)(p,{}):Object(h.jsx)(O,{})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(j,{currentPage:this.state.currentPage,handlePageChange:this.handlePageChange}),Object(h.jsx)(d,{}),this.renderPage(),Object(h.jsx)(u,{})]})}}]),a}(n.Component),f=(a(5),function(){return Object(h.jsx)(x,{})});a(19);c.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.2210d3d5.chunk.js.map