# Construcción
FROM node:20-alpine
 #AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
# Producción
# FROM node:20
# WORKDIR /app
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/node_modules ./node_modules
#COPY --from=builder /app/package.json .
# CMD ["node", "dist/main"]

