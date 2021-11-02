function form_validate(){
    var special_char = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    let name = document.forms["animi"]["name"].value;
    let epi = document.forms["animi"]["episodes"].value;
    if (name == "")
    {
        alert("Empty");
        return false;
    }
    else if(name.length < 8)
    {
        alert("length less than 8");
        return false;
    }
    else if(name.length >15)
    {
        alert("Size greater than 15");
        return false;
    }    
    else if(name.indexOf(" ") >0)
    {
        alert("Has Spaces");
        return false;
    }
    else if(special_char.test(name))
    {
        alert("Enter name without special characters");
        return false;
    }
}