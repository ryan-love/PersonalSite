<template>
  
</template>

<script>
        import { defineComponent } from 'vue';
import { Editor, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { VueEditor, useEditor } from '@milkdown/vue';
import { commonmark } from '@milkdown/preset-commonmark';
// plugin
// import { emoji } from "@milkdown/plugin-emoji";
// import { menu } from "@milkdown/plugin-menu";
// import { slash } from "@milkdown/plugin-slash";
// import { history } from "@milkdown/plugin-history";
// import { prism } from "@milkdown/plugin-prism";
// import { tooltip } from "@milkdown/plugin-tooltip";
// import { indent } from "@milkdown/plugin-indent";
// import { trailing } from "@milkdown/plugin-trailing";
// import { upload } from "@milkdown/plugin-upload";
// import { cursor } from "@milkdown/plugin-cursor";
// import { clipboard } from "@milkdown/plugin-clipboard";
// import { listener, listenerCtx } from "@milkdown/plugin-listener";
export default {
    setup(){

 const MilkdownEditor = defineComponent(() => {
    const { editor } = useEditor((root) =>
        Editor.make()
            .config((ctx) => {
                ctx.set(rootCtx, root);
            })
            .use(nord)
            .use(commonmark),
    );

    return () => <VueEditor editor={editor} />;
});
    }
}
</script>

<style>

</style>