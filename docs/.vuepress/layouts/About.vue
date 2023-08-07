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
          <h1> About Me</h1>
        </header>
    
        <main>
            <div class="contact-container">
                  <About />
            </div>
        </main>
    
        <footer>
          <p>&copy; {{ currentYear }} Anastasia Samoyloff</p>
        </footer>
      </div>
    </template>
        
    <script>
        import About from "../components/About.vue"
        export default {
          components: {About},
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
            margin-top: 100px;
            display: flex;
            justify-content: center;
            align-items: center; 
      }
      .contact-container {
            padding: 10px;
            max-width: 1200px;
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
    .gallery {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      max-width: 1000px;
      margin: 20px auto;
    }
    .image-container {
      margin: 20px;
    }
    .gallery img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
    
    img:active {
      transform: scale(1.6);
    }
    
    h1, footer{
      text-align: center;
    }
    
    footer {
      margin-top: 50px;
    }
    </style>