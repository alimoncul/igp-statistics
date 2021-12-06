import { NavigationBar } from '../components/NavigationBar';
import { HistoryFragment } from '../components/HistoryFragment';
import Store from '../Store';
import { history } from '../datas/history.json';
import moment from 'moment';
import { DATE_FORMAT, LONG_DATE_FORMAT } from '../constants/date';

export default function Main() {
    return (
        <Store>
            <NavigationBar />
            <main className="pl-4 pr-4">
                <h1 className="font-bold text-center text-black text-5xl m-4">Welcome to iGP Statistics</h1>
                <div className="flex place-items-center flex-col">
                    {history.map((a) => {
                        return (
                            <HistoryFragment
                                key={a.version}
                                header={`🌟 v${a.version} | ${moment(a.date, DATE_FORMAT).format(LONG_DATE_FORMAT)}`}
                                description={a.description}
                                list={a.list}
                            />
                        );
                    })}
                </div>
            </main>
        </Store>
    );
}
