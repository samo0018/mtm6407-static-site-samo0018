<template>
  <div class="container">

    <header class="navbar">
      <span>
        <a href="/" class="" aria-current="page">
          <img class="logo" src="/images/logo.svg" alt="Anastasia Samoyloff">
          <span class="name">Anastasia Samoyloff</span>
        </a>
      </span>
      <div class="navbar-items-wrapper" style="max-width: 1155px;">
        <nav class="navbar-items">
          <router-link class="nav-item" to="/">Home</router-link>
          <router-link class="nav-item" to="/about">About</router-link>
          <router-link class="nav-item" to="/resume">Resume</router-link>
          <router-link class="nav-item" to="/guide">Portfolio</router-link>
          <router-link class="nav-item" to="/contact">Contact</router-link>
        </nav>
      </div>
      <h1>Resume</h1>
    </header>

    <main>
      <Resume />
    </main>

    <footer>
      <p>&copy; {{ currentYear }} Anastasia Samoyloff</p>
    </footer>
  </div>
</template>
    
<script>
    import Resume from "../components/Resume.vue"
    export default {
      components: {Resume},
      computed: {
        currentYear() {
          return new Date().getFullYear();
        },
      },
    }
</script>
    
<style scoped>

main {
  text-align: center;
  margin-top: 150px;
}

.name {
  color: rgb(24, 24, 24);
  font-size: 1.3rem;
}
.nav-item {
  margin-right: 20px;
}
.nav-item:hover {
  color: green;
  border-bottom: 2px solid green;
}
.container {
  margin-left: 20px;
  margin-right: 20px;
}

h1, footer{
  text-align: center;
  background-color: white;
}

footer {
  margin-top: 50px;
}
</style>