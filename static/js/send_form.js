function send() {
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let email = document.getElementById("email");
    let mess = document.getElementById("mess");

    if (name.validity.valid == true && surname.validity.valid == true && email.validity.valid == true && mess.validity.valid == true)
    {
        emailjs.send("service_sif3d6y", "template_1ou1zk7", { name: name.value, surname: surname.value, mess: mess.value, email: email.value }, "QeLL8fsnjypODRmlz") 
        .then(() => alert("Сообщение от " + surname.value + " " + name.value + " (" + email.value + ") отправлено")) 
        .catch(error => console.log('Возникла ошибка...', error));
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