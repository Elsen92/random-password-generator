const contain = document.querySelector(".container");
const lef = document.querySelector(".left");
const righ = document.querySelector(".right");
const imag = document.querySelector(".image img");


const apI= "https://random.imagecdn.app/900/400";
let index = 0;


async function randomImage() {
    try{
        const response =await fetch(apI);
        const imageUrl = response.url;
        setImage(imageUrl)
        return imageUrl;
    }catch(error){
        console.error(error)
    }
}
function setImage(url){
    imag.src = url;
}
function setBg(url){
    contain.style.backgroundImage = `url('${url}')`;
}
righ.addEventListener('click',async()=>{
    const sekil = await randomImage();
    console.log("hello")
    setImage(sekil);
    setBg(sekil);
});
lef.addEventListener('click',async()=>{
    const imgOne= await randomImage();
    setImage(imgOne);
    setBg(imgOne)
});
randomImage();

