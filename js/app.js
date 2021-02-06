// classes
const ui = new UI()
const cryptoApi = new CryptoAPI()






// variabls
// access the form
const form = document.querySelector('#form')





// eventListeners
eventListeners()

function eventListeners() {
    form.addEventListener('submit', getValuation)
}





// functions
function getValuation(e) {
    e.preventDefault()

    // Access to the values of currency and cryptocurrency
    const currency = document.querySelector('#currency').value
    const cryptocurrency = document.querySelector('#cryptocurrency').value

    // if the values of currency and cryptocurrency are empty, show an error
    if (currency == '' || cryptocurrency == '') {
        ui.printMessage('All the fields need to Complete', 'alert alert-danger text-center')
    } else {
        // otherwise send the values
        cryptoApi.queryApi(currency, cryptocurrency)
            .then((response) => ui.queryApi(response, currency))
    }
}