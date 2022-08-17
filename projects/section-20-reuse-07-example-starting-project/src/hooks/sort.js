import { ref, computed } from 'vue';

export function useSort(availableItems, sortProperty) {
  const sorting = ref(null);
  const displayedUsers = computed(function () {
    if (!sorting.value) {
      return availableItems.value;
    }
    return availableItems.value.slice().sort((item1, item2) => {
      if (
        sorting.value === 'asc' &&
        item1[sortProperty] > item2[sortProperty]
      ) {
        return 1;
      } else if (sorting.value === 'asc') {
        return -1;
      } else if (
        sorting.value === 'desc' &&
        item1[sortProperty] > item2[sortProperty]
      ) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  function sort(mode) {
    sorting.value = mode;
  }

  return { sorting, displayedUsers, sort };
}
