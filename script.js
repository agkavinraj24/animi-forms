form_validate(){
    let name = document.forms[animi][name].value;
    document.getElementById("Demo").innerHTML=name;
    alert("Name Must be filled" + name);
    if (name == "")
    {
      
        return false;
    }
    else if(name.length < 8)
        return false;
    else if(name.length >15)
        return false;
    else if(name.indexOf(" ") >0)
        return false;
}