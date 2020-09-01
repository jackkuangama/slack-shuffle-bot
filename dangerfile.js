if (!(danger.github.pr.body.includes('amaabca.visualstudio.com') ||
    danger.github.pr.body.includes('dev.azure.com') ||
    danger.github.pr.body.includes('app.opsgenie.com'))) {
  fail('Please provide a link to the relevant card in the Pull Request description 💩')
}

if (!(danger.github.pr.body.includes('Type of Change'))) {
  fail('Please specify the type of change in the Pull Request description 💩')
}

if (!(danger.github.pr.body.includes('Solution'))) {
  fail('Please specify the solution in the Pull Request description 💩')
}
