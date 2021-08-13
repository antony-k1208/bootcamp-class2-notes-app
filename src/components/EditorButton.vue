<template>
  <button
    class="editor-button"
    :class="{ 'is-active': editor.isActive(editorAction) }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    editor: {
      type: Object,
      required: true,
    },
    editorAction: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.editor-button {
  background-color: antiquewhite;
  border: 1px solid gray;
  width: 3em;
  height: 3em;
  color: black;
}

.editor-button.is-active {
  background-color: bisque;
  font-weight: bold;
}
</style>
