---
title: 'Simple Theme Toggle // Easy Using HTML, CSS, & JS  '
date: 2021-09-06
published: true
---

## Here is how to create simple theme switcher in your website using HTML, CSS & JS

### Step 1 - Adding HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Light & Dark Theme Toggler</title>
    <link rel="stylesheet" href="./styles/style.css" />
  </head>
  <body>
    <div id="container" class="container theme">
      <h1>Hello World!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque veniam
        delectus corporis. Quasi nemo natus doloribus sed ipsam eius cupiditate
        pariatur eaque nesciunt veniam error, sint adipisci iste voluptatibus
        quos cum alias qui! Hic adipisci sunt ab reprehenderit, eaque deleniti
        dolorum nobis dicta officia eius animi pariatur dignissimos suscipit
        architecto iusto molestias odio autem. Aliquam quasi reprehenderit
        officia voluptate mollitia. At ipsum quae placeat.
      </p>
      <button onclick="themeToggle()">Switch Theme</button>
    </div>
    <script src="./js/app.js"></script>
  </body>
</html>
```

### Step 2 - Adding CSS

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'poppins', sans-serif;
}

.theme {
  transition: all 300ms linear;
  background-color: rgb(22, 22, 22);
  color: rgb(214, 214, 214);
}

.container {
  font-size: 1.3rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
}

.container h1 {
  font-size: 3rem;
}

.container p {
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
}

.container button {
  font-size: 1.4rem;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  padding-left: 20px;
  border: none;
  background-color: #757ff8;
  color: white;
  border-radius: 3rem;
  cursor: pointer;
}
```

### Step 3 - Adding JS

```js
const container = document.getElementById('container')

function themeToggle() {
  container.classList.toggle('theme')
}
```

And then You Are that was easy wasn't it?
