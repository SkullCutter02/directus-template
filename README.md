## AWS S3 Storage configuration:

Go to ./cms/.env and use the following example env:

```
STORAGE_LOCATIONS="aws"
STORAGE_LOCAL_DRIVER="local"
STORAGE_LOCAL_ROOT="./uploads"

STORAGE_AWS_DRIVER="s3"
STORAGE_AWS_KEY="xxxxxxxxxxx"
STORAGE_AWS_SECRET="xxxxxx"
STORAGE_AWS_BUCKET="bucket_name"
STORAGE_AWS_REGION="us-east-2"
STORAGE_AWS_ACL="private"
```

## Directus typescript generation:

https://github.com/elierotenberg/directus-typescript-gen

```
Example: npx directus-typescript-gen --host http://localhost:8055 --email admin@example.com --password <...> --typeName DirectusCollections --outFile generated/directus.d.ts
```

Can be used with @directus/sdk, as well as react-query

## Deploy development version to HEROKU

1. In package.json, add this script: `"snapshot:gen": "npx directus schema snapshot ./snapshot.yaml"`
2. Create Procfile in folder with the following contents: `web: npx directus start`
3. Initialise git in the folder
4. Create a new app in heroku with the postgres hobby dev database plugin
5. In config vars, create a new var called DB_CONNECTION_STRING, and copy the value of this from the DATABASE_URL env, but with ?sslmode=no-verify at the end
6. Create var DB_CLIENT, and set it to `pg`
7. Create two vars called KEY and SECRET, which is copied from the local env file
8. Create ADMIN_EMAIL and ADMIN_PASSWORD vars, and fill it in
9. In terminal, run `heroku login`, then do `heroku git:remote -a <app_name>`, then do a `git push heroku master`
10. After it pushed, run `heroku run directus bootstrap`
11. Run the snapshot by doing `heroku run npx directus schema apply --yes ./snapshot.yaml`, which migrates the production database
12. Tada everything should work

Run step 12 every time you make any changes to the data models

## Working with images

Directus returns images with their UUID. Simply call `<directus_link>/assets/<image_id>`, and you'll get access to the image, no matter where the image is uploaded to
