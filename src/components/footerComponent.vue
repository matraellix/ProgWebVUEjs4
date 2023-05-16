<template>
    <footer class="lefooter">
        <div class="api_info">
            <a href="https://akabab.github.io/superhero-api/api/">Le site de l'API</a>
                
        </div>
        <div class="contact">
            <a href="https://www.linkedin.com/in/ma%C3%ABlle-fleitz-175670175/">Maëlle Fleitz</a>
            
        </div>
    </footer>

</template>

<script>
    export default {
        name: 'footerComponent',
    }
</script>

<style scoped>
footer{
    padding: 1.5em;
    display: flex;

}
.contact, .api_info{
    width:50%;
    text-align: center;
}
a{
    text-decoration: none;
    color: rgba(245, 210, 53,0.8);
}

</style>