<style scoped>
.timeline-container {
  padding-left: 50px;
}
.timeline-container__content {
  position: relative;
}
.timeline-container__content:before,
.timeline-container__content:after {
  content: "";
  position: absolute;
  /*控制时间轴整体位置偏移*/
  transform: translate(0, .3em);
}
.timeline-container__content:after {
  background: #b598a1;
  width: 10px;
  height: 10px;
  top: 0;
  /*位置距离计算：containerPadding / 2 + beforeWidth / 2，即： 50 / 2 + 10 / 2 = 30*/
  left: -30px;
  border-radius: 50%;
}
.timeline-container__content:before {
  width: 0;
  height: 100%;
  border: 1px dashed #b598a1;
  top: 0;
  /*位置距离计算：containerPadding / 2 + afterWidth / 2，即： 50 / 2 + 2 / 2 = 26*/
  left: -26px;

}
.timeline-container__content:last-child:before {
  display: none;
}
</style>

<template>
  <div>
    <h2>效果</h2>
    <div class="timeline-container">
      <div class="timeline-container__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab commodi repellat suscipit atque. Mollitia nulla amet porro, excepturi doloremque fugiat saepe ipsum minus blanditiis, nostrum ea quis accusantium. Quibusdam.
      </div>
      <div class="timeline-container__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam fugiat voluptatum laborum cupiditate repellat animi dicta saepe similique recusandae deserunt facere, id assumenda quas vel labore quasi incidunt laudantium!
        <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam recusandae, quae voluptatibus eius sapiente! Ad, deserunt accusamus, asperiores quo aliquid cupiditate sit ut, dolorum voluptatem id reprehenderit quod ex.
      </div>
      <div class="timeline-container__content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente sint ipsa porro sit aliquid quis consequatur fugit ducimus labore minus magni voluptatum, repellendus consequuntur unde, obcaecati necessitatibus similique ad? Nostrum.
        <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae aliquid officia! Quaerat, cum repudiandae velit exercitationem, ea dolorum officiis quos maxime voluptates, nulla ut cumque. Id quae quibusdam suscipit.
      </div>
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
import Prism from 'prismjs'
const cssStr = ``;
export default {
  methods: {
    handleHTMLCode() {
      let codeStr = `<div class="timeline-container">
  <div class="timeline-container__content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ab commodi repellat suscipit atque. Mollitia nulla amet porro, excepturi doloremque fugiat saepe ipsum minus blanditiis, nostrum ea quis accusantium. Quibusdam.
  </div>
  <div class="timeline-container__content">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veniam fugiat voluptatum laborum cupiditate repellat animi dicta saepe similique recusandae deserunt facere, id assumenda quas vel labore quasi incidunt laudantium!
    <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non magnam recusandae, quae voluptatibus eius sapiente! Ad, deserunt accusamus, asperiores quo aliquid cupiditate sit ut, dolorum voluptatem id reprehenderit quod ex.
  </div>
  <div class="timeline-container__content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente sint ipsa porro sit aliquid quis consequatur fugit ducimus labore minus magni voluptatum, repellendus consequuntur unde, obcaecati necessitatibus similique ad? Nostrum.
    <br>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae aliquid officia! Quaerat, cum repudiandae velit exercitationem, ea dolorum officiis quos maxime voluptates, nulla ut cumque. Id quae quibusdam suscipit.
  </div>
</div>`;
      let htmlCode = Prism.highlight(codeStr, Prism.languages.html);
      this.$refs["html-code-container"].innerHTML = htmlCode; 
    },
    handleCssCode() {
      let codeStr = `.timeline-container {
  padding-left: 50px;
}
.timeline-container__content {
  position: relative;
}
.timeline-container__content:before,
.timeline-container__content:after {
  content: "";
  position: absolute;
  /*控制时间轴整体位置偏移*/
  transform: translate(0, .3em);
}
.timeline-container__content:after {
  background: #b598a1;
  width: 10px;
  height: 10px;
  top: 0;
  /*位置距离计算：containerPadding / 2 + beforeWidth / 2，即： 50 / 2 + 10 / 2 = 30*/
  left: -30px;
  border-radius: 50%;
}
.timeline-container__content:before {
  width: 0;
  height: 100%;
  border: 1px dashed #b598a1;
  top: 0;
  /*位置距离计算：containerPadding / 2 + afterWidth / 2，即： 50 / 2 + 2 / 2 = 26*/
  left: -26px;

}
.timeline-container__content:last-child:before {
  display: none;
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