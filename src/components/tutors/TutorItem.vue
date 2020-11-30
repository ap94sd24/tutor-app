<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>$ {{ rate }}/hr</h4>

    <div>
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">
      <!-- <baseButton :mode="outline" :to="tutorContactLink">Contact</baseButton>
      <baseButton :to="tutorDetailsLink">View More</baseButton> -->
    </div>
  </li>
</template>
<script>
export default {
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    tutorContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    tutorDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>
<style lang="css" scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  list-style: none;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
