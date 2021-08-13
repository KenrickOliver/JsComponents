const updateOne = document.querySelector('.update-progress-one')
const progressOne = document.querySelector('.progress-one')

window.addEventListener('load', (event) => {
    progressOne.setAttribute("value", "1");
  });

updateOne.addEventListener('click', () =>{
    progressOne.setAttribute("value", "100");
})

//some change