# Mkcert:
https://www.npmjs.com/package/mkcert

## Criando um certificado raiz:
```bash
    mkcert create-ca --organization "Unicorp Local" --country-code "BR" --state "SP" --locality "Sao Paulo" --validity "9000" --key "root.key" --cert "root.cert"
```

## Adicionar o certificado no root "Autoridades de Certificação Raiz Confiáveis" no windows.

```bash
    certutil -addstore root C:/Users/Lucas/unicorp-local.cert
```

## Criando certificado para o navegador:
``` 
    mkcert create-cert --ca-key "C:/Users/Lucas/unicorp-local.key" --ca-cert "C:/Users/Lucas/unicorp-local.cert" --validity "9000" --key "uniserialserver-local.key" --cert "uniserialserver-local.cert" --domains "localhost,127.0.0.1,UNI000201"
```

## Rodar o http-server
```bash 
    http-server --tls --cert "%HOME%\uniserialserver-local.cert" --key "%HOME%\uniserialserver-local.key" --proxy "http://uniwinaplic" --port 8084 --cors * -a "UNI000201" --o "unimasterweb/homol/#!/"
```

```bash
    http-server --tls --cert "%HOME%\uniserialserver-local.cert" --key "%HOME%\uniserialserver-local.key" --proxy "http://uniwinaplic:8084" --port 8084  --cors *
```