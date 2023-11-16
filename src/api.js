const Urls = "https://api.dev.mooon.by/events"
const Method = 'GET'

function Movies() {
    return fetch(Urls, {method: Method}).then(response => response.json());
}

export default Movies;
