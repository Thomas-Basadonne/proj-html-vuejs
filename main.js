const { createApp } = Vue;

createApp({
  data() {
    return {
      navLinks: [
        { name: "Home", dropdownMenu: false },

        {
          name: "About Us",
          dropdownMenu: false,
        },

        {
          name: "Training",
          dropdownMenu: true,
          dropdowns: [
            "Riding Lesson",
            "Safe Driving",
            "Mountain Bike",
            "Trail Drive",
            "Pedaling",
          ],
        },

        {
          name: "Packages",
          dropdownMenu: false,
        },

        {
          name: "Blog",
          dropdownMenu: false,
        },
        {
          name: "Contact",
          dropdownMenu: false,
        },
      ],

      jumbo: [
        {
          image: "img/slider-bike-4.jpg",
          title: "Professional Cycling Club",
          text: "Learn cycling from the pros.",
        },
        {
          image: "img/slider-bike-9.jpg",
          title: "Ride with the Champions",
          text: "National Mountain-Bike team.",
        },
        {
          image: "img/slider-bike-12.jpg",
          title: "The best Bike Blog",
          text: "Learn cycling from the Blog.",
        },
      ],

      activeImage: 0,
    };
  },

  methods: {
    prevImage() {
      if (this.activeImage - 1 < 0) {
        this.activeImage = 2;
      } else {
        this.activeImage--;
      }
    },
    nextImage() {
      if (this.activeImage + 1 > 2) {
        this.activeImage = 0;
      } else {
        this.activeImage++;
      }
    },
    switchToImage(index) {
      this.activeImage = index;
    },
  },

  mounted() {},
}).mount("#app");
