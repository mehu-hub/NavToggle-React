import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-2 mt-2'>
            <CheckBadgeIcon className='text-gray-600 h-4 w-4'/>
            <p className='font-semibold text-gray-600'>{feature}</p>
        </div>
    );
};

export default Feature;