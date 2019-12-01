function sendMail(contactForm) {
  emailjs.send("gmail", "health_helper", {
      "subject": contactForm.subject.value,
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "message": contactForm.message.value
    })
    .then(
      response => {
        console.log("SUCCESS", response);
      },
      error => {
        console.log("FAILED", error);
      });
  return false;
}

function fetchMealPlan(event) {
  $("#mealplan").html("");

  let input1 = $("#target").val();
  let input2 = $("#diet").val();
  let input3 = $("#dislikes").val();

  if (!input1 && !input2 && !input3) {
    $("#mealplan").html(`<h5>Please enter at least one requirement.</h5>`);
    return;
  }

  fetch(`https://api.spoonacular.com/recipes/mealplans/generate?timeFrame=day&targetCalories=${input1}&diet=${input2}&exclude=${input3}&apiKey=c4df18729af3439f923864d003dc20b5`)
    .then(response => {
      response.json().then(data => {
        console.log(data);
        $("#mealplan").html(() => {
          if (data.length == 0) {
            return `<div class="clearfix ">No results found!</div>`;
          }

          let listItemsHTML = data.meals.map(key => {
            let index = data.meals.indexOf(key) + 1;
            return `<li>
                   <a href="https://spoonacular.com/${key.title}" target="_blank" class="text-decoration-none color-pink">Meal ${index}: ${key.title}</a>
                </li>`;
          });

          return `<div class="clearfix text-center">
                <h3>
                    <strong>Your daily ${input2} meal plan:</strong>
                </h3>
                <div class="row">
                </div>
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
    .catch(errorResponse => {
      console.log(errorResponse);
      $("#recipesFromReq").html(
        `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
    });

}



function fetchRecipefromFridge(event) {
  $("#recipesFromFridge").html("");

  let input = $("#availableIngredients").val();
  if (!input) {
    $("#recipesFromFridge").html(`<h5>Please enter an ingredient.</h5>`);
    return;
  }

  fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&apiKey=c4df18729af3439f923864d003dc20b5&number=5`)
    .then(response => {
      response.json().then(data => {
        console.log(data);
        $("#recipesFromFridge").html(() => {
          if (data.length == 0) {
            return `<div class="clearfix ">No recipes!</div>`;
          }

          let listItemsHTML = data.map(key => {
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
    .catch(errorResponse => {
      console.log(errorResponse);
      $("#recipesFromFridge").html(
        `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
    });
}


function fetchRecipefromReq(event) {
  $("#recipesFromReq").html("");


  let input1 = $("#intolerances").val();
  let input2 = $("#dietaryReq").val();
  let input3 = $("#cuisine").val();

  if (!input1 && !input2 && !input3) {
    $("#recipesFromReq").html(`<h5>Please enter a requirement.</h5>`);
    return;
  }

  fetch(`https://api.spoonacular.com/recipes/search?cuisine=${input3}&diet=${input2}&intolerances=${input1}&apiKey=c4df18729af3439f923864d003dc20b5&number=5`)
    .then(response => {
      response.json().then(data => {
        console.log(data);
        $("#recipesFromReq").html(() => {
          if (data.length == 0) {
            return `<div class="clearfix ">No recipes!</div>`;
          }

          let listItemsHTML = data.results.map(key => {
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
    .catch(errorResponse => {
      console.log(errorResponse);
      $("#recipesFromReq").html(
        `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
    });
}
