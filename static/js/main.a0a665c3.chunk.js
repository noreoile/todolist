(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{210:function(e,t,n){},213:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(37),c=n.n(r),o=n(16),i=n(17),l=n(19),u=n(18),d=n(49),p=(n(185),n(234)),j=n(235),b=n(229),h=n(72),O=n(146),m=(n(75),n(3)),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"ui secondary pointing menu customMenu",children:[Object(m.jsx)(O.a,{id:"navbarButton",basic:!0,icon:!0,size:"large",onClick:this.props.onSidebarButtonClick,children:Object(m.jsx)(h.a,{name:"list"})}),Object(m.jsx)("a",{href:"/todolist",className:"item",id:"navbarLink",children:Object(m.jsx)("div",{children:"To Do List"})})]})}}]),n}(s.a.Component),g=n(103),k=n(30),x=n(13),C=n.n(x),v=n(8),S=n(21),w=n(100),y=n(230),I=n(232),D=n(227),T=n(225),B=n(228),N=n(237),F=n(226),A=n(137),R=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={open:!1,title:"",description:""},e.onButtonClick=function(t){e.props.onButtonSubmit(e.state.title,e.state.description),e.setState({open:!1,title:"",description:""})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(A.a,{onClose:function(){return e.setState({open:!1})},onOpen:function(){return e.setState({open:!0})},open:this.state.open,trigger:Object(m.jsxs)(O.a,{icon:!0,fluid:!0,labelPosition:"right",children:["Create New",Object(m.jsx)(h.a,{name:"plus"})]}),children:[Object(m.jsx)(A.a.Header,{children:"Create a task"}),Object(m.jsx)(A.a.Content,{children:Object(m.jsx)(A.a.Description,{children:Object(m.jsxs)(y.a,{children:[Object(m.jsxs)(y.a.Field,{children:[Object(m.jsx)("label",{children:"Title"}),Object(m.jsx)("input",{autoFocus:!0,placeholder:"Enter a title",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})},onKeyPress:function(t){"Enter"===t.key&&e.onButtonClick()}})]}),Object(m.jsxs)(y.a.Field,{children:[Object(m.jsx)("label",{children:"Description"}),Object(m.jsx)("input",{placeholder:"Enter a description",value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})},onKeyPress:function(t){"Enter"===t.key&&e.onButtonClick()}})]})]})})}),Object(m.jsxs)(A.a.Actions,{children:[Object(m.jsx)(O.a,{color:"black",onClick:function(){return e.setState({open:!1})},children:"back"}),Object(m.jsx)(O.a,{content:"Create",labelPosition:"right",icon:"checkmark",onClick:this.onButtonClick,positive:!0})]})]})}}]),n}(s.a.Component),P=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={firstOpen:!1,secondOpen:!1,title:"",description:""},e.onEditButtonClick=function(){e.editRecord(),e.setState({firstOpen:!1,secondOpen:!1})},e.onDeleteButtonClick=function(){e.deleteRecord(),e.setState({firstOpen:!1,secondOpen:!1})},e.editRecord=function(){var t=e.props.task;t.title=e.state.title,t.description=e.state.description,e.props.editRecord(t)},e.deleteRecord=function(){e.props.deleteRecord(e.props.task)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({title:this.props.task.title,description:this.props.task.description})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)(A.a,{onClose:function(){return e.setState({firstOpen:!1})},onOpen:function(){return e.setState({firstOpen:!0})},open:this.state.firstOpen,trigger:this.props.children,children:[Object(m.jsx)(A.a.Header,{children:"Edit a task"}),Object(m.jsx)(A.a.Content,{children:Object(m.jsx)(A.a.Description,{children:Object(m.jsxs)(y.a,{children:[Object(m.jsxs)(y.a.Field,{children:[Object(m.jsx)("label",{children:"New Title"}),Object(m.jsx)("input",{autoFocus:!0,placeholder:"Enter a title",value:this.state.title,onChange:function(t){return e.setState({title:t.target.value})},onKeyPress:function(t){"Enter"===t.key&&e.onEditButtonClick()}})]}),Object(m.jsxs)(y.a.Field,{children:[Object(m.jsx)("label",{children:"New Description"}),Object(m.jsx)("input",{placeholder:"Enter a description",value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})},onKeyPress:function(t){"Enter"===t.key&&e.onEditButtonClick()}})]})]})})}),Object(m.jsxs)(A.a.Actions,{children:[Object(m.jsx)(O.a,{color:"black",onClick:function(){return e.setState({firstOpen:!1})},children:"Back"}),Object(m.jsx)(O.a,{content:"Finish",labelPosition:"right",icon:"checkmark",onClick:this.onEditButtonClick,positive:!0})]}),Object(m.jsxs)(A.a,{onClose:function(){return e.setState({secondOpen:!1})},open:this.state.secondOpen,size:"small",children:[Object(m.jsx)(A.a.Header,{children:"Are you sure?"}),Object(m.jsx)(A.a.Content,{children:Object(m.jsx)("p",{children:"Are you sure you want to delete this task?"})}),Object(m.jsxs)(A.a.Actions,{children:[Object(m.jsxs)(O.a,{color:"red",onClick:function(){return e.setState({secondOpen:!1})},children:[Object(m.jsx)(h.a,{name:"remove"})," No"]}),Object(m.jsxs)(O.a,{color:"green",onClick:this.onDeleteButtonClick,children:[Object(m.jsx)(h.a,{name:"checkmark"})," Yes"]})]})]})]})}}]),n}(s.a.Component),L=n(231),G=(n(142),n(22)),W=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={archiveModalOpen:!1,taskList:{}},e.retrieveTaskList=Object(S.a)(C.a.mark((function t(){var n,a,s,r,c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(G.a.auth().currentUser){t.next=2;break}return t.abrupt("return");case 2:return n=G.a.firestore(),a=G.a.auth().currentUser.uid,t.next=6,n.collection("toDoList").doc(a).get();case 6:s=t.sent,r=s.data(),c={},Object.keys(r).map((function(e){"tasks"===e&&(c=r[e])})),e.setState({taskList:c});case 11:case"end":return t.stop()}}),t)}))),e.componentWillReceiveProps=function(){var t=Object(S.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.retrieveTaskList();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.renderTaskList=function(){var t=[],n=function(n){e.state.taskList[n].deleted&&t.push(Object(m.jsxs)(L.a.Row,{children:[Object(m.jsx)(L.a.Cell,{children:e.state.taskList[n].title}),Object(m.jsx)(L.a.Cell,{children:e.state.taskList[n].description}),Object(m.jsx)(L.a.Cell,{width:2,selectable:!0,children:Object(m.jsx)(O.a,{icon:"undo",fluid:!0,basic:!0,color:"red",onClick:function(t){e.props.onUndoButtonClick(n),e.setState({archiveModalOpen:!1})}})})]},e.state.taskList[n].id))};for(var a in e.state.taskList)n(a);return t},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(A.a,{open:this.state.archiveModalOpen,onClose:function(){return e.setState({archiveModalOpen:!1})},onOpen:function(){return e.setState({archiveModalOpen:!0})},trigger:this.props.children,onClick:function(e){return e.stopPropagation()},children:[Object(m.jsx)(A.a.Header,{children:"Completed Tasks Review"}),Object(m.jsx)(A.a.Content,{scrolling:!0,children:Object(m.jsx)(A.a.Description,{children:Object(m.jsxs)(L.a,{celled:!0,striped:!0,color:"red",children:[Object(m.jsx)(L.a.Header,{children:Object(m.jsxs)(L.a.Row,{children:[Object(m.jsx)(L.a.HeaderCell,{children:"Title"}),Object(m.jsx)(L.a.HeaderCell,{children:"Description"}),Object(m.jsx)(L.a.HeaderCell,{children:"Recover?"})]})}),Object(m.jsx)(L.a.Body,{children:this.renderTaskList()})]})})}),Object(m.jsx)(A.a.Actions,{})]})}}]),n}(s.a.Component),E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={deleteCardConfirmOpen:!1,editCardTitleOpen:!1,newTitleValue:"",showCompleteTasks:!1},e.componentDidMount=function(){e.setState({newTitleValue:e.props.column.title,showCompleteTasks:e.props.showCompleteTasks})},e.componentDidUpdate=function(t){t!==e.props&&e.setState({showCompleteTasks:e.props.showCompleteTasks})},e.onButtonSubmit=function(t,n){e.props.onDataSubmit(e.props.column.id,t,n)},e.onUndoButtonClick=function(t){e.props.onUndoButtonClick(t,e.props.column.id)},e.deleteCard=function(){e.setState({deleteCardConfirmOpen:!1}),e.props.deleteCard(e.props.column)},e.onShowCompleteTasksCheckboxClick=function(){e.props.onShowCompleteTasksCheckboxClick(),e.setState({showCompleteTasks:!e.state.showCompleteTasks})},e.renderEditCardTitle=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(T.a,{autoFocus:!0,icon:"edit",placeholder:"new name",onChange:function(t){return e.setState({newTitleValue:t.target.value})},value:e.state.newTitleValue,onKeyPress:function(t){if("Enter"===t.key){var n=e.props.column;n.title=e.state.newTitleValue,e.props.editTitle(n),e.setState({editCardTitleOpen:!1})}},onBlur:function(){return e.setState({editCardTitleOpen:!1})},style:{width:"14em",height:"2.2em"}}),Object(m.jsx)(h.a,{className:"createNewCardExitIcon",name:"close",size:"large",onClick:function(){return e.setState({editCardTitleOpen:!1})}})]})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(b.a,{vertical:!0,onChange:this.onChange,className:"customCard",activeIndex:"1",children:[Object(m.jsx)(b.a.Item,{children:Object(m.jsxs)("div",{className:"itemTitleRow",children:[Object(m.jsx)("b",{children:this.state.editCardTitleOpen?this.renderEditCardTitle():Object(m.jsx)("p",{className:"cardTitle",onClick:function(){return e.setState({editCardTitleOpen:!0})},children:this.props.column.title})}),Object(m.jsx)(B.a,{children:Object(m.jsxs)(B.a.Menu,{children:[Object(m.jsx)(B.a.Item,{icon:"trash",text:"Delete this list",onClick:function(){return e.setState({deleteCardConfirmOpen:!0})}}),Object(m.jsx)(B.a.Item,{onClick:function(t){return e.onShowCompleteTasksCheckboxClick()},children:Object(m.jsxs)("div",{children:[Object(m.jsx)(N.a,{checked:this.state.showCompleteTasks,onMouseDown:function(t){return e.onShowCompleteTasksCheckboxClick()}}),Object(m.jsx)("span",{style:{margin:"0 10px",verticalAlign:"text-top"},children:this.state.showCompleteTasks?"Hide Completed Tasks":"Show Completed Tasks"})]})}),Object(m.jsx)(W,{onUndoButtonClick:this.onUndoButtonClick,children:Object(m.jsx)(B.a.Item,{icon:"archive",text:"Show Deleted Tasks"})})]})})]})}),this.props.tasks.filter((function(t){return e.state.showCompleteTasks||0==t.done})).map((function(t,n){return Object(m.jsx)(w.b,{draggableId:t.id,index:n,children:function(n){return Object(m.jsx)("div",Object(v.a)(Object(v.a)(Object(v.a)({},n.draggableProps),n.dragHandleProps),{},{ref:n.innerRef,children:Object(m.jsx)(P,{task:t,editRecord:e.props.editRecord,deleteRecord:e.props.deleteRecord,children:Object(m.jsx)(b.a.Item,{className:"customItem",children:Object(m.jsxs)("div",{style:{textDecoration:t.done?"line-through":"none",opacity:t.done?"50%":"100%"},children:[Object(m.jsxs)("h4",{className:"itemTitleRow",children:[Object(m.jsx)(N.a,Object(k.a)({label:t.title,checked:t.done,onClick:function(n,a){return e.props.putToCompleted(n,a,t)}},"checked",t.done)),Object(m.jsx)(h.a,{name:"delete",className:"deleteRecordIcon",onClick:function(){return e.props.deleteRecord(t)}})]}),Object(m.jsx)("p",{children:t.description})]})})})}))}},t.id)})),this.props.placeholderAtEndOfList,Object(m.jsx)(b.a.Item,{children:Object(m.jsx)(T.a,{fluid:!0,action:!0,color:"green",children:Object(m.jsx)(R,{onButtonSubmit:this.onButtonSubmit})})}),Object(m.jsx)(F.a,{open:this.state.deleteCardConfirmOpen,onCancel:function(){return e.setState({deleteCardConfirmOpen:!1})},onConfirm:function(){return e.deleteCard()},content:"Are you sure you want to delete this column?"})]})}}]),n}(s.a.Component),U={tasks:{},columns:{},columnOrder:[],totalTasks:0,createCardButtonOpen:!1,newListName:"",showCompleteTasks:!0},M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state=null,e.UNSAFE_componentWillReceiveProps=function(t){if(e.props.firebaseData!==t.firebaseData){if(!t.userSignedOutWithGoogle)if(void 0!==t.firebaseData){var n=t.firebaseData;delete n.imageURL,e.setState(n)}else e.state!==U&&void 0===t.firebaseData&&e.props.firebaseSetDataFunc(e.state);e.dimmerActive=!1}},e.componentDidUpdate=function(t){t.userSignedOutWithGoogle!==e.props.userSignedOutWithGoogle&&(e.props.userSignedOutWithGoogle&&e.setState({tasks:{},columns:{},columnOrder:[],totalTasks:0,createCardButtonOpen:!1,newListName:""}),!0===e.props.userSignedOutWithGoogle&&(e.dimmerActive=!1))},e.onDataSubmit=function(){var t=Object(S.a)(C.a.mark((function t(n,a,s){var r,c,o,i,l,u=arguments;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>3&&void 0!==u[3]&&u[3],c=e.state.totalTasks,i={id:o="task-"+(c+1),title:a,description:s,done:r,deleted:!1},(l=Object(v.a)({},e.state)).tasks[o]=i,l.columns[n].taskIds.push(o),l.totalTasks=++c,e.setState(Object(v.a)({},l)),t.next=11,e.props.firebaseSetDataFunc(l,!0);case 11:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),e.handleOnDragEnd=function(){var t=Object(S.a)(C.a.mark((function t(n){var a,s,r,c,o,i,l,u,d,p,j,b,h;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.destination,s=n.source,r=n.draggableId,a){t.next=3;break}return t.abrupt("return");case 3:if(s.droppableId!==a.droppableId||s.index!==a.index){t.next=5;break}return t.abrupt("return");case 5:if(c=e.state.columns[s.droppableId],o=e.state.columns[a.droppableId],i=Array.from(c.taskIds),l=Array.from(o.taskIds),e.state.columns[s.droppableId]!==e.state.columns[a.droppableId]){t.next=19;break}return i.splice(s.index,1),i.splice(a.index,0,r),u=Object(v.a)(Object(v.a)({},c),{},{taskIds:i}),d=Object(v.a)(Object(v.a)({},e.state),{},{columns:Object(v.a)(Object(v.a)({},e.state.columns),{},Object(k.a)({},u.id,u))}),e.setState(d),t.next=17,e.props.firebaseSetDataFunc(d,!0);case 17:t.next=27;break;case 19:return i.splice(s.index,1),l.splice(a.index,0,r),j=Object(v.a)(Object(v.a)({},c),{},{taskIds:i}),b=Object(v.a)(Object(v.a)({},o),{},{taskIds:l}),h=Object(v.a)(Object(v.a)({},e.state),{},{columns:Object(v.a)(Object(v.a)({},e.state.columns),{},(p={},Object(k.a)(p,j.id,j),Object(k.a)(p,b.id,b),p))}),e.setState(h),t.next=27,e.props.firebaseSetDataFunc(h,!0);case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.editRecord=function(){var t=Object(S.a)(C.a.mark((function t(n){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(v.a)(Object(v.a)({},e.state),{},{tasks:Object(v.a)(Object(v.a)({},e.state.tasks),{},Object(k.a)({},n.id,n))}),e.setState(a),t.next=4,e.props.firebaseSetDataFunc(a,!0);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.editTitle=function(){var t=Object(S.a)(C.a.mark((function t(n){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(v.a)(Object(v.a)({},e.state),{},{columns:Object(v.a)(Object(v.a)({},e.state.columns),{},Object(k.a)({},n.id,Object(v.a)(Object(v.a)({},e.state.columns[n.id]),{},{title:n.title})))}),e.setState(a),t.next=4,e.props.firebaseSetDataFunc(a,!0);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteRecord=function(){var t=Object(S.a)(C.a.mark((function t(n){var a,s,r,c,o;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(){return Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)(h.a,{name:"trash",size:"large"}),Object(m.jsx)("p",{children:"One task was deleted successfully."})]})},s=function(){return d.c.success(a(),{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})},r=Object(v.a)({},e.state.columns),c="",Object.keys(r).map((function(e){Object.keys(r[e]).map((function(t){"taskIds"===t&&r[e][t].map((function(t){t===n.id&&(c=e)}))}))})),o=Object(v.a)(Object(v.a)({},e.state),{},{columns:Object(v.a)(Object(v.a)({},e.state.columns),{},Object(k.a)({},c,Object(v.a)(Object(v.a)({},e.state.columns[c]),{},{taskIds:Object(g.a)(e.state.columns[c].taskIds).filter((function(e){return e!=n.id}))}))),tasks:Object(v.a)(Object(v.a)({},e.state.tasks),{},Object(k.a)({},n.id,Object(v.a)(Object(v.a)({},e.state.tasks[n.id]),{},{deleted:!0})))}),s(),e.setState(o),t.next=10,e.props.firebaseSetDataFunc(o,!0);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteCard=function(){var t=Object(S.a)(C.a.mark((function t(n){var a,s;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return delete(a=Object(v.a)({},e.state)).columns[n.id],s=a.columnOrder.indexOf(n.id),a.columnOrder.splice(s,1),e.setState(a),t.next=7,e.props.firebaseSetDataFunc(a,!0);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onUndoButtonClick=function(){var t=Object(S.a)(C.a.mark((function t(n,a){var s,r,c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=function(){return Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)(h.a,{name:"undo alternate",size:"large"}),Object(m.jsx)("p",{children:"One task was recovered successfully."})]})},r=function(){return d.c.success(s(),{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})},c=Object(v.a)(Object(v.a)({},e.state),{},{tasks:Object(v.a)(Object(v.a)({},e.state.tasks),{},Object(k.a)({},n,Object(v.a)(Object(v.a)({},e.state.tasks[n]),{},{deleted:!1}))),columns:Object(v.a)(Object(v.a)({},e.state.columns),{},Object(k.a)({},a,Object(v.a)(Object(v.a)({},e.state.columns[a]),{},{taskIds:[].concat(Object(g.a)(e.state.columns[a].taskIds),[n])})))}),r(),e.setState(c),t.next=7,e.props.firebaseSetDataFunc(c,!0);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.createNewCard=Object(S.a)(C.a.mark((function t(){var n,a,s,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=0===e.state.columnOrder.length?"list-0":e.state.columnOrder[e.state.columnOrder.length-1],a=[],Object(g.a)(n).map((function(e){e>="0"&&e<="9"&&a.push(e)})),a=a.join(""),s="list-".concat(parseInt(a,10)+1),r=Object(v.a)(Object(v.a)({},e.state),{},{columns:Object(v.a)(Object(v.a)({},e.state.columns),{},Object(k.a)({},s,{id:s,title:"".concat(e.state.newListName),taskIds:[]})),columnOrder:[].concat(Object(g.a)(e.state.columnOrder),[s]),createCardButtonOpen:!1,newListName:""}),e.setState(r),t.next=9,e.props.firebaseSetDataFunc(r,!0);case 9:case"end":return t.stop()}}),t)}))),e.renderCreateNewCardButton=function(){return e.state.createCardButtonOpen?Object(m.jsx)(y.a,{className:"createNewCardForm",children:Object(m.jsxs)(y.a.Field,{children:[Object(m.jsx)("input",{autoFocus:!0,placeholder:"List name",onChange:function(t){return e.setState({newListName:t.target.value})},value:e.state.newListName}),Object(m.jsxs)(O.a,{className:"createNewCardFormButton",icon:!0,positive:!0,labelPosition:"right",onClick:function(){return e.createNewCard()},children:["Add",Object(m.jsx)(h.a,{name:"plus"})]}),Object(m.jsx)(h.a,{className:"createNewCardExitIcon",name:"close",size:"large",onClick:function(){return e.setState({createCardButtonOpen:!1})}})]})}):Object(m.jsxs)(O.a,{icon:!0,labelPosition:"right",className:"createNewCardFieldPos",onClick:function(){return e.setState({createCardButtonOpen:!0})},children:["Create New Card",Object(m.jsx)(h.a,{name:"plus"})]})},e.putToCompleted=function(){var t=Object(S.a)(C.a.mark((function t(n,a,s){var r,c,o;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.stopPropagation(),r=function(){return Object(m.jsxs)("div",{style:{display:"flex"},children:[Object(m.jsx)(h.a,{name:"archive",size:"large"}),Object(m.jsx)("p",{children:"One task was marked as completed."})]})},c=function(){return d.c.success(r(),{position:"bottom-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})},a.checked?(s.done=!0,c()):s.done=!1,o=Object(v.a)(Object(v.a)({},e.state),{},{tasks:Object(v.a)(Object(v.a)({},e.state.tasks),{},Object(k.a)({},s.id,s))}),e.setState(o),t.next=8,e.props.firebaseSetDataFunc(o,!0);case 8:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}(),e.onShowCompleteTasksCheckboxClick=Object(S.a)(C.a.mark((function t(){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(v.a)(Object(v.a)({},e.state),{},{showCompleteTasks:!e.state.showCompleteTasks}),e.setState(n),t.next=4,e.props.firebaseSetDataFunc(n,!0);case 4:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(n,[{key:"UNSAFE_componentWillMount",value:function(){this.setState(U),this.dimmerActive=!0}},{key:"componentDidUpdate",value:function(){this.setState(this.state)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"ui four column doubling stackable grid customContainer",children:[Object(m.jsx)(I.a,{inverted:!0,active:this.dimmerActive,children:Object(m.jsx)(D.a,{children:"Loading"})}),Object(m.jsxs)(w.a,{onDragEnd:this.handleOnDragEnd,children:[this.state.columnOrder.map((function(t){var n=e.state.columns[t],a=n.taskIds.map((function(t){return e.state.tasks[t]}));return Object(m.jsx)(w.c,{droppableId:t,children:function(t){return Object(m.jsx)("div",Object(v.a)(Object(v.a)({},t.droppableProps),{},{ref:t.innerRef,children:Object(m.jsx)(E,{className:"card",column:n,tasks:a,showCompleteTasks:e.state.showCompleteTasks,onDataSubmit:e.onDataSubmit,placeholderAtEndOfList:t.placeholder,editRecord:e.editRecord,editTitle:e.editTitle,deleteRecord:e.deleteRecord,deleteCard:e.deleteCard,putToCompleted:e.putToCompleted,onUndoButtonClick:e.onUndoButtonClick,onShowCompleteTasksCheckboxClick:e.onShowCompleteTasksCheckboxClick})}))}},t)})),this.renderCreateNewCardButton()]})]})}}]),n}(s.a.Component),H=n(167),z=n.n(H).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID i9M272JlCCpggTaV2wyWmUGG_U0AoBUQYJ9oBWlOHaU"}}),V=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.term)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"ui segment",children:Object(m.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form",children:Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("label",{children:"Image Search"}),Object(m.jsx)("input",{autoFocus:!0,type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}),Object(m.jsxs)("div",{style:{textAlign:"right",marginTop:"20px"},children:[Object(m.jsx)(O.a,{type:"button",onClick:function(){return e.props.onCloseButtonClick()},style:{marginRight:"20px"},children:"back"}),Object(m.jsx)(O.a,{type:"button",content:"Search",labelPosition:"right",icon:"search",onClick:function(){return e.props.onSubmit(e.state.term)},positive:!0})]})]})})})}}]),n}(s.a.Component),q=(n(210),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).setSpan=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({spans:t})},a.state={spans:0},a.imageRef=s.a.createRef(),a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpan)}},{key:"render",value:function(){var e=this,t=this.props.image,n=t.description,a=t.urls;return Object(m.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans),cursor:"pointer"},onClick:function(){e.props.onImageClickInImageCard(a.regular)},children:Object(m.jsx)("img",{ref:this.imageRef,alt:n,src:a.regular})})}}]),n}(s.a.Component)),K=function(e){var t=e.images.map((function(t){return Object(m.jsx)(q,{image:t,onImageClickInImageCard:e.onImageClickInImageCard},t.id)}));return Object(m.jsx)("div",{className:"image-list",children:t})},J=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={pics:[]},e.onSearchSubmit=function(){var t=Object(S.a)(C.a.mark((function t(n){var a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z.get("/search/photos",{params:{query:n,orientation:"landscape",per_page:30}});case 2:a=t.sent,e.setState({pics:a.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"ui container",style:{marginTop:"10px",color:""},children:[Object(m.jsx)(V,{onSubmit:this.onSearchSubmit,onCloseButtonClick:this.props.onCloseButtonClick}),Object(m.jsx)(K,{images:this.state.pics,onImageClickInImageCard:this.props.onImageClickInImageCard})]})}}]),n}(s.a.Component),_=(n(159),{apiKey:"AIzaSyAm6GkS3n-klkyRuivPbvNVcGLSyPP8GaA",authDomain:"todolist-270bf.firebaseapp.com",projectId:"todolist-270bf",storageBucket:"todolist-270bf.appspot.com",messagingSenderId:"939281108370",appId:"1:939281108370:web:11196982d5ea39ab29c54b",measurementId:"G-Y866C0BWDS"}),Y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={open:!1},e.onCloseButtonClick=function(){e.setState({open:!1})},e.initializeFirebase=function(){G.a.apps.length||G.a.initializeApp(_),e.db=G.a.firestore()},e.onImageClickInImageCard=function(t){G.a.auth().onAuthStateChanged((function(n){n&&e.db.collection("toDoList").doc(n.uid).update({imageURL:t})})),document.querySelector(".customContainer").style.backgroundImage='url("'.concat(t,'")'),e.setState({open:!1})},e.componentDidMount=function(){e.initializeFirebase(),G.a.auth().onAuthStateChanged((function(t){t&&e.db.collection("toDoList").doc(t.uid).get().then((function(e){void 0===e.data().imageURL?document.querySelector(".customContainer").style.backgroundImage='url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?cs=srgb&dl=pexels-johannes-plenio-1103970.jpg&fm=jpg")':document.querySelector(".customContainer").style.backgroundImage='url("'.concat(e.data().imageURL,'")')})).catch((function(e){document.querySelector(".customContainer").style.backgroundImage='url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?cs=srgb&dl=pexels-johannes-plenio-1103970.jpg&fm=jpg")'}))}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsx)(A.a,{basic:!0,centered:!1,onClose:function(){return e.setState({open:!1})},onOpen:function(){return e.setState({open:!0})},open:this.state.open,size:"large",closeOnDimmerClick:!1,trigger:this.props.children,children:Object(m.jsx)(A.a.Content,{children:Object(m.jsx)(J,{onCloseButtonClick:this.onCloseButtonClick,onImageClickInImageCard:this.onImageClickInImageCard})})})}}]),n}(s.a.Component),Q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={user:null,docData:null},e.notify=function(){return d.c.warn(X,{position:"bottom-right",autoClose:1e4,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!0,progress:void 0,onClick:function(){e.signInWithGooglePopup()}})},e.componentDidMount=function(){G.a.auth().onAuthStateChanged((function(t){t?(e.setState({user:G.a.auth().currentUser}),e.props.userSignedOutWithGoogle(!1),e.getDatafromFirebase().then((function(t){e.props.getDataFromFirebaseComp(t)}))):(e.setState({user:null}),e.notify(),e.props.userSignedOutWithGoogle(!0))})),e.props.setDataToFirebase(e.setDataToFirebase)},e.getDatafromFirebase=Object(S.a)(C.a.mark((function t(){var n,a;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.user){t.next=12;break}return t.prev=1,t.next=4,e.database.collection("toDoList").doc(e.state.user.uid).get();case 4:return n=t.sent,a=n.data(),t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])}))),e.setDataToFirebase=function(){var t=Object(S.a)(C.a.mark((function t(n){var a,s,r=arguments;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=r.length>1&&void 0!==r[1]&&r[1],s=n,!e.state.user){t.next=18;break}if(t.prev=3,!a){t.next=10;break}return t.next=7,e.database.collection("toDoList").doc(e.state.user.uid).update(s);case 7:t.sent,t.next=13;break;case 10:return t.next=12,e.database.collection("toDoList").doc(e.state.user.uid).set(s);case 12:t.sent;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(3),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[3,15]])})));return function(e){return t.apply(this,arguments)}}(),e.signInWithGooglePopup=Object(S.a)(C.a.mark((function t(){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.auth().signInWithPopup(e.googleProvider);case 3:t.sent,e.setState({user:G.a.auth().currentUser}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e.signOutWithGoogle=Object(S.a)(C.a.mark((function t(){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,G.a.auth().signOut();case 3:t.sent,e.setState({user:null}),e.props.userSignedOutWithGoogle(!0),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.renderAuthButton=function(){return e.state.user?Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{style:{paddingBottom:"1em"},children:["Hello ",e.state.user.displayName]}),Object(m.jsxs)(O.a,{fluid:!0,className:"ui red google button",onClick:e.signOutWithGoogle,children:[Object(m.jsx)(h.a,{name:"google"}),"Sign Out"]})]}):Object(m.jsxs)(O.a,{fluid:!0,className:"ui red google button",onClick:e.signInWithGooglePopup,children:[Object(m.jsx)(h.a,{name:"google"}),"Sign In with Google"]})},G.a.apps.length||G.a.initializeApp(_),e.database=G.a.firestore(),e.googleProvider=new G.a.auth.GoogleAuthProvider,e}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:this.renderAuthButton()})}}]),n}(s.a.Component),X=Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Warning! Please sign in with Google to save your progress."}),Object(m.jsxs)(O.a,{fluid:!0,className:"ui red google button",children:[Object(m.jsx)(h.a,{name:"google"}),"Sign In with Google"]})]}),Z=Q,$=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={visible:!1,googleButtonSignIn:!1,firebaseData:null,firebaseSetDataFunc:null,userSignedOutWithGoogle:null},e.onSidebarButtonClick=function(){e.setState({visible:!0})},e.onImageSearchButtonClick=function(){return e.setState({visible:!1}),Object(m.jsx)(Y,{})},e.getDataFromFirebaseComp=function(t){e.setState({firebaseData:t})},e.setDataToFirebase=function(t){e.setState({firebaseSetDataFunc:t})},e.userSignedOutWithGoogle=function(t){e.setState({userSignedOutWithGoogle:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"customSidebar",children:Object(m.jsxs)(p.a.Pushable,{as:j.a,children:[Object(m.jsxs)(p.a,{className:"customSideBarPushable",as:b.a,animation:"overlay",inverted:!0,onHide:function(){return e.setState({visible:!1})},vertical:!0,visible:this.state.visible,width:"wide",children:[Object(m.jsx)(b.a.Item,{className:"customMenuItem",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(h.a,{name:"list",link:!0,size:"large",className:"customMenuItemIcon",onClick:function(){return e.setState({visible:!1})}}),"To Do List"]})}),Object(m.jsx)(b.a.Item,{className:"customMenuItem",as:"a",onClick:function(){return e.setState({visible:!1})},children:Object(m.jsxs)("div",{children:[Object(m.jsx)(h.a,{name:"home",link:!0,size:"large",className:"customMenuItemIcon"}),"Home"]})}),Object(m.jsx)(Y,{children:Object(m.jsx)(b.a.Item,{className:"customMenuItem",as:"a",onClick:this.onImageSearchButtonClick,children:Object(m.jsxs)("div",{children:[Object(m.jsx)(h.a,{name:"images",link:!0,size:"large",className:"customMenuItemIcon"}),"Change Background Image"]})})}),Object(m.jsx)(b.a.Item,{className:"customMenuItem",children:Object(m.jsx)(Z,{getDataFromFirebaseComp:this.getDataFromFirebaseComp,setDataToFirebase:this.setDataToFirebase,userSignedOutWithGoogle:this.userSignedOutWithGoogle})})]}),Object(m.jsxs)(p.a.Pusher,{className:"customPusher",dimmed:this.state.visible,children:[Object(m.jsx)(f,{onSidebarButtonClick:this.onSidebarButtonClick}),Object(m.jsx)(M,{firebaseData:this.state.firebaseData,firebaseSetDataFunc:this.state.firebaseSetDataFunc,userSignedOutWithGoogle:this.state.userSignedOutWithGoogle})]})]})})}}]),n}(s.a.Component),ee=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"root",children:[Object(m.jsx)($,{}),Object(m.jsx)(d.b,{transition:d.a,style:{color:"black"}})]})}}]),n}(s.a.Component);n(212);c.a.render(Object(m.jsx)(ee,{}),document.querySelector("#root"))},75:function(e,t,n){}},[[213,1,2]]]);
//# sourceMappingURL=main.a0a665c3.chunk.js.map