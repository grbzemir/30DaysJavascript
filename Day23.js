const button = document.getElementById('btn')


button.addEventListener('mouseenter', function (e) {

    console.log(e);

})

const img = document.querySelector('img')
img.style.opacity = 0;
img.addEventListener('load', function () {
    console.log('görsel yüklendi');
    img.style.opactiy = 1;
})

img.addEventListener('error', function (e) {
    console.log('resim yüklenirken bir sorun olustu', e);

    //    e.target.src = ' ./no-image.png'

})




// function clickHandle() {
//     console.log(e.getAttribute('id'))
// }


// const button = document.getElementById('btn')

// button.onclick = e => {
//     console.log(e)
// }


const input = document.getElementById('name')

input.addEventListener('input', e => {
    console.log('Birseyler yaziliyor...', e.target.value)
})


const colorInput = document.getElementById('color-picker')

colorInput.addEventListener('input', e => {

    document.body.style.backgroundColor = e.target.value
    console.log([...e, target.selectedOptions].map(el => el.value))
})


const saveButton = document.getElementById('save-btn')

saveButton.addEventListener('click', e => {
    console.log(input.value,
        colorInput.value,
        saveRulesCheckBox.checked,
        form.elements.stack.value
    )
})

const genderSelect = document.getElementById('gender')

genderSelect.addEventListener('change', e => {

    console.log(e.target.selected)
}
)

const saveRulesCheckBox = document.getElementById('save-rules')

console.log(document.querySelector('input[name=stack]').checked

)

const form = document.getElementById('form')

