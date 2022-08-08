<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          ref="descriptionInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
  <teleport to="#dim">
    <base-dialog
      v-if="openErrorDialog"
      @close="closeErrorDialog"
      title="Invalid Input"
    >
      <template #default>
        <p>Unfortunately, at least one input value is invalid.</p>
        <p>
          Please check all inputs and make sure you enter at least a few
          characters into each input field.
        </p>
      </template>
      <template #actions>
        <base-button @click="closeErrorDialog">Ok</base-button>
      </template>
    </base-dialog>
  </teleport>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      openErrorDialog: false,
    };
  },
  methods: {
    submitData() {
      const title = this.$refs.titleInput.value;
      const description = this.$refs.descriptionInput.value;
      const link = this.$refs.linkInput.value;

      if (!title?.trim() || !description?.trim() || !link?.trim()) {
        this.openErrorDialog = true;
        return;
      }

      this.addResource(title, description, link);

      this.$refs.titleInput.value = '';
      this.$refs.descriptionInput.value = '';
      this.$refs.linkInput.value = '';
    },
    closeErrorDialog() {
      this.openErrorDialog = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
