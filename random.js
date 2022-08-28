const loadUsers = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => displayUser(data.results))
}

const displayUser = users => {
    const usersContianer = document.getElementById('users-lover')
    for(const user of users){
        console.log(user)
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
            <h3>User Name ${user.name.first}</h3>
            <p>Email ${user.email}</p>
            <p>User Location ${user.location.country}</p>
        `;

        usersContianer.appendChild(userDiv)
    }
}

loadUsers()