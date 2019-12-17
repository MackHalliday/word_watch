import $ from 'jquery'

$(document).ready(() => {
  async function userAction () {

    let response = await fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("HELLLOOOO")
    return response.json();
  }
})
