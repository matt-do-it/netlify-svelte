<script>
  export let title;
  export let subline;
</script>

<div class="ml-[4vmin] mr-[4vmin] md:mr-8 md:ml-8">
  <div class="container mx-auto pt-px">
    <div class="lg:flex flex-row items-start gap-16">
      <div class="lg:basis-1/2 lg:order-2 lg:sticky top-0">
        <div class="pt-16">
          <img src="stage_2.jpg" />
        </div>
      </div>
      <div class="lg:basis-1/2 lg:order-1">
        <article class="prose pt-16">
          <h1 class="text-5xl mb-8">{title}</h1>
          <p class="text-3xl mt-8">{subline}</p>
          <slot>
            <!-- the mdsvex content will be slotted in here -->
          </slot>
        </article>
      </div>
    </div>
  </div>
</div>
