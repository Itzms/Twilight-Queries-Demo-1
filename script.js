document.addEventListener('click', ()=>{
     
    let removeBtns = document.querySelectorAll('.question .remove');
    removeBtns.forEach(remove=>{
         remove.addEventListener('click',(e)=>{
             removeQuestion(e);
         });
    });
    let editBtns = document.querySelectorAll('.control .edit');
     editBtns.forEach(edit =>{
           edit.addEventListener('click',(e)=>{
            //    console.log('Hi', e);
               openEdit(e);
           });
     });
     let saveBtns = document.querySelectorAll('.control .save');
     saveBtns.forEach(save =>{
           save.addEventListener('click',(e)=>{
            //    console.log('Hi', e);
               saveEdit(e);
           });
     });
     let cancelBtns = document.querySelectorAll('.control .cancel');
     cancelBtns.forEach(cancel =>{
           cancel.addEventListener('click',(e)=>{
            //    console.log('Hi', e);
               cancelEdit(e);
           });
     });
});
function openEdit(event){
    let textField, text, edit, save, cancel, editInput;
    textField = event.target.closest('.textField');
    text = textField.querySelector('.Text');
    editInput = textField.querySelector('.editInput');
    edit = textField.querySelector('.edit');
    save = textField.querySelector('.save');
    cancel = textField.querySelector('.cancel');

    editInput.value = text.textContent;
    text.hidden = true;
    editInput.hidden = false;
    edit.hidden = true;
    save.hidden = false;
    cancel.hidden = false;
}
function saveEdit(event){
    let textField, text, edit, save, cancel, editInput;
    textField = event.target.closest('.textField');
    text = textField.querySelector('.Text');
    editInput = textField.querySelector('.editInput');
    let notify = textField.querySelector('.notify')
    edit = textField.querySelector('.edit');
    save = textField.querySelector('.save');
    cancel = textField.querySelector('.cancel');

    if(editInput.value<5)
      notify.textContent='Please Enter a Valid Name!';
    else{
      notify.textContent='';
      text.textContent = editInput.value;
      text.hidden = false;
      editInput.hidden = true;
      edit.hidden = false;
      save.hidden = true;
      cancel.hidden = true;

    }

}
function cancelEdit(event){
    let textField, text, edit, save, cancel, editInput;
    textField = event.target.closest('.textField');
    text = textField.querySelector('.Text');
    editInput = textField.querySelector('.editInput');
    let notify = textField.querySelector('.notify')
    edit = textField.querySelector('.edit');
    save = textField.querySelector('.save');
    cancel = textField.querySelector('.cancel');

      notify.textContent='';
      text.hidden = false;
      editInput.hidden = true;
      edit.hidden = false;
      save.hidden = true;
      cancel.hidden = true;
}
function drop(queryName)
{
    document.querySelector(queryName+' '+'.list').classList.toggle('drop');
}
function addFormInfo(fieldName, itemId){
     
    let formStore = document.querySelector('.formStore');
    let storeItem = formStore.querySelector(fieldName);
     
    let clone = storeItem.cloneNode(true);
    
    let formInfo = document.querySelector('.formInfo');
    formInfo.appendChild(clone);

    document.getElementById(itemId).style.display='none';
    // console.log(item);
}
 

function removeFormInfo(fieldName, itemId){
    let formInfo = document.querySelector('.formInfo'); 
    formInfo.querySelector(fieldName).remove();
    document.getElementById(itemId).style.display='block';
}
function addQuestion(questionType){
    let question;
    question = document.querySelector('.formCart' + ' ' +questionType).cloneNode(true);
    document.querySelector('.formView').appendChild(question);
}
function removeQuestion(event){
    event.target.closest('.textField').remove();

}
