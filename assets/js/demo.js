// Demo form: client-side confirmation only, no data is ever sent or stored.
document.getElementById('demo-form').addEventListener('submit', function (event) {
    event.preventDefault();
    if (this.reportValidity()) {
        this.hidden = true;
        document.getElementById('form-confirmation').hidden = false;
    }
});
