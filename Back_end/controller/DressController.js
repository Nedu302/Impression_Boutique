import Dress from "../model/dressCollection.js";

const getDress = async (req, res) => {
    try {
        // Check if 'categories' query parameter is present
        if (!req.query.categories) {
            return res.status(400).json({ message: "Categories query parameter is required." });
        }

        // Split categories by comma and trim whitespace
        const categories = req.query.categories.split(',').map(cat => cat.trim());

        // Check if the categories array is empty
        if (categories.length === 0) {
            return res.status(400).json({ message: "At least one category must be provided." });
        }

        // Query the database
        const dresses = await Dress.find({ category: { $in: categories } });

        // Check if any dresses were found
        if (dresses.length === 0) {
            return res.status(404).json({ message: "No dresses found for the specified categories." });
        }

        // Respond with the found dresses
        res.status(200).json(dresses);

    } catch (error) {
        // Log error for debugging
        console.error("Error fetching dresses: ", error);
        // Respond with a generic error message
        res.status(500).json({ message: "An error occurred while fetching dresses." });
    }
}

export default getDress;
