<script context="module" lang="ts">
  // If you're using TypeScript, you can add types here
  import { page } from '$app/stores';
</script>

<script>
  // Accessing the slug from the route params
  export let title;
  export let subline;
  export let slug = $page.route.id; 
</script>

<div data-sb-object-id="routes/{slug}/+page.md">


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
          <h1 class="text-5xl mb-8" data-sb-field-path="title">{title}</h1>
          <p class="text-3xl mt-8" data-sb-field-path="subline">{subline}</p>
          <div data-sb-field-path="markdown_content">
          <slot>
            <!-- the mdsvex content will be slotted in here -->
          </slot>
          </div>
        </article>
      </div>
    </div>
  </div>
</div>

</div>