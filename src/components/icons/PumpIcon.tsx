import React from "react";

export default function PumpIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 496 496">
            <g>
                <g>
                    <g>
                        <rect x="224" y="240" width="48" height="16" />
                        <rect x="208" y="40" width="64" height="16" />
                        <rect x="224" y="80" width="48" height="16" />
                        <rect x="208" y="120" width="64" height="16" />
                        <rect x="224" y="160" width="48" height="16" />
                        <rect x="208" y="200" width="64" height="16" />
                        <path
                            d="M460,344c-28.672,0-52,23.328-52,52v24c0,19.848-16.152,36-36,36c-19.848,0-36-16.152-36-36V288h24V16h16V0H120v16h16
				v272h88v48h-8v16h-16v40h-32v16h-8v-96h-40h-8H24c-13.232,0-24,10.768-24,24s10.768,24,24,24h88v80h48v-16h8v16h32v40h16v16h64
				v-16h16V352h-16v-16h-8v-48h48v132c0,28.672,23.328,52,52,52s52-23.328,52-52v-24c0-19.848,16.152-36,36-36h36v-16H460z M112,344
				H24c-4.408,0-8-3.584-8-8c0-4.416,3.592-8,8-8h88V344z M144,424h-16v-96h16V424z M200,424h-16v-16h16V424z M280,368v96h-16v16
				h-32v-16h-16v-96h16v-16h32v16H280z M240,336v-48h16v48H240z M152,272V16h192v256H152z"
                        />
                        <rect x="240" y="408" width="16" height="16" />
                        <rect x="240" y="376" width="16" height="16" />
                        <rect x="240" y="440" width="16" height="16" />
                    </g>
                </g>
            </g>
        </svg>
    );
}
