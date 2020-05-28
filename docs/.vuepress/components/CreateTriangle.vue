<style lang="stylus" scoped>
.triangle-container {
  display: flex;
}

h3 {
  margin: 20px 0;
}

.triangle-container__ctrl {
  min-width: 40%;
}

.triangle-container__direction {
  margin: 20px 50px;
  position: relative;
  width: 150px;
  height: 150px;

  &:after {
    content: '';
    position: absolute;
    width: 62%;
    height: 62%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }
}

.triangle-container__direction-box {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  &:nth-child(2) {
    width: 90%;
    height: 90%;
    transform: rotate(45deg);

    .triangle-container__direction-item {
      background: lighten(#a7a8bd, 30%);
    }
  }
}

.triangle-container__direction-item {
  width: 50%;
  height: 50%;
  float: left;
  cursor: pointer;
  transition: all 0.3s;
  background: #a7a8bd;

  &:hover, &.active {
    background: $accentColor !important;
  }
}

.triangle-container__size {
  label {
    display: flex;
    margin: 20px auto;
  }

  span {
    width: 50px;
    text-align: right;
  }

  input {
    margin: 0 12px;
    width: 50px;
  }

  input[readonly] {
    color: lighten($textColor, 35%);
  }
}

.triangle-container__view {
  position: relative;
  flex: 1;
  height: 500px;
  background-color: #fff;
  background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%), linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%);
  background-size: 16px 16px;
  background-position: 0 0, 8px 8px;
}

.triangle-container__triangle {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transition: all 0.2s;
}
</style>

<template>
  <div>
    <div class="triangle-container">
      <div class="triangle-container__ctrl">
        <h3>方向</h3>
        <div class="triangle-container__direction">
          <div class="triangle-container__direction-box">
            <div
              class="triangle-container__direction-item"
              :class="{active: direction === 'top-left'}"
              @click="changeDirection('top-left')"
            ></div>
            <div
              class="triangle-container__direction-item"
              :class="{active: direction === 'top-right'}"
              @click="changeDirection('top-right')"
            ></div>
            <div
              class="triangle-container__direction-item"
              :class="{active: direction === 'bottom-left'}"
              @click="changeDirection('bottom-left')"
            ></div>
            <div
              class="triangle-container__direction-item"
              :class="{active: direction === 'bottom-right'}"
              @click="changeDirection('bottom-right')"
            ></div>
          </div>
          <div class="triangle-container__direction-box">
            <div
              class="triangle-container__direction-item"
              :class="{active: direction === 'top'}"
              @click="changeDirection('top')"
            ></div>
            <div
              class="triangle-container__direction-item"
              :class="{active: direction === 'right'}"
              @click="changeDirection('right')"
            ></div>
            <div
              class="triangle-container__direction-item"
              :class="{active: direction === 'left'}"
              @click="changeDirection('left')"
            ></div>
            <div
              class="triangle-container__direction-item"
              :class="{active: direction === 'bottom'}"
              @click="changeDirection('bottom')"
            ></div>
          </div>
        </div>

        <h3>类型</h3>
        <div class="triangle-container__type">
          <el-radio
            v-show="['top', 'right', 'bottom', 'left'].includes(direction)"
            v-model="type"
            :label="1"
          >等边</el-radio>
          <el-radio v-model="type" :label="2">等腰</el-radio>
          <el-radio v-model="type" :label="3">不等边</el-radio>
        </div>

        <h3>大小</h3>
        <div class="triangle-container__size">
          <el-form label-width="80px">
            <el-form-item label="宽度">
              <el-input-number
                :disabled="type == 3 && ['top', 'bottom'].includes(direction)"
                v-model="width"
                @change="() => {if (type == 2 && ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(direction)) this.height = this.width}"
              ></el-input-number> px
            </el-form-item>
            <el-form-item label="左">
              <el-input-number
                :disabled="type == 1 || type == 2 || (type == 3 && ['top-left', 'left', 'top-right', 'right', 'bottom-left', 'bottom-right'].includes(direction))"
                v-model="left"
              ></el-input-number> px
            </el-form-item>
            <el-form-item label="右">
              <el-input-number
                :disabled="type == 1 || type == 2 || (type == 3 && ['top-left', 'left', 'top-right', 'right', 'bottom-left', 'bottom-right'].includes(direction))"
                v-model="right"
              ></el-input-number> px
            </el-form-item>
            <el-form-item label="高度">
              <el-input-number
                :disabled="type == 1 || (type == 3 && ['left', 'right'].includes(direction))"
                v-model="height"
                @change="() => {if (type == 2 && ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(direction)) this.width = this.height}"
              ></el-input-number> px
            </el-form-item>
            <el-form-item label="上">
              <el-input-number
                :disabled="type == 1 || type == 2 || (type == 3 && ['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'].includes(direction))"
                v-model="top"
              ></el-input-number> px
            </el-form-item>
            <el-form-item label="下">
              <el-input-number
                :disabled="type == 1 || type == 2 || (type == 3 && ['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'].includes(direction))"
                v-model="bottom"
              ></el-input-number> px
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="triangle-container__view">
        <div class="triangle-container__triangle" :style="triangleStyle"></div>
      </div>
    </div>

    <h2>CSS</h2>
    <div class="language-css extra-class">
      <pre class="language-css"><code ref="css-code-container"></code></pre>
    </div>
  </div>
