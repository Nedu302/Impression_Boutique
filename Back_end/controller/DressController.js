import Dress from "../model/dressCollection.js";

const getDress = async (req, res) => {
    try {
        const { categories } = req.query;

        if (!categories) {
            return res.status(400).json({ message: "Categories query parameter is required." });
        }

        // Parse JSON array if provided as a string
        let categoriesArray;
        try {
            categoriesArray = JSON.parse(categories);
        } catch (e) {
            return res.status(400).json({ message: "Categories query parameter must be a valid JSON array." });
        }

        // Ensure categoriesArray is an array of strings
        if (!Array.isArray(categoriesArray) || categoriesArray.some(category => typeof category !== 'string' || category.trim().length === 0)) {
            return res.status(400).json({ message: "Categories query parameter must be a valid array of non-empty strings." });
        }

        // Trim and filter out any empty categories
        categoriesArray = categoriesArray.map(category => category.trim()).filter(category => category.length > 0);

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
