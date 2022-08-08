<template>
  <ul>
    <!-- <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-element> -->
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    ></knowledge-element>
  </ul>
</template>

<script>
export default {
  // props: ['topics'],
  // emits: ['select-topic'],
  // 부모 컴포넌트에서 provide 해주는 경우만 사용 가능하다.
  inject: ['topics'],
};
</script>
