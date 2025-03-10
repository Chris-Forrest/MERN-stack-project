import Product from "../models/product.model.js";

export const createProduct = async (req, res) => { 
    const product = req.body;

    if (!product.name || !product.price || !product.image){
        return res.status(400).json({ success: false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error){
        res.status(500).json({ success: false, message: "Server Error"});
    };
};