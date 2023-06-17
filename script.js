// API fetching 

// area waale query ko humne` ${document.getElementById('pin').textContent} ` isse replace kar diya 
// ab jab hum buttons ya search box lagayenge toh vaha se data uth kar isme aakar uss particular location pr dikhayega 
function display() {

    const add = document.getElementById('search')
  const area = add.value

// search  bar m jo value daali vaha se text utha kar 
// '.value' use karke humne weather ki info show karna dikha diya 


const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${document.getElementById('search').value}?unitGroup=us&include=days&key=XMFG54QG8JRUPD9BHM6YC5EAS&contentType=json`

const options = {
	"method": "GET",
	"headers": {}
}

fetch(url, options)
	
	.then( response => {
		return response.json()
	})
	.then ( data => {
		// api ko access kiya 
		const location = data.address;
		console.log(`location is of ${area}`)


		// hello change kiya api ke key:value pair se 
		document.getElementById(`hello`).innerHTML = data.days[0].humidity	 

		// displaying in H1 tag -> `data.timezone` isse use karke !
		const outer = document.getElementById('display');
		outer.textContent = data.timezone;

		// console.log("Fetched location" )
	})
	.catch( err => {
		console.log(err)
	})
	.finally(()=> {
		// console.log("Finally DOne")
	} )
}