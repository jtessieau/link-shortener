FROM nginx
COPY ./dist /usr/share/nginx/html
COPY ./Docker/nginx.conf /etc/nginx/conf.d/default.conf