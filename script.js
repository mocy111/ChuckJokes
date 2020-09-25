let btn = document.getElementById('btn');
let output = document.getElementById('output');
let tab2 = 
[
    "https://www.gannett-cdn.com/-mm-/c50b1a6ff1c46d053f5bf4827514dd5d39a4bcf1/c=0-136-1336-1917/local/-/media/2015/03/25/USATODAY/USATODAY/635628935306488093-norris.JPG?width=600&height=800&fit=crop&format=pjpg&auto=webp", //marche
    "https://images.ladepeche.fr/api/v1/images/view/5c3712c88fe56f129210c687/full/image.jpg", //marche
    "https://resize-parismatch.lanmedia.fr/r/901,,forcex/img/var/news/storage/images/paris-match/brouillons/chuck-norris-1976-photos-1678299/chuck-norris-1976-photos-7/27353482-1-fre-FR/Chuck-Norris-1976-Photos-7.jpg", //marche
    "https://archzine.fr/wp-content/uploads/2016/05/blague-de-chuck-norris-blague-chuck-norris-2.jpg",//marche
    "https://archzine.fr/wp-content/uploads/2016/05/blague-sur-chuck-norris-blague-chuck-norris-3.jpg", //marche
    "https://s.hdnux.com/photos/57/61/03/12521691/3/gallery_xlarge.jpg", //marche
    "https://archzine.fr/wp-content/uploads/2016/05/chuck-norris-humour-blague-chuck-norris-2.jpg", //marche
    "https://archzine.fr/wp-content/uploads/2016/05/Chuck-Norris-ou-est-chuck-norris-2.jpg",//marche
    "https://archzine.fr/wp-content/uploads/2016/05/les-meilleurs-blagues-meilleur-blague-blague-chuck-norris-2-e1463650461698.jpg",
   "https://archzine.fr/wp-content/uploads/2016/05/meilleurs-blagues-blague-chuck-norris-2.jpg",
   "https://archzine.fr/wp-content/uploads/2016/05/trouver-chuck-norris-jai-chance-chercher-chuck-norris-sur-google-2-e1463658098535.jpg",
    "https://images02.military.com/sites/default/files/styles/full/public/media/veteran-jobs/content-images/2016/03/chucknorris.jpg?itok=_J3M4O-S"    
];

function fetch1() {
    fetch("https://api.chucknorris.io/jokes/random",)
    .then(response => response.json())
    .then(response => { 
        let i= Math.floor(Math.random()*tab2.length);
        console.log(i);
        //output.innerHTML = response.value;ymm
        // output.innerHTML += `</br> </br></br> <img id="image" style="widths: 100px;" src="${tab2[Math.round(Math.random()*tab2.length)]}" alt="" />`
    
        output.innerHTML = `<div class="col-md-4"></div>
                    
                    <div class="col-md-4">
                    <div class="card  text-center" style="width: 20rem;">
                        <img src="${tab2[i]}" class="card-img-top img-flui" alt="...">
                        <div class="card-body">
                          <p class="card-text"> ${output.innerHTML = response.value}</p>
                        </div>    
                    </div>
                </div>
                <div class="col-md-4"></div> `


     })
    .catch(error => alert("Erreur : " + error));
    }
  btn.addEventListener("click", fetch1);