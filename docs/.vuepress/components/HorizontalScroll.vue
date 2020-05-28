<style lang="stylus" scoped>
.horizontal-scroll {
  height: 500px;
}

.horizontal-container {
  width: 500px;
  direction: rtl;
  transform-origin: 0 0;
  transform: rotate(-90deg) translate(-500px, 0);
  overflow-y: scroll;
  overflow-x: hidden;
}

.horizontal-container__item {
  background-color: #549688;
  direction: ltr;
  word-break: break-all;
  transform-origin: 50% 50%;
  transform: rotate(90deg);
}
</style>

<template>
  <div>
    <h2>效果</h2>
    <div class="horizontal-scroll" ref="horizontal-scroll">
      <div class="horizontal-container" :style="{height}">
        <div
          class="horizontal-container__item"
          :style="{height: itemHeight}"
        >在这里上下滚动鼠标滚轮试试，会丝般顺滑的左右滚动这个容器~</div>
        <div
          class="horizontal-container__item"
          :style="{height: itemHeight}"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nihil pariatur dolorem doloremque? Quia reiciendis esse itaque quos quaerat beatae ipsam iure officia atque minus nemo accusantium, alias eveniet. Laudantium?</div>
        <div
          class="horizontal-container__item"
          :style="{height: itemHeight}"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus quas, repellendus, recusandae distinctio, voluptas neque laudantium cumque molestias doloremque sapiente veniam at quam. Qui voluptas aspernatur fuga. Beatae, deleniti?</div>
        <div
          class="horizontal-container__item"
          :style="{height: itemHeight}"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur tenetur minus voluptate sit dicta voluptatem incidunt, laboriosam iste delectus vitae quae molestiae itaque officia unde amet quisquam. Illum, amet?</div>
        <div
          class="horizontal-container__item"
          :style="{height: itemHeight}"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, laborum beatae exercitationem quia, a tenetur vero error nemo ducimus rem saepe. Vitae quam quaerat laboriosam blanditiis. Enim a qui necessitatibus!</div>
      </div>
    </div>

    <h2>html</h2>
    <blockquote><p>行内样式中的数据需要通过JS获取</p></blockquote>
    <div class="language-html extra-class">
      <pre class="language-html"><code ref="html-code-container"></code></pre>
    </div>
    <h2>css</h2>
    <div class="language-css extra-class">
      <pre class="language-css"><code ref="css-code-container"></code></pre>
    </div>
    <h2>js</h2>
    <div class="language-js extra-class">
      <pre class="language-js"><code ref="js-code-container"></code></pre>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  data() {
    return {
      height: "100vw",
      itemHeight: "500px"
    };
  },
  methods: {
    getScrollbarWidth() {
      var scrollDiv = document.createElement("div");
      scrollDiv.style.cssText =
        "width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;";
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    },
    handleHTMLCode() {
      let codeStr = `<div class="horizontal-scroll" id="horizontal-scroll">
  <div class="horizontal-container" id="horizontal-container" style="height: ${this.height}">
    <div
      class="horizontal-container__item"
      style="height: ${this.itemHeight}"
    >在这里上下滚动鼠标滚轮试试，会丝般顺滑的左右滚动这个容器~</div>
    <div
      class="horizontal-container__item"
      style="height: ${this.itemHeight}"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nihil pariatur dolorem doloremque? Quia reiciendis esse itaque quos quaerat beatae ipsam iure officia atque minus nemo accusantium, alias eveniet. Laudantium?</div>
    <div
      class="horizontal-container__item"
      style="height: ${this.itemHeight}"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus quas, repellendus, recusandae distinctio, voluptas neque laudantium cumque molestias doloremque sapiente veniam at quam. Qui voluptas aspernatur fuga. Beatae, deleniti?</div>
    <div
      class="horizontal-container__item"
      style="height: ${this.itemHeight}"
    >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur tenetur minus voluptate sit dicta voluptatem incidunt, laboriosam iste delectus vitae quae molestiae itaque officia unde amet quisquam. Illum, amet?</div>
    <div
      class="horizontal-container__item"
      style="height: ${this.itemHeight}"
    >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, laborum beatae exercitationem quia, a tenetur vero error nemo ducimus rem saepe. Vitae quam quaerat laboriosam blanditiis. Enim a qui necessitatibus!</div>
  </div>
</div>`;

      let htmlCode = Prism.highlight(codeStr, Prism.languages.html);
      this.$refs["html-code-container"].innerHTML = htmlCode;
    },
    handleCssCode() {
      let codeStr = `.horizontal-scroll {
  height: 500px;
}
.horizontal-container {
  width: 500px;
  direction: rtl;
  transform-origin: 0 0;
  transform: rotate(-90deg) translate(-500px, 0);
  overflow-y: scroll;
  overflow-x: hidden;
}

.horizontal-container__item {
  background-color: #549688;
  direction: ltr;
  word-break: break-all;
  transform-origin: 50% 50%;
  transform: rotate(90deg);
}`;
      let cssCode = Prism.highlight(codeStr, Prism.languages.css);
      this.$refs["css-code-container"].innerHTML = cssCode;
    },
    handleJSCode() {
      let codeStr = `
// 获取滚动条宽度
function getScrollbarWidth() {
  var scrollDiv = document.createElement("div");
  scrollDiv.style.cssText =
    "width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;";
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setHorizontalContainerHeight() {
  let $horizontalScroll = document.querySelector("#horizontal-scroll");
  let $horizontalContainer = document.querySelector("#horizontal-container");
  $horizontalContainer.style.height = $horizontalScroll.clientWidth + "px";
}
function setHorizontalItemsHeight() {
  let $horizontalScroll = document.querySelector("#horizontal-scroll");
  let $horizontalItems = document.querySelectorAll("#$horizontal-scroll .horizontal-container__item");
  $horizontalItems.forEach($item => $item.style.height = 500 - getScrollbarWidth() + "px")
}
`;
      let jsCode = Prism.highlight(codeStr, Prism.languages.javascript);
      this.$refs["js-code-container"].innerHTML = jsCode;
    }
  },
  mounted() {
    let $horizontalScroll = this.$refs["horizontal-scroll"];
    this.height = $horizontalScroll.clientWidth + "px";
    this.itemHeight = 500 - this.getScrollbarWidth() + "px";

    this.handleHTMLCode();
    this.handleCssCode();
    this.handleJSCode();
  }
};
</script>