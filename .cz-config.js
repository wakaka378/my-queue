'use strict'

module.exports = {
  types: [
    {
      value: 'release',
      name: 'ð  release:  åå¸çæ¬/åå¸æ ç­¾',
    },
    {
      value: 'WIP',
      name: 'ðª  WIP:      æ­£å¨è¿è¡çå·¥ä½',
    },
    {
      value: 'feat',
      name: 'â¨  feat:     æ°çç¹æ§',
    },
    {
      value: 'fix',
      name: 'ð  fix:      ä¿®å¤Bug',
    },
    {
      value: 'CI',
      name: 'ð§  CI:       ç®å½ç»æåæ´(CI, Buiding, Tool...)',
    },

    {
      value: 'docs',
      name: 'ð  docs:     ä»ææ¡£æ´æ¹',
    },
    {
      value: 'merge',
      name: 'ð  merge:    åå¹¶åæ¯',
    },
    {
      value: 'revert',
      name: 'âª  revert:   çæ¬åæ»',
    },
    {
      value: 'test',
      name: 'â  test:     æ·»å ç¼ºå¤±çæµè¯ææ´æ­£ç°ææµè¯',
    },
    {
      value: 'perf',
      name: 'ð  perf:     æé«æ§è½çä»£ç æ´æ¹',
    },
    {
      value: 'chore',
      name: 'ð¯   chore:    ä¸ä¿®æ¹srcææµè¯æä»¶çæ´æ¹ãä¾å¦æ´æ°æå»ºä»»å¡ãåç®¡çå¨',
    },
    {
      value: 'ui',
      name: 'ð  UI:       æ´æ°UIåæ ·å¼æä»¶ã',
    },
    {
      value: 'style',
      name: 'ð¨  style:    ä¸å½±åä»£ç å«ä¹çæ´æ¹ï¼ç©ºç½ãæ ¼å¼ãç¼ºå°åå·ç­ï¼',
    },
    {
      value: 'dep_up',
      name: 'ð¦  dep_up:   æ´æ°å·²ç¼è¯çæä»¶æåã',
    },

    {
      value: 'refactor',
      name: 'ð¨  refactor: æ¢ä¸ä¿®å¤éè¯¯ä¹ä¸æ·»å åè½çä»£ç æ´æ¹',
    },
    {
      value: 'mv',
      name: 'ð  mv:       ç§»å¨æéå½åæä»¶ã',
    },
  ],

  scopes: [],
  messages: {
    type: 'éæ©ä¸ç§ä½ çæäº¤ç±»å:',
    scope: 'éæ©ä¸ä¸ªscope (å¯é):',
    // used if allowCustomScopes is true
    customScope: 'è¡¨ç¤ºè¯¥åæ´çèå´:',
    subject: 'ç­è¯´æ:\n',
    body: 'é¿è¯´æï¼ä½¿ç¨"|"æ¢è¡(å¯é)ï¼\n',
    breaking: 'éå¼å®¹æ§è¯´æ (å¯é):\n',
    footer: 'å³èå³é­çissueï¼ä¾å¦ï¼#31, #34(å¯é):\n',
    confirmCommit: 'ç¡®å®æäº¤è¯´æ? yes/no',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
}
