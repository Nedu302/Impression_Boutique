import Dress from "../model/dressCollection.js";

const getDress = async (req, res) => {
    try {
        // Retrieve categories from query parameters
        const categories = req.query.categories;

        if (!categories || !Array.isArray(categories)) {
            return res.status(400).json({ message: "Categories query parameter is required and must be an array." });
        }

        // Ensure all categories are valid strings
        if (categories.some(category => typeof category !== 'string' || category.trim().length === 0)) {
            return res.status(400).json({ message: "Categories query parameter contains invalid values." });
        }

        // Trim and filter out any empty categories
        const categoriesArray = categories.map(category => category.trim()).filter(category => category.length > 0);

        // Check if categoriesArray is empty
        if (categoriesArray.length === 0) {
            return res.status(400).json({ message: "Categories query parameter cannot be empty." });
        }

        // Fetch dresses by categories
        const dresses = await Dress.find({ category: { $in: categoriesArray } });

        if (dresses.length === 0) {
            return res.status(404).json({ message: "No dresses found for the provided categories." });
        }

        res.status(200).json(dresses);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "An error occurred while processing your request." });
    }
}

export default getDress;
