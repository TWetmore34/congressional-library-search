
// global display variables
let searchEl = document.getElementById('name-search');
let buttonEl = document.getElementById('submit');
let resultEl = document.getElementById('results')

function search(q){
    let requestUrl = 'https://www.loc.gov/search/?q=' + q + '&c=10&fo=json'

    fetch(requestUrl).then(function(response) {
        return response.json();
    }).then(function (data){
        for (i=0;i<data.results.length;i++){
            let titleEl = document.createElement('div');
            titleEl.classList.add('card-title');
            titleEl.textContent = data.results[i].title;
        resultEl.appendChild(titleEl);
        }
        console.log(data)
        
        
        console.log(data.results[0].title)
        
    })
}

buttonEl.addEventListener('click', function(e){
    e.preventDefault();
    let question = searchEl.value.trim();
    if(question){
        console.log(question)
        search(question)
    }
})