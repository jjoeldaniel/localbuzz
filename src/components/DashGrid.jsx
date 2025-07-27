// src/components/Dashboard.jsx
import { h } from 'preact';

export default function DashGrid({ mapContainerRef }) {
    return (
        <div className="w-full h-full p-6 flex flex-col space-y-6">
            {/* Header */}
            {/* <header className="flex justify-between items-start">
                <div>
                    <h1 className="text-lg font-normal font-['Nexa'] font-black">Dashboard</h1>
                </div>
            </header> */}

            {/* 2×4 Grid */}
            <div className="grid grid-cols-4 grid-rows-2 gap-4 auto-rows-min">
                {/* 1) Households */}
                <div className="rounded-[10px] border-2 border-neutral-300 bg-white p-4 flex flex-col items-start">
                    <div className="bg-amber-500 rounded-[10px] w-24 h-24 mb-2" />
                    <div className="text-lg font-['Nexa'] font-black">140</div>
                    <div className="text-sm font-['Nexa'] font-light">Households</div>
                    <div className="mt-1 text-sm text-[10px] font-['Nexa'] font-light">
                        11.6% higher than the&nbsp;
                        <span className="font-black text-sm text-sm">United States.</span>
                    </div>
                </div>

                {/* 2) Median Age */}
                <div className="rounded-[10px] border-2 border-neutral-300 bg-white p-4 flex flex-col items-start">
                    <div className="bg-amber-500 rounded-[10px] w-24 h-24 mb-2" />
                    <div className="text-lg font-['Nexa'] font-black">44.8</div>
                    <div className="text-sm font-['Nexa'] font-light">Median Age</div>
                    <div className="mt-1 text-sm text-[10px] font-['Nexa'] font-light">
                        11.6% higher than the&nbsp;
                        <span className="font-black text-sm text-sm">United States.</span>
                    </div>
                </div>

                {/* 3) Median HH Income */}
                <div className="rounded-[10px] border-2 border-neutral-300 bg-white p-4 flex flex-col items-start">
                    <div className="bg-amber-500 rounded-[10px] w-24 h-24 mb-2" />
                    <div className="text-lg font-['Nexa'] font-black">$130,305</div>
                    <div className="text-sm font-['Nexa'] font-light">Median Household Income</div>
                    <div className="mt-1 text-sm text-[10px] font-['Nexa'] font-light">
                        37.2% higher than the&nbsp;
                        <span className="font-black text-sm text-sm">United States.</span>
                    </div>
                </div>

                {/* 4) Tapestry (spans both rows) */}
                <div className="row-span-2 rounded-[10px] border-2 border-neutral-300 bg-white p-4 flex flex-col">
                    <h2 className="text-lg font-['Nexa'] font-black mb-2">Tapestry</h2>
                    <p className="text-base font-['Nexa'] font-light mb-4">
                        Top 5 segments by household count.
                    </p>

                    <a href="#" className="text-base font-['Nexa'] font-normal underline mb-2">
                        K8 Burbs and Beyond &gt;
                    </a>
                    <div className="w-full h-6 rounded-[5px] border-[1.5px] border-neutral-300 mb-4">
                        <div className="bg-amber-500 h-full w-[57.1%] rounded-[5px]" />
                    </div>

                    <a href="#" className="text-base font-['Nexa'] font-light ">
                        H3 Neighborhood Spirit
                    </a>
                    <div className="w-full h-6 rounded-[5px] border-[1.5px] border-neutral-300 mb-4">
                        <div className="bg-amber-500 h-full w-[36%] rounded-[5px]" />
                    </div>

                    <a href="#" className="text-base font-['Nexa'] font-light ">
                        Other
                    </a>
                    <div className="w-full h-6 rounded-[5px] border-[1.5px] border-neutral-300 mb-4">
                        <div className="bg-amber-500 h-full w-[18%] rounded-[5px]" />
                    </div>

                    <p className="h-20 text-sm justify-start text-black text-base font-light font-['Nexa'] leading-none">
                        <span class="text-sm text-black text-base font-black font-['Nexa'] leading-none">Burbs and Beyond</span>
                        <p>accounts for 57.1% of households in the same area which is 54.3% higher than the U.S.</p>
                    </p>
                </div>

                {/* 5) Map (sps 2 columns) */}
                <div className="col-span-2 rounded-[10px] border-2 border-neutral-300 bg-white overflow-hidden">
                    <div ref={mapContainerRef} className="w-full h-full" />
                </div>

                {/*  6 )  Recent Orders  */}
                <div className="rounded-[10px] border-2 border-neutral-300 bg-white p-4 flex flex-col">
                    <h2 className="text-lg font-['Nexa'] font-black mb-2">Recent Orders</h2>

                    <div className="text-base font-['Nexa'] font-light">Thad Tilton
                        <div className="text-[10px] font-['Nexa'] font-light mb-2">
                            2 dozen <span className="font-black">New York Style Bagels</span>
                        </div>
                        <div className="border-b border-neutral-300 mb-2" />

                        <div className="text-base font-['Nexa'] font-light">Jack Dangermond</div>
                        <div className="text-[10px] font-['Nexa'] font-light">
                            1 <span className="font-black">Sourdough Boule</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
