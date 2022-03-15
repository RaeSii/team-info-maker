const internTemplate = (data) =>{
    return( `
    <div class="card m-3 shadow" style="width: 18rem;">
    <div class="card-header bg-secondary text-center text-white">
      <h3>${data.name}</h3>
      Intern
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${data.id}</li>
      <li class="list-group-item">School: ${data.school}</li>
      <a href="mailto:${data.email}" class="btn btn-secondary">Email: ${data.email}</a>
    </ul>
  </div>`)
}

module.exports = internTemplate