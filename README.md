##AWS S3 Storage configuration:

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

##Directus typescript generation:

https://github.com/elierotenberg/directus-typescript-gen

```
Example: npx directus-typescript-gen --host http://localhost:8055 --email admin@example.com --password <...> --typeName DirectusCollections --outFile generated/directus.d.ts
```