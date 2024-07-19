import Dress from "../model/dressCollection.js";

const getDress=async(req,res)=>
{
    try {
        const categories = req.query.categories.split(',');
        const dress=await Dress.find({ category: { $in: categories } });
        res.status(200).json(dress);
        
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json(error);
        
    }
}

export default getDress;
