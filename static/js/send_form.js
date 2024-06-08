function send() {
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let email = document.getElementById("email");
    let mess = document.getElementById("mess");

    if (name.validity.valid == true && surname.validity.valid == true && email.validity.valid == true && mess.validity.valid == true)
    {
        alert("Сообщение от " + surname.value + " " + name.value + " (" + email.value + ") отправлено");
    }

    return true;
}

function send_order() {
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let email = document.getElementById("email");
    let tel = document.getElementById("phone");

    if (name.validity.valid == true && surname.validity.valid == true && email.validity.valid == true && tel.validity.valid == true)
        {
            alert("Заказ оформлен");
        }
    
        return true;

}