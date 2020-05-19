<style lang="stylus" scoped>
input {
  width: 50px;
  line-height: 1.3em;
}

.polygon-container {
  display: flex;
  flex-direction: row;
}

.polygon-container__ctrl {
  line-height: 2em;
  min-width: 30%;
}

.polygon-container__view {
  position: relative;
  flex: 1;
  height: 500px;
  background-color: #fff;
  background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%), linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);
  background-size: 16px 16px;
  background-position: 0 0, 8px 8px;
}

.polygon-container__polygon {
  transition: all 0.2s;
}
</style>

<template>
  <div>
    <div class="polygon-container">
      <div class="polygon-container__ctrl">
        <h2>控制</h2>
        <label>
          <input
            type="number"
            v-model="sides"
            :min="min"
            :max="max"
            :style="{
            borderColor: sides < min || sides > max ? 'red' : ''
          }"
          />
          <span>条边</span>
        </label>
        <br />
        <label>
          <span>大小：</span>
          <input type="number" v-model="size" /> px
        </label>
      </div>
      <div class="polygon-container__view center">
        <div style="border: 1px solid rgba(0, 0, 0, .2); border-radius: 50%;">
          <div class="polygon-container__polygon" :style="polygonStyle"></div>
        </div>
      </div>
    </div>

    <h2>CSS</h2>
    <div class="language-css extra-class">
      <pre class="language-css"><code ref="css-code-container"></code></pre>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
import style from "../styles/palette.styl";
export default {
  data() {
    return {
      sides: 3,
      min: 3,
      max: 30,
      size: 200
    };
  },
  computed: {
    polygonStyle() {
      let polygon = this.handlePolygon();
      let codeStr = `.polygon {
  width: ${this.size}px;
  height: ${this.size}px;
  background: ${style.accentColor};
  clipPath: ${polygon};
}`;
      this.$nextTick(() => {
        this.handleCssCode(codeStr);
      });
      return {
        width: this.size + "px",
        height: this.size + "px",
        background: style.accentColor,
        clipPath: polygon
      };
    }
  },
  methods: {
    handlePolygon() {
      if (this.sides < this.min) return "";
      if (this.sides > this.max) return "";
      let deg = (2 * Math.PI) / this.sides;
      let points = [];
      for (let i = 0; i < this.sides; i++) {
        let theta = deg * i;
        let x = 50 * Math.cos(theta) + 50 + "%";
        let y = 50 * Math.sin(theta) + 50 + "%";
        points.push("    " + x + " " + y);
      }
      return `polygon(\n${points.join(",\n")}\n  )`;
    },
    handleCssCode(codeStr) {
      let cssCode = Prism.highlight(codeStr, Prism.languages.css);
      this.$refs["css-code-container"].innerHTML = cssCode;
    }
  }
};
</script>size