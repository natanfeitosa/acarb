<template>
  <img src="@/assets/imgs/rio_poluido.png" :style="'width:' width+'px; height:' +height'px;'" >
</template>
<script>
export default {
  name: 'Contaminacao',
  props: {
    width: String,
    height: String
  }
}
</script>