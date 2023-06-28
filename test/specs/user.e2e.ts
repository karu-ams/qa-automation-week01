import { createUser, getUser, deleteUser } from "../utils/apiCommands";

describe('API commands', () => {
    let userId: number;
    let userEmail: string;

    afterAll(async () => {
        await deleteUser(userId);
    });

    it('POST command', async () => {
        const user = {
            name: 'Test UserName',
            email: 'automation.qa@testing.com'
        };
        await createUser(user);
        userId = 1;
    });

    it('GET command', async () => {
        const userData = await getUser(userId);
        userEmail = userData.email;

        console.log('User email:', await userEmail);
    })
});


