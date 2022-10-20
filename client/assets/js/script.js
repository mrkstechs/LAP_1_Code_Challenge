const searchBtn = document.querySelector('#search-btn')
const luckyBtn = document.querySelector('#lucky-btn')


const userQuery = document.querySelector('#search-bar')

searchBtn.addEventListener('click', e => {
    e.preventDefault()
    let query = userQuery.value
    window.location.href = `/results?q=${query}`
})

luckyBtn.addEventListener('click', e => {
    e.preventDefault()
    let query = userQuery.value
    window.location.href = `/results?q=${query}`
})
