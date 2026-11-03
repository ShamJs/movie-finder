let movies=[
    {name:'INCEPTION',available:true},
    {name:'JOKER',available:true},
    {name:'THE SHAWSHANK REDEMPTION',available:false},
    {name:'WORLD WAR Z',available:true}
];
let searchButton=document.getElementById("butt-search");//زر البحث
let input=document.getElementById("inp-search");//حقل الادخال
searchButton.addEventListener('click',function(){
    let nameMovie=input.value;
    if (nameMovie!=''){
        let result=movies.find(function(movie){
            return movie.name===nameMovie;
        });
        let cards=document.querySelectorAll('.one');
        if(result==undefined){
            alert('Movie not found!');
            return
        }
        for(let i=0;i<cards.length;i++){
            if(movies[i].name===result.name){
                cards[i].style.display='block';
            }
            else{
                cards[i].style.display='none'
            }
        }
        input.value="";
    }});
let allName=document.getElementById('add-name');
let names = movies.map(function(movie){
    return movie.name;
});
allName.textContent=names;
let allAvaliable=document.getElementById('available');
let avaliables= movies.every(function(av){
    return av.available===true;
});
if(avaliables===true){
    allAvaliable.textContent='نعم'
}
else{
    allAvaliable.textContent='لا'
};