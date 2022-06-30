
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
            titleEl.classList = 'card-title col-12 bg-secondary text-light rounded'
            titleEl.textContent = data.results[i].title;
            resultEl.appendChild(titleEl);

            // Create info elements
            let infoEl = document.createElement('div');
            let dateEl = document.createElement('p');
            let subjectEl = document.createElement('p');
            let descEl = document.createElement('p');
            infoEl.classList = 'card-text bg-info';

            // text info
            dateEl.innerHTML = 'date: ' + data.results[i].timestamp;
            subjectEl.innerHTML = 'subjects: ' + data.results[i].subject;
            descEl.innerHTML = 'description: ' + data.results[i].description

            // append children
            resultEl.appendChild(infoEl);
            infoEl.appendChild(dateEl);
            infoEl.appendChild(subjectEl);
            infoEl.appendChild(descEl);
        }
        console.log(data)
        
        
        console.log(data.results[0].title)
        
    })
}

buttonEl.addEventListener('click', function(e){
    e.preventDefault();
    resultEl.children.textContent = '';
    let question = searchEl.value.trim();
    if(question){
        console.log(question)
        search(question)
    }
})