(function(t){function e(e){for(var a,n,r=e[0],d=e[1],l=e[2],u=0,p=[];u<r.length;u++)n=r[u],o[n]&&p.push(o[n][0]),o[n]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var d=s[r];0!==o[d]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=d;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("c21b"),o=s.n(a);o.a},"158c":function(t,e,s){"use strict";var a=s("f3dc"),o=s.n(a);o.a},"235d":function(t,e,s){"use strict";var a=s("603b"),o=s.n(a);o.a},2724:function(t,e,s){"use strict";var a=s("ba9a"),o=s.n(a);o.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-default row"},[s("div",{staticClass:"col-4 d-flex justify-content-start"},[t.isAuthenticated()?s("div",[s("router-link",{attrs:{to:{name:"boards"}}},[s("h5",[t._v("All Boards")])])],1):t._e()]),t._m(0),s("div",{staticClass:"col-4 d-flex justify-content-end"},[t.isAuthenticated()?s("div",[s("button",{on:{click:t.logout}},[t._v("Logout")])]):t._e()])]),s("router-view")],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-4 web-title justify-content-center"},[s("h1",[t._v("KanBan")])])}],n={methods:{logout(){this.$store.dispatch("logout")},isAuthenticated(){return!!this.$store.state.user._id}}},r=n,d=(s("034f"),s("2877")),l=Object(d["a"])(r,o,i,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,u=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"boards"},[s("h2",{staticClass:"white-text"},[t._v("Here's All of Your Boards")]),s("div",{staticClass:"col-12 d-flex justify-content-center"},[s("div",{staticClass:"card addBoard-card"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[s("div",{staticClass:"form-group px-2"},[s("h5",{staticClass:"white-text"},[t._v("Add a New Board")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Board Title...",autofocus:"",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description..."},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}}),t._m(0)])])])]),s("div",{staticClass:"row"},t._l(t.boards,function(e){return s("div",{key:e._id,staticClass:"col-4"},[s("div",{staticClass:"card board-card"},[s("router-link",{attrs:{to:{name:"board",params:{boardId:e._id}}}},[s("h5",[t._v(t._s(e.title))]),s("p",[t._v(t._s(e.description))])]),s("button",{staticClass:"delete-board",on:{click:function(s){t.deleteBoard(e._id)}}},[t._v("DELETE BOARD "),s("i",{staticClass:"fas fa-trash-alt fas-3x"})])],1)])}))])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"creatBoard",attrs:{type:"submit"}},[t._v("Create Board "),s("i",{staticClass:"fas fa-plus fas-3x"})])}],h={name:"boards",created(){this.$store.dispatch("authenticate")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},deleteBoard(t){this.$store.dispatch("deleteBoard",t)}}},v=h,f=(s("d44c"),Object(d["a"])(v,p,m,!1,null,"6be32d33",null));f.options.__file="Boards.vue";var w=f.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.board.title?s("div",{staticClass:"board"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h2",[t._v(t._s(t.board.title))]),s("p",[s("i",[t._v(t._s(t.board.description))])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("form",{staticClass:"form-group",on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[s("h5",[t._v("Add a List")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],staticClass:"mx-2",attrs:{type:"text",name:"title",placeholder:"List title..."},domProps:{value:t.newList.title},on:{input:function(e){e.target.composing||t.$set(t.newList,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.desc,expression:"newList.desc"}],staticClass:"mx-2",attrs:{type:"text",name:"desc",placeholder:"Description..."},domProps:{value:t.newList.desc},on:{input:function(e){e.target.composing||t.$set(t.newList,"desc",e.target.value)}}}),s("button",{attrs:{type:"submit"}},[t._v(" + New List")])])])]),s("div",{staticClass:"row"},t._l(t.lists,function(t){return s("div",{staticClass:"col-4"},[s("list",{attrs:{list:t}})],1)}))]):t._e()},b=[],_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"List card"},[s("h4",[s("b",[t._v(t._s(t.list.title)+" ")]),s("i",{staticClass:"fas fa-trash-alt",on:{click:t.deleteList}})]),s("p",[s("i",[t._v(t._s(t.list.desc))])]),s("form",{staticClass:"form-group",on:{submit:function(e){return e.preventDefault(),t.addTask(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.desc,expression:"newTask.desc"}],attrs:{type:"text",placeholder:"Task to do...",name:"desc"},domProps:{value:t.newTask.desc},on:{input:function(e){e.target.composing||t.$set(t.newTask,"desc",e.target.value)}}}),t._m(0)]),t._l(t.tasks,function(t){return s("div",[s("task",{attrs:{task:t}})],1)})],2)},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{attrs:{type:"submit"}},[s("i",{staticClass:"fas fa-plus fas-3x"})])}],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Task card m-2"},[s("h5",[t._v(t._s(t.task.desc)+" "),s("i",{staticClass:"fas fa-trash-alt fas-3x",on:{click:t.deleteTask}})]),s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n      Move Task\n    ")]),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},t._l(t.allLists,function(e){return s("p",{on:{click:function(s){t.moveTask(e._id)}}},[t._v(t._s(e.title))])}))]),s("form",{on:{submit:function(e){return e.preventDefault(),t.addComment(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.content,expression:"newComment.content"}],attrs:{type:"text",name:"content",placeholder:"Add a comment..."},domProps:{value:t.newComment.content},on:{input:function(e){e.target.composing||t.$set(t.newComment,"content",e.target.value)}}}),t._m(0)]),s("ul",t._l(t.task.comments,function(e){return s("li",[t._v("\n      "+t._s(e.content)+"\n      "),s("i",{staticClass:"fas fa-times-circle",on:{click:function(s){t.deleteComment(e._id)}}})])}))])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{attrs:{type:"submit"}},[s("i",{staticClass:"fas fa-plus fas-3x"})])}],$={name:"Task",mounted(){console.log("lists:",this.allLists)},data(){return{newComment:{content:""}}},props:["task"],computed:{allLists(){return this.$store.state.lists}},methods:{moveTask(t){this.task.oldListId=this.task.listId,this.task.listId=t,this.$store.dispatch("editTask",this.task)},deleteTask(){this.$store.dispatch("deleteTask",this.task)},addComment(){let t={comment:this.newComment,task:this.task};this.$store.dispatch("addComment",t)},deleteComment(t){let e=this.task.comments.findIndex(e=>e._id==t);this.task.comments.splice(e,1),this.$store.dispatch("editTask",this.task)}}},L=$,y=(s("2724"),Object(d["a"])(L,C,x,!1,null,"62a604a2",null));y.options.__file="Task.vue";var T=y.exports,B={name:"List",data(){return{newTask:{desc:"",listId:""}}},mounted(){this.$store.dispatch("getTasks",this.list._id)},computed:{tasks(){return this.$store.state.tasks[this.list._id]||[]}},props:["list"],components:{Task:T},methods:{deleteList(){this.$store.dispatch("deleteList",this.list)},addTask(){this.newTask.listId=this.list._id,this.$store.dispatch("addTask",this.newTask)}}},U=B,I=(s("235d"),Object(d["a"])(U,_,k,!1,null,"55667cd1",null));I.options.__file="List.vue";var j=I.exports,P={name:"board",data(){return{newList:{title:"",desc:"",boardId:""}}},created(){this.$store.dispatch("getLists",this.$route.params.boardId)},mounted(){},computed:{board(){return this.$store.state.boards.find(t=>t._id==this.$route.params.boardId)||{}},lists(){return this.$store.state.lists}},methods:{addList(){this.newList.boardId=this.$route.params.boardId,this.$store.dispatch("addList",this.newList)}},components:{List:j}},O=P,N=(s("158c"),Object(d["a"])(O,g,b,!1,null,null,null));N.options.__file="Board.vue";var E=N.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 offset-3 login d-flex justify-content-center"},[t.loginForm?s("form",{staticClass:"form-group",on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[s("h5",{staticClass:"white-text"},[t._v("Login")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),s("button",{attrs:{type:"submit"}},[t._v("Login")])]):s("form",{staticClass:"form-group",on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("h5",{staticClass:"white-text"},[t._v("Get Started")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.name},on:{input:function(e){e.target.composing||t.$set(t.newUser,"name",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),s("button",{attrs:{type:"submit"}},[t._v("Create Account")])])]),s("div",{staticClass:"col-12",on:{click:function(e){t.loginForm=!t.loginForm}}},[t.loginForm?s("p",{staticClass:"white-text"},[t._v("No account? Click here to Register")]):s("p",{staticClass:"white-text"},[t._v("Already have an account? Click here to Login")])])])},D=[],M={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},S=M,F=(s("a325"),Object(d["a"])(S,A,D,!1,null,"e4082dee",null));F.options.__file="Login.vue";var R=F.exports;a["a"].use(u["a"]);var J=new u["a"]({routes:[{path:"/",name:"boards",component:w},{path:"/board/:boardId",name:"board",props:!0,component:E},{path:"/login",name:"login",component:R},{path:"*",redirect:"/"}]}),q=s("2f62"),G=s("bc3a"),H=s.n(G);a["a"].use(q["a"]);let K=!window.location.host.includes("localhost"),Y=K?"https://kanban-codeworks.herokuapp.com/":"//localhost:3000/",z=H.a.create({baseURL:Y+"auth/",timeout:3e3,withCredentials:!0}),Q=H.a.create({baseURL:Y+"api/",timeout:3e3,withCredentials:!0});var V=new q["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{}},mutations:{setUser(t,e){t.user=e},setBoards(t,e){t.boards=e},setLists(t,e){t.lists=e},setTasks(t,e){a["a"].set(t.tasks,e.listId,e.tasks)}},actions:{register({commit:t,dispatch:e},s){z.post("register",s).then(e=>{t("setUser",e.data),J.push({name:"boards"})})},authenticate({commit:t,dispatch:e}){z.get("authenticate").then(s=>{t("setUser",s.data),e("getBoards")}).catch(t=>{console.log("cannot authenticate",t),J.push({name:"login"})})},login({commit:t,dispatch:e},s){z.post("login",s).then(e=>{t("setUser",e.data),J.push({name:"boards"})})},logout({commit:t,dispatch:e}){z.delete("/logout").then(e=>{t("setUser",{}),console.log("User logged out"),J.push({name:"login"})})},getBoards({commit:t,dispatch:e}){Q.get("boards").then(e=>{t("setBoards",e.data)})},addBoard({commit:t,dispatch:e},s){Q.post("boards",s).then(t=>{e("getBoards")})},deleteBoard({commit:t,dispatch:e},s){Q.delete("boards/"+s).then(t=>{e("getBoards")})},getLists({commit:t,dispatch:e},s){Q.get("/lists/"+s).then(e=>{t("setLists",e.data)})},deleteList({commit:t,dispatch:e},s){Q.delete("/lists/"+s._id).then(t=>{e("getLists",s.boardId)})},addList({commit:t,dispatch:e},s){Q.post("/lists/",s).then(t=>{e("getLists",s.boardId)})},getTasks({commit:t,dispatch:e},s){Q.get("/tasks/"+s).then(e=>{console.log("tasks",e.data),t("setTasks",{tasks:e.data,listId:s})})},addTask({commit:t,dispatch:e},s){Q.post("/tasks/",s).then(t=>{e("getTasks",s.listId)})},deleteTask({commit:t,dispatch:e},s){Q.delete("/tasks/"+s._id).then(t=>{e("getTasks",s.listId)})},addComment({commit:t,dispatch:e},s){Q.put("/tasks/"+s.task._id+"/comments",s.comment).then(t=>{e("getTasks",s.task.listId)})},editTask({commit:t,dispatch:e},s){Q.put("/tasks/"+s._id,s).then(t=>{e("getTasks",s.listId),e("getTasks",s.oldListId)}).catch(t=>console.log("cannot edit task",t))}}});a["a"].config.productionTip=!1,new a["a"]({router:J,store:V,created(){this.$store.dispatch("authenticate")},render:t=>t(c)}).$mount("#app")},"603b":function(t,e,s){},a325:function(t,e,s){"use strict";var a=s("afa7"),o=s.n(a);o.a},afa7:function(t,e,s){},ba9a:function(t,e,s){},c21b:function(t,e,s){},d44c:function(t,e,s){"use strict";var a=s("db52"),o=s.n(a);o.a},db52:function(t,e,s){},f3dc:function(t,e,s){}});
//# sourceMappingURL=app.ea846cc5.js.map