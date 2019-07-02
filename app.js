console.log('Intiate Load Sequence');
let countryInfo= []
let userInput = ''
let countryCapital = null
let countryRegion = null
let countryLanguage = null
let countryPop = null
let countryDol = null
  function renderCountry(countryInfo, userInput){
    //   console.log('Country Information');
    //   console.log(countryInfo) 
          $('#country-container').empty()
          for (let i = 0; i< countryInfo.length;i++){
              let countryName = countryInfo[i].name;
              if (userInput.toLowerCase() == countryName.toLowerCase()){
            //   let countryCapital = countryInfo[i].capital; 
               countryCapital = countryInfo[i].capital; 
               console.log('capital is: ' + countryCapital)
              countryRegion = countryInfo[i].region;
              countryLanguage = countryInfo[i].languages[0].name
              //another object and array
              let countryFlag = countryInfo[i].flag
              countryPop = formatN(countryInfo[i].population)
              countryDol = countryInfo[i].currencies[0].name
              let countryLL = countryInfo[i].latlng
              console.log(countryLL)
              initMap(countryLL[0],countryLL[1])
            // initMap()
              //another object and array
            //   let countryZone = countryInfo[i].timezones
                // let image = $(`<img src='${countryFlag}'>`)
                // console.log(countryName); 
                $('#flag img').attr('src',countryFlag)
                $('#country2').text("Country Name: " +countryName)
                $('#country').text("Country Name: " +countryName)
                $('#capital').text("Capital: "+countryCapital)
                $('#region').text("Region: "+countryRegion)
                $('#languages').text("Native Language: "+countryLanguage)
                $('#population').text("Population: "+countryPop)
                $('#currency').text("Currancy: "+countryDol)
            //   console.log(countryCapital);
            //   console.log(countryRegion);
                // $('#country').onclick(`window.open('https://en.wikipedia.org/wiki/${userInput}')`)
                // $('#country').title("Info on " +countryName)
              }
          }
      }
      
//   }
  
function formatN (num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

  $('#country-search').submit(function(event){
      event.preventDefault()
      userInput = $('#search-term').val()
      $('#search-term').val("")
      $.ajax({
        url: `https://restcountries.eu/rest/v2/all`,  
        success: function(response){  
            // console.log(response);   
              countryInfo = response
              renderCountry(countryInfo,userInput)
          },
          error: function(err){
              console.log(err);
              
          }
      })
      
  })

  $(function(){
      $('[data-toggle="tooltip"]').tooltip()
  })
//onhover pull ajax for tool

// function changeTitle (){
//     $('#country').title("Info on " +countryName)
//     // $('#capital').title(countryCapital)
//     // $('#region').title(countryRegion)
//     // $('#languages').title(countryLanguage)
//     // $('#population').title(countryPop)
//     // $('#currency').title(countryDol)       
// }

function nWin() {
    let windowO = window.open(`https://en.wikipedia.org/wiki/${userInput}`, '_blank');
    }

function nWin2 (){
    // console.log(event)
    // console.log(event.data)
    // const data = event.data.param
    let windowOpen = window.open(`https://en.wikipedia.org/wiki/${countryCapital}`, '_blank')
}
function nWin3 (){
    let windowOpen = window.open(`https://en.wikipedia.org/wiki/${countryRegion}`, '_blank')
}
function nWin4 (){
    let windowOpen = window.open(`https://en.wikipedia.org/wiki/${countryLanguage}`, '_blank')
}
function nWin5 (){
    let windowOpen = window.open(`https://en.wikipedia.org/wiki/population`, '_blank')
}
function nWin6 (){
    let windowOpen = window.open(`https://en.wikipedia.org/wiki/${countryDol}`, '_blank')
}
    // 
    function initMap(latitude,longitude) {
        // console.log(latitude);
        // console.log(longitude);
        console.log('in init map')
        const element = document.getElementById('map')
        console.log(element)

        
      let map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng( latitude,  longitude),
        zoom: 5
      });
      console.log(map);
      
    }
// function callData (userInput){
//     $('#country').onclick(`window.open('https://en.wikipedia.org/wiki/${userInput}')`)
//     // $('#capital').title(countryCapital)
//     // $('#region').title(countryRegion)
//     // $('#languages').title(countryLanguage)
//     // $('#population').title(countryPop)
//     // $('#currency').title(countryDol)  
// }

// )
// }

// $('#country2').on('click', callDataC)
$('#country').on('click', nWin)
// console.log(countryCapital);
// $('#capital').on('click', {param: countryCapital}, nWin2)
$('#capital').on('click', nWin2)
$('#region').on('click', nWin3)
$('#languages').on('click', nWin4)
// $('#timezone').on('click', callData)
$('#population').on('click', nWin5)
$('#currency').on('click', nWin6)
