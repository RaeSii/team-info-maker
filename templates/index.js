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
  <header class="bg-danger text-center text-white">
    <h1>My Team Roster</h1>
    </header>
    <div class="row m-3 p-3 d-flex justify-content-center border rounded border-danger">
    <h2 class="text-danger">Manager</h2>
    ${data.manager}
    </div>
    <div class="row m-3 p-3 d-flex justify-content-center border rounded border-danger">
    <h2 class="text-danger">Engineer</h2>
    ${data.engineer}
    </div>
    <div class="row m-3 p-3 d-flex justify-content-center border rounded border-danger">
    <h2 class="text-danger">Intern</h2>
    ${data.intern}
    </div>
  </body>
</html>`)
}

module.exports = html