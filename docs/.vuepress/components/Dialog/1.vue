<style lang="stylus" scoped>
.dialog-container {
  margin: 20px auto;
  position: relative;
  padding: 20px;
  width: 500px;
  line-height: 1.5em;
  border: 1px solid $accentColor;
  border-radius: 10px;
  background: #fff;
}

.dialog-container__left {
  position: absolute;
  top: 20px;
  left: -20px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0px 20px 20px 0px;
  border-color: transparent $accentColor transparent transparent;
}

.dialog-container__left:before {
  position: absolute;
  z-index: 1;
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0px 20px 20px 0px;
  border-color: transparent #fff transparent transparent;
  transform: translate(2px, 1px);
}
</style>

<template>
  <div>
    <h2>效果</h2>
    <div class="dialog-container">
      <div class="dialog-container__left"></div>
      <div
        class="dialog-container__content"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo eos odit ex quod vitae, culpa voluptatum. Blanditiis provident sunt beatae amet. Iusto debitis reprehenderit optio fugiat obcaecati eum laboriosam ducimus!</div>
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
import style from "../../styles/palette.styl";
export default {
  methods: {
    handleHTMLCode() {
      let codeStr = `<div class="dialog-container">
  <div class="dialog-container__left"></div>
  <div
    class="dialog-container__content"
  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo eos odit ex quod vitae, culpa voluptatum. Blanditiis provident sunt beatae amet. Iusto debitis reprehenderit optio fugiat obcaecati eum laboriosam ducimus!</div>
</div>`;

      let htmlCode = Prism.highlight(codeStr, Prism.languages.html);
      this.$refs["html-code-container"].innerHTML = htmlCode;
    },
    handleCssCode() {
      let codeStr = `.dialog-container {
  margin: 20px auto;
  position: relative;
  padding: 20px;
  width: 500px;
  line-height: 1.5em;
  border: 1px solid $accentColor;
  border-radius: 10px;
  background: #fff;
}

.dialog-container__left {
  position: absolute;
  top: 20px;
  left: -20px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0px 20px 20px 0px;
  border-color: transparent $accentColor transparent transparent;
}

.dialog-container__left:before {
  position: absolute;
  z-index: 1;
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0px 20px 20px 0px;
  border-color: transparent #fff transparent transparent;
  transform: translate(2px, 1px);
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