<script lang="ts">
  import { MapLibre } from "svelte-maplibre-gl";
  import { getLngLat } from "$lib";

  let copiedLngLat: string = $state("");
</script>

<MapLibre
  onclick={async (event) => {
	copiedLngLat = await getLngLat(event);
  }}
  class="h-screen w-screen"
  style="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
  center={[142.78848876304016, 43.3316837806498]}
  zoom={6}
/>

<div
  class="fixed top-4 left-1/2 -translate-x-1/2 bg-white text-black px-9 py-5 rounded-xl shadow"
>
  {#if copiedLngLat}
    copied {copiedLngLat} to clipboard!
  {:else}
    click on the map to copy the longitude and latitude to clipboard!
  {/if}
</div>
