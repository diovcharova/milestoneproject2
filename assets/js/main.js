$(document).ready(function() {})

function sendMail(contactForm) {
  emailjs.send("gmail", "health_helper", {
      "subject": contactForm.subject.value,
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "message": contactForm.message.value
    })
    .then(
      function(response) {
        console.log("SUCCESS", response);
      },
      function(error) {
        console.log("FAILED", error);
      });
  return false;
}

function fetchMealPlan(event) {
  $("#mealplan").html("");

  var input1 = $("#target").val();
  var input2 = $("#diet").val();
  var input3 = $("#dislikes").val();

  if (!input1 && !input2 && !input3) {
    $("#mealplan").html(`<h5>Please enter some requirements.</h5>`);
    return;
  }

  fetch(`https://api.spoonacular.com/recipes/mealplans/generate?timeFrame=day&targetCalories=${input1}&diet=${input2}&exclude=${input3}&apiKey=c4df18729af3439f923864d003dc20b5`)
    .then(function(response) {
      response.json().then(function(data) {
        console.log(data);
        $("#mealplan").html(function() {
          if (data.length == 0) {
            return `<div class="clearfix ">No results found!</div>`;
          }

          var listItemsHTML = data.meals.map(function(key) {
            var index = data.meals.indexOf(key) + 1;
            return `<li>
                   <a href="https://spoonacular.com/${key.title}" target="_blank" class="text-decoration-none color-pink">Meal ${index}: ${key.title}</a>
                </li>`;
          });

          return `<div class="clearfix">
                <h3>
                    <strong>Your daily ${input2} meal plan:</strong>
                </h3>
                <ul class="list-unstyled">
                    ${listItemsHTML.join("\n")}
                </ul>
                <h5>
                    <strong>Total calories: ${data.nutrients.calories}</strong> <br>
                    <strong>Total carbohydrates: ${data.nutrients.carbohydrates}</strong> <br>
                    <strong>Total fat: ${data.nutrients.fat}</strong> <br>
                    <strong>Total protein: ${data.nutrients.protein}</strong> 
                </h5>
            </div>`;
        });
      });
    })
    .catch(function(errorResponse) {
      console.log(errorResponse);
      $("#recipesFromReq").html(
        `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
    });

}



function fetchRecipefromFridge(event) {
  $("#recipesFromFridge").html("");

  var input = $("#availableIngredients").val();
  if (!input) {
    $("#recipesFromFridge").html(`<h5>Please enter an ingredient.</h5>`);
    return;
  }

  fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&apiKey=c4df18729af3439f923864d003dc20b5&number=5`)
    .then(function(response) {
      response.json().then(function(data) {
        console.log(data);
        $("#recipesFromFridge").html(function() {
          if (data.length == 0) {
            return `<div class="clearfix ">No recipes!</div>`;
          }

          var listItemsHTML = data.map(function(key) {
            return `<li>
                   <a href="https://spoonacular.com/${key.title}" target="_blank" class="text-decoration-none color-pink">${key.title}</a>
                </li>`;
          });

          return `<div class="clearfix">
                <h3>
                    <strong>Top 5 recipes including ${input}:</strong>
                </h3>
                <ul class="list-unstyled">
                    ${listItemsHTML.join("\n")}
                </ul>
            </div>`;
        });
      });
    })
    .catch(function(errorResponse) {
      console.log(errorResponse);
      $("#recipesFromFridge").html(
        `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
    });
}


function fetchRecipefromReq(event) {
  $("#recipesFromReq").html("");


  var input1 = $("#intolerances").val();
  var input2 = $("#dietaryReq").val();
  var input3 = $("#cuisine").val();

  if (!input1 && !input2 && !input3) {
    $("#recipesFromReq").html(`<h5>Please enter a requirement.</h5>`);
    return;
  }

  fetch(`https://api.spoonacular.com/recipes/search?cuisine=${input3}&diet=${input2}&intolerances=${input1}&apiKey=c4df18729af3439f923864d003dc20b5&number=5`)
    .then(function(response) {
      response.json().then(function(data) {
        console.log(data);
        $("#recipesFromReq").html(function() {
          if (data.length == 0) {
            return `<div class="clearfix ">No recipes!</div>`;
          }

          var listItemsHTML = data.results.map(function(key) {
            return `<li>
                   <a href="https://spoonacular.com/${key.title}" target="_blank" class="text-decoration-none color-pink">${key.title}</a>
                </li>`;
          });

          return `<div class="clearfix">
                <h3>
                    <strong>Top 5 recipes for your search:</strong>
                </h3>
                <ul class="list-unstyled">
                    ${listItemsHTML.join("\n")}
                </ul>
            </div>`;
        });
      });
    })
    .catch(function(errorResponse) {
      console.log(errorResponse);
      $("#recipesFromReq").html(
        `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
    });
}
