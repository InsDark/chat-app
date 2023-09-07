import { prop, getModelForClass } from '@typegoose/typegoose'

export class Token {
    @prop({ type: String })
    token: string

    @prop({ type: String })
    email: string

    @prop({ type: String })
    uid: string
}

export default getModelForClass(Token)