const managerTemplate = (data) =>{
    return( `
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">ID: ${data.id}</p>
          <p class="card-text">Office Number: ${data.officeNumber}</p>
          <p class="card-text">ID: ${data.id}</p>
          <a href="mailto:${data.email}" class="btn btn-primary">Email: ${data.email}</a>
        </div>
      </div>
    </div>`)
}

module.exports = managerTemplate