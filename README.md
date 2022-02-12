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

## Deploy to HEROKU

The process is a bit annoying, but this is what I did:

1. Create a local version of directus, and use random variables for the database when asked
2. Initialise git in the folder
3. Create a new app in heroku with the postgres hobby dev database plugin
4. In config vars, create a new var called DB_CONNECTION_STRING, and copy the value of this from the DATABASE_URL env, but with ?sslmode=no-verify at the end
5. Create two vars called KEY and SECRET, which is copied from the local env file
6. Create ADMIN_EMAIL and ADMIN_PASSWORD vars, and fill it in
7. In terminal, run `heroku login`, then do `heroku git:remote -a <app_name>`, then do a `git push heroku master`
8. After it pushed, run `heroku run directus bootstrap`
9. Then if you go to the app it should work
10. If not just trigger a rebuild