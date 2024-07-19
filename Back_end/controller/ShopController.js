import shopDress from '../model/ShopCollection.js';

const getShopDress=async (req,res)=>{
    try {
        // const categories = req.query.categories.split(',');
        // const shopDress=await shopDress.find({ category: { $in: categories } });
        const shop=await shopDress.find();
        res.status(200).json(shop);
    } catch (error) {
        console.log("Error: ",error);
        res.status(500).json(error);
    }
}
export default getShopDress;