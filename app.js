const btn=document.getElementById("button");
const jokecontent=document.getElementById("jokecontent");
const joke=document.getElementById("joke");
btn.onclick=()=>{
    axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(function(response){
        btn.textContent="NEXT";
        joke.textContent="";
        jokecontent.textContent=response.data.setup;
        setTimeout(function(){
           joke.textContent=response.data.punchline;
        },1600);

    })
    .catch(function(error)
{
    console.log(error);
})
};