
var list=document.getElementById("list");


function ontodo()
{
 
  //list
  var todo = document.getElementById("todo-item");
  var li   =   document.createElement("li");
  var litext =  document.createTextNode(todo.value)
  li.appendChild(litext)
   
  list.appendChild(li)

//delete
  var btn=document.createElement('button');
  var delbut=document.createTextNode("Delete")
   btn.setAttribute('class','btn');
   btn.setAttribute('onclick','deleteitem(this)')
   btn.appendChild(delbut);

   li.appendChild(btn)
  
   //edit
   var editbut=document.createElement("button");
    var edit=document.createTextNode("EDIT");
    editbut.appendChild(edit);
    editbut.setAttribute('onclick','editItem(this)')
    
    li.appendChild(editbut)

    // list.appendChild(li)
    todo.value =  " " ; 
    console.log(li)

}

function  deleteitem(e)
{
  e.parentNode.remove();
}

function editItem(e)
{

   var val= e.parentNode.firstChild.nodeValue;
   var editval=prompt("Enter a new value ",val);
   e.parentNode.firstChild.nodeValue =editval;

}


function addtodo()
{

    list.innerHTML= " ";
}

