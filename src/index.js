// console.log('%c HI', 'color: firebrick')

//Challenge 1
function fetchData() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then (json => addBreedImage(json))
}

document.addEventListener('DOMContentLoaded', function() {
    fetchData();
  });


function addBreedImage(breedsImg) {
    const messageImg = breedsImg.message;
    const dogImage = document.querySelector('#dog-image-container');
    for (const breedImg of messageImg) {
        const newImage = document.createElement('img');
        newImage.src = breedImg
        dogImage.append(newImage);
    };
}

//Challenge 2
let breeds = []
const ul = document.querySelector('#dog-breeds');

function fetchBreedData() {
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then (data => {
        breeds = Object.keys(data.message)
        addBreed(breeds)
    }
    )
}

document.addEventListener('DOMContentLoaded', function() {
    fetchBreedData();
  });


  function addBreed(breeds) {
    console.log(breeds)
    breeds.forEach(breedList => {
    
    //     const mainBreed = message.breedList
    //     console.log(mainBreed)
        
    //     for (subBreed of mainBreed) {
    //         console.log(subBreed)
    //         if (subBreed !== "") {
    //             appendedBreed = mainBreed.subBreed
    //         }
    //     }
    // });
        let li = document.createElement('li');
        li.textContent = breedList;
        ul.append(li);
        li.addEventListener('click', changeBreedColor)
    });
  }

  // Challege 3
  function changeBreedColor(e) {
      e.target.style.color = 'blue'
  }

  //Challenge 4
  const breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', filterBreeds);

  function filterBreeds(e) {
      const filter = e.target.value
      filteredList = breeds.filter(breed => breed.startsWith(filter))
      console.log(filteredList)
      ul.innerHTML = ''
      addBreed(filteredList)
  }