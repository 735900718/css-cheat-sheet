<style lang="stylus" scoped>
.header-container {
  margin: 20px 0;
}

.header-container {
  display: flex;
  line-height: 3em;
  box-shadow: 0 2px 20px -10px rgba(0, 0, 0, 0.6);
}

.header-container__logo {
  width: 150px;
  text-align: center;
  background: $accentColor;
}

.header-container__nav {
  margin-left: auto;
  display: flex;
}

.header-container__nav-item {
  cursor: pointer;
  margin-left: 10px;
}

.header-container__nav-item:hover {
  color: $accentColor;
}
</style>

<template>
  <div style="overflow: hidden; min-height: 400px">
    <h2>效果</h2>
    <div class="header-container">
      <span class="header-container__logo">LOGO</span>

      <nav class="header-container__nav">
        <div class="header-container__nav-item">首页</div>
        <div class="header-container__nav-item">公司信息</div>
        <div class="header-container__nav-item">新闻动态</div>
        <div class="header-container__nav-item">关于我们</div>
      </nav>
    </div>

    <h2>html</h2>
    <div class="language-html extra-class">
      <pre class="language-html"><code ref="html-code-container"></code></pre>
    </div>
    <h2>css</h2>
    <div class="language-css extra-class">
      <pre class="language-css"><code ref="css-code-container"></code></pre>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
import style from "../styles/palette.styl";
const cssStr = ``;
export default {
  methods: {
    handleHTMLCode() {
      let codeStr = `<div class="header-container">
  <span class="header-container__logo">LOGO</span>

  <nav class="header-container__nav">
    <div class="header-container__nav-item">首页</div>
    <div class="header-container__nav-item">公司信息</div>
    <div class="header-container__nav-item">新闻动态</div>
    <div class="header-container__nav-item">关于我们</div>
  </nav>
</div>`;

      let htmlCode = Prism.highlight(codeStr, Prism.languages.html);
      this.$refs["html-code-container"].innerHTML = htmlCode;
    },
    handleCssCode() {
      let codeStr = `.header-container {
  display: flex;
  line-height: 3em;
  box-shadow: 0 2px 20px -10px rgba(0, 0, 0, 0.6);
}

.header-container__logo {
  width: 150px;
  text-align: center;
  background: ${style.accentColor};
}

.header-container__nav {
  margin-left: auto;
  display: flex;
}

.header-container__nav-item {
  cursor: pointer;
  margin-left: 10px;
}

.header-container__nav-item:hover {
  color: ${style.accentColor};
}`;
      let cssCode = Prism.highlight(codeStr, Prism.languages.css);
      this.$refs["css-code-container"].innerHTML = cssCode;
    }
  },
  mounted() {
    this.handleCssCode();
    this.handleHTMLCode();
  }
};
</script>