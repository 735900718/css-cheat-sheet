<style lang="stylus" scoped>
  .load-container { 
    position: relative;
    width: 80px;
    height: 80px;
    overflow: hidden;
  }
  .load-container__circle {
    position: absolute;
    top: 0; bottom: 0;
    margin: auto;
    width: 10px;
    height: 10px;
    background: #ed3321;
    border-radius: 50%;
    transform-origin: center;
    animation: loading 2s linear infinite;
    &:nth-child(2) {animation-delay: .5s}
    &:nth-child(3) {animation-delay: 1s}
    &:nth-child(4) {animation-delay: 1.5s}
  }
  @keyframes loading {
    0% {
      transform: translate(-20px, 0);
    }
    100% {
      transform: translate(40px, 0);
    }
  }
  .load-pacman {
    position: absolute;
    top: 0; bottom: 0;
    right: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .load-pacman:before,
  .load-pacman:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 25px;
    background: #fed71a;
  }
  .load-pacman:before {
    animation: load-pacman-up 1s infinite;
    transform-origin: center 100%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }
  .load-pacman:after {
    bottom: 0;
    transform-origin: center 0;
    animation: load-pacman-down 1s infinite;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
  }
  @keyframes load-pacman-up {
    0%, 100% {transform: rotate(0deg)}
    50% {transform: rotate(30deg)}
  }
  @keyframes load-pacman-down {
    0%, 100% {transform: rotate(0deg)}
    50% {transform: rotate(-30deg)}
  }
</style>

<template>
  <div>
    <h2 id="loading-3">
      <a href="#loading-3" class="header-anchor">#</a> loading-3
    </h2>

    <div class="load-container">
      <div class="load-container__circle"></div>
      <div class="load-container__circle"></div>
      <div class="load-container__circle"></div>
      <div class="load-container__circle"></div>
      <div class="load-pacman"></div>
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
const cssStr = ``;
export default {
  methods: {
    handleHTMLCode() {
      let codeStr = `<div class="load-container">
  <div class="load-container__circle"></div>
  <div class="load-container__circle"></div>
  <div class="load-container__circle"></div>
  <div class="load-container__circle"></div>
  <div class="load-pacman"></div>
</div>`;
      let htmlCode = Prism.highlight(codeStr, Prism.languages.html);
      this.$refs["html-code-container"].innerHTML = htmlCode; 
    },
    handleCssCode() {
      let codeStr = `.load-container { 
  position: relative;
  width: 80px;
  height: 80px;
  overflow: hidden;
}
.load-container__circle {
  position: absolute;
  top: 0; bottom: 0;
  margin: auto;
  width: 10px;
  height: 10px;
  background: #ed3321;
  border-radius: 50%;
  transform-origin: center;
  animation: loading 2s linear infinite;
  &:nth-child(2) {animation-delay: .5s}
  &:nth-child(3) {animation-delay: 1s}
  &:nth-child(4) {animation-delay: 1.5s}
}
@keyframes loading {
  0% {
    transform: translate(-20px, 0);
  }
  100% {
    transform: translate(40px, 0);
  }
}
.load-pacman {
  position: absolute;
  top: 0; bottom: 0;
  right: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.load-pacman:before,
.load-pacman:after {
  content: '';
  position: absolute;
  width: 50px;
  height: 25px;
  background: #fed71a;
}
.load-pacman:before {
  animation: load-pacman-up 1s infinite;
  transform-origin: center 100%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
.load-pacman:after {
  bottom: 0;
  transform-origin: center 0;
  animation: load-pacman-down 1s infinite;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
@keyframes load-pacman-up {
  0%, 100% {transform: rotate(0deg)}
  50% {transform: rotate(30deg)}
}
@keyframes load-pacman-down {
  0%, 100% {transform: rotate(0deg)}
  50% {transform: rotate(-30deg)}
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