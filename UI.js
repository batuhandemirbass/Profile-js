 class UI {
  constructor() {
    this.profilContainer = document.getElementById('profileContainer');
    this.alert = document.getElementById('alert');
  }
  showProfile (profile){
   this.profilContainer.innerHTML = `

     <div class="card card-body">
       <div class="row">
        <div class="col-md-4">
        <img src="https://placehold.co/350x250" alt="test" class="image-thumbnail">
        </div>
        <div class="col-md-8">
            <h4>Contact</h4>
            <ul class="list-group">
               <li class="list-group-item">
                 Name : ${profile.name}
               </li>
                <li class="list-group-item">
                 Username : ${profile.username}
               </li>
                <li class="list-group-item">
                 E-Mail : ${profile.email}
               </li>
               <li class="list-group-item">
                 Address : ${profile.address.city},${profile.address.street},${profile.address.zipcode}
               </li>
                <li class="list-group-item">
                 Phone : ${profile.phone}
               </li>
            </ul>
            <h4>To Do List</h4>
            <ul id="todo" class="list-group">

            </ul>
        </div>
       </div>
     </div>
   `;
  }
  showAlert(text){
    this.alert.innerHTML=`
     ${text} is not found.
    `;
  }
  clear(){
    this.profilContainer.innerHTML = "";
    this.alert.innerHTML = "";
  }
  showToDo(todo){
    let html ="";
    todo.forEach(item =>{
      if(item.completed){
        html+=`
         <li class="list-group-item bg-success text-white">
         ${item.title}
        </li>
        `;
      }else{
        html+=`
         <li class="list-group-item bg-secondary text-white">
         ${item.title}
        </li>
        `;
      }
    });
    this.profilContainer.querySelector('#todo').innerHTML = html;
  }
}
