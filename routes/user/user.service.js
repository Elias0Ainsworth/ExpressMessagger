import prisma from '../../database/prisma.js'

export class UserService {
    async createUser(req) {

    }
    async findUser(req) {
        return await this.findUserByEmail(req)
    }

    async findAllUsers(req) {
        const users = await prisma.user.findMany({})
        return users;
    }

    async updateUser(req) {

    }

    async deleteUser(req) {

    }

    async findUserByEmail(req) {
        let email;

        // Determine the email based on the request method
        if (req.method === "POST" && req.body.email) {
            email = req.body.email;
        } else if (req.query.email) {
            email = req.query.email;
        }

        // Find the user by email
        try {
            const user = await prisma.user.findUnique({ where: { email }});
            return user;
        } catch (error) {
            // Handle any errors that occur during the query
            console.error("Error finding user by email:", error);
            throw error;
        }
    }
}