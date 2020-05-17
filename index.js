const main = document.getElementById("main");
const add_btn = document.getElementById("add");
const double_btn = document.getElementById("double");
const millionaires_btn = document.getElementById("millionaires");
const sort_btn = document.getElementById("sort");
const calc_btn = document.getElementById("calculate");

let people = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Get random user and give them money
async function getRandomUser()
{
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();

    const user = data.results[0];

    const new_user = {
        name: `${user.name.first} ${user.name.last}`,
        wealth: (Math.random() * 1000000).toFixed(2)

    }

    addPerson(new_user);
}

// Add to peaople array
function addPerson(object)
{
    people.push(object);

    updateDOM();
}

// Update DOM
function updateDOM(provided = people)
{
    // Clear main
    main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

    provided.forEach(person =>
    {
        const person_div = document.createElement("div");
        person_div.classList.add("person");
        person_div.innerHTML = `<strong>${person.name}</strong> ${person.wealth}`;

        main.appendChild(person_div);
    });
}