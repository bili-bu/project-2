## ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive

# The Harry Potter Encyclopedia

## Overview 

The second project I worked on during my time completing the Software Engineering Immersive course at General Assembly came in the form of a mini hackathon. After having completed our [first project](https://github.com/bili-bu/project-1) on our own in vanilla JavaScript, our teaching staff paired us into teams of two to try our hand at pair programming. Since we had just completed our module on React.js and were tasked to build a website with it in 48 hours. 

Given our tight deadline, my project partner and I were keen on finding a suitable API to use as soon as possible. We discussed our common interests and decided that it would be fun to make use of a Harry Potter API to create an encyclopedia filled with the different houses, characters and spells which were part of the universe. We wanted visitors to our website to be able to:

- Be sorted into a Hogwarts house 

- Explore characters from the franchise 

- Discover the Hogwarts houses in depth

- Read up on spells which are cast

Check out the [result](https://bili-bu.github.io/project-2/)

## Brief

- **Consume a public API** – this could be anything but must make sense for your project.
- **Have several components** - At least one classical and one functional.
- **The app should include a router** - with several components.
- **Include wireframes** - that you designed before building the app.
- Have **semantically clean HTML** 
- **Be deployed online** and accessible to the public.

## Technologies Used

- React.js
- JavaScript (ES6)
- HTML
- JSX
- CSS
- Axios
- Bulma 
- Git & GitHub
- The Harry Potter API 
- Google Fonts 
- Insomnia

## The Approach 

- As a team we decided we wanted to use an API we were both happy working and creating something with. It was key to make sure we understood why a user would visit the page and that we could utilise the information from the API as much as possible. 

- We considered using a number of API’s however decided together the Harry Potter API was straight forward in accessing information. The API required a unique key to access data, which was placed into each of our requests. 

- To explore the API’s we considered, we used **Insomnia** to do so. An example is shown below.

<img src='https://i.imgur.com/x2ekDKm.png' width='700'>

- Before coding, we both decided to outline our React webpage on how each page would be laid out: 

<div style='text-align:center'>
<img src='https://i.imgur.com/gbZ2fdy.png' height='500'>
</div>

- After having completed our layout, we could decipher how many components our webpage would have and the routes associated with them: 

    - A Homepage with the route of `/`

    - An overview of the  Hogwarts houses at `/houses`

    - Individual Hogwarts house pages, which would be found by their individual IDs `/houses/:id`

    - A list of all the characters in the franchise at `/characters`

    - Character detail pages which would also use their unique IDs at `/characters/:id`

    - Full list of spells at `/spells`


### Homepage 

- The homepage implemented one endpoint from the API, a random return of a Hogwarts house. My partner and I decided this would be a fun interactive element for users when they visit the page. We placed a sorting hat on our landing page which when clicked runs the `PickHouse` function. 

```js

  PickHouse() {
    axios.get('https://www.potterapi.com/v1/sortingHat')
      .then((res) => {
        this.setState({ data: res.data })
        console.log(this.state.data)
      })
  }

  ```

  - Once called, the function will put in a GET request to the API to return a random house. The response is then stored within a state variable known as ‘data’ and displayed to the user. 

  - Once this was implemented, we also decided to generate a link to the house that was randomly chosen. This required a number of `ternary operators`  to be put in place to change the link depending on the house that was chosen and to also display nothing before the `PickHouse` function was run.

```js 

          {this.state.data ?  
          <div className='overlay'>
            <Link to={this.state.data === 'Ravenclaw' ? '/houses/5a05da69d45bd0a11bd5e06f' 
              : this.state.data === 'Gryffindor' ? 'houses/5a05e2b252f721a3cf2ea33f' 
                : this.state.data === 'Hufflepuff' ? 'houses/5a05dc58d45bd0a11bd5e070' 
                  : 'houses/5a05dc8cd45bd0a11bd5e071'}>

            Click here to explore your house! </Link> 
          </div>
          :
          null
        }
```

### List of Houses, Characters and Spells

- The API provided a list of each of the Hogwarts houses and the characters in the franchise with rich information which we could use to generate pages. 

- For pages which acted as a list of all the houses and characters, links were added to each individual placeholder linking to a page with further information. 

`<Link to={`/characters/${character._id}`}>`


#### Houses

- The `/houses` endpoint in our web page lists the Hogwarts houses which prompts a GET request as the page loads. The response from the API provides large detailed information, which is used in another component. For this endpoint, we quickly noticed the response was an array and chose to store this into a piece of state. 

- We were then able to access the information by using the `map` method on `this.state.data`. We were able to iterate through every array stored into state and display the House name and the values. 

- This `map` method also had to be repeated to display each of the house values as this was also in an array. 

#### Characters

- A similiar approach was also taken to display the `/characters` endpoint. 

<div style='text-align:center'>
<img src='https://i.imgur.com/aVfITlp.png' width='1000'>
</div>

- In the console shown above, the first line logged is the entire response from the API endpoint. Initially when we explored this through Insomnia, we discovered the only data we would need is stored within `data`. 

    - In storing state once the request is made, we use: 

```js

       this.setState({
          data: res.data
        })
```

- Doing so, our `data state` contains every character. Now having access to this exceptionally large array, the `map` method was used to generate a button per character with their name and a link. 


#### Spells

- The GET request to retrive spells in the franchise provided a large set of spells, however with very little on each individual spell. 

- For this reason, we chose to display all the information on one single page: 

<div style='text-align:center'>
<img src='https://i.imgur.com/5ZmoU4R.png' width='1000'>
</div>

### Detail Pages

#### Houses 

- These pages, once clicked on, provide more detailed information on each Hogwarts house. Using the same API endpoint as the list view of the houses, we chose to display all the information from the response on these pages. 

- To access the correct house we were able to use `props.match.params.id`. Due to this page being accessed through the `/houses` endpoint, the id of each house was stored which we are then able to use as a `template literal` in our GET requests and store each house into state, making this component reusable for every house page.  

```js
    const id = this.props.match.params.id
    axios.get(`https://www.potterapi.com/v1/houses/${id}?key=$2a$10$C5ErCiBe9RX1.TIYBfqSluLQBWeV5zSdyTNoA09OvmHlS1sNdyaXC`)
```

- Displaying the characters associated with each individual house required the `map` method. The characters were within the array itself as another array. This was executed using the following code: 

```js
                {house.members.map(member => {
                  return (
                    <div className='member' key={member._id}>
                      <Link to={`/characters/${member._id}`}>{member.name}</Link>
                    </div>
                  )
                })}
```

- Each member was also linked up to their individual pages if users wanted to learn more about them. 


#### Characters

- The characters also used a similiar approach as seen on the houses. We used props to access the id and used this is in our request. 

- One differing factor was displaying if characters were either part of Dumbledore's Army, the Ministry of Magic, a Death Eater or part of The Order. The API response would either provide a boolean on every one of these fields.

- To display these, we used turnary operators on each of the characters and if the boolean was true to display and if not, to display nothing: 

```js

        { ministryOfMagic ? <p> Works at the Ministry of Magic</p> : null }
        { orderOfThePhoenix ? <p> Part of the Order Of The Phoenix</p> : null }
        { dumbledoresArmy ? <p> Part of Dumbledore's Army</p> : null }
        { deathEater ? <p> Hails Voldermort</p> : null }
```

### Screenshots
<div style='text-align:center'>
<img src='https://i.imgur.com/EqWWQii.png'> 
<img src='https://i.imgur.com/JKsfw11.png'>
<img src='https://i.imgur.com/kduM57S.png'>
<img src='https://i.imgur.com/laorcaf.png'>
<img src='https://i.imgur.com/YapkTWv.png'>
</div>

## Potential Future Features & Bugs

- Filtering through the list of Characters and Spells by name

- Changing the single character pages to be a modal rather than a seperate page

- Impactful styling. At the moment the page is very dark and quite empty

- Implement images. 

- Adding in another interactive element where users can pick a spell and 'battle' with Voldermort. 

- There is a problem with GitHub pages where React Router doesn't work. While you can access all the pages through the homepage, typing in an absolute path will not load the page. 


## Lessons Learnt

- When choosing an API, use a tool such as Insomnia. This way you know what data you will get back when making these requests and pre-planning can be done beforehand to know what components and routes will be needed. You can quickly know what information will be useful to your own page and how the user may also use it. 

- At the point, I was still very uncomfortable using array methods. However using this API forced me to look into them and be able to use them to display information correctly.

- Deployment proved to be quite difficult. In development, we originally sourced our images locally, however this needed to change. We ended up having to host our images on Imgur and pull these into our project for the project to be able to bundle correctly. 