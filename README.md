# random-geojson-rest-api

This repository provides an API for generating random **GeoJSON features** for testing purposes.

---

## Endpoints

### `GET /api/feature/point`

Generates a single **GeoJSON Point feature**.

#### Query Parameters

| Parameter | Type   | Description                                                                                  |
|-----------|--------|----------------------------------------------------------------------------------------------|
| `bbox`    | string | Optional bounding box to restrict point generation. Format: `minLon,minLat,maxLon,maxLat`   |

- If `bbox` is **not provided**, the API generates a point in a **random bounding box** anywhere within default bbox.
- Longitude range: -180 to 180  
- Latitude range: -90 to 90

### `GET /api/feature/point?bbox=5.364075,50.854509,10.637512,52.422523`