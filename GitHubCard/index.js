/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/shaunorpen')
  .then(({data}) => {
    document.querySelector('.cards').appendChild(createCard(data));
  })
  .catch(error => {
    console.log('URL:  ' + error.config.url + ' errored with message: ' + error.message + '.');
  });  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

function createCard (data) {
  const card = document.createElement('div');
  const profilePictureDiv = document.createElement('div');
  const userDetailsDiv = document.createElement('div');
  const profilePicture = document.createElement('img');
  const name = document.createElement('p');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profileUrl = document.createElement('p');
  const profileUrlLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  profilePicture.src = data.avatar_url;
  name.textContent = data.name;
  username.textContent = data.login;
  location.textContent = 'Location: ' + data.location;
  profileUrl.innerHTML = 'Profile: ';
  profileUrlLink.href = data.html_url;
  profileUrlLink.textContent = data.html_url;
  followers.textContent = 'Followers: ' + data.followers;
  following.textContent = 'Following: ' + data.following;
  bio.textContent = 'Bio: ' + data.bio;

  card.classList.add('card');
  name.classList.add('name');
  username.classList.add('username');
  userDetailsDiv.classList.add('card-info');

  card.appendChild(profilePictureDiv);
  profilePictureDiv.appendChild(profilePicture);
  card.appendChild(userDetailsDiv);
  userDetailsDiv.appendChild(name);
  userDetailsDiv.appendChild(username);
  userDetailsDiv.appendChild(location);
  userDetailsDiv.appendChild(profileUrl);
  profileUrl.appendChild(profileUrlLink);
  userDetailsDiv.appendChild(followers);
  userDetailsDiv.appendChild(following);
  userDetailsDiv.appendChild(bio);

  return card;
}

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'https://api.github.com/users/tetondan',
  'https://api.github.com/users/dustinmyers',
  'https://api.github.com/users/justsml',
  'https://api.github.com/users/luishrd',
  'https://api.github.com/users/bigknell',
];

followersArray.forEach(follower => {
  axios.get(follower)
  .then(({data}) => {
    document.querySelector('.cards').appendChild(createCard(data));
  })
  .catch(error => {
    console.log('URL:  ' + error.config.url + ' errored with message: ' + error.message + '.');
  });
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
