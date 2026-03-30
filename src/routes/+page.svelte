<script lang="ts">
	import { MapLibre } from 'svelte-maplibre-gl';
	import { getLngLat } from '$lib';

	let copyLngLat: string = $state('');
</script>

<MapLibre
	onclick={async (event) => {
		copyLngLat = await getLngLat(event);
		setTimeout(() => (copyLngLat = ''), 3000);
	}}
	class="h-screen w-screen"
	style="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
/>

{#if copyLngLat}
	<div class="fixed top-4 left-1/2 -translate-x-1/2 bg-black/75 text-white px-4 py-2 rounded shadow">
		copied {copyLngLat}
	</div>
{/if}
