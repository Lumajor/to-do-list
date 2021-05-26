const modalController = (() => {
    //open the modal, listen for user input to close the modal
    //take in ID to decide which modal to use
    const openModal = (id) => {
        let modal = document.getElementById(id + 'Modal');
        let span = document.getElementById(id + 'Close');
        let submitButton = document.getElementById(id + 'Submit');
        let submitEditButton = document.getElementById('submitEditButton')

        modal.style.display = 'block';

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
        }

        if(submitButton) {
            submitButton.onclick = function() {
                modal.style.display = "none";
            }
        }

        if(submitEditButton) {
            submitEditButton.onclick = function() {
                modal.style.display = "none";
            }
        }
    }

    return { openModal }

})();

export { modalController }