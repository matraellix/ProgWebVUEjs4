<template>
    <main>
    <div class="superHeroGallery">
        <div class="sortBy">
            <div class="searchBar" >
                <label>Search a character </label>
                <input type="text" placeholder="name of a character" v-model="searchByName">
                <button class="filteredButton cleanButton" v-if="searchByName" @click="cleanSearch">X</button>
                
            </div>
            <label>Filter : </label>
            <div class="filterSelect">
                <select v-model="sortType">
                    <option value="strength(StrongestToWeakest)">Strength (descending)</option>
                    <option value="strength(WeakestToStrongest)">Strength (ascending)</option>
                    <option value="Intelligence(SmartestToDumbest)">Intelligence (descending)</option>
                    <option value="Intelligence(DumbestToSmartest)">Intelligence (ascending)</option>
                    <option value="AZsort">from A to Z</option>
                    <option value="ZAsort">from Z to A</option>
                </select>
            </div>
            <div class="category"> 
              
                    <button class="filteredButton" @click="setAlignmentFilter('good')">Heroes only</button>
                    <button class="filteredButton" @click="setAlignmentFilter('bad')">Villains only</button>
                    <button class="filteredButton" @click="setAlignmentFilter('')">All</button>
        
            </div>
        </div>
        <router-link class ="text"  :to="{name: 'superhero', params: {id: superhero.id}}"  >
        <transition-group class="melange-carte" name="shuffle">
        
            
            <SuperHeroCard v-for="superhero in filteredHeroes" :key="superhero.id"
            :name="superhero.name"
            :biography="superhero.biography"
            :imageUrl="superhero.images.md" 
            :id="superhero.id"
            :powerstats="superhero.powerstats"
            :sortType="sortType" />
            
        
        </transition-group>
    </router-link>
    </div>
    </main>

</template>


<script>

import SuperHeroCard from './SuperHeroCard.vue'
import { getSuperHeroData } from '@/services/api/SuperHeroAPI.js'

export default {
    name: 'galleryComponent',
    components: {
        SuperHeroCard,
    },
    data() {
        return {
            SuperHeroData: [],
            textColor : '#CB904D',

            sortType: "AZsort",
            alignmentFilter: '',
            searchByName: localStorage.getItem("searchByName") || "",
        }
    },
    created: function() {
        this.retrieveSuperHeroData()
    },
    methods: {
        setAlignmentFilter(filter) {
            this.alignmentFilter = filter;
        },
        async retrieveSuperHeroData() {
            this.SuperHeroData = await getSuperHeroData()
            this.filterGoodOrBad = this.SuperHeroData.heroes
        },
        cleanSearch: function() {
            this.searchByName = "";
        }
        
    },
    computed: {
        
        filteredHeroes() {
        let heroes = this.SuperHeroData.slice();
        if (this.alignmentFilter === 'good') {
            heroes = heroes.filter(
            (hero) => hero.biography.alignment === 'good'
            );
        } else if (this.alignmentFilter === 'bad') {
            heroes = heroes.filter(
            (hero) => hero.biography.alignment === 'bad'
            );
        }

        heroes = heroes.filter((hero) => hero.name.toLowerCase().includes(this.searchByName.toLowerCase()));
        if (this.sortType === "strength(StrongestToWeakest)") {
            heroes = heroes.sort((a, b) => b.powerstats.strength - a.powerstats.strength);
        }else if (this.sortType === "strength(WeakestToStrongest)") {
            heroes = heroes.sort((a, b) => a.powerstats.strength - b.powerstats.strength);
        } else if (this.sortType === "AZsort") {
            heroes = heroes.sort((a, b) => a.id - b.id);
        } else if (this.sortType === "ZAsort"){
            heroes = heroes.sort((a, b) => b.id - a.id);
        } else if (this.sortType === "Intelligence(SmartestToDumbest)") {
            heroes = heroes.sort((a, b) => b.powerstats.intelligence - a.powerstats.intelligence);
        }else if (this.sortType === "Intelligence(DumbestToSmartest)") {
            heroes = heroes.sort((a, b) => a.powerstats.intelligence - b.powerstats.intelligence);
        }
        
        
        return heroes;
        },
    },

    watch: {
		searchByName: function(newSearch) {
			localStorage.setItem("searchByName", newSearch)
		},
    }

}
</script>
<style>
.text {
  color: v-bind(textColor);
  text-decoration : none;
}
.sortBy{
    width : 100%;
    padding : 1em 2em;
    
    
}
.sortBy label{
    padding: 0.8em;
}
.sortBy select{
    appearance : none;
    flex:1;
    cursor: pointer;
    border: 0;
    color: rgb(203, 144, 77);
    padding : 0.8em;
    

}
.sortBy .filterSelect{
    max-width: 40%;
    position: relative;
    display: flex;
    height: 2.5em;
    line-height: 2.5em;
    background: rgb(40, 40, 42);
    border-radius: 2%/15%;
    box-shadow: 0 5px 25px rgba(0,0,0,.8);
    overflow: hidden;
}
.sortBy .filterSelect::after{
    content: '\25BC';
    position: absolute;
    top:0;
    right:0;
    padding: 0 1em;
    border-radius: 10%;
    background: rgb(203, 144, 77,1);
    cursor: pointer;
    pointer-events:none;
    transition:0.25s all ease;
}
.sortBy .filterSelect:hover::after{
    color : rgb(46, 46, 49);
}

.sortBy option{
    color: rgb(203, 144, 77,0.6);
    padding : 0.8em;
}
.filteredButton {
    border:none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 16px;
    font-weight: bold;
    margin:0.15em;
    color: #CB904D;
    background-color: rgb(40, 40, 42);
    cursor: pointer;
    transition: all 0.3s ease;
    justify-content: space-around;
}

.filteredButton:hover {
    background-color: #CB904D;
    color: white;
}
.category{
    width:100%;
    display: flex;
    padding: 2em 0em;
}
.superHeroGallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.melange-carte{
    transition: transform 0.8s ease-in;
}

@media (min-width: 320px) {
    .sortBy .filterSelect{
    max-width: 100%;
    }
}
@media (min-width: 768px) {
    .sortBy .filterSelect{
    max-width: 40%;
    }
}
@media (min-width: 1024px) {
    .sortBy .filterSelect{
    max-width: 25%;
    }
}
</style>
