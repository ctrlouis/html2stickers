# html2sticker
  
Create png with html.

html2sticker is using [ejs](https://ejs.co/) to create stickers template

# Run with Docker

```
docker run --rm -it \
    -v ./public:/html2stickers/dist/public \
    -v ./views:/html2stickers/dist/views \
    -p 3000:3000 \
    --name html2stickers \
    html2stickers
```

For your convenience I created a [docker-compose.yml](docker-compose.yml) file.

## Preview stickers

GET on `http://localhost:3000/api/stickers/<template_name>`

## Generate stickers

POST on `http://localhost:3000/api/stickers/<template_name>/generate`
