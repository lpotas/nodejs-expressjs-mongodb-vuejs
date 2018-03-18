import './connection';
import schemas from './schemas';

function handleError(err) {
    console.log(err);
}

export const getAllItems = () => {
    return schemas.Item.find({}).then((items) => {
        console.log('find', items);
    }).catch(handleError)
}

export const addItem = () => {
    new schemas.Item({ name: 'Item ' + Date.now() }).save().then((saved) => {
        console.log('save', saved);
    }).catch(handleError);
}

