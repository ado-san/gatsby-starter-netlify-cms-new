import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { parse, stringify } from 'yaml'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const appDirectory = path.resolve(scriptDirectory, '..')
const repositoryRoot = path.resolve(appDirectory, '..')
const imageSources = [
  path.join(repositoryRoot, 'static/img'),
  path.join(repositoryRoot, 'src/img'),
]
const destination = path.join(appDirectory, 'public/img')
const adminSource = path.join(repositoryRoot, 'static/admin')
const adminDestination = path.join(appDirectory, 'public/admin')
const adminEntry = path.join(appDirectory, 'admin/index.html')

function copyContents(source, target) {
  fs.mkdirSync(target, { recursive: true })

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name)
    const targetPath = path.join(target, entry.name)

    if (entry.isDirectory()) {
      copyContents(sourcePath, targetPath)
    } else {
      fs.copyFileSync(sourcePath, targetPath)
    }
  }
}

fs.rmSync(destination, { recursive: true, force: true })
for (const source of imageSources) copyContents(source, destination)

fs.rmSync(adminDestination, { recursive: true, force: true })
copyContents(adminSource, adminDestination)
fs.copyFileSync(adminEntry, path.join(adminDestination, 'index.html'))

const adminConfigPath = path.join(adminDestination, 'config.yml')
const adminConfig = parse(fs.readFileSync(adminConfigPath, 'utf8'))
adminConfig.backend.branch =
  process.env.CMS_BRANCH ||
  process.env.BRANCH ||
  (process.env.CONTEXT === 'production' ? 'master' : 'feature/nextjs-migration')
fs.writeFileSync(adminConfigPath, stringify(adminConfig))
