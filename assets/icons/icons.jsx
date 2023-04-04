import React from 'react'

export default function IconSelector({ id, color = '#121720' }) {
    switch (id) {
        case 'search':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_8_53)">
                        <path d="M23.6804 22.1377L16.2421 14.6994C17.4571 13.1535 18.1826 11.2056 18.1826 9.09134C18.1826 4.07833 14.1043 0 9.09127 0C4.07833 0 0 4.07833 0 9.09127C0 14.1042 4.07833 18.1825 9.09127 18.1825C11.2055 18.1825 13.1535 17.4571 14.6993 16.2421L22.1377 23.6804C22.3507 23.8935 22.6299 24 22.9091 24C23.1883 24 23.4675 23.8935 23.6804 23.6804C24.1065 23.2545 24.1065 22.5637 23.6804 22.1377ZM2.18182 9.09127C2.18182 5.28138 5.28138 2.18182 9.09127 2.18182C12.9012 2.18182 16.0008 5.28138 16.0008 9.09127C16.0008 12.9012 12.9012 16.0007 9.09127 16.0007C5.28138 16.0007 2.18182 12.9012 2.18182 9.09127Z" fill={color} />
                    </g>
                    <defs>
                        <clipPath id="clip0_8_53">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            )
        case 'send':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.4 20.4L20.85 12.92C21.0304 12.8432 21.1842 12.715 21.2923 12.5514C21.4004 12.3878 21.4581 12.1961 21.4581 12C21.4581 11.8039 21.4004 11.6122 21.2923 11.4486C21.1842 11.285 21.0304 11.1568 20.85 11.08L3.4 3.6C3.2489 3.53409 3.08377 3.50684 2.91951 3.5207C2.75525 3.53456 2.59702 3.5891 2.4591 3.67939C2.32118 3.76968 2.20791 3.89289 2.1295 4.0379C2.0511 4.18291 2.01003 4.34515 2.01 4.51L2 9.12C2 9.62 2.37 10.05 2.87 10.11L17 12L2.87 13.88C2.37 13.95 2 14.38 2 14.88L2.01 19.49C2.01 20.2 2.74 20.69 3.4 20.4Z" fill={color} />
                </svg>
            )
        default:
            return null
    }
}
