import React from 'react';

export const FileUploadButton = (props) => {
    const text = props.text;
    const hiddenFileInput = React.useRef(null);
    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };
    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        props.handleChange(fileUploaded);
    };
    return (
        <div className="flex space-x-2 justify-center">
            <button
                type="button"
                onClick={handleClick}
                className="inline-block 
            px-6 
            py-2.5 
            bg-green-700 
            text-white 
            font-medium 
            text-xs 
            leading-tight 
            uppercase 
            rounded 
            shadow-md 
            hover:bg-green-800 
            hover:shadow-lg 
            active:bg-blue-800 
            active:shadow-lg 
            transition 
            duration-150 
            ease-in-out"
            >
                {text}
            </button>
            <input type="file" ref={hiddenFileInput} onChange={handleChange} style={{ display: 'none' }} />
        </div>
    );
};
