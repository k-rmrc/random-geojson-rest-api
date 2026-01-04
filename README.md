# random-geojson-rest-api

This repository provides an API for generating random **GeoJSON features** for testing purposes.

---

## Endpoints

`GET /api/feature/point`

Generates a single **GeoJSON Point feature**.

`GET /api/feature/point?bbox=5.364075,50.854509,10.637512,52.422523`

Generates a single **GeoJSON Point feature** within given bounding box.

#### Query Parameters

| Parameter | Type   | Description                                                                                  |
|-----------|--------|----------------------------------------------------------------------------------------------|
| `bbox`    | string | Optional bounding box to restrict point generation. Format: `minLon,minLat,maxLon,maxLat`   |

- If `bbox` is **not provided**, the API generates a point in a **random bounding box** anywhere within default bbox.
- Longitude range: -180 to 180  
- Latitude range: -90 to 90

---

`GET /api/collection/point`

Generates a **GeoJSON Feature Collection with Point features**.

`GET /api/collection/point?bbox=5.364075,50.854509,10.637512,52.422523`

Generates a **GeoJSON Feature Collection with Point features** within given bounding box.

`GET /api/collection/point?bbox=5.364075,50.854509,10.637512,52.422523&number=20`

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

---

`GET /api/feature/linestring`

Generates a single **GeoJSON Linestring feature**.

`GET /api/feature/linestring?bbox=5.364075,50.854509,10.637512,52.422523`

Generates a single **GeoJSON Linestring feature** within given bounding box.

#### Query Parameters

| Parameter | Type   | Description                                                                                  |
|-----------|--------|----------------------------------------------------------------------------------------------|
| `bbox`    | string | Optional bounding box to restrict linestring generation. Format: `minLon,minLat,maxLon,maxLat`   |

- If `bbox` is **not provided**, the API generates a linestring in a **random bounding box** anywhere within default bbox.
- Longitude range: -180 to 180  
- Latitude range: -90 to 90

---

`GET /api/collection/linestring`

Generates a **GeoJSON Feature Collection with Linestring features**.

`GET /api/collection/linestring?bbox=5.364075,50.854509,10.637512,52.422523`

Generates a **GeoJSON Feature Collection with Linestring features** within given bounding box.

`GET /api/collection/linestring?bbox=5.364075,50.854509,10.637512,52.422523&number=20`

Generates a **GeoJSON Feature Collection with Linestring features** within given bounding box and specific number of features.

`GET /api/collection/linestring?bbox=5.364075,50.854509,10.637512,52.422523&number=20&vertices=5`

Generates a **GeoJSON Feature Collection with Linestring features** within given bounding box and specific number of features and given number of vertices.

`GET /api/collection/linestring?bbox=5.364075,50.854509,10.637512,52.422523&number=20&vertices=5&maxLength=5000`

Generates a **GeoJSON Feature Collection with Linestring features** within given bounding box and specific number of features and given number of vertices and maxLength in metres.

#### Query Parameters

| Parameter | Type   | Description                                                                                  |
|-----------|--------|----------------------------------------------------------------------------------------------|
| `bbox`    | string | Optional bounding box to restrict linestring generation. Format: `minLon,minLat,maxLon,maxLat`   |
| `number`    | int | Optional number of features to be included in feature collection. Default: `10`, Maximum: `1000`   |
| `vertices`    | int | Optional number of vertices features should include. Default: `5`, Maximum: `100`   |
| `maxLength`    | int | Optional max length in metres for each linestring in feature collection. Default: `5000`, Maximum: `50000`   |

- If `bbox` is **not provided**, the API generates a linestring in a **random bounding box** anywhere within default bbox.
- Longitude range: -180 to 180  
- Latitude range: -90 to 90
- If `number` is **not provided**, the API generates 10 features for the feature collection. 
- If `vertices` is **not provided**, each feature contains 5 vertices. 
- If `maxLength` is **not provided**, max Length is 5000 metres. 

---

`GET /api/feature/polygon`

Generates a single **GeoJSON Polygon feature**.

`GET /api/feature/polygon?bbox=5.364075,50.854509,10.637512,52.422523`

Generates a single **GeoJSON Polygon feature** within given bounding box.

#### Query Parameters

| Parameter | Type   | Description                                                                                  |
|-----------|--------|----------------------------------------------------------------------------------------------|
| `bbox`    | string | Optional bounding box to restrict polygon generation. Format: `minLon,minLat,maxLon,maxLat`   |

- If `bbox` is **not provided**, the API generates a polygon in a **random bounding box** anywhere within default bbox.
- Longitude range: -180 to 180  
- Latitude range: -90 to 90

---

`GET /api/collection/polygon`

Generates a **GeoJSON Feature Collection with Polygon features**.

`GET /api/collection/polygon?bbox=5.364075,50.854509,10.637512,52.422523`

Generates a **GeoJSON Feature Collection with Polygon features** within given bounding box.

`GET /api/collection/polygon?bbox=5.364075,50.854509,10.637512,52.422523&number=20`

Generates a **GeoJSON Feature Collection with Polygon features** within given bounding box and specific number of features.

`GET /api/collection/polygon?bbox=5.364075,50.854509,10.637512,52.422523&number=20&vertices=5`

Generates a **GeoJSON Feature Collection with Polygon features** within given bounding box and specific number of features and given number of vertices.

`GET /api/collection/polygon?bbox=5.364075,50.854509,10.637512,52.422523&number=20&vertices=5&maxArea=5000`

Generates a **GeoJSON Feature Collection with Polygon features** within given bounding box and specific number of features and given number of vertices and maxArea in squaremetres.

#### Query Parameters

| Parameter | Type   | Description                                                                                  |
|-----------|--------|----------------------------------------------------------------------------------------------|
| `bbox`    | string | Optional bounding box to restrict polygon generation. Format: `minLon,minLat,maxLon,maxLat`   |
| `number`    | int | Optional number of features to be included in feature collection. Default: `10`, Maximum: `1000`   |
| `vertices`    | int | Optional number of vertices features should include. Default: `10`, Maximum: `100`   |
| `maxArea`    | int | Optional max area in squaremetres for each polygon in feature collection. Default: `500000`, Maximum: `500000000`   |

- If `bbox` is **not provided**, the API generates a polygon in a **random bounding box** anywhere within default bbox.
- Longitude range: -180 to 180  
- Latitude range: -90 to 90
- If `number` is **not provided**, the API generates 10 features for the feature collection. 
- If `vertices` is **not provided**, each feature contains 10 vertices. 
- If `maxLength` is **not provided**, max Length is 5000 metres. 

