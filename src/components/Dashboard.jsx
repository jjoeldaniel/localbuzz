// src/components/Dashboard.jsx
import { h } from 'preact';
import { scaleX, scaleY } from '../utils/scale';
import DashGrid from './DashGrid';

export default function Dashboard() {
    return (
        <div className="w-full h-full flex flex-col p-20">
            <div className="w-full h-full flex ">
                {/* — Full‑height Sidebar */}
                <aside className="w-72 h-full bg-neutral-100 rounded-[20px] p-6 flex flex-col">
                    {/* Logo */}
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="w-24 h-28 mb-6"
                    />

                    {/* Primary Nav */}
                    <h2 className="text-lg font-['Nexa'] font-black mb-3">Menu</h2>
                    <a href="#zip" className="text-base font-['Nexa'] font-light mb-2 hover:underline">
                        Zip Code Analysis
                    </a>
                    <a href="#tapestry" className="text-base font-['Nexa'] font-light mb-6 hover:underline">
                        Tapestry Segment
                    </a>

                    {/* Secondary Nav */}
                    <h2 className="text-lg font-['Nexa'] font-black mb-3">General</h2>
                    <a href="#settings" className="text-base font-['Nexa'] font-light mb-2 hover:underline">
                        Settings
                    </a>
                    <a href="#help" className="text-base font-['Nexa'] font-light mb-2 hover:underline">
                        Help
                    </a>
                    <a href="#logout" className="text-base font-['Nexa'] font-light mb-6 hover:underline">
                        Logout
                    </a>

                    {/* push download card to bottom */}
                    <div className="mt-auto w-full">
                        <div className="bg-black rounded-[10px] p-4">
                            <p className="text-white text-base font-['Nexa'] font-black leading-7">
                                Download <span className="font-normal">our Mobile App</span>
                            </p>
                            <button className="mt-4 w-full text-sm bg-amber-500 rounded-[5px] py-2 text-white font-['Nexa'] font-black" style="cursor: pointer;">
                                Download
                            </button>
                        </div>
                    </div>
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

                    {/* Dashboard Main View */}
                    <div className="flex-1 bg-neutral-100 rounded-[20px] overflow-hidden">
                        <DashGrid></DashGrid>
                    </div>
                </div>
            </div>
        </div>
    );
}
