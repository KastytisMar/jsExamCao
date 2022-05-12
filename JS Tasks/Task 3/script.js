/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.getElementById('btn').addEventListener('click', () => {
    fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('message').innerText = '';

        data.forEach((user) => {
            const login = document.createElement('h4');
            login.innerText = user.login;
            login.classList.add('user-login');
        
            const avatar = document.createElement('img');
            avatar.src = user.avatar_url;
            avatar.classList.add('user-avatar')

            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.append(login,avatar)

            document.getElementById('output').append(userCard);
        });
    });
});