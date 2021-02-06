class CryptoAPI {
    constructor() {
        this.api = 'aff2b4b675df4d8b82c18fdee2ef2682'
    }

    async queryApi(currency, cryptocurrency) {
        // creat url
        let url = `https://api.nomics.com/v1/currencies/ticker?key=${this.api}&ids=${cryptocurrency}&interval=1h,1d,7d,30d,365d&convert=${currency}`
        console.log(url);
        let result = await fetch(url)
        let response = await result.json()

        return {
            response
        }
    }
}