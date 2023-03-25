events { worker_connections 1024;}

http {

    upstream loadbalancer {
        server CS1:8080 weight=4;
        server CS2:8080 weight=4;
        server CS3:8080 weight=4;
        server CS4:8080 weight=4;
    }

    upstream CS1{
        server CS1:8080 weight=6;
    }

    upstream CS2{
        server CS2:8080 weight=6;
    }

    upstream CS3{
        server CS3:8080 weight=6;
    }

    upstream CS4{
        server CS4:8080 weight=6;
    }

    server {
        listen 80;
        location / {
            proxy_pass http://loadbalancer;
        }
        location /CS1/ {
            proxy_pass http://CS1;
        }
        location /CS2/ {
            proxy_pass http://CS2;
        }
        location /CS3/ {
            proxy_pass http://CS3;
        }
        location /CS4/ {
            proxy_pass http://CS4;
        }
    }
}