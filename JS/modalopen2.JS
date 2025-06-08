$(document).ready(function() {
    // Маска с фиксированным префиксом +7 и форматом (999) 999-99-99
    $('#phone').mask('+7 (000) 000-00-00', {
        placeholder: "+7 (___) ___-__-__",
        // Чтобы нельзя было удалить +7, блокируем ввод в первые 3 символа
        onKeyPress: function(cep, e, field, options) {
            if(field.caret() < 3) {
                field.caret(3);
            }
        }
    });

    $('#openModal2').on('click', function() {
        $('#modal').hide(); // Закрываем первое модальное окно
        $('#modal2').show(); // Открываем второе модальное окно
    });

    $('.close').on('click', function() {
        $('#modal2').hide();
        $('#modal').show();
    });

    $('#backToFirstModal').on('click', function() {
        const phoneInput = $('#phone').val();
        const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

        if (!phonePattern.test(phoneInput)) {
            alert('Пожалуйста, введите корректный номер телефона в формате: +7 (___) ___-__-__');
            return;
        }

        alert('Код отправлен на номер: ' + phoneInput);
    });
});
