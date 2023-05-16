const getSuperHeroData = async function(){    
    const response = await fetch ("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }
}

const getOneSuperHeroData = async function(route){    
    //const response = await fetch (`https://akabab.github.io/superhero-api/api/id/${route}`)
    const response = await fetch (`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${route}.json`)
    if (response.status == 200){
        return response.json()
    }
    else {
        new Error(response.statusText)
    }
}
export { getSuperHeroData, getOneSuperHeroData }


