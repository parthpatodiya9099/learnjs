const hendlechange=()=>{
    let menu = document.getElementById("menu").value;
    let ans;
    let name;
    let img;
    if(menu =="v"){
        name="Vadapav";
        ans=20;
        img= document.getElementById("img").style.backgroundImage="url('imgs/Vada-Pav-500x500.webp')"
    } else if(menu =="p"){
        name="Pakoda";
        ans = 15;
        img=document.getElementById("img").style.backgroundImage="url('imgs/Bread-Pakoda-700x525.jpg')"
    }else if(menu =="s"){
        name="Samosa";
        ans = 10;
        img=document.getElementById("img").style.backgroundImage="url('imgs/61050397.webp')"
    }else if(menu =="b"){
        name="Bateka-Bhungda";
        ans = 20;
        img=document.getElementById("img").style.backgroundImage="url('imgs/bhungla-bateka-recipe-main-photo.jpg')"
    }else if(menu =="r"){
        name="Rotli-Shak";
        ans = 80;
        img=document.getElementById("img").style.backgroundImage="url('imgs/IMG_2903.webp')"
    }else if(menu =="ps"){
        name="Puri-shak";
        ans = 30;
        img=document.getElementById("img").style.backgroundImage="url('imgs/navinmdesrani-desrani20180709163941069.jpeg')"
    }else if(menu =="pb"){
        name="Bisleri";
        ans = 10;
        img=document.getElementById("img").style.backgroundImage="url('imgs/51wceqY765L.jpg')"
    }else if(menu =="bm"){
        name="Butter-Milk";
        ans = 20;
        img=document.getElementById("img").style.backgroundImage="url('imgs/Masala-Chaas-Recipe.webp')"
    }
    
    document.getElementById("disp").innerHTML=name;
    // document.getElementById("img").innerHTML=img;
}
const hendleclick=()=>{

}