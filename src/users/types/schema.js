import { z }  from 'zod';
import { patterns } from '../../constants/regularExpression';

export const schema = z.object({
    name : z.string().min(1, {message: 'Required!'}),
    email : z.string().min(1,{message: 'Email is  Required!'}).refine((text) => patterns.email?.test(text), {
        message: "Email not valid"
    })
})