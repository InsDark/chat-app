import { prop, getModelForClass } from '@typegoose/typegoose'



export class User {
    @prop({type: String})
    name : string

    @prop({type: String})
    email : string

    @prop({type: String})
    picture  : string

    @prop ({type: String})
    uid: string

    @prop ({type: Array})
    friends: []
}

export default getModelForClass(User)