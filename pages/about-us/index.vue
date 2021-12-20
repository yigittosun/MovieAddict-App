<template>
<div class="container">
    <div class="header-banner">
    <img src="./../../assets/img/headerImage.webp" alt="" />
    <div class="text-container">
      <div class="text">
        <h1><span>About</span> Us</h1>
        <a href="/"  class="button">View Movies</a>
      </div>
    </div>
  </div>
  <h1 class="about-title">About</h1>
  <p class="about-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt dolorem repudiandae quod maiores. Voluptas provident dolore, voluptatem, ex omnis perspiciatis iste aliquam expedita commodi laudantium animi ratione quos in modi fugit eum voluptate eius iure nemo debitis rem nobis! Fugiat quibusdam voluptates repudiandae, eligendi, asperiores quis ipsum consequatur veritatis eveniet odit porro. Distinctio ad veritatis, officiis error tempore repellat tenetur, maxime iure explicabo voluptatem rem delectus, enim iusto consequatur. Ratione quas, ab itaque ipsum corporis dolores asperiores ex porro voluptate nam velit, laboriosam doloremque totam reiciendis accusamus quis? Eos!</p>
  <p class="about-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quos dolorem laborum accusamus neque officiis ullam fugit, sunt sequi quia quidem assumenda sed dicta. Culpa nostrum consectetur odio iste soluta delectus sequi vel ex iure! Aspernatur laborum esse delectus consequatur non corporis fugit magnam repellat autem expedita in aliquam earum nesciunt dolorum soluta, labore vitae perferendis aperiam officiis ipsum blanditiis quam doloremque consequuntur? Mollitia accusantium molestiae ab dolor saepe aut!</p>
  <p class="about-info-last">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis delectus nisi fuga temporibus optio, sed magni laudantium fugit cumque provident quia ratione ipsum amet. Ut eum voluptas perspiciatis incidunt ratione fugit magnam animi omnis quaerat, natus sapiente! Nemo delectus ipsa laudantium exercitationem sunt nobis minus! Ullam molestiae, quos nesciunt quo inventore, eos nihil possimus officia tempora tempore repudiandae unde nostrum!</p>
  </div>
</template>

<script>
export default {
        name: "about-us , header-banner",
        data(){
            return {
                keyword: ''
            }
        },
        methods: {
            search(){
                this.$router.push({path: '/about-us', query: {q: this.keyword}});
            }
        },
    }
</script>

<style>

</style>