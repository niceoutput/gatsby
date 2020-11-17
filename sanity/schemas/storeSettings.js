import { MdStore as icon } from 'react-icons/md';

export default {
    // Computer Name
    name: 'storeSettings',
    // Visible title
    title: 'Settings',
    type: 'document',
    icon: icon,
    fields: [
        {
            name: 'name',
            title: 'Store name',
            type: 'string',
            description: 'Name of the pizza',
        },
        {
            name: 'slicemaster',
            title: 'Slicemasters currently slicing',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'person' }] }],
       },
        {
            name: 'hotSlices',
            title: 'Hot Slices available in the case',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'pizza' }] }],
       }
    ],
};
