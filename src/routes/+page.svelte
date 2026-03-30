<script lang="ts">
  import { MapLibre } from "svelte-maplibre-gl";
  import { getLngLat } from "$lib";

  let copyLngLat: string = $state("");
  let visible: boolean = $state(false);

  function showToast(text: string) {
    copyLngLat = text;
    visible = true;
    setTimeout(() => (visible = false), 2000);
    setTimeout(() => (copyLngLat = ""), 2500);
  }
</script>

<MapLibre
  onclick={async (event) => {
    showToast(await getLngLat(event));
  }}
  class="h-screen w-screen"
  style="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
  center={[142.78848876304016, 43.3316837806498]}
  zoom={6}
/>

<div
  class="fixed top-4 left-1/2 -translate-x-1/2 bg-white/75 text-black px-9 py-5 rounded-xl shadow
    transition-[opacity,display] duration-500 transition-discrete starting:opacity-0"
  class:hidden={!copyLngLat}
  class:opacity-0={!visible}
>
  copied {copyLngLat}
</div>
