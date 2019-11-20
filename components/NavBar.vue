<template>
  <div class="navBar">
    <nuxt-link to="/" class="brand">
      <img src="~/assets/images/logo.jpg" class="logo" />
    </nuxt-link>
    <nav>
      <nuxt-link to="/">
        List |
      </nuxt-link>
      <nuxt-link to="/products">
        All Products
      </nuxt-link>
    </nav>
  </div>
</template>
<style scoped>
.navBar {
  width: 1170px;
  margin: 0 auto;
}
.brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #333333;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
.nav a {
  display: inline-block;
}
.logo {
  width: 200px;
}
</style>
