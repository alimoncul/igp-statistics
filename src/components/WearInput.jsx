import React from 'react';
import { TYRE_LIST } from '../constants/tyre';
import { useDispatch, useSelector } from 'react-redux';
import { setWearRate } from '../store/Actions';

export const WearInput = (props) => {
    const tyreWearToUpdate = TYRE_LIST[props.tyre] || TYRE_LIST.SUPERSOFT;
    const dispatch = useDispatch();
    const wearForCurrentTyre = useSelector((state) => state.wears[tyreWearToUpdate]);
    const onChange = (e) => {
        dispatch(setWearRate({ wear: e.target.value, tyre: tyreWearToUpdate }));
    };
    return (
        <div className="flex flex-grow mt-2 mx-2">
            <input
                className="p-1 pl-5 text-center text-sm shadow-lg border rounded w-full text-gray-700 leading-tight"
                id="wear"
                type="number"
                placeholder="Wear per lap"
                onChange={onChange.bind(this)}
                value={wearForCurrentTyre > 0 ? wearForCurrentTyre : ''}
            />
        </div>
    );
};
