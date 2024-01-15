/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-prettier/skip-formatting'
    ],

    rules: {
        // prettier 专注于代码美观度(格式化工具)
        // 1.禁用格式化插件 prettier  关闭 format on save
        // 2.安装ESlint插件, 并配置保存时自动修复
        'prettier/prettier': [
            'warn',
            {
                singleQuote: true, // 单引号
                semi: false, // 无分号
                printWidth: 80, // 每行宽度至多80字符
                trailingComma: 'none', // 不加对象|数组最后逗号
                endOfLine: 'auto' // 换行符号不限制（win mac 不一致）
            }
        ],

        // ESlint 关注与代码规范, 如果不符合规范则会报错
        'vue/multi-word-component-names': [
            'off', // 规定单词必须用 xxx-xxx 形式, 否则报警告
            {
                ignores: ['index'] // vue组件名称多单词组成（忽略index.vue）
            }
        ],
        'vue/no-setup-props-destructure': ['off'], // 关闭 props 解构的校验(因为props解构会丢失响应式)
        // 💡 添加未定义变量错误提示，create-vue@3.6.3 关闭
        'no-undef': 'error'
    },
    globals: {
        ElMessage: 'readonly',
        ElMessageBox: 'readonly',
        ElLoading: 'readonly'
    }
}
