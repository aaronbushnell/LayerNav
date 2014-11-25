# LayerNav
A small, jQuery-powered navigation menu for mobile and up

## Install
```sh
npm install layernav # or
bower install layernav
```

## Usage

### 1. Include CSS
```html
<link rel="stylesheet" href="/layernav.css">
```

### 2. Create navigation menu (use any class you'd like)
```html
<nav class="js-main-nav">
  <ul>
    <li><a href="#">Lorem ipsum dolor</a></li>
    <li><a href="#">Lorem ipsum dolor</a>
      <ul>
        <li><a href="#">Ipsum dolor sit</a></li>
        <li><a href="#">Ipsum dolor sit</a>
          <ul>
            <li><a href="#">Ipsum dolor sit</a></li>
            <li><a href="#">Ipsum dolor sit</a></li>
            <li><a href="#">Ipsum dolor sit</a></li>
            <li><a href="#">Ipsum dolor sit</a></li>
            <li><a href="#">Ipsum dolor sit</a></li>
          </ul>
        </li>
        <li><a href="#">Ipsum dolor sit</a></li>
        <li><a href="#">Ipsum dolor sit</a></li>
        <li><a href="#">Ipsum dolor sit</a></li>
      </ul>
    </li>
    <li><a href="#">Lorem ipsum dolor</a></li>
    <li><a href="#">Lorem ipsum dolor</a></li>
    <li><a href="#">Lorem ipsum dolor</a></li>
  </ul>
</nav>
```

### 3. Include scripts
```html
<script src="/path/to/jquery.js"></script>
<script src="/layernav.js"></script>
<script>
  $('.js-main-nav').layerNav();
</script>
```

## Notes
- If using `<nav>` and need IE 8 support, make sure you use [an HTML5 shiv](https://github.com/aFarkas/html5shiv)

## Optional configurations:
```js
$('.js-main-nav').layerNav({
  lgWidth: 500,                         // Size to switch to desktop-mode
  toggleButton: '.js-tiny-nav-toggle',  // Set to a custom element if you'd like to position the mobile toggle button
  toggleButtonText: 'Menu',             // Text of the toggle button
  expandIcons: false,                   // If false, any parent link will open menu on click, if true every parent link has an expand icon to view items below
  expandIconsEl: 'span'                 // Set the expand icon element to a <span>, <div>, or something else
});
```
