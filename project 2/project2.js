const videos = [
  {
    id: "7yLxxyzGiko",
    title: "Kittens walk with a tiny chicken",
    thumbnail: "https://img.youtube.com/vi/7yLxxyzGiko/maxresdefault.jpg",
  },
  {
    id: "rS6cvjFXg9s",
    title: "Cute kitten named Garfield washes its paws and prepares to sleep.",
    thumbnail: "https://img.youtube.com/vi/rS6cvjFXg9s/maxresdefault.jpg",
  },
  {
    id: "BFNekjEgvuk",
    title: "Kitten sleeps sweetly with the Chicken 🐥",
    thumbnail: "https://img.youtube.com/vi/BFNekjEgvuk/maxresdefault.jpg",
  },
  {
    id: "te1fHMaw4UY",
    title: "White kitten and white tiny bunnies 🐰 | It's so Сute! 🥰",
    thumbnail: "https://img.youtube.com/vi/te1fHMaw4UY/maxresdefault.jpg",
  },
  {
    id: "MFyUZqSknvw",
    title: "Kittens meets and walk with a cute white bunny",
    thumbnail: "https://img.youtube.com/vi/MFyUZqSknvw/maxresdefault.jpg",
  },
  {
    id: "hlajmIPiphk",
    title: "Mom Cat playing and talking to her Cute Meowing baby Kittens",
    thumbnail: "https://img.youtube.com/vi/hlajmIPiphk/maxresdefault.jpg",
  },
  {
    id: "Cz47GimSxIc",
    title: "Funny Kitten wags its tail like a Puppy",
    thumbnail: "https://img.youtube.com/vi/Cz47GimSxIc/maxresdefault.jpg",
  },
  {
    id: "RmpuhbdnAfQ",
    title: "Kitty Coco and her Sleepy younger brother 🥰",
    thumbnail: "https://img.youtube.com/vi/RmpuhbdnAfQ/maxresdefault.jpg",
  },
];


const ul = $("#ul")
videos.forEach(function (video) {
  const li = $(`<li>
    <img  src='${video.thumbnail}' style='width:100px' >
    <p>${video.title}  </p>
  </li>`)
  ul.append(li);

  // const li3 = $(`<li> id =${video.id} </li>`)
  // li2.appendTo(li)
  // li3.appendTo(li)
});
const video = $('#full')
const search = () => {
  const iValue = $(`.search`).val()
  for (let index = 0; index < videos.length; index++) {

    if (videos[index].title === iValue) {
      video.attr(`src`, `https://www.youtube.com/embed/${videos[index].id}`)
     return 
    }
    
  }

  alert(`this video is not existed` )
}


// const arr = []
// const comment = () => {
//   const commentL = $("#comments")
//   const input = $("#com")
//   const inputV = input.value
//   arr.push(inputV)
//   console.log(arr)
//   const commentLV = $("li")
//   commentLV.innertext = $("#com").value
//   commentL.append(commentLV)

// }
// const add = (added)=>{

// commentLV.innertext=added

// }