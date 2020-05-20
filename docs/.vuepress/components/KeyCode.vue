<style lang="stylus" scoped>
.container {
  position: relative;
  display: inline-flex;
  overflow: hidden;
  min-width: 90px;
  height: 90px;
  padding: 0 8px 10px;
  border-radius: 3px;

  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    width: 100%;
    height: 100%;
    background: #aaa;
    border-radius: 3px;
  }
}

.keyCode-button {
  position: relative;
  padding: 0 12px;
  display: inline-flex;
  min-width: 80px;
  height: 80px;
  border: 1px solid $accentColor;
  border-radius: 8px;
  background: $accentColor;
  color: #fff;
  transition: all 0.1s;
  flex-direction: column;
  box-shadow: 0 10px 0 10px darken($accentColor, 10%), inset 0 0 15px lighten($accentColor, 20%);

  &.active {
    transform: translate(0, 5px);
  }

  div {
    font-size: 2em;
    line-height: 1.5em;
  }
}
</style>

<template>
  <div style="text-align: center">
    <div class="container center">
      <div class="keyCode-button center" :class="{active: keyDown}">
        <div>{{key}}</div>
        <p>{{keyCode}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: "a",
      keyCode: "65",
      keyDown: false
    };
  },
  methods: {
    handleKeyDown(e) {
      e.preventDefault();
      console.log(e);
      this.keyDown = true;
      this.key = e.key.replace(" ", "Space");
      this.keyCode = e.keyCode;
    },
    handleKeyUp(e) {
      this.keyDown = false;
    }
  },
  created() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }
};
</script>