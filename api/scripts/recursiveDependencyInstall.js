const path = require('path')
const fs = require('fs')
const child_process = require('child_process')

const installCommand = 'yarn'
const locationToBegin = '.'

const runYarnRecursive = folder => {
  const hasPackageJson = fs.existsSync(path.join(folder, 'package.json'))

  if (hasPackageJson) {
    console.log('\x1b[0m', '===================================================================')
    console.log('\x1b[36m', `Performing "${installCommand}" inside ${path.relative(root, folder)}/`)
    console.log('\x1b[0m', '===================================================================')

    runYarn(folder)
  }

  for (let subFolder of listSubFolders(folder)) {
    runYarnRecursive(subFolder)
  }
}

const runYarn = where => {
  child_process.execSync(installCommand, { cwd: where, env: process.env, stdio: 'inherit' })
}

const listSubFolders = folder => {
  return fs
    .readdirSync(folder)
    .filter(subFolder => fs.statSync(path.join(folder, subFolder)).isDirectory())
    .filter(subFolder => subFolder !== 'node_modules' && subFolder[0] !== '.')
    .map(subFolder => path.join(folder, subFolder))
}

// cwd is current working dir
const root = path.resolve(process.cwd(), locationToBegin)
runYarnRecursive(root)
