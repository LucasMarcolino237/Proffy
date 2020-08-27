document.querySelector("#add-time").addEventListener('click', cloneField)
document.querySelector("#add-time").addEventListener('click', getLastSchedule)

lastSchedule().querySelector('select').addEventListener('change', selectValue)

function cloneField() {

    if (lastSchedule().querySelector('select').value !== '') {

        let newFieldContainer = lastSchedule().cloneNode(true)
        const fields = newFieldContainer.querySelectorAll('input')

        fields.forEach(function(field) {

            if (field.value === '') {
                return newFieldContainer = ''
            }
            field.value = ''
            
        });

        document.querySelector('#schedule-items').appendChild(newFieldContainer)
        
    }

    lastSchedule().querySelector('select').value = ''
}

function lastSchedule() {

    const fieldContainers = document.querySelectorAll('.schedule-item')
    const last = fieldContainers[(fieldContainers.length) - 1]

    return last
}

function selectValue(setValue) {

    console.log(setValue.target.value)
    lastSchedule().querySelector('select').value = setValue.target.value

    lastSchedule().querySelector('select').removeEventListener('change', selectValue)

}

function getLastSchedule() {

    lastSchedule().querySelector('select').addEventListener('change', selectValue)
}

