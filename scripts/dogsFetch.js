fetch('https://dog.ceo/api/breeds/list/all')
  .then((response) => response.json())
  .then((data) => console.log(data));


fetch("https://dog.ceo/api/breeds/list/all" + offset)
    .then(res => res.json())
    .then(dogInfo => {
     // callback
    print_dogs(dogInfo);
    });