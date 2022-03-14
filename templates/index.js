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
    <div class="row m-3 p-3 d-flex justify-content-center">
    <div class="row border border-secondary">
    <h2>Manager</h2>
    ${data.manager}
    </div>
    <div class="row border border-dark">
    <h2>Engineer</h2>
    ${data.engineer}
    </div>
    <div class="row border border-primary">
    <h2>Intern</h2>
    ${data.intern}
    </div>
    </div>
  </body>
</html>`)
}

module.exports = html