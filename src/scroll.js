
const prev = document.getElementById('prev-btn')
const next = document.getElementById('next-btn')
const list = document.getElementById('item-list')
const itemWidth = 200
const padding = 10

// scrolls by adding or removing padding with overflow
prev.addEventListener('click',()=>{
  list.scrollLeft -= (itemWidth)
  console.log(list.scrollLeft)
})
next.addEventListener('click',()=>{
  list.scrollLeft += (itemWidth)
  console.log(list.scrollLeft)
})

// images to buttons


// list.addEventListener('click', ()=>{
//     if(list.scrollLeft <= 150){
//         list.scrollLeft += (itemWidth)
//     }else{
//         list.scrollLeft -= (itemWidth)
//     }
// })