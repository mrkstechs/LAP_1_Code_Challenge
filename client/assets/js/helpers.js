let sitesArray = []

class Site {
    constructor(data) {
        this.title = data.title,
        this.url = data.link,
        this.img = data.pagemap.cse_thumbnail.src
        this.desc = data.snippet
    }

    static getAllResults () {
        return sitesArray.map(obj => new Site(obj))
    }

    static randomResult () {
        const allSites = sitesArray.map(obj => new Site(obj))
        return allSites[Math.floor(Math.random() * allSites.length)]

    }
}

let main = document.querySelector('main')

for (let i = 0; i < sitesArray.length; i++){
    let div = document.createElement('div')
    div.className = 'site'

    let urlP = document.createElement('p')
    urlP.className = 'url'
    let urlA = document.createElement('a')
    urlA.textContent = sitesArray[i].url
    urlP.append(urlA)

    let title = document.createElement('h3')
    let titleA = document.createElement('a')
    titleA.textContent = sitesArray[i].url
    title.append(titleA)

    let imgA = document.createElement('p')
    imgA.setAttribute("href", sitesArray[i].url);
    let img = document.createElement('img')
    imgA.setAttribute("src", sitesArray[i].img);
    imgA.append(img)

    let descP = document.createElement('p')
    descP.className = 'desc'
    descP.textContent = sitesArray[i].desc

    div.append(urlP)
    div.append(title)
    div.appemd(imgA)
    div.append(descP)
    main.append(div)
}

