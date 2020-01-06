#!/bin/bash
mysql -uroot -p$MYSQL_ROOT_PASSWORD <<EOF
source $WORK_PATH/create_db.sql;
source $WORK_PATH/create_users.sql;