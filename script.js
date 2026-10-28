
const helloButton = document.getElementById("helloButton");
const message = document.getElementById("message");

helloButton.addEventListener("click", function () {
    message.textContent =
        "Xin chào! Website GitHub Actions đang hoạt động thành công.";
});
