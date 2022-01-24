<template>
  <li><div v-html="todo.text"></div></li>
</template>

<script>
export default {
  props: ["todo"]
};
</script>