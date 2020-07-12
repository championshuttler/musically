## Heroku
<a href="https://frondend-challenge-app.herokuapp.com/" target="_blank">https://frondend-challenge-app.herokuapp.com/</a>

## Instructions
The goal is to build a small app to search musical artists from this GraphQL API endpoint https://graphbrainz.herokuapp.com.
To achieve this I used several libraries
<ul>
    <li>apollo-boost</li>
    <li>graphql</li>
    <li>lodash</li>
    <li>react-apollo</li>
    <li>react-burger-menu</li>
    <li>react-redux</li>
    <li>react-toasts</li>
    <li>redux</li>
</ul>

I created a 
<ul>
    <li><b>Home page</b>: Here you can search the artists and click in any of them in order to see more details about the artists or the album. For this I used a form with the two functions onChange() and onSubmit() and i sent the search value to the query in order to get the results if exists. Then, I created a map with the results in order to print every each of them.
    </li>
    <li><b>Artist details page</b>: Here you can see the details of the artists, a small list of the releases and the most important you can add this artist to your favorites. For this I got the 'mbid' from the home page for the specific artist and I did a new query in order to get the artist details and the releases. Also, I used redux in order to add/remove the artist to/from my favorites sidebar and local storage in case we refresh the page to keep save the favorites.</li>
    <li><b>Album details page</b>: Here you can see the details of the Album. For this I got the 'mbid' from the home page for the specific artist and I did a new query in order to get the album details</li>
    <li><b>Sidebar</b>: In this page you can see all the favorites if exists. Also, you can see this sidebar in every page. In addition you can remove the favorite from every page and you can click on it in order to send you to this specific artist details.</li>
</ul>

<h1 align="center">
  musically
</h1>


## Get started

- type `npm i` to install all dependencies

## Development commands

Here are some commands you can run:

| Command | Description |
| --- | --- |
| npm start | Start the local server at [http://localhost:3000/](http://localhost:3000/). |
| npm test |  Run the runner in the interactive watch mode |
| npm run build | Builds the app for production to the `build` folder |