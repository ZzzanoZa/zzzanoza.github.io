function submitForm() {
    const formData = new FormData(document.getElementById('orderForm'));

    fetch('process_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Данные успешно отправлены!');
        } else {
            alert('Произошла ошибка. Попробуйте еще раз.');
        }
    })
    .catch(error => {
        console.error('Ошибка при отправке данных:', error);
    });
    alert("Данные успешно отправлены!");
}




function sendEmail() {
    var name = document.getElementsByName("quantity1")[0].value;
    var email = document.getElementsByName("ю")[0].value;
    var message = document.getElementsByName("message")[0].value;

    // Проверка обязательных полей
    if (!name || !email || !message) {
        alert("Заполните все обязательные поля.");
        return;
    }

    var subject = "Новое сообщение от " + name;
    var body = `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`;

    
    window.open(`mailto:malcevau074@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
}


