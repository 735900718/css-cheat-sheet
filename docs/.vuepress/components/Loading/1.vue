<template>
  <div>
    <h2 id="loading-1">
      <a href="#loading-1" class="header-anchor">#</a> loading-1
    </h2>

    <div class="load-container">
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
import style from '../../styles/palette.styl'
import Prism from 'prismjs'
export default {
  methods: {
    handleHTMLCode() {
      let codeStr = `<div class="load-container">
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
  width: 100%;
  height: 100%;
  background: ${style.accentColor};
  border-radius: 50%;
  transform-origin: center;
  animation: loading 2s infinite;
  &:nth-child(1) {
    animation-delay: 1s;
  }
}
@keyframes loading {
  0, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0;
    transform: scale(0);
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
}
</script>

<style lang="stylus" scoped>
  .load-container { 
    position: relative;
    width: 50px;
    height: 50px;
  }
  .load-container__circle {
    position: absolute;
    width: 100%;
    height: 100%;
    background: $accentColor;
    border-radius: 50%;
    transform-origin: center;
    animation: loading 2s infinite;
    &:nth-child(1) {
      animation-delay: 1s;
    }
  }
  @keyframes loading {
    0, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0;
      transform: scale(0);
    }
  }
</style>