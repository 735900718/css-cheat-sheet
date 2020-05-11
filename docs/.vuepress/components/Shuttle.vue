<style lang="stylus" scoped>
.shuttle-container {
  position: relative;
  width: 500px;
  height: 500px;
  cursor: col-resize;
}

.shuttle-container__left, .shuttle-container__right {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.shuttle-container__left {
  background: #bacf65;
}

.shuttle-container__right {
  background: #bec936;
}

.shuttle-container__contant {
  text-align: center;
  line-height: 500px;
  font-size: 28px;
  font-weight: blod;
  width: 500px;
  height: 500px;
}
</style>

<template>
  <div>
    <!-- <h2>效果</h2>
    <div class="shuttle-container" id="shuttle-container">
      <div class="shuttle-container__right">
        <div class="shuttle-container__contant">bazinga!</div>
      </div>
      <div class="shuttle-container__left">
        <div class="shuttle-container__contant">鼠标划开有惊喜哦</div>
      </div>
    </div> -->
    <!-- <h2>css部分</h2>
    <div class="language-css extra-class">
      <pre class="language-css"><code ref="css-code-container"></code></pre>
    </div>

    <h2>JS部分</h2>
    <div class="language-javascript extra-class">
      <pre class="language-javascript"><code ref="js-code-container"></code></pre>
    </div> -->

    <p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="html,result" data-user="735900718" data-slug-hash="yLYjWZj" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="效果-穿梭机">
      <span>See the Pen <a href="https://codepen.io/735900718/pen/yLYjWZj">
      效果-穿梭机</a> by 梁玉珂 (<a href="https://codepen.io/735900718">@735900718</a>)
      on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
  </div>
</template>

<script>
// import Prism from "prismjs";

export default {
//   methods: {
//     handleCssCode() {
//       const cssStr = `.shuttle-container {
//   position: relative;
//   width: 500px;
//   height: 500px;
//   cursor: col-resize;
// }
// .shuttle-container__left,
// .shuttle-container__right {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// }
// .shuttle-container__left {
//   background: #bacf65;
// }
// .shuttle-container__right {
//   background: #bec936;
// }
// .shuttle-container__contant {
//   text-align: center;
//   line-height: 500px;
//   font-size: 28px;
//   font-weight: blod;
//   width: 500px;
//   height: 500px;
// }`;
//       let cssCode = Prism.highlight(cssStr, Prism.languages.css);
//       this.$refs["css-code-container"].innerHTML = cssCode;
//     },
//     handleJSCode() {
//       const jsStr = `var container = document.getElementById("shuttle-container");
// var containerLeft = container.querySelector(".shuttle-container__left");
// container.addEventListener("mousemove", e => {
//   containerLeft.style.width = e.offsetX + "px";
// });`;
//       let JSCode = Prism.highlight(jsStr, Prism.languages.javascript);
//       this.$refs["js-code-container"].innerHTML = JSCode;
//     },
//   },
//   mounted() {
//     var container = document.getElementById("shuttle-container");
//     var containerLeft = container.querySelector(".shuttle-container__left");
//     container.addEventListener("mousemove", e => {
//       containerLeft.style.width = e.offsetX + "px";
//     });

//     this.handleCssCode();
//     this.handleJSCode();
//   }
};
</script>
