import express from 'express'; 
const app = express();

const reqFilter = (req, res, next) => {
    console.log('reqFilter middleware executed');
    next(); 
};

app.use(reqFilter); // Apply middleware globally

app.get('/', (req, res) => {
    res.send('Welcome to the home page');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
