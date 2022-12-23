import moongose, { Schema, Model, model, Types } from 'mongoose';

import { IProduct } from '../interfaces/products';

const productSchema = new Schema({
    description: { type: String, require: true, default: '' },
    images: [{ type: String }],
    inStock: { type: Number, require: true, default: 0 },
    price: { type: Number, require: true, default: 0 },
    sizes: [{
        type: String,
        enum: {
            values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            message: '{VALUE} no es un tamaño válido'
        },
        require: false
    }],
    slug: { type: String, require: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, require: true, default: '' },
    type: {
        type: String,
        enum: {
            values: ['shirts', 'pants', 'hoodies', 'hats'],
            message: '{VALUE} no es un tipo válido'
        },
        default: 'shirts'
    },
    gender: {
        type: String,
        enum: {
            values: ['men', 'women', 'kid', 'unisex'],
            message: '{VALUE} no es un genero válido'
        },
        default: 'women'
    },
},
    {
        timestamps: true,
        versionKey: false,
    }
);

productSchema.index({ title: 'text', tags: 'text' })

const Product: Model<IProduct> = moongose.models.Product || model('Product', productSchema);

export default Product;