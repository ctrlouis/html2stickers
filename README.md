# html2sticker
  
Create png with html.

html2sticker is using [ejs](https://ejs.co/) to create stickers template

# Run with Docker

A working example is available [here](./example/README.md)

```
docker run --rm -it \
    -v ./public:/html2stickers/dist/public \
    -v ./views:/html2stickers/dist/views \
    -p 3000:3000 \
    --name html2stickers \
    html2stickers
```

For your convenience I created a [docker-compose.yml](docker-compose.yml) file.

## API Reference

### Preview sticker

GET request with params as url query :
```http
  GET /api/stickers/${stickerName}?height=${height}&width=${width}&${stickerParameters1}&${stickerParameters2}
```

| Parameter           | Type     | Description                                           |
| :------------------ | :------- | :---------------------------------------------------- |
| `stickerName`       | `string` | **Required**. Name of the .ejs view file              |
| `height`            | `number` | **Required**. Height (in px) of .image classe element |
| `width`             | `number` | **Required**. Width (in px) of .image classe element  |
| `stickerParameters` | `number` | Parameters specific to your .ejs file                 |

### Generate png

Post request with params as json
```http
  POST /api/items/${stickerName}
  {
    "height": ${},
  }
```

| Parameter           | Type     | Description                                           |
| :------------------ | :------- | :---------------------------------------------------- |
| `stickerName`       | `string` | **Required**. Name of the .ejs view file              |
| `height`            | `number` | **Required**. Height (in px) of .image classe element |
| `width`             | `number` | **Required**. Width (in px) of .image classe element  |
| `stickerParameters` | `number` | Parameters specific to your .ejs file                 |

## Access generated png

- http uri : [http://localhost:3000/stickers/stickerName.png](http://localhost:3000/stickers/stickerName.png)
- folder path : [./public/stickerName.png](./public/stickerName.png)


# Development

## Build docker image
You can use dedicated make script :
```bash
make docker_build_image
```
Or
```bash
cd ./src
npm install
npm remove puppeteer
npm install puppeteer # puppeteer should be reinstall to use config and setup cache
```