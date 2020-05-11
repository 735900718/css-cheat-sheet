<style lang="stylus" scoped>
.load-container {
  position: relative;
  width: 50px;
  height: 50px;
}

.load-container__circle {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 20%;
  height: 20%;
  background: $accentColor;
  border-radius: 50%;
  transform-origin: center;
  animation: loading 2s infinite;
  &:nth-child(1) {animation-delay: .1s}
  &:nth-child(2) {animation-delay: .2s}
  &:nth-child(3) {animation-delay: .3s}
  &:nth-child(4) {animation-delay: .4s}
  &:nth-child(5) {animation-delay: .5s}
}

@keyframes loading {
  0% {
    transform: rotate(0deg) translate(0, -20px); // 偏移距离计算方式：（container半径 50px / 2 ） - （circle半径 10px / 2）
  }

  100% {
    transform: rotate(360deg) translate(0, -20px);
  }
}
</style>

<template>
  <div>
    <h2 id="loading-2">
      <a href="#loading-2" class="header-anchor">#</a> loading-2
    </h2>

    <div class="load-container">
      <div class="load-container__circle"></div>
      <div class="load-container__circle"></div>
      <div class="load-container__circle"></div>
      <div class="load-container__circle"></div>
      <div class="load-container__circle"></div>
    </div>
    
    <div class="language-html extra-class">
      <pre class="language-html"><code ref="html-code-container"></code></pre>
    </div>
    <div class="language-css extra-class">
      <pre class="language-css"><code ref="css-code-container"></code></pre>
    </div>
  </div>
</template>

<script>
import style from "../../styles/palette.styl";
import Prism from "prismjs";
export default {
  methods: {
    handleHTMLCode() {
      let codeStr = `<div class="load-container">
  <div class="load-container__circle"></div>
  <div class="load-container__circle"></div>
  <div class="load-container__circle"></div>
  <div class="load-container__circle"></div>
  <div class="load-container__circle"></div>
</div>`;
      let htmlCode = Prism.highlight(codeStr, Prism.languages.html);
      this.$refs["html-code-container"].innerHTML = htmlCode; 
    },
    handleCssCode() {
      let codeStr = `.load-container {
  position: relative;
  width: 50px;
  height: 50px;
}

.load-container__circle {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 20%;
  height: 20%;
  background: ${style.accentColor};
  border-radius: 50%;
  transform-origin: center;
  animation: loading 2s infinite;
  &:nth-child(1) {animation-delay: .1s}
  &:nth-child(2) {animation-delay: .2s}
  &:nth-child(3) {animation-delay: .3s}
  &:nth-child(4) {animation-delay: .4s}
  &:nth-child(5) {animation-delay: .5s}
}

@keyframes loading {
  0% {
    transform: rotate(0deg) translate(0, -20px); // 偏移距离计算方式：（container半径 50px / 2 ） - （circle半径 10px / 2）
  }

  100% {
    transform: rotate(360deg) translate(0, -20px);
  }
}`;
      let cssCode = Prism.highlight(codeStr, Prism.languages.css);
      this.$refs["css-code-container"].innerHTML = cssCode; 
    }
  },
  mounted () {
    this.handleCssCode();
    this.handleHTMLCode();
  }
};
</script>