FROM mysql
MAINTAINER Honda_Hong@epam.com

ENV WORK_PATH /usr/local/work

RUN mkdir -p $WORK_PATH

COPY ./db/create_db.sql $WORK_PATH/
COPY ./db/create_users.sql $WORK_PATH/

COPY ./db_init.sh /docker-entrypoint-initdb.d