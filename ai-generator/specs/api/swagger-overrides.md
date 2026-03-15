# API Overrides

POST /auth/login

request

{
 email:string
 password:string
}

response

{
 token:string
 expires:number
}

GET /dashboard/metrics

response

{
 users:number
 revenue:number
 growth:number
}