// src/components/Dashboard.jsx
import { h } from 'preact';
import { scaleX, scaleY } from '../utils/scale';

export default function Dashboard() {
    return (
        <div className="w-full h-full flex flex-col p-20">
            <div className="w-full h-full flex ">
                {/* — Full‑height Sidebar */}
                <aside className="w-72 h-full bg-neutral-100 rounded-[20px] p-4">

                    <h2 className="text-2xl font-['Nexa'] mb-4">Points</h2>
                    AA
                </aside>

                {/* — Right column: Search Bar on top, Map below */}
                <div className="flex-1 flex flex-col h-full pl-4 space-y-4">
                    {/* Search Bar */}
                    <div className="bg-neutral-100 rounded-[10px] p-4 flex items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 px-4 py-2 text-2xl font-['Nexa'] border-2 border-neutral-300 rounded-[10px]"
                        />
                        <button className="ml-2 px-4 py-2 text-xl rounded-[10px] border-2 border-neutral-300">
                            Alerts
                        </button>
                        <button className="ml-2 px-4 py-2 text-xl rounded-[10px] border-2 border-neutral-300">
                            Inbox
                        </button>
                        <button className="ml-2 px-4 py-2 text-xl rounded-[10px] border-2 border-neutral-300">
                            Profile
                        </button>
                    </div>

                    {/* Map */}
                    <div
                        className="flex-1 bg-neutral-100 rounded-[20px] overflow-hidden"
                    />
                </div>
            </div>
        </div>
    );
}
