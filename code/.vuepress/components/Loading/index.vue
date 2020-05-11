<template>
  <div>
    选择颜色
    <loading1 />
    <loading2 />
    <loading3 />
  </div>
</template>

<script>
import loading1 from "./1";
import loading2 from "./2";
import loading3 from "./3";
export default {
  components: { loading1, loading2, loading3 }
};
</script>

<style lang="stylus" scoped>
/deep/ .load-container {
  margin: 50px auto;
}
</style>