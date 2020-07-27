<style lang="stylus" scoped>
.button-container {
  --stepS: 0%;
  --stepM: 100%;
  --stepE: 200%;
  display: inline-block;
  padding: 0 22px;
  line-height: 3em;
  height: 3em;
  position: relative;
  border-radius: 1.5em;
  color: #fff;
  background: linear-gradient(to right, #2ebf91 var(--stepS, 0%), #8360c3 var(--stepM, 100%), #2ebf91 var(--stepE, 200%));
}
</style>

<template>
  <div>
    <h2>效果</h2>
    <div class="center" style="margin: 40px;">
      <div
        :style="{'--stepS': start + '%', '--stepM': middle + '%', '--stepE': end + '%'}"
        class="button-container"
        @mousemove="handleMousemove"
        ref="button"
      >
        hover me
      </div>
    </div>

    <!-- <h2>html</h2>
    <div class="language-html extra-class">
      <pre class="language-html"><code ref="html-code-container"></code></pre>
    </div>

    <h2>css</h2>
    <div class="language-css extra-class">
      <pre class="language-css"><code ref="css-code-container"></code></pre>
    </div> -->
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  data() {
    return {
      start: 0,
      middle: 100,
      end: 200
    };
  },
  methods: {
    handleMousemove(event) {
      let $button = this.$refs["button"];
      let step = 100;
      let middle = event.offsetX / $button.clientWidth * 100;
      this.start = middle - 100;
      this.middle = middle;
      this.end = middle + 100;
    },
    handleHTMLCode() {
      let codeStr = `<div class="button-container">
  <div class="button-container__left-line"></div>
  <div>hover me</div>
  <div class="button-container__right-line"></div>
</div>`;
      let htmlCode = Prism.highlight(codeStr, Prism.languages.html);
      this.$refs["html-code-container"].innerHTML = htmlCode;
    },
    handleCssCode() {
      let codeStr = `.button-container {
  display: inline-block;
  padding: 0 22px;
  line-height: 3em;
  height: 3em;
  position: relative;
}

.button-container__left-line, .button-container__right-line {
  transition: all 0.3s;
  position: absolute;
  width: 0;
  height: 0;
}

.button-container__left-line {
  left: 0;
  bottom: 0;
}

.button-container__right-line {
  right: 0;
  top: 0;
}

.button-container__left-line:before, .button-container__left-line:after, .button-container__right-line:before, .button-container__right-line:after {
  content: '';
  position: absolute;
  background: #aaa;
}

.button-container__left-line:before, .button-container__right-line:before {
  width: 2px;
  height: 100%;
}

.button-container__left-line:after, .button-container__right-line:after {
  width: 100%;
  height: 2px;
}

.button-container__left-line:before {
  left: 0;
  top: 0;
}

.button-container__left-line:after {
  left: 0;
  bottom: 0;
}

.button-container__right-line:before {
  right: 0;
  top: 0;
}

.button-container__right-line:after {
  right: 0;
  top: 0;
}

.button-container:hover .button-container__left-line, .button-container:hover .button-container__right-line {
  width: 100%;
  height: 100%;
}`;
      let cssCode = Prism.highlight(codeStr, Prism.languages.css);
      this.$refs["css-code-container"].innerHTML = cssCode;
    }
  },
  mounted() {
    // this.handleCssCode();
    // this.handleHTMLCode();
  }
};
</script>