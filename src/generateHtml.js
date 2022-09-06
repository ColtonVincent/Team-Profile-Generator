const generateHTML = (data) => {
  const genManager = (managers) => {
    const html = []
    managers.forEach(manager => {
      html.push(`<div>
      <p>${manager.name}</p>
      <p>${manager.id}</p>
      <p>${manager.email}</p>
      <p>${manager.officeNumber}</p>
      </div>`)
    }); 
    return html.join('')
  }
  const genIntern = (interns) => {
    const html = []
    interns.forEach(intern => {
      html.push(`<div>
      <p>${intern.name}</p>
      <p>${intern.id}</p>
      <p>${intern.email}</p>
      <p>${intern.school}</p>
      </div>`)
    }); 
    return html.join('')
  }
  const genEngineer = (engineers) => {
    const html = []
    engineers.forEach(engineer => {
      html.push(`<div>
      <p>${engineer.name}</p>
      <p>${engineer.id}</p>
      <p>${engineer.email}</p>
      <p>${engineer.github}</p>
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
      <title>Document</title>
  </head>
  <body>
    ${genManager(data.filter(manager => manager.getRole() === 'Manager'))}
    ${genIntern(data.filter(intern => intern.getRole() === 'Intern'))}
    ${genEngineer(data.filter(engineer => engineer.getRole() === 'Engineer'))}
  </body>
  </html>`
}
module.exports = generateHTML













