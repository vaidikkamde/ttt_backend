
[![LinkedIn][linkedin-shield]][linkedin-url]
<br />
<p align="center">
  <h3 align="center">Terribly Tiny Tales Round-1</h3>

  <p align="center">
    The Node.js implemented backend project repository
    <br />
    <br />
    <a href="https://ttt-backend-vaidik.herokuapp.com/api/getResult?rollNumber=5,6,9">Heroku Hosted Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Front-End Repository</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

The following Node.JS server takes roll numbers in a form of sting with the roll numbers sepreated using a "<strong>,</strong>" as a query parameter by the name of <strong>rollNumber</strong>. The code then converts the comma sepreated strings to an array of roll numbers. Then we use these roll numbers to make an array of links that contains the links for the external api with the roll numbers as the query parameter.
<br/>
Now we use axios.all function to get response from all the api calls and store them to the array result.

Now we map all the responses and return an array of objects with each object is of format
```js
{
  rollnumber: "5" //rollnumber for which we made the get request ,
  result: "Pass" //result Pass or Fail fetched from the api using res.data
}
```

Then we send this array of objects to the frontend using 
```js 
res.json(result)
```
</br>
For cases where the result for a roll number is undefined:

* If any of the response is found to be undefined the whole function will return undefined

* If the function returns undefined the get request from the front-end is answered with a status of 404.


### Built With

This project uses the following technologies:

* [Axios](https://www.npmjs.com/package/axios)
* [Express](https://www.npmjs.com/package/express)
* [Cors](https://www.npmjs.com/package/cors)
#### Developement Dependency
* [Nodemon](https://www.npmjs.com/package/nodemon)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

You will need the latest LTS version of [Node](https://nodejs.org/en/download/) and NPM
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/vaidikkamde/ttt_backend.git
   ```
2. Change Directory to ttt_backend
  ```sh
    cd ttt_backend
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run app.js 
* Using node
  ```sh
  npm start
  ```
* Using nodemon
  ```sh
  npm test
  ```



<!-- USAGE EXAMPLES -->
## Usage

To make a get request from frontend:
* Using axios
```js
async function getResult(rollNumbers){ // rollNumbers is the string with ',' sepreated values
    const response = await axios.get(`http://localhost:8080/api/getResult`,{
        params:{
            rollNumber:rollNumbers
        }
    })
    await console.log(response.data)
}
```

<!-- CONTACT -->
## Contact

Vaidik Kamde - vaidik16206138@gmail.com

Project Link: [https://github.com/vaidikkamde/ttt_backend.git](https://github.com/vaidikkamde/ttt_backend.git)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Best-README-Template by @othneildrew](https://github.com/othneildrew/Best-README-Template.git)

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/vaidik-kamde
[product-screenshot]: images/Screenshot_1.png
