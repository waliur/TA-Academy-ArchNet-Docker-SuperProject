events { worker_connections 1024;}

http {
    upstream loadbalancer {
        server node1:8080 weight=6;
        server node2:8080 weight=4;
    }
    server {
        listen 80;
        location / {
            proxy_pass http://loadbalancer;
        }
    }
}