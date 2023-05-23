const btn = document.querySelector('button')
const inp = document.querySelector('input')
const render = document.querySelector(".render")
const renderOneUser =document.querySelector(`.renderOneUser`)
const getUsers = async () => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await response.json()
    console.log(data);
    data.map((el) => {
        render.innerHTML += `
    <div class='user'> <h1>${el.id}</h1>
    <h1>${el.name}</h1>

    <h1>${el.email}</h1>
    <h1>${el.phone}</h1>
</div>
   
    `
    })
}



getUsers()


btn.addEventListener('click',async()=>{

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${inp.value}`)
    const el = await response.json()
    renderOneUser.innerHTML = `
    <div class='user'> <h1>${el.id}</h1>
    <h1>${el.name}</h1>

    <h1>${el.email}</h1>
    <h1>${el.phone}</h1>
</div>
   `
})

