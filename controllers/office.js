const data = [
    {
        id: '262aa0a9-0873-4d8e-a3ae-4ace2f6f5ef0',
        name: 'Bureau 1'
    },
    {
        id: 'db73565e-d2ce-4b0a-a5a7-5de1ecdbf3a2',
        name: 'Bureau 2'
    }
];

const getAll = (req, res) => {
    return res.json(data);
};

module.exports = {
    getAll,
};

