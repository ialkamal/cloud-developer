export const config = {
  dev: {
    username: "postgres_ismail",
    password: "postgres_ismail",
    database: "postgres_ismail",
    host: "postgres-ismail.comcxmlcotuc.us-east-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "us-east-1",
    aws_profile: "default",
    aws_media_bucket: "udacity-cloud-ismail-2022",
  },
  jwt: {
    secret: "twisttwist",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
