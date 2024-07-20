import Dress from "../model/dressCollection.js";

const getDress = async (req, res) => {
    try {
        console.log("Query Parameters: ", req.query); // Log incoming query parameters

        if (!req.query.categories) {
            return res.status(400).json({ message: "Categories query parameter is required." });
        }

        const categories = req.query.categories.split(',').map(category => category.trim());

        if (categories.length === 0 || categories.some(cat => typeof cat !== 'string' || cat === '')) {
            return res.status(400).json({ message: "Invalid categories provided." });
        }

        const dress = await Dress.find({ category: { $in: categories } });
        res.status(200).json(dress);

    } catch (error) {
        console.error("Error: ", error); // Consider using a logging library
        res.status(500).json({ message: "An error occurred while processing your request." });
    }
}

export default getDress;
