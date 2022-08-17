import { ref, computed, watch } from 'vue';

export function useSearch(items = [], searchProp) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const availableItems = computed(function () {
    console.log('availableItems = computed', searchProp);
    let result = [];
    if (activeSearchTerm.value) {
      result = items.value.filter((it) =>
        it[searchProp].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      result = items.value;
    }
    return result;
  });

  watch(enteredSearchTerm, function (newValue) {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  return {
    enteredSearchTerm,
    availableItems,
    updateSearch,
  };
}
