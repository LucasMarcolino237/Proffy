document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField() {

    let last = setLast()
    const selectElement = last.querySelector('select')

    let newFieldContainer = last.cloneNode(true)
    const fields = newFieldContainer.querySelectorAll('input')

    let validiValue = ''
    const selectValue = () => {

        console.log(selectValue.target.value)
        validiValue = selectValue.target.value
    }
    
    selectElement.addEventListener('change', selectValue)

    if (validiValue) {

        fields.forEach(function(field) {

            if (field.value === '') {
                return newFieldContainer = ''
            }
            field.value = ''
        });

        document.querySelector('#schedule-items').appendChild(newFieldContainer)
        
    }

    last = setLast()
}

function setLast() {

    const fieldContainers = document.querySelectorAll('.schedule-item')
    const last = fieldContainers[(fieldContainers.length) - 1]

    return last
}

