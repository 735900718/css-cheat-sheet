<style lang="stylus" scoped>
h2 {
  margin-bottom: 30px;
}

.directory-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-height: 500px;
  margin: auto;
  box-shadow: 5px 5px 25px -10px rgba(0, 0, 0, 0.6);
}

.directory-container__title {
  width: 200px;
  margin: 50px auto 30px;
  text-align: center;
}

.directory-container__group {
  width: 80%;
}

.directory-container__item {
  line-height: 2em;
  display: flex;
  align-items: center;
}

.directory-container__item-line {
  margin: 0 20px;
  flex-grow: 1;
  height: 0px;
  border-top: 2px dashed;
}
</style>

<template>
  <div>
    <h2>效果</h2>
    <div class="directory-container">
      <h3 class="directory-container__title">目&nbsp;&nbsp;&nbsp;&nbsp;录</h3>
      <ul class="directory-container__group">
        <li class="directory-container__item">
          <div>时间管理大师</div>
          <div class="directory-container__item-line"></div>
          <div>1页</div>
        </li>
        <li class="directory-container__item">
          <div>后浪</div>
          <div class="directory-container__item-line"></div>
          <div>18页</div>
        </li>
        <li class="directory-container__item">
          <div>相声选段</div>
          <div class="directory-container__item-line"></div>
          <div>365页</div>
        </li>
      </ul>
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
const cssStr = ``;
export default {
  methods: {
    handleHTMLCode() {
      let codeStr = `<div class="directory-container">
  <h3 class="directory-container__title">目&nbsp;&nbsp;&nbsp;&nbsp;录</h3>
  <ul class="directory-container__group">
    <li class="directory-container__item">
      <div>时间管理大师</div>
      <div class="directory-container__item-line"></div>
      <div>1页</div>
    </li>
    <li class="directory-container__item">
      <div>后浪</div>
      <div class="directory-container__item-line"></div>
      <div>18页</div>
    </li>
    <li class="directory-container__item">
      <div>相声选段</div>
      <div class="directory-container__item-line"></div>
      <div>365页</div>
    </li>
  </ul>
</div>`;
      
      let htmlCode = Prism.highlight(codeStr, Prism.languages.html);
      this.$refs["html-code-container"].innerHTML = htmlCode;
    },
    handleCssCode() {
      let codeStr = `.directory-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-height: 500px;
  margin: auto;
  box-shadow: 5px 5px 25px -10px rgba(0, 0, 0, 0.6);
}

.directory-container__title {
  width: 200px;
  margin: 50px auto 30px;
  text-align: center;
}

.directory-container__group {
  width: 80%;
}

.directory-container__item {
  line-height: 2em;
  display: flex;
  align-items: center;
}

.directory-container__item-line {
  margin: 0 20px;
  flex-grow: 1;
  height: 0px;
  border-top: 2px dashed;
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