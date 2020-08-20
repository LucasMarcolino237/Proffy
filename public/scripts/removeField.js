document.querySelector("#remove-time").addEventListener('click', removeField)

function removeField() {
    const fieldContainer = document.querySelector('.schedule-item')

    fieldContainer.parentNode.removeChild(fieldContainer)
}