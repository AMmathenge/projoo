<script>
    import Title from "$lib/title.svelte";
    import "../style/global.css"
</script>


<header>
    <Title title="ANTHONY" />
    <div class="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/guides">Guides</a>
    </div>
</header>

<main>
    <slot></slot>
</main>
<footer>
    <p>copyright 2022 QUENCHER YOUR THIRST</p>
    <a href="https://twitter.com/home">
        <img src="/home/anthony/anthony-project/static/icons8-twitter-48.png" alt="">
    </a>
    
</footer>

<style>
   header{
    display:flex;
    justify-content: center;
   }
   main{
    max-width: 960px;
    margin: 20px auto;
   }
   footer{
    text-align: center;
   }
   .links{
    margin-left: auto;
   }
   a{
    margin-left: 10px;
   }


</style>