const fs = require('fs')

const commitTemplate = fs.readFileSync('commit.hbs').toString()

module.exports = {
  github: {
    release: true,
  },
  git: {
    commitMessage: 'release: release v${version}',
  },
  npm: {
    publish: true,
  },
  hooks: {
    'after:bump': 'echo 更新版本成功',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      infile: 'CHANGELOG.md',
      header: '# Changelog',
      writerOpts: {
        commitPartial: commitTemplate,
      },
    },
  },
}
