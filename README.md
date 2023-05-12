
un composant App
- chargé d'un fetch sur l'url -> "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5"
- affichera les données du fetch

un composant Form
- permettra la mise à jour de la state via le reducer
    - input type text pour l'alias
    - input type number pour l'age
    - input type radio ou checkbox pour l'admin

un composant User
- affichera les informations du reducer
- permettra la réinitialisation de la state reducer

La state initiale sera
```js
const initialState = { alias: "", age: null, isAdmin: false };
```