import Dress from "../model/dressCollection.js";

const getDress=async(req,res)=>
{
    try {
        
        // const categories = req.query.categories.split(',');
            const someVariable = req.params.someVariable; // or however you are accessing it
            const result = someVariable.split(','); // This line is causing the issu        
        
        const dress=await Dress.find({ category: { $in: result } });
        res.status(200).json(dress);
        
    } catch (error) {
        console.log("Error: ",error)
        res.status(500).json(error);
        
    }
}

export default getDress;
