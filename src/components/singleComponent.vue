<template>
  <section class="single">
    <h2>{{ name }}</h2>
    <div class="allWithoutTitle">
      <div class="cardImage" v-if="imageUrl !== ''">
        <img :src="imageUrl" :alt="name" />
      </div>
      
      <section class="superHeroLife">
        <div class="appearance">
          <h3>Appearance</h3>
          <p  v-if="appearance">
              Gender: {{ appearance.gender }} <br>
              Race : {{ appearance.race }} <br>
              Height : {{ appearance.height }} <br>
              eye color : {{ appearance.eyeColor }} <br>
              hair color : {{ appearance.hairColor }}
          </p>
        </div>
        <div class="biography">
          <h3>Biography</h3>
          <p v-if="biography">
              Full Name: {{ biography.fullName }} <br>
              Alter Egos: {{ biography.alterEgos }} <br>
              Aliases: {{ biography.aliases }} <br>
              Place Of Birth: {{ biography.placeOfBirth }} <br>
              First Appearance: {{ biography.firstAppearance }} <br>
              Publisher: {{ biography.publisher }} <br>
              Alignment: {{ biography.alignment }} <br>
          </p>
        </div>
        <div class="work">
          <h3>Work</h3>
          <p v-if="work">
              Occupation: {{ work.occupation }} <br>
              Base: {{ work.base }} <br>
          </p>
        </div>
          
      </section>
    </div>
    <aside class="powerstats" v-if="powerstats">
        <p class="powerstatsInfo">
          Strength: {{ powerstats.strength }}
        </p>
          <p class="powerstatsInfo">
          Speed : {{ powerstats.speed }} 
        </p>
          <p class="powerstatsInfo">
          Durability : {{ powerstats.durability }} 
        </p>
          <p class="powerstatsInfo">
          Power : {{ powerstats.power }} 
        </p>
          <p class="powerstatsInfo">
          Combat : {{ powerstats.combat }}
        </p>
      </aside>
      <aside class="relationships">
        <div class="connections" >
          <h3>Connections</h3>
        <p v-if="connections">
          Group Affiliation: {{ connections.groupAffiliation }} <br><br>
          Relatives: {{ connections.relatives }} <br>
        </p>
      </div>
      </aside>
  </section>
</template>

<script>
import { getOneSuperHeroData } from "@/services/api/SuperHeroAPI.js";

export default {
  name: "SuperHeroSingleCard",
  data() {
    return {
      id: "",
      name: "",
      imageUrl: "",
      appearance: {},
      biography: {},
      work: {},
      connections: {},
      powerstats : {},

    };
  },
  methods: {
    async retrieveASuperheroData() {
  try {
    let superhero = await getOneSuperHeroData(this.$route.params.id);
    this.id = superhero.id;
    this.name = superhero.name;
    this.imageUrl = superhero.images.md;

    this.appearance = superhero.appearance;
    this.work = superhero.work;
    this.connections = superhero.connections;
    this.biography = superhero.biography;
    this.powerstats = superhero.powerstats;

  } catch (error) {
    console.log(error); 
  }
},
  },
  created: function () {
    this.retrieveASuperheroData();
  },
};
</script>

<style scoped>

.single {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

h2 {
  align-self: center;
  font-size: 3em;
  padding-bottom: 1em;
  color: rgb(203, 144, 77);
}
h3{
  padding:1em 0em;
  color: rgba(203, 144, 77,0.3);
}

.cardImage {
  align-self: flex-start;
}

.cardImage img {
  border-radius: 2em;
}

.allWithoutTitle {
  display: flex;
  padding-bottom: 2em;
}

.superHeroLife {
  font-size: 1.em;
  align-self: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.powerstats {
  width: 50%;
  display: flex;
  justify-content: space-around;
  padding: 2em;
  border-radius: 50px;
  filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.3));
  align-self: center;
  color: #CB904D;
  font-weight: 700;
}

.relationships .connections {
  width: 100%;
  padding: 2em 0em;
}

.appearance,
.biography,
.work,
.connections {
  width: calc(25% - 1em);
}

@media screen and (max-width: 767px) {
  h2 {
    font-size: 2em;
  }

  .cardImage{
    
    align-self: center;
  }
  .cardImage img{
    width: 15em;
  }
  .allWithoutTitle {
    flex-direction: column;
    align-items: center;
  }

  .superHeroLife {
    flex-direction: column;
    align-items: center;
  }

  .appearance,
  .biography,
  .work,
  .connections {
    width: 100%;
    text-align:justify;
    padding-top:1em;
    padding-bottom:1em;
  }

  .allWithoutTitle{
    align-items:center;
    text-justify: distribute;
  }
  .powerstats {
    width: 100%;
    flex-wrap:wrap;
    font-size: 100%;
    padding: 1em;
    margin-top: 2em;
    
  }
}
</style>