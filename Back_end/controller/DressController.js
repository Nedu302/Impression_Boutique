import Dress from "../model/dressCollection.js";

const getDress = async (req, res) => {
    try {
        if (!req.query.categories) {
            return res.status(400).json({ message: "Categories query parameter is required." });
        }

        const categories = req.query.categories.split(',').map(category => category.trim());

        const dress = await Dress.find({ category: { $in: categories } });
        res.status(200).json(dress);

    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({ message: "An error occurred while processing your request." });
    }
}

export default getDress;
