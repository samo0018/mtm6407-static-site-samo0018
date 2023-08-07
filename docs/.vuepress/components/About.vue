<template>
      <main>
            <div class="items">
                  <img src="../public/images/me.png" alt="woman looking out at a view of hong kong">
                  <section class="profile">
                  <div class="name-image">
                        <h2>Hi, I'm Anastasia</h2>
                  </div>
                  <div class="about-text">
                        <p>
                              I am a Tatar-Canadian UX designer with a multicultural upbringing, an academic background in psychology, and a lifelong passion for digital illustration. After growing up and studying around the world (Tel-Aviv, Harare, Amman, Moscow & Beijing), I have become drawn to studying the similarities between people and what motivates them. 
                        </p>
                        <br>
                        <p>
                              My goal as a UX designer is to uncover my clients goals and frustrations, whether they can verbalize them or not, then use my interactive media skillset to achieve their vision, with designs that are functional, practical and always put the user first. 
                        </p>
                  </div>
                  </section>
                  <div class="skills-exp">
                        <section class="skills">
                              <h2>Skills</h2>
                              <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>ReactJS</li>
                                    <li>VueJS</li>
                                    <li>Design</li>
                              </ul>
                        </section>
                        <section class="experience">
                              <h2>Hobbies</h2>
                              <ul>
                              <li>Gaming</li>
                              <li>Cycling</li>
                              <li>Working out</li>
                              <li>Digital Art</li>
                              </ul>
                        </section>
                  </div>
            </div>
      </main>
</template>

<script>
export default{ }
</script>

<style scoped>

.items {
      display: flex;
      background-color: rgb(248, 248, 248);
}

.profile {
    text-align: left;
    margin-left: 70px;
    margin-right: 140px;
}

.profile img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
}

.skills {
      text-align: left;
      padding-right: 70px;
      margin-right: 70px;
      margin-bottom: 50px;
}
.experience {
      text-align: left;
      padding-right: 70px;
      margin-right: 70px;
}

.skills ul, .experience ul {
    list-style: none;
    padding: 0;
}

</style>