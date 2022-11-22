function generateHTML(data){

    const mgrArr = data.filter(element => {
        return element.constructor.name == 'Manager';
      });
    
    const engArr = data.filter(element => {
        return element.constructor.name == 'Engineer';
    });

    const intArr = data.filter(element => {
        return element.constructor.name == 'Intern';
    });

    return `<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.2.1/css/all.css">
</head>
<body>
<div class="container py-5">
<div class="row mb-4">
  <div class="col-lg-5">
    <h2 class="display-4 font-weight-light">MY TEAM</h2>
    </div>
</div>
<div class="row text-center">
${mgrArr.map((manager) => {
    return `<div class="col-xl-3 col-sm-6 mb-5">
  <div class="bg-white rounded shadow-sm py-5 px-4">
    <i class="fa-solid fa-mug-hot"></i>
    <h5 class="card-title">${manager.name}</h5>
    <p class="card-text">${manager.getRole()}</p>
    <p class="card-text"><small class="text-muted">e-mail: <a href="mailto: ${manager.email}">${manager.email}</a></small></p>
    <p class="card-text"><small class="text-muted">ID: ${manager.id}</small></p>
    <p class="card-text"><small class="text-muted">Office Number: ${manager.officeNumber}</small></p>
  </div>
</div>`
}).join(' ')}

${engArr.map((engineer) => {
    return `<div class="col-xl-3 col-sm-6 mb-5">
  <div class="bg-white rounded shadow-sm py-5 px-4">
    <i class="fa-solid fa-glasses"></i>
    <h5 class="card-title">${engineer.name}</h5>
    <p class="card-text">${engineer.getRole()}</p>
    <p class="card-text"><small class="text-muted">e-mail: <a href="mailto: ${engineer.email}">${engineer.email}</a></small></p>
    <p class="card-text"><small class="text-muted">ID: ${engineer.id}</small></p>
    <p class="card-text"><small class="text-muted">gitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></small></p>
  </div>
</div>`
}).join(' ')}
${intArr.map((intern) => {
  return `<div class="col-xl-3 col-sm-6 mb-5">
<div class="bg-white rounded shadow-sm py-5 px-4">
<i class="fa-solid fa-user-graduate"></i>
  <h5 class="card-title">${intern.name}</h5>
  <p class="card-text">${intern.getRole()}</p>
  <p class="card-text"><small class="text-muted">e-mail: <a href="mailto: ${intern.email}">${intern.email}</a></small></p>
  <p class="card-text"><small class="text-muted">ID: ${intern.id}</small></p>
  <p class="card-text"><small class="text-muted">School: ${intern.school}</small></p>
</div>
</div>`
}).join(' ')}
</div>
</div>
</body>
</html>`;
}

module.exports = generateHTML;