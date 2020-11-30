<template>
  <div>
    <template v-if="!link" :class="mode">
      <button>
        <slot></slot>
      </button>
    </template>
    <template v-else :to="to" :class="mode">
      <router-link>
        <slot></slot>
      </router-link>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>
<style lang="css" scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #004a61;
  border: 1px solid #004a61;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #004a61;
  border-color: #004a61;
}

.flat {
  background-color: transparent;
  color: #004a61;
}

.outline {
  background-color: transparent;
  border-color: #004a61;
  color: #004a61;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #d2d5ff;
}
</style>
