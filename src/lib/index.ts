export async function getLngLat(event: maplibregl.MapMouseEvent): Promise<string> {
    const lngLat = `${event.lngLat.lng.toFixed(6)}, ${event.lngLat.lat.toFixed(6)}`;
    await navigator.clipboard.writeText(lngLat);
    return lngLat;
}