document.querySelector("#remove-time").addEventListener('click', removeField)

function removeField() {
    var fieldContainers = document.getElementById('schedule-items').childNodes

    document.getElementById('schedule-items').removeChild(fieldContainers[1])
}