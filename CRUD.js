let createButton = document.getElementById("create-button");
let createForm = document.getElementById("create-form");
let isCreateFormDisplaying = false;
let updateButton = document.getElementById("update-button");
let updateForm = document.getElementById("update-form");
let isUpdateFormDisplaying = false;

let deleteButton = document.getElementById("delete-button");
let deleteForm = document.getElementById("delete-form");
let isDeleteFormDisplaying = false; 


//Toggle Form

createButton.onClick = function(){
    
        if(isCreateFormDisplaying==false){
            //displaying the form
            createForm.style.display = "block";
            isCreateFormDisplaying = true;
        }else{
            //hide the form
            createForm.style.display = "none";
            isCreateFormDisplaying = false;
        }

}

    //Toggle Update Form
    updateButton.onCLick = function(){
        
        if(isUpdateFormDisplaying==false){
            // display the update form
            updateForm.style.display = "block";
            isUpdateFormDisplaying = true;
        }else{
            //hide the form
            updateForm.style.display = "none";
            isUpdateFormDisplaying = false;
        }
    }

    //Toggle Delete Form

    deleteButton.onClick = function(){
        if(isDeleteFormDisplaying==false){
            //display the delete form
            deleteForm.style.display = "block";
            isDeleteFormDisplaying = true;
        }else{
            //hide the form
            deleteForm.style.display = "none";
            isDeleteFormDisplaying = false;
        }
    }