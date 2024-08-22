import prisma from '../../database/prisma.js'

export class UserService {
    async createUser(req, res) {

    }
    async findUser() {
        const users = await prisma.user.findMany({})
        return users;
    }

    async findAllUsers(req, res) {

    }

    async updateUser(req, res) {

    }

    async deleteUser(req, res) {

    }

    async findUserByEmail() {
        
    }
}