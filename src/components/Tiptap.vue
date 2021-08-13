<template>
  <div class="editor">
    <div v-if="editor">
      <EditorButton
        @click="editor.chain().focus().toggleBold().run()"
        :editor="editor"
        editor-action="bold"
      >
        B
      </EditorButton>
      <EditorButton
        @click="editor.chain().focus().toggleItalic().run()"
        :editor="editor"
        editor-action="italic"
      >
        I
      </EditorButton>
      <EditorButton
        @click="editor.chain().focus().toggleUnderline().run()"
        :editor="editor"
        editor-action="underline"
      >
        U
      </EditorButton>
      <EditorButton
        @click="editor.chain().focus().toggleStrike().run()"
        :editor="editor"
        editor-action="strike"
      >
        ---
      </EditorButton>
      <EditorButton
        @click="editor.chain().focus().toggleCode().run()"
        :editor="editor"
        editor-action="code"
      >
        ```
      </EditorButton>
      <EditorButton
        @click="editor.chain().focus().toggleBulletList().run()"
        :editor="editor"
        editor-action="bulletList"
      >
        o
      </EditorButton>
      <EditorButton
        @click="editor.chain().focus().toggleOrderedList().run()"
        :editor="editor"
        editor-action="orderedList"
      >
        1
      </EditorButton>
      <EditorButton
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :editor="editor"
        editor-action="codeBlock"
      >
        []
      </EditorButton>
    </div>
    <editor-content class="editor_content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import EditorButton from "./EditorButton.vue";

export default {
  components: {
    EditorContent,
    EditorButton,
  },

  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      editor: null,
    };
  },

  watch: {
    modelValue(value) {
      const isSame = this.editor.getHTML() === value;

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(this.modelValue, false);
    },
  },

  mounted() {
    this.editor = new Editor({
      content: this.modelValue,
      extensions: [StarterKit, Underline],
      onUpdate: () => {
        this.$emit("update:modelValue", this.editor.getHTML());
      },
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style>
.editor {
  width: 100%;
  margin: 0 10px;
}

.editor_content {
  border: 1px dashed tomato;
}
</style>
