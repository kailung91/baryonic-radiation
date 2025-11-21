"use client";

import { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { cn } from '@/lib/utils';

interface MapViewProps {
    className?: string;
    center?: [number, number];
    zoom?: number;
    activeLayers?: string[];
}

export function MapView({
    className,
    center = [30.5234, 50.4501], // Kyiv
    zoom = 11,
    activeLayers = []
}: MapViewProps) {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<maplibregl.Map | null>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: {
                version: 8,
                sources: {
                    'osm': {
                        type: 'raster',
                        tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                        tileSize: 256,
                        attribution: '&copy; OpenStreetMap Contributors',
                    }
                },
                layers: [
                    {
                        id: 'background',
                        type: 'background',
                        paint: {
                            'background-color': '#0A0A0A'
                        }
                    },
                    {
                        id: 'osm-tiles',
                        type: 'raster',
                        source: 'osm',
                        paint: {
                            'raster-opacity': 0.3,
                            'raster-saturation': -1,
                            'raster-contrast': 0.2
                        }
                    }
                ]
            },
            center: center,
            zoom: zoom,
        });

        map.current.on('load', () => {
            setLoaded(true);
            // Add dummy sources for layers if they don't exist
            if (!map.current?.getSource('infrastructure')) {
                // In a real app, this would be a vector tile source
                // For demo, we might just use a geojson or similar
            }
        });

        return () => {
            map.current?.remove();
            map.current = null;
        };
    }, [center, zoom]);

    useEffect(() => {
        if (!map.current || !loaded) return;

        // Add Infrastructure Layer (Kyiv Districts - Mock Data)
        if (!map.current.getSource('infrastructure')) {
            map.current.addSource('infrastructure', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature',
                            properties: { name: 'Shevchenkivskyi' },
                            geometry: {
                                type: 'Polygon',
                                coordinates: [[
                                    [30.45, 50.45], [30.52, 50.45], [30.52, 50.48], [30.45, 50.48], [30.45, 50.45]
                                ]]
                            }
                        },
                        {
                            type: 'Feature',
                            properties: { name: 'Pecherskyi' },
                            geometry: {
                                type: 'Polygon',
                                coordinates: [[
                                    [30.52, 50.42], [30.56, 50.42], [30.56, 50.45], [30.52, 50.45], [30.52, 50.42]
                                ]]
                            }
                        }
                    ]
                }
            });

            map.current.addLayer({
                id: 'infrastructure-fill',
                type: 'fill',
                source: 'infrastructure',
                paint: {
                    'fill-color': '#0057B7', // Signal Blue
                    'fill-opacity': 0.2
                }
            });

            map.current.addLayer({
                id: 'infrastructure-line',
                type: 'line',
                source: 'infrastructure',
                paint: {
                    'line-color': '#0057B7',
                    'line-width': 2
                }
            });
        }

        // Add Terrain Points (Mock Data)
        if (!map.current.getSource('terrain')) {
            map.current.addSource('terrain', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: [
                        { type: 'Feature', geometry: { type: 'Point', coordinates: [30.5234, 50.4501] } },
                        { type: 'Feature', geometry: { type: 'Point', coordinates: [30.5, 50.46] } },
                        { type: 'Feature', geometry: { type: 'Point', coordinates: [30.55, 50.44] } }
                    ]
                }
            });

            map.current.addLayer({
                id: 'terrain-points',
                type: 'circle',
                source: 'terrain',
                paint: {
                    'circle-radius': 6,
                    'circle-color': '#FFD700', // Kinetic Gold
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#000000'
                }
            });
        }

        // Toggle Visibility
        const visibility = (layerId: string, isVisible: boolean) =>
            isVisible ? 'visible' : 'none';

        if (map.current.getLayer('infrastructure-fill')) {
            map.current.setLayoutProperty('infrastructure-fill', 'visibility', visibility('infrastructure', activeLayers.includes('infrastructure')));
            map.current.setLayoutProperty('infrastructure-line', 'visibility', visibility('infrastructure', activeLayers.includes('infrastructure')));
        }

        if (map.current.getLayer('terrain-points')) {
            map.current.setLayoutProperty('terrain-points', 'visibility', visibility('terrain', activeLayers.includes('terrain')));
        }

    }, [activeLayers, loaded]);

    return (
        <div className={cn("relative w-full h-full overflow-hidden rounded-lg border border-white/5 bg-surface", className)}>
            <div ref={mapContainer} className="absolute inset-0" />

            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-surface z-10">
                    <div className="flex flex-col items-center gap-2">
                        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent-primary border-t-transparent" />
                        <span className="text-xs text-muted-foreground">Loading Map Data...</span>
                    </div>
                </div>
            )}

            <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
                <div className="bg-surface/80 backdrop-blur-md border border-white/10 p-2 rounded-md text-xs text-muted-foreground">
                    IAT GIS Module v1.0
                </div>
            </div>
        </div>
    );
}
