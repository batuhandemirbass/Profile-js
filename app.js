const profile = new Profile();
const UIview = new UI();
const searchProfile = document.getElementById('searchProfile');
searchProfile.addEventListener('keyup',(event)=>{
  UIview.clear();
  let text =  event.target.value;
  if(text!==''){
    profile.getProfile(text)
      .then(res => {
        if(res.profile.length === 0){
         UIview.showAlert();
        }else{
          UIview.showProfile(res.profile[0]);
          UIview.showToDo(res.todo);
        }
      })
      .catch(err=>{
        UIview.showAlert(text);
      })
  }

});

