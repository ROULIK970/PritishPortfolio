export const chat = (req,res) =>{
console.log(req.user)
res.status(200).json([
    {
        name:"phone",
        price:1000
    },{
        name:"tv",
        price:20000
    }
])
}