/** @format */

import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_CLIENT_ID,
  secretAccessKey: process.env.AWS_CLIENT_SECRET,
  region: "us-east-1",
});

const multerPaint = multer({
  storage: multerS3({
    s3,
    bucket: "gr2da/images",
    acl: "public-read",
  }),
});

export const uploadPaint = multerPaint.single("paintFile");
