export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name', 
        type: 'string',
        title: 'Name of the Product'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug of the product',
        options:{
            source: 'name',
        }
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category'
      },
      {
        name: 'Type',
        type: 'string',
        title: 'Type'
      },
      {
        name: 'price',
        type: 'string',
        title: 'price'
      },
      {
        name: 'productImage',
        type: 'image',
        title: 'Product Image',
      },
      {
        name: 'productdetails',
        type: 'array',
        title: 'Product Details',
        of:[
          {
            type:'block',
          }
        ]
      },
      {
        name: 'productcare',
        type: 'array',
        title: 'Product Care',
        of:[
          {
            type:'block',
          }
        ]
      },
    ]
  }