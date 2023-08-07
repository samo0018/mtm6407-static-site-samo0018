<template>
      <div class="gallery">
            <div class="image-container">
                  <img src="../public/images/art1.png" alt="two women walking">
                  <div class="image-info">
                        <h3>Perfume Girls</h3>
                        <p>A personal project from a character design series, where I personify perfume bottles.</p>
                  </div>
            </div>
            <div class="image-container">
                  <img src="../public/images/art2.png" alt="red horse bucking">
                  <div class="image-info">
                        <h3>Bronco</h3>
                        <p>Warmup freehand sketch of a bucking stallion.</p>
                  </div>
            </div>
            <div class="image-container">
                  <img src="../public/images/art3.png" alt="man in robe squatting">
                  <div class="image-info">
                        <h3>The Robed Man</h3>
                        <p>A commissioned piece for an online entertainment personality.</p>
                  </div>
            </div>
            <div class="image-container">
                  <img src="../public/images/art4.png" alt="caribou walking in front of lake">
                  <div class="image-info">
                        <h3>Blue Caribou</h3>
                        <p>Vectorized Caribou using Adobe Illustrator.</p>
                  </div>
            </div>
            <div class="image-container">
                  <img src="../public/images/art5.png" alt="woodland creature characters">
                  <div class="image-info">
                        <h3>Woodland Friends</h3>
                        <p>Character design warmup exercise (matching different articles of clothing and drinks with woodland creatures and giving them personalities).</p>
                  </div>
            </div>
            <div class="image-container">
                  <img src="../public/images/art6.png" alt="kudu">
                  <div class="image-info">
                        <h3>Blue Kudu</h3>
                        <p>Sketch of a kudu, from an animal study series.</p>
                  </div>
            </div>

          </div>
</template>

<style scoped>

main {
      text-align: center;
}
.return-button {
      display: inline-block;
      padding: 8px 12px;
      background-color: #ffffff;
      color: #228c2b;
      text-decoration: none;
      border: 2px solid #228c2b;
      border-radius: 5px;
}

.return-button:hover{
      background-color: #228c2b;
      color: white;
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