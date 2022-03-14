const internTemplate = (data) =>{
    return( `
    <div class="card m-3" style="width: 18rem;">
    <div class="card-header bg-primary text-center text-white">
      ${data.name}<br>
      Intern
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${data.id}</li>
      <li class="list-group-item">School: ${data.school}</li>
      <a href="mailto:${data.email}" class="btn btn-primary">Email: ${data.email}</a>
    </ul>
  </div>`)
}

module.exports = internTemplate