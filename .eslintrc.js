module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/vue3-recommended",
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    "vue/max-attributes-per-line": 0,
    "vue/multi-word-component-names": 0,
    "vue/no-reserved-component-names": 0,
  },
};
