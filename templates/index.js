const html = (data) => {
    return (`
    <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>My Team</title>
  </head>
  <body>
  <header class="bg-secondary text-center text-white">
    <h1>My Team Roster</h1>
    </header>
    // <div class="row border border-secondary">
    // <h2>Manager</h2>
    // ${data.manager}
    // </div>
    // <div class="row border border-dark">
    // <h2>Engineer</h2>
    // ${data.engineer}
    // </div>
    // <div class="row border border-primary">
    // <h2>Intern</h2>
    // ${data.intern}
    // </div>
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Manager</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>


  </body>
</html>`)
}

module.exports = html