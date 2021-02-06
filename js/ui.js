class UI {

    printMessage(message, htmlClass) {
        // Create div and put message and htmlClass in it.
        let div = document.createElement('div')
        div.classList = htmlClass
        div.appendChild(document.createTextNode(message))

        // Put div before the form
        form.before(div)

        this.removeMessage()
    }

    removeMessage() {
        // access alert and delete it after 3 seconds
        setTimeout(() => {
            let alert = document.querySelector('.alert')
            if (alert) {
                alert.remove()
            }
        }, 3000);
    }

    queryApi(response, currency) {
        let value = document.querySelector('#result div')
        if (value) {
            value.remove()
        }


        let resultApi = response.response[0]

        // Show the spinner to the user
        this.showSpiner()

        if (currency == 'USD') {
            currency = 'Dollar'
        } else if (currency == 'EUR') {
            currency = 'Euro'
        } else if (currency == 'CNY') {
            currency = 'Yuan'
        } else {
            currency = 'Yen'
        }

        let htmlTemplate = `
        <div class='show-user p-4'>
            <img class='mb-3' src='${resultApi.logo_url}'  width="80px">
            <h5>Name: ${resultApi.name}</h5>
            <h5>Price: ${resultApi.price} ${currency}</h5>
            <h5>Price change in 1hour: ${resultApi['1h'].price_change}</h5>
            <h5>Price change in 1day: ${resultApi['1d'].price_change}</h5>
            <h5>Price change in 7day: ${resultApi['7d'].price_change}</h5>
            <h5>Price change in 30day: ${resultApi['30d'].price_change}</h5>
            <h5>Price change in 365day: ${resultApi['365d'].price_change}</h5>
        </div>
    `

        this.showInvoice(htmlTemplate)
        this.removeSpiner()
    }

    showSpiner() {
        // Create img and put src in it.
        let img = document.createElement('img')
        img.src = 'images/001.gif'

        document.querySelector('#spiner').appendChild(img)

    }

    showInvoice(htmlTemplate) {

        // access img and delete it after 3 seconds
        setTimeout(() => {
            let spiner = document.querySelector('#spiner img')
            if (spiner) {
                spiner.remove()

                // add htmlTemplate in result
                document.querySelector('#result').innerHTML = htmlTemplate

            }
        }, 3000);


    }
}