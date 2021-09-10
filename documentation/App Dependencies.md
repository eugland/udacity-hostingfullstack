# App Dependencies

The project needs the following dependencies to run

- Node v14.16.1
- Angular v8.2.14
- AWS CLI 2.2.5
- EB CLI 3.19.4

# Infrastructure

## The following AWS services were in use

- **RDS**
  - provides a public accessible PostgreSQL dataase
- **S3**
  - provides the frontend hosting
  - and a place where the backend saves uploaded images
- **Elastic Beanstalk**
  - provides the backend hosting


## Infrastracture Schema

![Infrastructure Schema](./images/architecture.png)