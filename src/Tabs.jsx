import { useState } from 'react';

const Tabs = ({ options = [], activeTab, switchTab }) => {
    return (
        <div >
            <div className="flex w-full bg-white">
                {options.map((tab) => {
                    return (
                        <button
                            key={tab.value} // Add key for better performance in lists
                            onClick={() => switchTab(tab)}
                            className={` border-b-2 w-full py-2 text-center text-md  font-bold transition-all duration-300 ease-in-out 
                                ${activeTab === tab.value 
                                    ? 'border-primary text-primary transform bg-secaondary' 
                                    : 'border-transparent bg-secondary hover:text-primary-light hover:scale-[1.02] z-10'}`
                            }
                        >
                            {tab.title}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Tabs;
