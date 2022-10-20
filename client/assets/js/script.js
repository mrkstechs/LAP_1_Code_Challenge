const searchBtn = document.querySelector('#search-btn')
const luckyBtn = document.querySelector('#lucky-btn')


const userQuery = document.querySelector('#search-bar')

searchBtn.addEventListener('click', e => {
    e.preventDefault()
    let query = userQuery.value
    window.location.href = `/results?q=${query}`
})

luckyBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    let query = userQuery.value
    await fetch(`/api/search?q=${query}`)
            .then(res => data = res.json())
            .then(data => {
                let arr = data.items
                window.location.href = arr[Math.floor(Math.random() * arr.length)].link
                
            })
    //
})
