module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    // 'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser', // 添加解析器
  },
  plugins: [
    'vue'
  ],
  settings: {
    'import/resolver': {
      // 配置alias
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'global-require': 0, // 解决 require 图片报错的问题
    'no-console': 'off',
    'no-debugger': 'off',
    'import/prefer-default-export': 'off', // Composition Function 不一定需要默认导出
    'max-len': ['error', { code: 160 }], // 单行最大160个字符
    'multiline-comment-style': ['error', 'starred-block'], // 格式化注释
    'object-curly-newline': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'prefer-template': 'off',
    // 修改函数中的参数 仅限下列中的变量才可以修改（请求接口、vuex中的state）
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'el',
          'mods',
          'req', // axios requests
          'request', // axios requests
          'config', // axios requests
          'res', // axios responses
          'response', // axios responses
          'state', // vuex state
          'styleContainer',
          'father',
        ],
      },
    ],
    // 允许使用 ++ --
    'no-plusplus': [
      'off',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    /* 配置在插件中定义的规则，必须在规则ID前加上插件名称和 /  例如：'vue/' 'import/' */
    // 关闭省略扩展名时的报错
    'import/extensions': 0,
    // 关闭html文件末尾报错 正常应该是检测只能在template内部注释的问题
    'vue/comment-directive': 0,
    // 关闭未使用声明变量的报错
    'no-unused-vars': 0,
    'import/no-unresolved': 0,
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 4,
      },
      multiline: {
        max: 1,
      },
    }],
  },
}
