---
title: 'Tilt Effect in Button Using Tilt.js.'
date: 2021-08-29
# cover: './img/tilt-effect.png'
published: true
---

## Step 1 - Add HTML

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <a href="https://youtube.com/Prit">
      <div
        class="tilt tilt-logo"
        data-tilt
        data-tilt-glare="true"
        data-tilt-scale="1.1"
      >
        <a href="https://youtube.com/pritu">
          <span class="tilt-logo-inner"> Subscribe Now! </span>
        </a>
      </div>
    </a>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <script src="https://unpkg.com/tilt.js@1.1.21/dest/tilt.jquery.min.js"></script>
  </body>
</html>
```

## Step 2 - Add css

### Example

```css
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  box-sizing: inherit;
  font-family: 'cascadia Code';
}
.tilt {
  box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);
  transform-style: preserve-3d;
  margin: 220px auto;
}

.tilt-logo {
  border-radius: 10px;
  width: 500px;
  height: 300px;
  background-color: #7e56ff;
  background-image: linear-gradient(
    150deg,
    #5a00ff 0%,
    #ff1ff7 100%,
    #ff1ff7 100%
  );
}

.tilt-logo-inner {
  transform: translateZ(50px) translateY(-50%) translateX(-50%);
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  font-size: 1.9rem;
}
```

Then you are done.
