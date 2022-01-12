const { PrismaClient } = require('@prisma/client');
//
const prisma = new PrismaClient();

class UserModel {
    constructor() {
        this.text = 'тест прошел';
        this.model = prisma.user;
    }

    create(user, password) {
        return this.model.create({
            data: {
                name: user,
                last_name: password,
            },
        });
    }

    find(user) {
        return 'Проверяем, есть ли юзер';
    }

    get() {
        return this.model.findMany();
    }
}

const User = new UserModel();

export default User;
