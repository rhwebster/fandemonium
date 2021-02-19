import boto3
import botocore
from .config import S3_BUCKET, S3_KEY, S3_LOCATION, S3_SECRET

s3 = boto3.client(
    "s3",
    aws_access_key_id=S3_KEY,
    aws_secret_access_key=S3_SECRET
)


def s3_upload(file, bucket_name=S3_BUCKET, acl="public-read"):

    try:
        s3.upload_fileobj(
            file,
            bucket_name,
            str(file.filename),
            ExtraArgs={
                "ACL": acl,
                "ContentType": file.content_type
            }
        )
    except Exception as e:
        print("Something Happened: ", e)
        return e
    return f"{S3_LOCATION}{file.filename}"