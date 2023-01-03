import express from 'express';

const router = express.Router();

const users = [
    {
        fisrtName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        fisrtName: "Jane",
        lastName: "Doe",
        age: 24
    }
]

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {
    res.send();
});

export default router;