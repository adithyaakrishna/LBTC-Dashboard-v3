import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        date: 'Week 1', Senior_Citizens: 4000, Disabilities: 2400, Comorbidities: 2400, Kids_Below_5: 4555,
    },
    {
        date: 'Week 2', Senior_Citizens: 4000, Disabilities: 2400, Comorbidities: 2400, Kids_Below_5: 4555,
    },
    {
        date: 'Week 3', Senior_Citizens: 4000, Disabilities: 2400, Comorbidities: 2400, Kids_Below_5: 4555,
    },
    {
        date: 'Week 4', Senior_Citizens: 4000, Disabilities: 2400, Comorbidities: 2400, Kids_Below_5: 4555,
    },
    {
        date: 'Week 5', Senior_Citizens: 4000, Disabilities: 2400, Comorbidities: 2400, Kids_Below_5: 4555,
    },
    {
        date: 'Week 6', Senior_Citizens: 4000, Disabilities: 2400, Comorbidities: 2400, Kids_Below_5: 4555,
    },
    {
        date: 'Week 7', Senior_Citizens: 4000, Disabilities: 2400, Comorbidities: 2400, Kids_Below_5: 4555,
    },
    {
        date: 'Week 8', Senior_Citizens: 4000, Disabilities: 2400, Comorbidities: 2400, Kids_Below_5: 4555,
    },
    {
        date: '2000-09', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        date: '2000-10', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        date: '2000-11', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        date: '2000-12', uv: 1890, pv: 4800, amt: 2181,
    },
];

const monthTickFormatter = (tick) => {
    const date = new Date(tick);

    return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
    const { x, y, payload } = tickProps;
    const { value, offset } = payload;
    const date = new Date(value);
    const month = date.getMonth();
    const quarterNo = Math.floor(month / 3) + 1;
    const isMidMonth = month % 3 === 1;

    if (month % 3 === 1) {
        return <text x={x + offset} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
    }

    const isLast = month === 11;

    if (month % 3 === 0 || isLast) {
        const pathX = Math.floor(isLast ? x + offset * 2 : x) + 0.5;

        return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
    }
    return null;
};
export default class Example4 extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';


    render() {
        return (
            <BarChart
                width={800}
                height={400}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
                {/* <XAxis dataKey="date" axisLine={false} tickLine={false} interval={0} tick={renderQuarterTick} height={1} scale="band" xAxisId="quarter" /> */}
                <YAxis />
                <Tooltip />

                <Legend />

                <Bar dataKey="Senior_Citizens" fill="#8884d8" />
                <Bar dataKey="Disabilities" fill="#82ca9d" />
                <Bar dataKey="Comorbidities" fill="#82ca5c" />
                <Bar dataKey="Kids_Below_5" fill="#82ca6d" />
            </BarChart>
        );
    }
}