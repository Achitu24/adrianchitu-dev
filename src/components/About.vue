<template>
  <section id="about" class="resume-section p-3 p-lg-5 d-flex align-items-center">
    <div class="w-100">
      <h1 class="mb-0">
        {{ name.first }}
        <span class="text-primary">{{ name.last }}</span>
      </h1>
      <div class="subheading mb-5">
        {{ telephone }} &middot;
        <a :href="'mailto:' + email">{{ email }}</a>
      </div>
      <p
        class="lead mb-5"
      >I just started out as a Junior Web developer with experience building websites and web applications. I specialize in JavaScript and Node.js and other frameworks and have experience working with C# and PHP.</p>
      <div class="social-icons">
        <a :href="social.url" v-for="(social, index) in socialList" :key="index">
          <font-awesome-icon :icon="['fab', social.icon]"></font-awesome-icon>
        </a>
      </div>
      <p class="lead mt-5">This website is made with Vue JS and deployed on Netlify</p>
      <p class="lead mt-5">Source code is available on my GitHub</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  props: {
    name: Array
  },
  data() {
    return {
      telephone: "+44 7933235825",
      email: "adrian.chitu7@gmail.com",
      socialList: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/adrianchitu7/",
          icon: "linkedin"
        },
        {
          name: "GitHub",
          url: "https://github.com/Achitu24",
          icon: "github"
        },
        {
          name: "Twitter",
          url: "#",
          icon: "twitter"
        }
      ]
    };
  }
};
</script>