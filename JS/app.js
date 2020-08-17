

window.onload = function(){
    //svgs
var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"> <style type="text/css"></style> <g> <g> <path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/> </g> <g> <g> <path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/> </g> <g> <path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/> </g> <g> <path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/> </g> </g> </g> </svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"> <style type="text/css"></style> <rect style="fill:none" y="0" class="st0" width="22" height="22"/> <g> <path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/> </g> </svg>';
var editSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#c94f60" d="M42.583,9.067l-3.651-3.65c-0.555-0.556-1.459-0.556-2.015,0l-1.718,1.72l5.664,5.664l1.72-1.718	C43.139,10.526,43.139,9.625,42.583,9.067"/><path fill="#f0f0f0" d="M6.905,35.43L5,43l7.571-1.906l0.794-6.567L6.905,35.43z"/><path fill="#edbe00" d="M36.032,17.632l-23.46,23.461l-5.665-5.665l23.46-23.461L36.032,17.632z"/><linearGradient id="YoPixpDbHWOyk~b005eF1a" x1="35.612" x2="35.612" y1="7.494" y2="17.921" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#dedede"/><stop offset="1" stop-color="#d6d6d6"/></linearGradient><path fill="url(#YoPixpDbHWOyk~b005eF1a)" d="M30.363,11.968l4.832-4.834l5.668,5.664l-4.832,4.834L30.363,11.968z"/><path fill="#787878" d="M5.965,39.172L5,43l3.827-0.965L5.965,39.172z"/></svg>';




//add button clicked
var button = document.getElementById("addItem");

button.addEventListener("click", function () {
    var inputItem = document.getElementById("item");
    if (inputItem.value) {
        addTodo(inputItem.value);
        inputItem.value = "";
    }

});

//remove items
function removeItem() {
    let item = this.parentNode.parentNode.getAttribute('id');
    // let list = item.parentNode;
    // list.removeChild(item);
    firebase.database().ref("student").on('child_added',function(data){
        data_remove_obj = data.val();
        if (item ==data_remove_obj.key )
        {   
            console.log("Done")
            key = data_remove_obj.key;
            firebase.database().ref("student/"+key).remove()
            window.location.reload()
        }
        
    })
}

//complete task
function completeTask() {
    let item = this.parentNode.parentNode;
    let list = item.parentNode;

    var target = (list.id === 'todo') ? document.getElementById("completed") : document.getElementById("todo");
    list.removeChild(item);
    target.prepend(item);
}
function editItem(){
    let item = this.parentNode.parentNode.getAttribute('id');
 console.log(item)
    firebase.database().ref("student").on('child_added',function(data){
        data_remove_obj = data.val();
        if (item == data_remove_obj.key )
        {   
            
            key = data_remove_obj.key;
            old_value = data_remove_obj.value
            new_value = prompt("Enter New Task :")
            firebase.database().ref("student/"+key).set({
            value : new_value ,
            key : key
            })
            window.location.reload()
            console.log("Done",old_value)

        }
        
    });
    // window.location.reload()

}
//add item in database
function retive(){
    firebase.database().ref('student').on('child_added',function(data){
        var list = document.getElementById("todo");
    var item = document.createElement("li");
    var dataobj = data.val();
    value = dataobj.value;
    item.innerHTML = value;
    item.setAttribute('id',dataobj.key)
    var button_group = document.createElement("div");
    button_group.classList.add("button_group");

    var remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = removeSVG;
    //when remove button clicked
    remove.addEventListener("click", removeItem);


    var edit = document.createElement("button");
    edit.classList.add("remove");
    edit.innerHTML = editSVG;
    //when edit button clicked
    edit.addEventListener('click',editItem);
    
    

    var complete = document.createElement("button");
    complete.classList.add("complete");
    complete.innerHTML = completeSVG;
    //when completed button clicked
    complete.addEventListener("click", completeTask);

    button_group.appendChild(edit);
    button_group.appendChild(remove);
    button_group.appendChild(complete);
    
    item.appendChild(button_group);
    list.prepend(item);
    })
    
}
//add new item
function addTodo(input) {
    
    key = firebase.database().ref("student").push().key;
    var itemadd = {
        value : input,
        key : key
    }
    firebase.database().ref("student/"+key).set(itemadd)
}
retive();
}

