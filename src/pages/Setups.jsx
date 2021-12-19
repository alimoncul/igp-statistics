import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTrack } from '../store/Actions';
import { NavigationBar } from '../components/NavigationBar';
import { Dropdown } from '../components/Dropdown';
import { SetupDetail } from '../components/SetupDetail';
import { SELECT_TRACK, TRACK_LIST } from '../constants/language';

export default function Setups() {
    const dispatch = useDispatch();
    const track = useSelector((state) => state.setups.track);
    const onChange = (event) => {
        dispatch(setTrack(event.target.value));
    };
    return (
        <div>
            <NavigationBar />
            <main className="pl-4 pr-4 pt-4 div flex place-items-center flex-col">
                <Dropdown onChange={onChange} hint={SELECT_TRACK} value={track ? track : SELECT_TRACK} options={TRACK_LIST} />
                {track ? <SetupDetail track={track} /> : ''}
            </main>
        </div>
    );
}
