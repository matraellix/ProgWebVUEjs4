<template>
  <div class = "SuperHeroApp">
    
    <!--<headerComponent />
    <galleryComponent />
    <footerComponent />-->
    <router-view name="header" class="header"/>
    <router-view class="gallery"/>
    <router-view name="footer" class="footer"/>
  </div>
</template>

<script>

/*
import headerComponent from './components/headerComponent.vue'
import galleryComponent from './components/galleryComponent.vue'
import footerComponent from './components/footerComponent.vue'
*/

export default {
name: 'SuperHeroApp',
/*
components: {
  headerComponent,
  galleryComponent,
  footerComponent,
}
*/
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200&family=Nunito:wght@300&display=swap');

* {
  margin: 0;
  padding: 0;
  background-color: rgb(30, 30, 32);
}

#SuperHeroApp {
  font-family: 'Nunito thin';
  overflow-x: hidden;
  color:  #fafeff;
  
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
 
  
}
.header, footer{
  background-color : rgb(46, 46, 49);
  filter: drop-shadow(8px 0px 10px rgba(0, 0, 0, 0.4));
}
.header *, footer *{
  background-color : rgb(46, 46, 49);
}

.gallery{
  max-width: 95%;
  margin: 0 auto;
  padding: 2em;
  align-items: center;
}

h1 {
  text-align: center;
  color: #F5D235;
  font-family: 'Nunito regular';
  
}
::selection {
  color: rgb(24,20,20) ;
  background-color:  #F5D235;
}

input{
  border: none;
  padding: 0.8em 1.2em;
  color: #F5D235;

}
input[value]{
  color : rgba(203, 144, 77,0.3);

}


@media (min-width: 768px) {
  .SuperHeroApp {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
