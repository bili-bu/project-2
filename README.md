## ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive

# The Harry Potter Encyclopedia

## Overview 

The second project I worked on during my time completing the Software Engineering Immersive course at General Assembly came in the form of a mini hackathon. After having completed our [first project](https://github.com/bili-bu/project-1) on our own in vanilla JavaScript, our teaching staff paired us into teams of two to try our hand at pair programming. Since we had just completed our module on React.js and were tasked to build a website with it in 48 hours. 

Given our tight deadline, my project partner and I were keen on finding a suitable API to use as soon as possible. We discussed our common interests and decided that it would be fun to make use of a Harry Potter API to create an encyclopedia filled with the different houses, characters and spells which were part of the universe. We wanted visitors to our website to be able to:

- Be sorted into a Hogwarts house 

- Explore characters from the franchise 

- Discover the Hogwarts houses in depth

- Read up on spells which are cast

Check out the [result](https://bili-bu.github.io/project-2/)!

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

During our time preparing for this project we were introduced to a host of different APIs and realised that some of them were of better quality than others. Given that the API would play a very central role in our project, my team mate and I decided to find one which was of good quality with a lot of information we could mine to make an interesting application which would keep any potential user engaged. 


We came across a Harry Potter API which was straight forward in accessing the information. To use the API, we were  required a unique key to access data, which was placed into each of our requests made to the API. Given that we had gained familiarity with the program **Insomnia**, we used it extensively to understand how the data in the API was structured and how best to utilize it. Below an example of how we explored the data in the API through Insomnia:

<img src='https://i.imgur.com/x2ekDKm.png' width='700'>

Before we started coding, we both decided to that it was important that we should agree to the structure of our final product. We started out by drawing a diagram with the different components we would need to build our MVP. Below a copy of that drawing:

<div style='text-align:center'>
<img src='https://i.imgur.com/gbZ2fdy.png' height='500'>
</div>

We came to the conclusion that we would need seven components which included a NavBar. This meant that we would have six routes which we had to include in our application **Router**. Below a list of the different routes:

- The Homepage `/`

- The overview of Hogwarts houses `/houses`

- The individual Hogwarts houses pages designated through their IDs `/houses/:id`

- The full list of characters `/characters`

- The individual character pages designated through their IDs `/characters/:id`

- The full list of spells `/spells`


### Homepage 

The API we chose to use for our project came with an interesting feature which, when called, would give us a random Hogwarts house name. We decided that this could be used to create a fun and interactive first step into the world of Harry Potter: through clicking on the picture of the famous sorting hat, the user would be sorted into a random house at Hogwarts.

We decided that this feature would best be used on our landing page (`Home.js`). When the user clicks on the sorting hat the `PickHouse`function is run:

```js

  PickHouse() {
    axios.get('https://www.potterapi.com/v1/sortingHat')
      .then((res) => {
        this.setState({ data: res.data })
        console.log(this.state.data)
      })
  }
  ```

The functon executes a **get** request to the API to receives a house name picked at random. We then store the response in the state variable `data`, which is displayed on the page under the sorting hat. We also wanted to have a link to the house page of the randomly picked house so that the user could go explore his new house as a next step in the experience. To achieve this, we decided to use `ternary operators` to choose the house page depending on the name that was stored in the state variable `data`. If the varibale is empty (before the user clicks on the sorting hat) then no text or link is displayed.

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