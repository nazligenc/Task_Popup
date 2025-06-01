document.addEventListener('DOMContentLoaded', function () {
    const cancelBtn = document.querySelector('.cancelbtn');
    const modal = document.querySelector('.back');
    const checkbox = document.getElementById('customCheckDisabled');

    if (localStorage.getItem('popupShown') !== 'true') {
        setTimeout(() => {
            if (modal) modal.style.display = 'block';
        }, 1000);
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', function () {
            if (modal) modal.style.display = 'none';
        });
    }

    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    if (checkbox) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                localStorage.setItem('popupShown', 'true');
            } else {
                localStorage.removeItem('popupShown');
            }
        });
    }

    const callBtn = document.getElementById('callbtn');
    const confirmSection = document.getElementById('confirmSection');

    if (callBtn && confirmSection) {
        callBtn.addEventListener('click', function (e) {
            e.preventDefault();
            let nameInput = document.getElementById('exampleInputName');
            let phoneInput = document.getElementById('exampleInputPhone');
            let valid = true;

            const nameRegex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]{3,}$/;
            const phoneRegex = /^05\d{9}$/;

            if (!nameRegex.test(nameInput.value.trim())) {
                document.getElementById('nameError').classList.remove('d-none');
                valid = false;
            } else {
                document.getElementById('nameError').classList.add('d-none');
            }

            if (!phoneRegex.test(phoneInput.value.trim())) {
                document.getElementById('phoneError').classList.remove('d-none');
                valid = false;
            } else {
                document.getElementById('phoneError').classList.add('d-none');
            }

            if (!valid) {
                return;
            }
            confirmSection.classList.add('show');

            const confirmationCheckbox = document.getElementById('confirmationCheck');
            if (confirmationCheckbox.checked) {
                document.getElementById('callRequest').submit();
            } else {
                alert('Lütfen aranmayı onayladığınızı belirtin.');
            }
        });
    }
});
