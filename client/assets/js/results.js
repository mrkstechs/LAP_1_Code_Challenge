const resultsInfo = document.querySelector('#results')
const URL = window.location.href
const indexOf = URL.indexOf('q')
const query = URL.substring(indexOf + 2)

let searchTime, resAmount, sitesArray

const userQuery = document.querySelector('#search-bar')
const searchIcon = document.querySelector('#input-wrapper a')
searchIcon.addEventListener('click', e => {
    e.preventDefault()
    let query = userQuery.value
    window.location.href = `/results?q=${query}`
})


const displayResultsInfo= async (q) => {
    await fetch(`/api/search?q=${q}`)
            .then(res => data = res.json())
            .then(data => {
                searchTime = data.searchInformation.searchTime
                resAmount = data.searchInformation.totalResults
                sitesArray = data.items
                return sitesArray
            })
            .catch(err => console.log(`an error occured`, err))

    console.log(sitesArray.length)
    resultsInfo.textContent = `About ${resAmount} results (${searchTime} seconds)`
    let main = document.querySelector('main')

    for (let i = 0; i < sitesArray.length; i++){
        
        let div = document.createElement('div')
        div.className = 'site'

        let urlP = document.createElement('p')
        urlP.className = 'url'
        let urlA = document.createElement('a')
        urlA.textContent = sitesArray[i].link
        urlP.append(urlA)
        
        let title = document.createElement('h3')
        let titleA = document.createElement('a')
        titleA.setAttribute("href", sitesArray[i].link);
        titleA.textContent = sitesArray[i].title
        title.append(titleA)

        let imgA = document.createElement('p')
        imgA.setAttribute("href", sitesArray[i].link);
        let img = document.createElement('img')
        imgA.setAttribute("src", sitesArray[i].img);
        imgA.append(img)

        let descP = document.createElement('p')
        descP.className = 'desc'
        descP.textContent = sitesArray[i].snippet
  
        div.append(urlP)
        div.append(title)
        div.append(descP)
        main.append(div)
    }
}

displayResultsInfo(query)
