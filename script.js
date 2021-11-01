form_validate(){
    let name = document.forms[animi][name].value;
    
    if (name == "")
    {
        alert("Name Must be filled");
        return false;
    }
    else if(name.length < 8)
        return false;
    else if(name.length >15)
        return false;
    else if(name.indexOf(" ") >0)
        return false;
}