import { FaPepperHot as icon } from 'react-icons/fa';

export default {
    // Computer Name
    name: 'topping',
    // Visible title
    title: 'Toppings',
    type: 'document',
    icon: icon,
    fields: [
        {
            name: 'name',
            title: 'Topping name',
            type: 'string',
            description: 'What is the name of the topping?',
        },
        {
            name: 'vegetarian',
            title: 'Vegetarian',
            type: 'boolean',
            description: 'What is the name of the topping?',
            options: {
                layout: 'checkbox',
            },
        },
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian',
        },
        prepare: ({name, vegetarian}) => ({
            title: `${name} ${vegetarian ? '🥬': '🥩'}`,
        }),
    }
};
