import express from 'express';
const app = express();

app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId; 
    res.send(`User Profile for ID: ${userId}`);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


//run this --- http://localhost:5000/users/123