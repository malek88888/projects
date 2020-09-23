const listed = document.getElementById("listed")
let newArr = []
const getValue = () =>{
    let Value = document.getElementById("listed").value
    newArr.push(Value)
    addList(Value)
}


const addList  = (newValue)=>{
    const ol = document.getElementById("lll")
   
    let newList = document.createElement("li")
    newList.innerText=  newValue
    let newButton = document.createElement("button")
    newButton.innerText = "remove teacher"
   
        newList.append(newButton)
        ol.append(newList)
        newButton.addEventListener('click'
        ,function(){for (let index = 0; index < newArr.length; index++){
            if ( newArr[index]=newList.innerHTML[index]) {
               newList.innerHTML[index]="" 
            }
           }
          
         newList.remove()
        } )
    }
        const bestTeacher = ()=>{
            const best = document.getElementById("bestT")  
            // best make it empty                    //   
            for (let index = 0; index < 3; index++) {
                const newT =document.createElement("li")
                
                newT.innerText=newArr[index]
                best.append(newT)
               /* const deleteButton = document.createElement("button")
                deleteButton.innerText="x"
                newT.append(deleteButton)
                deleteButton.addEventListener("click",function(){
                    document.getElementById(ol).innerHTML=""
                })
            }                
            }*/}}
            const newArr2 =[]
            const getBestT = () =>{
                if (newArr2.length<4 ) {
                    let Value = document.getElementById("input").value
                newArr2.push(Value)
                addT(Value)    
                }else{
                alert("please remove value")  
                }   
            }
            const addT  = (newValue)=>{
                const ol = document.getElementById("bestT")
               
                let newList = document.createElement("li")
                newList.innerText=  newValue
                let newButton = document.createElement("button")
                newButton.innerText = "remove teacher"
               
                    newList.append(newButton)
                    ol.append(newList)
                    newButton.addEventListener('click'
                    ,function(){
                      newArr2.shift()
                     newList.remove()
                    } )
                }