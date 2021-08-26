
  window.addEventListener("load",() =>{
    console.log("document loaded")
    sendApiRequest()
  })
  
  async function sendApiRequest(){
    let API_KEY = "thKAIfnGJXugq1DqW2WfmQwwJXU6T8wnyjzESg3m"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    
    useApiData(data)
  }
  
  function useApiData(data){
  	document.querySelector(". title").innerHTML += data.title
   document.querySelector(".apod").innerHTML += `<img src="${data.url}">`
    document.querySelector(".let").innerHTML += data.explanation
  }
 