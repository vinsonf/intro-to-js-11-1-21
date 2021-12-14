

export function getRandomUser() {
    return fetch('https://randomuser.me/api/')
    .then( res => res.json())
    .then( data => data.results[0]);
}

export function getRandomLocation() {
    return getRandomUser()
    .then( user => user.location)
    .then( location => `${location.country}`);
}


export function getRandomName() {
    return getRandomUser()
    .then( user => `${user.name.first}, ${user.name.last}`);
}
