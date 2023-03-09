import {Schema, model} from 'mongoose';

interface iClass {
    name: string,
}
const classSchema = new Schema<iClass>({
    name: String,
});
const Class = model<iClass>('Class', classSchema);
export default Class;