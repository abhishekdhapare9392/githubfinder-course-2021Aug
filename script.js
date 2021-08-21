let searchInput = document.querySelector('#searchUserInput')
let searchBtn = document.querySelector('#searchGitHubUser')
let userList = document.querySelector('#userList')

searchBtn.addEventListener('click', async function (e) {
  let username = searchInput.value

  let res = await fetch(
    `https://api.github.com/users/${username}?client_id={your-account-client-id}&client_secret={your-account-client-secret}`,
  )

  let data = await res.json()

  //   console.log(data)
  renderUser(data)
})

function renderUser(data) {
  const { avatar_url, name, location, bio, company } = data // Destructuring
  let card = `
<div class="card border-0" >
<img src='${avatar_url}'


<div class= "card-body"
<h3 class="card-title">${name}</h3>
<p class="card-title">${location}</p>
<p class="card-title">${bio}</p>
<p class="card-title">${company}</p>
</div>
</div>

`
  userList.innerHTML = card
}
