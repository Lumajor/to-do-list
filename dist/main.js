(()=>{"use strict";const e=e=>{let t=document.getElementById(e+"Modal"),n=document.getElementById(e+"Close"),i=document.getElementById(e+"Submit"),o=document.getElementById("submitEditButton");t.style.display="block",n.onclick=function(){t.style.display="none"},window.onclick=function(e){e.target==t&&(t.style.display="none")},i&&(i.onclick=function(){t.style.display="none"}),o&&(o.onclick=function(){t.style.display="none"})},t=(()=>{const e=document.getElementById("allProjects");return{openHome:()=>{HomeProject.classList.add("selected");for(let t=0;t<e.children.length;t++)"HomeProject"!=e.children[t].id&&e.children[t].classList.add("unselected")},openSelectedProject:t=>{for(let n=0;n<e.children.length;n++)e.children[n].id==t?(e.children[n].classList.remove("unselected"),e.children[n].classList.add("selected"),console.log("showing #"+t+"Container"),document.querySelector("#"+t+"Container").style.display="block"):(e.children[n].classList.remove("selected"),e.children[n].classList.add("unselected"),console.log("hiding #"+e.children[n].id+"Container"),document.querySelector("#"+e.children[n].id+"Container").style.display="none")}}})(),n=e=>{let t=e.parentNode.parentNode;e.checked?(t.childNodes[0].innerHTML=`<input type="checkbox" class="toDoCheckbox" checked><p>${t.childNodes[0].innerText.strike()}</p>`,t.childNodes[1].children[1].innerHTML=t.childNodes[1].children[1].innerText.strike(),t.childNodes[1].children[2].innerHTML=t.childNodes[1].children[2].innerText.strike()):(t.childNodes[0].innerHTML=`<input type="checkbox" class="toDoCheckbox"><p>${t.childNodes[0].innerText}</p>`,t.childNodes[1].children[1].innerHTML=t.childNodes[1].children[1].innerText,t.childNodes[1].children[2].innerHTML=t.childNodes[1].children[2].innerText)},i=e=>{console.log("removing Node..."+e),e.parentNode.parentNode.remove()},o=(()=>{function e(e,t){Object.keys(t).forEach((n=>e.setAttribute(n,t[n])))}const t=(e,t,n,i,o)=>{e.childNodes[0].innerHTML=`<input type="checkbox" class="toDoCheckbox"><p>${t}</p>`,e.childNodes[1].children[1].innerHTML="Due Date: "+o,e.childNodes[1].children[2].innerHTML="Priority: "+i,e.childNodes[1].children[5].innerHTML=n};return{setupEdit:n=>{const i=document.querySelector("#editContainer");let o=n.parentNode.parentNode,d=["Low","Medium","High"];document.querySelector("#editToDoContainer")&&i.removeChild(document.querySelector("#editToDoContainer"));let c=document.createElement("div");c.setAttribute("id","editToDoContainer");let l=o.childNodes[0].innerText,r=o.childNodes[1].children[1].innerText.substring(10),a=o.childNodes[1].children[5].innerText,s=document.createElement("br"),u=document.createElement("br"),m=document.createElement("br"),p=document.createElement("input"),h=document.createElement("label"),b=document.createElement("input"),y=document.createElement("label"),E=document.createElement("input"),g=document.createElement("label"),C=document.createElement("select"),D=document.createElement("label"),N=document.createElement("input"),x=document.createElement("div");h.setAttribute("for","editTitle"),h.innerText="Title: ",y.setAttribute("for","editDescription"),y.innerText="Description: ",g.setAttribute("for","editDueDate"),g.innerText="Due date: ",D.setAttribute("for","editPriority"),D.innerText="Priority: ",x.setAttribute("class","input-field"),e(p,{type:"text",id:"editTitle",name:"editTitle",value:l}),e(b,{type:"text",id:"editDescription",name:"editDescription",value:a}),e(E,{type:"date",id:"editDueDate",name:"editDueDate",value:r,min:"2018-01-01",max:"2080-12-31"}),e(C,{name:"editPriority",id:"editPriority"});for(let e=0;e<d.length;e++){let t=document.createElement("option");t.value=d[e],t.text=d[e],t.setAttribute("class","editPrioritySelect"),C.appendChild(t)}e(N,{type:"button",value:"Submit Edit",id:"submitEditButton"}),x.appendChild(C),c.append(h,p,s,y,b,u,g,E,D,x,m,N),i.append(c),editToDoContainer.addEventListener("click",(e=>{e.target.matches("#submitEditButton")&&t(o,editTitle.value,editDescription.value,editPriority.value,editDueDate.value)}));let T=document.getElementById("editPriority");M.FormSelect.init(T,".prioritySelect")},editInfo:t}})();toDoControllerContainer.addEventListener("click",(n=>{n.target.matches("#createNewToDo")&&((()=>{let e=document.getElementById("projectSelector"),t=document.getElementById("allProjects");for(;e.options.length>0;)e.remove(0);for(let n=0;n<t.children.length;n++){let i=t.children[n].id.substring(0,t.children[n].id.length-7),o=document.createElement("option");o.setAttribute("value",i),o.setAttribute("class","projectSelect");let d=document.createTextNode(i);o.appendChild(d),e.appendChild(o)}let n=document.getElementById("projectSelector");M.FormSelect.init(n,".projectSelect")})(),e(n.target.id)),n.target.matches("#createNewProject")&&e(n.target.id),n.target.matches(".project-child")&&t.openSelectedProject(n.target.id)})),toDos.addEventListener("click",(t=>{t.target.matches(".toDoDetails")&&(e(t.target.className.substring(12)),(e=>{const t=document.querySelector("#detailContainer");document.querySelector("#expandDetails")&&t.removeChild(document.querySelector("#expandDetails"));let n=document.createElement("div");n.setAttribute("id","expandDetails");let i=e.parentNode.parentNode,o=document.createElement("p"),d=i.childNodes[0].childNodes[1].innerText;o.setAttribute("class","detailTitle");let c=document.createElement("p"),l=i.childNodes[1].childNodes[5].innerText,r=document.createElement("p"),a=i.childNodes[1].childNodes[1].innerText,s=document.createElement("p"),u=i.childNodes[1].childNodes[2].innerText;o.textContent=d,c.textContent="Description: "+l,r.textContent=a,s.textContent=u,n.append(o,c,r,s),detailContainer.append(n)})(t.target)),t.target.matches(".toDoCheckbox")&&n(t.target),t.target.matches(".delete-to-do")&&i(t.target),t.target.matches(".editToDo")&&(o.setupEdit(t.target),e(t.target.className.substring(12)))})),createNewToDoModal.addEventListener("click",(e=>{e.target.matches("#createNewToDoSubmit")&&(e=>{let t=document.getElementById(e.projectSelector+"ProjectContainer"),n=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),d=document.createElement("input"),c=document.createElement("p"),l=document.createElement("button"),r=document.createElement("p"),a=document.createElement("p"),s=document.createElement("p"),u=document.createElement("img"),m=document.createElement("img");n.setAttribute("class","toDoChildContainer"),i.setAttribute("class","toDoChildTitle"),o.setAttribute("class","toDoChildInfo"),d.setAttribute("type","checkbox"),d.setAttribute("class","toDoCheckbox"),c.textContent=e.title,l.textContent="Details",l.setAttribute("class","detailChild toDoDetails"),l.setAttribute("id",e.projectSelector+"Node"),r.textContent="Due Date: "+e.dueDate,r.setAttribute("class","detailChild"),a.textContent="Priority: "+e.priority.substring(0,e.priority.length-8),a.setAttribute("class","detailChild"),s.textContent=e.description,s.style.display="none",u.setAttribute("src","img/trash.png"),u.setAttribute("class","detailChild delete-to-do"),m.setAttribute("src","img/pencil.png"),m.setAttribute("class","detailChild editToDo"),i.append(d,c),o.append(l,r,a,u,m,s),n.append(i,o),t.appendChild(n)})(((e,t,n,i,o)=>({title:e,description:t,dueDate:n,priority:i,projectSelector:o}))(title.value,description.value,dueDate.value,priority.value,projectSelector.value))})),createNewProjectModal.addEventListener("click",(e=>{e.target.matches("#createNewProjectSubmit")&&(e=>{let t=document.createElement("p");t.textContent=e.name,t.setAttribute("class","project-child"),t.setAttribute("id",e.name+"Project");let n=document.createElement("div");n.setAttribute("id",e.name+"ProjectContainer"),allProjects.append(t),projectsContainer.appendChild(allProjects),toDos.appendChild(n)})({name:projectName.value})})),window.addEventListener("DOMContentLoaded",(e=>{t.openHome()}))})();