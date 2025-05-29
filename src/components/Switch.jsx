import { useState } from "react";
const switchOn = true;
export const testSwitch = [
    { id: 1, style: "bg-black text-text-100", title: "OK" },
    { id: 2, style: "bg-red-500 text-text-100", title: "Delete" },
    { id: 3, style: "bg-blue-500 text-text-100", title: "Clear" },
];
export function Switch({ style, title }) {
    const [isOn, setIsOn] = useState(true);
    return <button className={`${style}`}
        onClick={() => { setIsOn(!isOn); switchOn = isOn }
        }
    >
        {title}
    </button >
}

export default function SwitchList() {
    return (
        <div className={`grid grid-cols-4  p-4  ${switchOn ? "block" : "hidden"}`}>
            {testSwitch.map((item) => (
                <Switch
                    key={item.id}
                    style={item.style}
                    title={item.title}
                />
            ))}
        </div>
    );
}
