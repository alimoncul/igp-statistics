import React from 'react';

export const Separator = (props) => {
    const marginTop = props.marginTop || 'mt-0';
    const marginBottom = props.marginBottom || 'mb-0';
    return <div className={`bg-gray-400 flex-grow ${marginTop} ${marginBottom}`} style={{ height: '1px' }} />;
};
