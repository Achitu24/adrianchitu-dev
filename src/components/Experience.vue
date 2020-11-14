<template>
  <section id="experience" class="resume-section p-3 p-lg-5 d-flex align-items-center">
    <div class="w-100">
      <h2 class="mb-5">Experience</h2>
      <div
        class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
        v-for="(experience, index) in experienceList"
        :key="index"
      >
        <div class="resume-content">
          <h3 class="mb-0">{{ experience.position }}</h3>
          <div class="subheading mb-3">{{ experience.company }}</div>
          <p class="mb-0">{{ experience.summary }}</p>
        </div>
        <div class="resume-date text-md-right">
          <span
            class="text-primary"
            v-for="(date, index) in experience.dates"
            :key="index"
          >{{ date.start }} - {{ date.end }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience",
  data() {
    return {
      experienceList: [
        {
          position: "Junior Web Developer",
          company: "Oxford Summer Courses",
          summary: "Develop websites",
          dates: [
            {
              start: "October 2019",
              end: "Present"
            }
          ]
        }
      ]
    };
  }
};
</script>