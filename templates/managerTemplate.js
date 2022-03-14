const managerTemplate = (data) =>{
    return( `
    <div class="card m-3" style="width: 18rem;">
    <div class="card-header bg-primary text-center text-white">
      ${data.name}<br>
      Manager
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${data.id}</li>
      <li class="list-group-item">Office Number: ${data.officeNumber}</li>
      <a href="mailto:${data.email}" class="btn btn-primary">Email: ${data.email}</a>
    </ul>
  </div>`)
}

module.exports = managerTemplate