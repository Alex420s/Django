# Pull base image
# https://hub.docker.com/_/python Alpine Linux is much smaller than most distribution base images (~5MB)
FROM python:3.10-alpine

# Install SSH client 
RUN apk update && apk add openssh-client

# Set environment variables 
# disables automatic check for pip updates
ENV PIP_DISABLE_PIP_VERSION_CHECK 1 
# Python will not write .pyc files
ENV PYTHONDONTWRITEBYTECODE 1
# ensures our console ouput is not buffered by Docker 
ENV PYTHONUNBUFFERED 1

# Set work directory 
WORKDIR /app

#Install dependencies
COPY ./requirements.txt /app/requirements.txt

RUN pip install -r requirements.txt

# Copy project

COPY . /app

CMD python manage.py runserver 0.0.0.0:8000