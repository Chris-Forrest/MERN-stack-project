import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const deleteProduct = async (req,res) => { 
    const {id} = req.params;
    
     if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ success: false, message: "Invalid Product Id" });
        }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product Deleted"});
    }catch(error){
        res.status(500).json({ success: false, message: "Server Error"});
    }
};
