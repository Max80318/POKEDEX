const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./src/pikachu.jpg");
            pokenam("No encontrado")
            pokeid("##");
            pokeW("#");
            pokeH("#");
            pokeE("#");
            const pokeTypes = document.getElementById("type");
            pokeTypes.innerHTML ="Type : ---";
            const pokeAbilities=document.getElementById("abilities");
            pokeAbilities.innerHTML="ABILITIES: -----";
            const pokeStats = document.getElementById("stats");
             pokeStats.innerHTML ="STATS: ----";

        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeN = data.name;
            let pokei = data.id;
            let pokeWe = data.weight;
            let pokeHe = data.height;
            let pokeExpe = data.base_experience;
            let pokeType = data.types;
            let pokeAbil= data.abilities;
            let pokeStat = data.stats;
            pokeImage(pokeImg);
            pokenam(pokeN);
            pokeid(pokei);
            pokeW(pokeWe);
            pokeH(pokeHe);
            pokeE(pokeExpe);
            pokeData(pokeAbil);
            pokeInfo(pokeType);
            pokeSt(pokeStat);
            console.log(pokeImg);
            
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeid = (id) => {
    const idScreen = document.getElementById('number');
    idScreen.innerHTML =  `#${id}`;
}
const pokenam = (names) => {
    const nameScreen = document.getElementById('name');
    nameScreen.innerHTML = names;
}
const pokeW = (w) => {
    const pokeweight = document.getElementById('weight');
    pokeweight.innerHTML = `Weight: ${w / 10}kg`;
}
const pokeH = (h) => {
    const pokeHeight = document.getElementById("height");
    pokeHeight.innerHTML = `Height: ${h * 10}cm`;
}
const pokeE = (exp) => {
    const pokeBase = document.getElementById("bExp"); 
    pokeBase.innerHTML = `Experience: ${exp}`;
}
const pokeData=(abilites)=>{
    const pokeAbilities=document.getElementById("abilities");
    const abilitiesName=abilites.map(item=>item.ability.name);
    pokeAbilities.innerHTML="ABILITIES:"+"<BR>"+ abilitiesName[0]+"<br>"+">"+abilitiesName[1]+"<br>"+">"+abilitiesName[2];
}
const pokeInfo = (types) => {
    const pokeTypes = document.getElementById("type");
    const typesName = types.map(item => item.type.name);
    pokeTypes.innerHTML ="Type : "+ typesName[0]+"\n"+","+typesName[1];

}
const pokeSt = (contStats) => {
    const pokeStats = document.getElementById("stats");
    const statsName = contStats.map(item => item.stat.name);
    const statsNumber =contStats.map(item => item.base_stat);
    pokeStats.innerHTML ="STATS"+"<br>"+">"+statsName[0]+":"+statsNumber[0]+"<br>"+">"+statsName[1]+":"+statsNumber[1]+"<br>"+">"+
    statsName[2]+":"+statsNumber[2]+"<br>"+">"+statsName[5]+":"+statsNumber[5]+"<br>"+">"+statsName[3]+":"+statsNumber[3]+"<br>"+
    ">"+statsName[4]+":"+statsNumber[4];
}
