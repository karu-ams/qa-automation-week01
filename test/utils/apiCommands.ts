import axios from 'axios';

interface User {
    name: string;
    email: string;
}

export async function createUser(user: User): Promise<void> {
    await axios.post('https://jsonplaceholder.typicode.com/users', user);
}

export async function getUser(userId: number): Promise<User> {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${userId}`);
    return response.data;
}

export async function deleteUser(userId: number): Promise<void> {
    await axios.delete(`https://jsonplaceholder.typicode.com/${userId}`);
}