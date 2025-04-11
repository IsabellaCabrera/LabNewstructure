// Simulated database with users and posts
const users = [
    { email: 'tester@gmail.com', name: 'Tester', password: 'test123' },
    { email: 'tester2@gmail.com', name: 'Tester 2', password: 'test2' }
];

const posts = [
    {
        img: 'https://www.mundodeportivo.com/alfabeta/hero/2023/07/frases-spider-man.jpg?width=768&aspect_ratio=16:9&format=nowebp',
        title: 'Spiderman',
        desc: 'A Spiderman picture I used to test the post'
    }
];

module.exports = {
    users,
    posts
};