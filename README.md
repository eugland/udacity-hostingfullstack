# Udagram

This project is part of the Udacity FullStack JavaScript nanodegree. The code was given as a starter project and the task was to employ and adapt the code to get it working and hosted on AWS.


See additional documentation in the documentation folder. The running site is at http://ugramfront.s3-website-us-east-1.amazonaws.com/

You are welcome to use the following user / admin login 
or register yourself: 
| Username      | password | function
| ----------- | ----------- | ---- |
| user@corp.com      | user       | shopping |
| admin@corp.com   | admin        | stocking |

## App walk through
main
![](./documentation/walkthrough/0-home.png)
login
![](./documentation/walkthrough/1-log.png)
shopping list
![](./documentation/walkthrough/2-shopping.png)
shopping kart
![](./documentation/walkthrough/3-kart.png)
admin stock management
![](./documentation/walkthrough/4-adminpro.png)
admin user management
![](./documentation/walkthrough/5-adminuse.png)

## Configuration Screenshots

### Elastic Beanstalk Environment

![Elastic Beanstalk Environment](./documentation/images/elasticBeanstackOK.png)

### FrontEnd S3 Bucket

![FrontEnd S3 Bucket](./documentation/images/S3-front-1.png)

### Media S3 Bucket

![Media S3 Bucket](./documentation/images/S3-file-1.png)

### PostgreSQL RDS database

![PostgreSQL RDS database](./documentation/images/rds-database.png)

### CircleCI Pipeline

![CircleCI Pipeline](./documentation/images/CI-1-env.png)

![CircleCI Pipeline](./documentation/images/CI-2-build.png)

added secrets here

![CircleCI Pipeline environment variables](./documentation/images/CI-0-env.png)

Schema

![Pipeline Schema](./documentation/Pipeline%20Process.md)

### Architecture

![Architecture](./documentation/images/architecture.png)

## Built With

- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework

## License

[License](LICENSE.txt)
