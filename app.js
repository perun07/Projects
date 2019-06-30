console.log('Intiate Load Sequence');
  let countryInfo= []

  function renderCountry(countryInfo, userInput){
    //   console.log('Country Information');
    //   console.log(countryInfo) 
          $('#country-container').empty()
          for (let i = 0; i< countryInfo.length;i++){
              let countryName = countryInfo[i].name;
              if (userInput.toLowerCase() == countryName.toLowerCase()){
              let countryCapital = countryInfo[i].capital; 
              let countryRegion = countryInfo[i].region;
              let countryLanguage = countryInfo[i].languages[0].name
              //another object and array
              let countryFlag = countryInfo[i].flag
              let countryPop = formatN(countryInfo[i].population)
              let countryDol = countryInfo[i].currencies[0].name
              //another object and array
              let countryZone = countryInfo[i].timezones
                // let image = $(`<img src='${countryFlag}'>`)
                // console.log(countryName); 
                $('#flag img').attr('src',countryFlag)
                $('#country2').text("Country Name: " +countryName)
                $('#country').text("Country Name: " +countryName)
                $('#capital').text("Capital: "+countryCapital)
                $('#region').text("Region: "+countryRegion)
                $('#languages').text("Native Language: "+countryLanguage)
                // $('#timezone').text("Time Zone: "+countryZone)
                $('#population').text("Population: "+countryPop)
                $('#currency').text("Currancy: "+countryDol)
            //   console.log(countryCapital);
            //   console.log(countryRegion);
              }
          }
      }
      
//   }
  
function formatN (num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

  $('#country-search').submit(function(event){
      event.preventDefault()
      let userInput = $('#search-term').val()
      $('#search-term').val("")
      $.ajax({
        //   url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key${userInput}&=AIzaSyAuPk8bH7WX4-_brj71pAFx6HljsJUFS84`,
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

// function callDataC (userInput) {
// document.getElementById('country2').click(

// )
// }

// $('#country2').on('click', callDataC)
// $('#country').on('click', callData)
// $('#capital').on('click', callData)
// $('#region').on('click', callData)
// $('#languages').on('click', callData)
// $('#timezone').on('click', callData)
// $('#population').on('click', callData)
// $('#currency').on('click', callData)
