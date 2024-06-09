let temp1 = document.getElementById("comp").content;

const data = [["assets/images/pr_1.jpg", "Вокруг Луны", "Полёт вокруг Луны", "./order.html?name=moon_exs"],
              ["assets/images/pr_2.jpg", "На Луну", "Прогулка по Луне", "./order.html?name=moon_walk"],
              ["assets/images/pr_3.jpg", "На МКС", "Путешествие на МКС", "./order.html?name=mks"]];


for (i = 0; i < data.length; i++) {
    let copyHTML = document.importNode(temp1, true);
    copyHTML.querySelector(".product_pic").src = data[i][0];
    copyHTML.querySelector(".product_h3").textContent = data[i][1];
    copyHTML.querySelector(".product_desc").textContent = data[i][2];
    copyHTML.querySelector(".product_link").href = data[i][3];

    document.getElementById("product_place").appendChild(copyHTML);
}