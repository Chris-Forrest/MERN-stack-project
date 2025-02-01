import Product from "../models/product.model.js";

export const deleteProduct = async (req,res) => { 
    const {id} = req.params;
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product Deleted"});
    }catch(error){
        res.status(404).json({ success: false, message: "Product not found"});
    }
};
