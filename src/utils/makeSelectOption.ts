export const makeSelectOptions = (arr:string[] |number[] )=>{


   return arr.map(val =>{
        return{
        value:val,
        label:String(val)
        }
    })
}