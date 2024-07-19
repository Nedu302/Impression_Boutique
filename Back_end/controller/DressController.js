import Dress from "../model/dressCollection.js";

// Function to get dresses based on categories
const getDress = async (req, res) => {
    try {
        if (!req.query.categories) {
            return res.status(400).json({ message: "Categories query parameter is required." });
        }

        const categories = req.query.categories.split(',').map(cat => cat.trim());
        if (categories.length === 0 || categories.some(cat => cat.length === 0)) {
            return res.status(400).json({ message: "Categories cannot be empty." });
        }

        const dresses = await Dress.find({ category: { $in: categories } });
        if (dresses.length === 0) {
            return res.status(404).json({ message: "No dresses found for the specified categories." });
        }
        res.status(200).json(dresses);

    } catch (error) {
        console.error("Error fetching dresses: ", error);
        res.status(500).json({ message: "An error occurred while fetching dresses." });
    }
}

export default getDress;
