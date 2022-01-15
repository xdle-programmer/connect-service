const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

class UserModel {
    constructor() {
        this.text = 'тест прошел';
        this.modelUser = prisma.user;
        this.modelAuth = prisma.userAuth;
        this.modelOAuth = prisma.userOAuth;
    }

    // CRUD
    get() {
        return this.modelUser.findMany();
    }

    get(id) {
        return this.modelUser.findUnique({
            where: {
                id,
            },
        });
    }
    //--

    // AUTH
    async manualLogin(email, password) {
        const user = await this.modelAuth.findFirst({
            where: {
                email,
            },
            include: {
                user: true,
            },
        });

        if (user !== null) {
            let isCompare = await this.comparePassword(password, user.password);
            if (isCompare == false) return null
        }

        return user;
    }

    async manualRegister(email, password) {
        const user = await this.modelUser.create({
            data: {
                status: 1,
            },
        });

        const hashedPassword = await this.hashPassword(password);
        const userAuth = await this.modelAuth.create({
            data: {
                email,
                password: hashedPassword,
                user_id: user.id,
            },
        });

        return ({ status: 'Ok' }, { user }, { userAuth });
    }

    async hashPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    async comparePassword(password, userPassword) {
        const validPassword = await bcrypt.compare(password, userPassword);
        if (validPassword) {
            return true;
        }
        return false;
    }
    //--

    // OAUTH
    async oauthRegister(data){
        return null
    }

    async oauthLogin(data){
        return null
    }
    //--
}

const User = new UserModel();

export default User;
