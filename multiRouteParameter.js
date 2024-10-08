import express from 'express'; 
const app = express(); 

// Dynamic route for products with category and product ID
app.get('/products/:category/:productId', (req, res) => {
    const category = req.params.category; 
    const productId = req.params.productId; 
    res.send(`Category: ${category}, Product ID: ${productId}`);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000'); 
});


//http://localhost:5000/products/clothing/456
//http://localhost:5000/products/home-appliances/789