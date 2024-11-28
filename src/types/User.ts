export type User = {
  id:number,
  name:string,
  address: {
    street:string,
    suite:string,
    city:string,
    zipcode:string,
  }
  email:string,
  phone:string,
}