1.Error: couldn't connect to server 127.0.0.1:27017
Fix: mongod - view access controll and Start mongodb

2.Error: 20 Attempted to create a lock file on a read-only directory: /data/db, terminating
https://stackoverflow.com/questions/42446931/mongodb-exception-in-initandlisten-20-attempted-to-create-a-lock-file-on-a-rea

Fix: sudo chown -R $USER /data/db