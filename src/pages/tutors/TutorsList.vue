<template>
  <div>
    <section>Filter</section>
    <section>
      <card>
        <div class="controls">
          <!--  <baseButton mode="outline">Refresh</baseButton>
          <baseButton link to="/register">Register as a Tutor</baseButton>-->
        </div>
        <template v-if="hasTutors">
          <tutor-item v-for="tutor in filteredTutors" :key="tutor.id" :id="tutor.id" :first-name="tutor.firstName" :last-name="tutor.lastName" :rate="tutor.hourlyRate" :areas="tutor.areas"></tutor-item>
        </template>
        <template v-else>
          <h3>No tutors found!</h3>
        </template>
      </card>
    </section>
  </div>
</template>
<script>
import TutorItem from "../../components/tutors/TutorItem";
export default {
  components: {
    TutorItem,
  },
  computed: {
    filteredTutors() {
      return this.$store.getters["tutors/tutors"];
    },
    hasTutors() {
      return this.$store.getters["tutors/hasTutors"];
    },
  },
};
</script>
<style lang="css" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
