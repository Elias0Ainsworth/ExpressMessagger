import prisma from '../../database/prisma.js'

export class UserService {
    async createUser(req, res) {
        const { body } = req
        // Check is exist email or not
        const isExistEmail = await this.findUserByEmail(req)
        if (isExistEmail){
            return null
        }

        try {
            const user = await prisma.user.create({ data: body })
            return user
        } catch (error) {
            // Handle any errors that occur during create user
            console.error("Error creating user", error);
            throw error;
        }
    }

    async findAllUsers(req) {
        const users = await prisma.user.findMany({})
        return users;
    }

    async updateUser(req) {
        const id = +req.params.id
        const { body } = req.body

        const user = await this.findUserById(id)
        if(user) {
            return await prisma.user.update({ where: { id }, data: body})
        }
        return null

    }

    async deleteUser(req) {
        const id = +req.params.id

        const user = await this.findUserById(id)
        if(user) {
            return await prisma.user.delete({ where: { id }})
        }
        return null
    }

    async findUserByEmail(req) {
        let email;

        // Determine the email based on the request method
        if (req.method === "POST" && req.body.email) {
            email = req.body.email;
        } else {
            email = req.query.email;
        }

        // Find the user by email
        try {
            const user = await prisma.user.findUnique({ where: { email }});
            return user;
        } catch (error) {
            // Handle any errors that occur during the query
            console.error("Error finding user by email", error);
            throw error;
        }
    }

    async findUserById(id) {
        // Find the user by id
        try {
            const user = await prisma.user.findUnique({ where: { id }});
            if(user) {
                return user;
            }
            return null;
        } catch (error) {
            // Handle any errors that occur during the param
            console.error("Error finding user by id", error);
            throw error;
        }
    }
}