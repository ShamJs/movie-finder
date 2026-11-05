let movies=[
    {name:'INCEPTION',available:true},
    {name:'JOKER',available:true},
    {name:'THE SHAWSHANK REDEMPTION',available:false},
    {name:'WORLD WAR Z',available:true}
];
let searchButton=document.getElementById("butt-search");
let input=document.getElementById("inp-search");
let inpMovie=document.getElementById('filterMovies');
inp.addEventListener('input',function(){
    if(input.value=''){
        inpMovie.textContent='';
        inpMovie.style.display='none';
        return
    };
    let filterMovies=movies.filter(function(m){
        return m.name.include(input.value.toUpperCase())
    });
    let names=filterMovies.map(function(l){
        return l.name
    });
    inpMovie.textContent=names;
    inpMovie.style.display='block'
});
searchButton.addEventListener('click',function(){
    let nameMovie=input.value;
    if (nameMovie!=''){
        let result=movies.find(function(movie){
            return movie.name.toUpperCase()===nameMovie.toUpperCase();
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