</template>

<script>
import style from "../styles/palette.styl";
import Prism from "prismjs";
export default {
  data() {
    return {
      direction: "top",
      type: 2,
      width: 200,
      left: 100,
      right: 100,
      height: 100,
      top: 50,
      bottom: 50
    };
  },
  computed: {
    triangleStyle() {
      let width1 = 0,
        width2 = 0,
        width3 = 0,
        width4 = 0;
      let borderColor = "";
      if (this.type == 1) {
        var height = ((Math.sqrt(3) / 2) * this.width).toFixed(1);
        switch (this.direction) {
          case "top":
            width2 = this.width / 2;
            width3 = height;
            width4 = this.width / 2;
            break;
          case "right":
            width1 = this.width / 2;
            width3 = this.width / 2;
            width4 = height;
            break;
          case "bottom":
            width1 = height;
            width2 = this.width / 2;
            width4 = this.width / 2;
            break;
          case "left":
            width1 = this.width / 2;
            width2 = height;
            width3 = this.width / 2;
            break;
          default:
            break;
        }
      } else if (this.type == 2) {
        switch (this.direction) {
          case "top":
            width2 = this.width / 2;
            width3 = this.height;
            width4 = this.width / 2;
            break;
          case "top-right":
            width2 = this.width;
            width3 = this.height;
            break;
          case "right":
            width1 = this.height / 2;
            width3 = this.height / 2;
            width4 = this.width;
            break;
          case "bottom-right":
            width3 = this.height;
            width4 = this.width;
            break;
          case "bottom":
            width1 = this.height;
            width2 = this.width / 2;
            width4 = this.width / 2;
            break;
          case "bottom-left":
            width1 = this.height;
            width4 = this.width;
            break;
          case "left":
            width1 = this.height / 2;
            width2 = this.width;
            width3 = this.height / 2;
            break;
          case "top-left":
            width1 = this.height;
            width2 = this.width;
            break;
          default:
            break;
        }
      } else if (this.type == 3) {
        switch (this.direction) {
          case "top":
            width2 = this.right;
            width3 = this.height;
            width4 = this.left;
            break;
          case "top-right":
            width2 = this.width;
            width3 = this.height;
            break;
          case "right":
            width1 = this.top;
            width3 = this.bottom;
            width4 = this.width;
            break;
          case "bottom-right":
            width3 = this.height;
            width4 = this.width;
            break;
          case "bottom":
            width1 = this.height;
            width2 = this.right;
            width4 = this.left;
            break;
          case "bottom-left":
            width1 = this.height;
            width4 = this.width;
            break;
          case "left":
            width1 = this.top;
            width2 = this.width;
            width3 = this.bottom;
            break;
          case "top-left":
            width1 = this.height;
            width2 = this.width;
            break;
          default:
            break;
        }
      }
      switch (this.direction) {
        case "top":
          borderColor = `transparent transparent ${style.accentColor} transparent`;
          break;
        case "top-right":
          borderColor = `transparent ${style.accentColor} transparent transparent`;
          break;
        case "right":
          borderColor = `transparent transparent transparent ${style.accentColor}`;
          break;
        case "bottom-right":
          borderColor = `transparent transparent ${style.accentColor} transparent`;
          break;
        case "bottom":
          borderColor = `${style.accentColor} transparent transparent transparent`;
          break;
        case "bottom-left":
          borderColor = `transparent transparent transparent ${style.accentColor}`;
          break;
        case "left":
          borderColor = `transparent ${style.accentColor} transparent transparent`;
          break;
        case "top-left":
          borderColor = `${style.accentColor} transparent transparent transparent`;
          break;
        default:
          break;
      }
      let cssCode = `.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${width1}px ${width2}px ${width3}px ${width4}px;
  border-color: ${borderColor};
}`;
      this.$nextTick(() => {
        this.handleCssCode(cssCode);
      });
      return {
        width: "0",
        height: "0",
        borderStyle: "solid",
        borderWidth: `${width1}px ${width2}px ${width3}px ${width4}px`,
        borderColor
      };
    }
  },
  watch: {
    type() {
      if (this.type == 2) {
        if (
          ["top-left", "top-right", "bottom-left", "bottom-right"].includes(
            this.direction
          )
        ) {
          this.height = this.width;
        }
      }
    }
  },
  methods: {
    changeDirection(direction) {
      this.direction = direction;
      if (
        ["top-left", "top-right", "bottom-left", "bottom-right"].includes(
          direction
        )
      ) {
        this.height = this.width;
        if (this.type == 1) {
          this.type = 2;
        }
      }
    },
    handleCssCode(codeStr) {
      let cssCode = Prism.highlight(codeStr, Prism.languages.css);
      this.$refs["css-code-container"].innerHTML = cssCode;
    }
  }
};
</script>