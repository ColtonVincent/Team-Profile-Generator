const generateHTML = (data) => {
  const genManager = (managers) => {
    const html = []
    managers.forEach(manager => {
      html.push(` <div class="card">
      <div class="card-header">
          <h2 class="card-title">${manager.name}</h2>
          <h3 class="card-title">Manager</h3>
      </div>
      <div class="card-body">
          <ul>
              <li class="body-list">ID: ${manager.id}</li>
              <li class="body-list">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
              <li class="body-list">Office number: ${manager.officeNumber}</li>
          </ul>
      </div>
  </div>`)
    }); 
    return html.join('')
  }
  const genIntern = (interns) => {
    const html = []
    interns.forEach(intern => {
      html.push(` <div class="card">
      <div class="card-header">
          <h2 class="card-title">${intern.name}</h2>
          <h3 class="card-title">Intern</h3>
      </div>
      <div class="card-body">
          <ul>
              <li class="body-list">ID: ${intern.id}</li>
              <li class="body-list">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
              <li class="body-list">School: ${intern.school}</li>
          </ul>
      </div>
  </div>`)
    }); 
    return html.join('')
  }
  const genEngineer = (engineers) => {
    const html = []
    engineers.forEach(engineer => {
      html.push(` <div class="card">
      <div class="card-header">
          <h2 class="card-title">${engineer.name}</h2>
          <h3 class="card-title">Engineer</h3>
      </div>
      <div class="card-body">
          <ul>
              <li class="body-list">ID: ${engineer.id}</li>
              <li class="body-list">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
              <li class="body-list">Github:<a href="https://github.com/${engineer.github}">Github</a></li>
          </ul>

      </div>
  </div>`)
    }); 
    return html.join('')
  }

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="../dist/style.css">
      <title>Document</title>
  </head>
  <body>
      <header>
          <nav>My Team</nav>
      </header>
  <div class="card-wrapper">
  ${genManager(data.filter(manager => manager.getRole() === 'Manager'))}
  ${genIntern(data.filter(intern => intern.getRole() === 'Intern'))}
  ${genEngineer(data.filter(engineer => engineer.getRole() === 'Engineer'))}
  </div>
  </body>
  </html>
  `
}
module.exports = generateHTML










