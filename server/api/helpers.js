const dotenv = require('dotenv').config({debug: false})
const axios = require('axios')
const apiKey = process.env.API_KEY
const cx = process.env.CX

const getData = async (query) => {
    let data 
    await axios(`https://customsearch.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`)
    .then(res => {
        data = {
            searchInformation: res.data.searchInformation,
            items: res.data.items
        }
    })

    return data
}

module.exports = {getData}