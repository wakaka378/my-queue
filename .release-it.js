module.exports = {
  github: {
    release: true,
  },
  git: {
    commitMessage: ':rocket: release: release v${version}',
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
      preset: 'angular',
      //   preset: {
      //     name: 'conventionalcommits',
      //     types: [
      //       {
      //         type: ':rocket: release',
      //         section: '🚀  release:  发布版本/发布标签',
      //       },
      //       {
      //         type: ':construction: WIP',
      //         section: '💪  WIP:      正在进行的工作',
      //       },
      //       {
      //         type: ':sparkles: feat',
      //         section: '✨  feat:     新的特性',
      //       },
      //       {
      //         type: ':bug: fix',
      //         section: '🐛  fix:      修复Bug',
      //       },
      //       {
      //         type: ':wrench: CI',
      //         section: '🔧  CI:       目结构变更(CI, Buiding, Tool...)',
      //       },

      //       {
      //         type: ':pencil: docs',
      //         section: '📝  docs:     仅文档更改',
      //       },
      //       {
      //         type: ':twisted_rightwards_arrows: merge',
      //         section: '🔀  merge:    合并分支',
      //       },
      //       {
      //         type: 'revert',
      //         section: '⏪  revert:   版本回滚',
      //       },
      //       {
      //         type: ':white_check_mark: test',
      //         section: '✅  test:     添加缺失的测试或更正现有测试',
      //       },
      //       {
      //         type: ':chart_with_upwards_trend: perf',
      //         section: '📈  perf:     提高性能的代码更改',
      //       },
      //       {
      //         type: ':thought_balloon: chore',
      //         section: '🗯   chore:    不修改src或测试文件的更改。例如更新构建任务、包管理器',
      //       },
      //       {
      //         type: ':lipstick: ui',
      //         section: '💄  UI:       更新UI和样式文件。',
      //       },
      //       {
      //         type: ':art: style',
      //         section: '🎨  style:     不影响代码含义的更改（空白、格式、缺少分号等）',
      //       },
      //       {
      //         type: ':package: dep_up',
      //         section: '📦  dep_up:   更新已编译的文件或包。',
      //       },

      //       {
      //         type: ':hammer: refactor',
      //         section: '🔨  refactor: 既不修复错误也不添加功能的代码更改',
      //       },
      //       {
      //         type: ':truck: mv',
      //         section: '🚚  mv:       移动或重命名文件。',
      //       },
      //     ],
      //   },
    },
  },
}
