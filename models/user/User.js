const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();


// comparePassword = function(plainPass, hashword, callback) {
//     bcrypt.compare(plainPass, hashword, function(err, isPasswordMatch) {
//         return err == null ?
//             callback(null, isPasswordMatch) :
//             callback(err);
//     });
// };

class UserModel {
    constructor() {
        this.text = 'тест прошел';
        this.modelUser = prisma.user;
        this.modelAuth = prisma.userAuth;
    }

    create(user, password) {
        return this.modelUser.create({
            data: {
                name: user,
                last_name: password,
            },
        });
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

        return { status: 'Ok' },{'user': user},{'userAuth': userAuth};
    }

    async comparePassword(password, userPassword){
        const validPassword = await bcrypt.compare(password, userPassword);
        if (validPassword) {
            return({ message: "Valid password" });
        } else {
            return({ error: "Invalid Password" });
        }
    }

    find(user) {
        return 'Проверяем, есть ли юзер';
    }

    get() {
        return this.modelUser.findMany();
    }

    async hashPassword(password){
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

}

const User = new UserModel();

export default User;
