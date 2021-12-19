import React from 'react';
import { Separator } from './Separator';
import { setups } from '../constants/setups';

export const SetupDetail = (props = { track: '' }) => {
    const setup = setups[props.track];
    const { rookie, pro, elite } = setup;
    return (
        <div className="bg-gray-100 shadow-xl grid grid-flow-col w-1/2 font-sans border-2 rounded-lg border-gray-400 mt-6">
            <div className="border-r-2 border-gray-400">
                <div className="place-items-center">
                    <h1 className="text-center font-bold text-lg">Rookie</h1>
                    <Separator />
                    <div className="grid grid-cols-2 text-center">
                        <h1 className="border-r-2 row-span-2 font-medium">Suspension</h1>
                        <h1 className="">{setup.suspension.toUpperCase()}</h1>
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 text-center">
                        <h1 className="border-r-2 row-span-2 font-medium">Ride Height</h1>
                        {rookie.rideHeight}
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 text-center">
                        <h1 className="border-r-2 row-span-2 font-medium">Wing Level</h1>
                        {rookie.wingLevel}
                    </div>
                </div>
            </div>
            <div>
                <div className="border-r-2 border-gray-400">
                    <div className="place-items-center">
                        <h1 className="text-center font-bold text-lg">Pro</h1>
                        <Separator />
                        <div className="grid grid-cols-2 text-center">
                            <h1 className="border-r-2 row-span-2 font-medium">Suspension</h1>
                            <h1 className="">{setup.suspension.toUpperCase()}</h1>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-2 text-center">
                            <h1 className="border-r-2 row-span-2 font-medium">Ride Height</h1>
                            {pro.rideHeight}
                        </div>
                        <Separator />
                        <div className="grid grid-cols-2 text-center">
                            <h1 className="border-r-2 row-span-2 font-medium">Wing Level</h1>
                            {pro.wingLevel}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="border-gray-400">
                    <div className="place-items-center">
                        <h1 className="text-center font-bold text-lg">Elite</h1>
                        <Separator />
                        <div className="grid grid-cols-2 text-center">
                            <h1 className="border-r-2 row-span-2 font-medium">Suspension</h1>
                            <h1 className="">{setup.suspension.toUpperCase()}</h1>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-2 text-center">
                            <h1 className="border-r-2 row-span-2 font-medium">Ride Height</h1>
                            {elite.rideHeight}
                        </div>
                        <Separator />
                        <div className="grid grid-cols-2 text-center">
                            <h1 className="border-r-2 row-span-2 font-medium">Wing Level</h1>
                            {elite.wingLevel}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
