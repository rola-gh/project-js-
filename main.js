  let container = document.getElementById('container');
  let grid = prompt("Please , Enter size of grid" , '16');
  let Button = document.createElement('button');
  Button.textContent = 'click me to reset grid' ;
  Button.style.margin = '20px 40rem';
  Button.style.fontSize = '20px';
  Button.style.width = '15rem';
  Button.style.color = '#250925';
  Button.style.fontFamily = "Old Antic Bold";
  Button.style.border = '1px solid #CED443';
  container.insertAdjacentElement('beforebegin', Button);
  Button.addEventListener('click' , function () {
      window.location.reload();
  });

function sequare(){
  let s = document.createElement('div');
  s.classList.add('divEle');
  container.appendChild(s);
  s.style.backgroundColor="rgb(37,9,37)";
  s.style.width = `${1000/grid}px`;
  s.style.height = `${1000/grid}px`;
  // s.style.left = '100%'
  // s.style.right = '100%'
  // s.style.marginLeft ='auto';
  // s.style.grid='auto-flow'
  s.style.border = '.5px solid #D2D406'
}

function randomColor() {
  let l = '123456789abcde';
  let color = '#';
   for(let i = 0; i<6 ; i++){
     color += l[Math.floor(Math.random() * 16)];
   }
  return color;

}
for(let i = 0 ; i < grid ; i++){
  for (let j=0; j< grid; j++){

    sequare();

}}
let element = document.querySelectorAll('.divEle');
  for(let k=0 ; k<Math.pow(grid,2) ; k++){
    element[k].addEventListener("mouseover", function()
    {element[k].style.backgroundColor=randomColor();
    })}
