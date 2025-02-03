#Kiinduló image
FROM node:20

#Felhasználó és csoport létrehozása 
RUN addgroup mrkocka && adduser --system -ingroup mrkocka --home /home/mrkocka mrkocka 

#a munkakönyvtár def
WORKDIR /weblap

#Szükséges fáljok felmásolása 
COPY . .

#jogom
RUN chown -R kiskocka:kiskocka /weblap
RUN chmod 755 /app

#felhasználóra válltás
USER mrkocka

RUN npm install 

EXPOSE 3000

CMD [ "npm", "start" ]