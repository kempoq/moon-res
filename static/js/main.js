function get(name) {
    const query = window.location.search.substring(1);
    let pair = query.split('=')
        if(pair[0] == name) {return pair[1]}
    return false
}

function get_to_form() {

    let name = get('name')
    console.log(get('name'))
    document.getElementById("product").value = name;
    return true;
}


window.onload = get_to_form();