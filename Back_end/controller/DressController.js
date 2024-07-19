import Dress from "../model/dressCollection.js";

const getDress = async (req, res) => {
    try {
        const { categories } = req.query;

        if (!categories) {
            return res.status(400).json({ message: "Categories query parameter is required." });
        }

        let categoriesArray;
        if (Array.isArray(categories)) {
            categoriesArray = categories;
        } else if (typeof categories === 'string') {
            categoriesArray = categories.split(',').map(category => category.trim());
        } else {
            return res.status(400).json({ message: "Categories query parameter is invalid." });
        }

        if (!categoriesArray.length) {
            return res.status(400).json({ message: "Categories query parameter cannot be empty." });
        }

        console.log("Categories parsed:", categoriesArray);

        const dress = await Dress.find({ category: { $in: categoriesArray } });

        if (!dress.length) {
            return res.status(404).json({ message: "No dresses found for the provided categories." });
        }

        res.status(200).json(dress);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "An error occurred while processing your request." });
    }
}

export default getDress;
