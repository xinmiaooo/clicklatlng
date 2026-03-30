export async function getLngLat(event: maplibregl.MapMouseEvent): Promise<string> {
    const lngLat = `${event.lngLat.lng}, ${event.lngLat.lat}`;
    await navigator.clipboard.writeText(lngLat);
    return lngLat;
}