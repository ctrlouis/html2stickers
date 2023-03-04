# Example

1. Run the app
```bash
docker run --rm -it \
  -v ./public:/home/node/app/dist/public \
  -v ./views:/home/node/app/dist/views \
  -p 3000:3000 \
  --name html2stickers \
  ctrlouis/html2stickers
```

2. Preview the sticker [http://localhost:3000/api/stickers/example?height=306&width=991&firstname=marc&lastname=danton](http://localhost:3000/api/stickers/example?height=306&width=991&firstname=marc&lastname=danton)
   
3. Generate the sticker
```bash
curl --request POST \
  --url http://localhost:3000/api/stickers/example/generate \
  --header 'Content-Type: application/json' \
  --data '{
        "height": 306,
        "width": 991,
        "firstname": "Marc",
        "lastname": "Danton"
}'
```

4. Screenshot is available at :
- http uri : [http://localhost:3000/stickers/example.png](http://localhost:3000/stickers/example.png)
- folder path : [./public/example.png](./public/example.png)