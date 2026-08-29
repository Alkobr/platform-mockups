import React from 'react';
import { Wifi, Battery } from 'lucide-react';

interface StatusBarProps {
  dark?: boolean;
  time?: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({ dark = false, time = '9:41' }) => {
  return (
    <div
      className={`w-full px-6 pt-3 pb-2 flex items-center justify-between text-xs font-semibold select-none z-30 transition-colors ${
        dark ? 'text-white' : 'text-[#343434]'
      }`}
    >
      <span className="tracking-tight text-[13px] font-bold">{time}</span>
      <div className="flex items-center gap-1.5">
        {/* Cellular bars */}
        <div className="flex items-end gap-[2px] h-3">
          <span className={`w-[3px] h-1 rounded-xs ${dark ? 'bg-white' : 'bg-[#343434]'}`} />
          <span className={`w-[3px] h-2 rounded-xs ${dark ? 'bg-white' : 'bg-[#343434]'}`} />
          <span className={`w-[3px] h-2.5 rounded-xs ${dark ? 'bg-white' : 'bg-[#343434]'}`} />
          <span className={`w-[3px] h-3 rounded-xs ${dark ? 'bg-white' : 'bg-[#343434]'}`} />
        </div>
        {/* Wifi */}
        <Wifi className="w-3.5 h-3.5 stroke-[2.2]" />
        {/* Battery */}
        <div className="flex items-center">
          <div className={`w-5 h-2.5 rounded-[3px] border ${dark ? 'border-white' : 'border-[#343434]'} p-[1px] flex items-center`}>
            <div className={`w-3.5 h-full rounded-[1px] ${dark ? 'bg-white' : 'bg-[#343434]'}`} />
          </div>
          <div className={`w-[2px] h-1 rounded-r-xs ${dark ? 'bg-white' : 'bg-[#343434]'}`} />
        </div>
      </div>
    </div>
  );
};
