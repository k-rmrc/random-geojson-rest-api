# random-geojson-rest-api

This repository provides an API for generating random **GeoJSON features** for testing purposes.

---

## Endpoints

### `GET /api/feature/point`

Generates a single **GeoJSON Point feature**.

### `GET /api/feature/point?bbox=5.364075,50.854509,10.637512,52.422523`

Generates a single **GeoJSON Point feature** within given bounding box.

#### Query Parameters

| Parameter | Type   | Description                                                                                  |
|-----------|--------|----------------------------------------------------------------------------------------------|
| `bbox`    | string | Optional bounding box to restrict point generation. Format: `minLon,minLat,maxLon,maxLat`   |

- If `bbox` is **not provided**, the API generates a point in a **random bounding box** anywhere within default bbox.
- Longitude range: -180 to 180  
- Latitude range: -90 to 90

---

### `GET /api/collection/points`

Generates a **GeoJSON Feature Collection with Point features**.

### `GET /api/collection/points?bbox=5.364075,50.854509,10.637512,52.422523`

Generates a **GeoJSON Feature Collection with Point features** within given bounding box.

### `GET /api/collection/points?bbox=5.364075,50.854509,10.637512,52.422523&number=20`

Generates a **GeoJSON Feature Collection with Point features** within given bounding box and specific number of features.

#### Query Parameters

| Parameter | Type   | Description                                                                                  |
|-----------|--------|----------------------------------------------------------------------------------------------|
| `bbox`    | string | Optional bounding box to restrict point generation. Format: `minLon,minLat,maxLon,maxLat`   |
| `number`    | int | Optional number of features to be included in feature collection. Default: `10`   |

- If `bbox` is **not provided**, the API generates a point in a **random bounding box** anywhere within default bbox.
- Longitude range: -180 to 180  
- Latitude range: -90 to 90
- If `number` is **not provided**, the API generates 10 features for the feature collection. Max possible value is `1000`.

