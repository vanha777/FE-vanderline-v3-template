import { motion } from "framer-motion";
import SubMenu from "./subMenu";
import React, { useState } from 'react';

export default function WriteSection({ menu, setMenu }) {
    const [selected, setSelected] = useState(null);
    const changeSelected = (props) => {
        console.log("props", props);
        setSelected(props)
    };
    return (
        <>
            {selected === null &&
                <ul className="menu bg-base-200 rounded-box w-full h-full flex">
                    <li>
                        <a className="p-7" onClick={() => changeSelected('Website')}>
                            <svg width="48px" height="48px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M931.3 659.4H87.4V192.3c0-33.5 27.2-60.7 60.7-60.7h722.6c33.5 0 60.7 27.2 60.7 60.7v467.1z" fill="#FAFCFB" /><path d="M931.3 672.4H87.4c-7.2 0-13-5.8-13-13V192.3c0-40.6 33-73.7 73.7-73.7h722.6c40.6 0 73.7 33 73.7 73.7v467.1c-0.1 7.2-5.9 13-13.1 13z m-830.9-26h817.9V192.3c0-26.3-21.4-47.7-47.7-47.7H148.1c-26.3 0-47.7 21.4-47.7 47.7v454.1z" fill="#0F0F0F" /><path d="M870.6 762.2H148.1c-33.5 0-60.7-27.2-60.7-60.7v-50h843.9v50c0 33.6-27.2 60.7-60.7 60.7z" fill="#9DC6AF" /><path d="M870.6 775.2H148.1c-40.6 0-73.7-33-73.7-73.7v-63h869.9v63c0 40.7-33 73.7-73.7 73.7zM100.4 664.6v37c0 26.3 21.4 47.7 47.7 47.7h722.6c26.3 0 47.7-21.4 47.7-47.7v-37h-818z" fill="#191919" /><path d="M509.4 700.3m-26.5 0a26.5 26.5 0 1 0 53 0 26.5 26.5 0 1 0-53 0Z" fill="#FAFCFB" /><path d="M345.5 353.4m-102.5 0a102.5 102.5 0 1 0 205 0 102.5 102.5 0 1 0-205 0Z" fill="#FAFCFB" /><path d="M345.5 468.9c-63.7 0-115.5-51.8-115.5-115.5s51.8-115.5 115.5-115.5S461 289.7 461 353.4s-51.7 115.5-115.5 115.5z m0-205.1c-49.4 0-89.5 40.2-89.5 89.5s40.2 89.5 89.5 89.5 89.5-40.2 89.5-89.5-40.1-89.5-89.5-89.5z" fill="#C9D3CD" /><path d="M345.5 353.4m-28.3 0a28.3 28.3 0 1 0 56.6 0 28.3 28.3 0 1 0-56.6 0Z" fill="#0F0F0F" /><path d="M673.2 353.4m-102.5 0a102.5 102.5 0 1 0 205 0 102.5 102.5 0 1 0-205 0Z" fill="#FAFCFB" /><path d="M673.2 468.9c-63.7 0-115.5-51.8-115.5-115.5s51.8-115.5 115.5-115.5 115.5 51.8 115.5 115.5-51.8 115.5-115.5 115.5z m0-205.1c-49.4 0-89.5 40.2-89.5 89.5s40.2 89.5 89.5 89.5 89.5-40.2 89.5-89.5-40.2-89.5-89.5-89.5z" fill="#C9D3CD" /><path d="M673.2 353.4m-28.3 0a28.3 28.3 0 1 0 56.6 0 28.3 28.3 0 1 0-56.6 0Z" fill="#0F0F0F" /><path d="M560.9 465.6c0 28.3-23.2 51.5-51.5 51.5s-51.5-23.2-51.5-51.5" fill="#FAFCFB" /><path d="M509.4 530.2c-35.6 0-64.5-29-64.5-64.5 0-7.2 5.8-13 13-13s13 5.8 13 13c0 21.3 17.3 38.5 38.5 38.5 21.3 0 38.5-17.3 38.5-38.5 0-7.2 5.8-13 13-13s13 5.8 13 13c0 35.5-29 64.5-64.5 64.5z" fill="#141414" /><path d="M423.6 762.2h171.5v89.6H423.6z" fill="#FAFCFB" /><path d="M595.1 864.8H423.6c-7.2 0-13-5.8-13-13v-89.6c0-7.2 5.8-13 13-13h171.5c7.2 0 13 5.8 13 13v89.6c0 7.2-5.8 13-13 13z m-158.5-26h145.5v-63.6H436.6v63.6z" fill="#141414" /><path d="M667.3 898.9H351.4c-18.8 0-34.2-15.4-34.2-34.2 0-18.8 15.4-34.2 34.2-34.2h315.8c18.8 0 34.2 15.4 34.2 34.2 0 18.9-15.3 34.2-34.1 34.2z" fill="#FAFCFB" /><path d="M667.3 911.9H351.4c-26 0-47.2-21.2-47.2-47.2s21.2-47.2 47.2-47.2h315.8c26 0 47.2 21.2 47.2 47.2s-21.1 47.2-47.1 47.2z m-315.9-68.3c-11.7 0-21.2 9.5-21.2 21.2s9.5 21.2 21.2 21.2h315.8c11.7 0 21.2-9.5 21.2-21.2s-9.5-21.2-21.2-21.2H351.4z" fill="#141414" /></svg>
                            Website
                        </a>
                    </li>
                    <li>
                        <a className="p-7" onClick={() => changeSelected('Social Media')}>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> */}
                            <svg width="48px" height="48px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M511.3 511.9m-384 0a384 384 0 1 0 768 0 384 384 0 1 0-768 0Z" fill="#9DC6AF" /><path d="M511.3 908.9c-53.6 0-105.6-10.5-154.5-31.2-47.3-20-89.7-48.6-126.2-85.1s-65.1-78.9-85.1-126.2c-20.7-48.9-31.2-100.9-31.2-154.5 0-53.6 10.5-105.6 31.2-154.5 20-47.3 48.6-89.7 85.1-126.2s78.9-65.1 126.2-85.1c48.9-20.7 100.9-31.2 154.5-31.2 53.6 0 105.6 10.5 154.5 31.2 47.3 20 89.7 48.6 126.2 85.1s65.1 78.9 85.1 126.2c20.7 48.9 31.2 100.9 31.2 154.5 0 53.6-10.5 105.6-31.2 154.5-20 47.3-48.6 89.7-85.1 126.2s-78.9 65.1-126.2 85.1c-48.9 20.7-100.9 31.2-154.5 31.2z m0-767.9c-50.1 0-98.7 9.8-144.4 29.1-44.2 18.7-83.8 45.4-117.9 79.5s-60.8 73.7-79.5 117.9c-19.3 45.7-29.1 94.3-29.1 144.4s9.8 98.7 29.1 144.4c18.7 44.2 45.4 83.8 79.5 117.9 34.1 34.1 73.7 60.8 117.9 79.5 45.7 19.3 94.3 29.1 144.4 29.1s98.7-9.8 144.4-29.1c44.2-18.7 83.8-45.4 117.9-79.5 34.1-34.1 60.8-73.7 79.5-117.9 19.3-45.7 29.1-94.3 29.1-144.4s-9.8-98.7-29.1-144.4c-18.7-44.2-45.4-83.8-79.5-117.9-34.1-34.1-73.7-60.8-117.9-79.5C610 150.8 561.4 141 511.3 141z" fill="#191919" /><path d="M343.7 462.2m-38.1 0a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0-76.2 0Z" fill="#141414" /><path d="M719.1 494.3c-7.2 0-13-5.8-13-13 0-13.9-10.1-25.2-22.6-25.2-12.5 0-22.6 11.3-22.6 25.2 0 7.2-5.8 13-13 13s-13-5.8-13-13c0-28.2 21.8-51.2 48.6-51.2s48.6 23 48.6 51.2c0 7.2-5.8 13-13 13z" fill="#141414" /><path d="M418.1 549.7c0 49.2 42.4 89.4 94.2 89.4 51.8 0 94.2-40.2 94.2-89.4v-22.8H418.1v22.8z" fill="#4F423B" /><path d="M512.3 652.1c-59.1 0-107.2-45.9-107.2-102.4v-35.8h214.5v35.8c0 56.5-48.1 102.4-107.3 102.4z m-81.2-112.2v9.8c0 42.1 36.4 76.4 81.2 76.4s81.2-34.3 81.2-76.4v-9.8H431.1z" fill="#141414" /><path d="M456.5 595.5a55.8 22.1 0 1 0 111.6 0 55.8 22.1 0 1 0-111.6 0Z" fill="#D39E33" /><path d="M309.8 613.4m-33.9 0a33.9 33.9 0 1 0 67.8 0 33.9 33.9 0 1 0-67.8 0Z" fill="#F2F9F4" /><path d="M243.2 413.9c-1.6 0-3.1-0.3-4.7-0.9-6.7-2.6-10-10.1-7.5-16.8 20.6-53.5 56.4-99.1 103.5-132.1 48.2-33.7 105-51.5 164-51.5 47.5 0 94.6 11.9 136.2 34.3 6.3 3.4 8.7 11.3 5.3 17.6-3.4 6.3-11.3 8.7-17.6 5.3-37.8-20.4-80.6-31.2-123.8-31.2-53.7 0-105.3 16.2-149.1 46.9-42.9 30-75.5 71.5-94.2 120.1-2 5.1-6.9 8.3-12.1 8.3z" fill="#F2F9F4" /><path d="M277.7 777.1c-25.3 0-49.5-1.2-72.5-3.6C96.2 762 27.3 723.4 11.1 665c-8.1-29.2-2.5-60.8 16.6-94 17.2-29.8 44.9-60 82.4-89.8 7.8-6.2 19.1-4.9 25.3 2.9 6.2 7.8 4.9 19.1-2.9 25.3-34 27-58.7 53.8-73.6 79.6-14.1 24.4-18.5 46.8-13.1 66.4C57.6 698 117.1 728 209 737.7c99 10.5 223.3-3.1 350.2-38.2 126.9-35.1 240.5-87.4 320-147.2 73.9-55.6 109.5-111.9 97.7-154.5-10.6-38.3-58.9-66.2-136-78.7-9.8-1.6-16.5-10.8-14.9-20.6 1.6-9.8 10.8-16.5 20.6-14.9 43.7 7.1 79.8 19 107.3 35.4 30.6 18.2 50 41.5 57.7 69.3 16.2 58.4-23.2 126.9-110.7 192.9-83 62.5-201 116.9-332.1 153.2-102 28-202.7 42.7-291.1 42.7z" fill="#141414" /></svg>
                            Social Media
                        </a>
                    </li>
                    <li>
                        <a className="p-7" onClick={() => changeSelected('Contact')}>
                            <svg width="48px" height="48px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M862.3 978.6H142.7l90.1-73.2V121.2c0-45.4 36.8-82.2 82.2-82.2h547.4c45.4 0 82.2 36.8 82.2 82.2v775.3c-0.1 45.3-36.9 82.1-82.3 82.1z" fill="#FAFCFB" /><path d="M862.3 991.4H142.7c-5.4 0-10.2-3.4-12-8.5-1.8-5.1-0.2-10.8 4-14.2l85.4-69.4V121.2c0-52.3 42.6-94.9 94.9-94.9h547.4c52.3 0 94.9 42.6 94.9 94.9v775.3c0 52.3-42.6 94.9-95 94.9z m-683.7-25.5h683.8c38.3 0 69.4-31.2 69.4-69.4V121.2c0-38.3-31.2-69.4-69.4-69.4H315c-38.3 0-69.4 31.2-69.4 69.4v784.2c0 3.8-1.7 7.5-4.7 9.9l-62.3 50.6z" fill="#0F0F0F" /><path d="M420.5 281.9m-39 0a39 39 0 1 0 78 0 39 39 0 1 0-78 0Z" fill="#0F0F0F" /><path d="M737.3 281.9m-39 0a39 39 0 1 0 78 0 39 39 0 1 0-78 0Z" fill="#0F0F0F" /><path d="M669.7 364c0 50-40.9 90.8-90.8 90.8-50 0-90.8-40.9-90.8-90.8" fill="#FAFCFB" /><path d="M578.9 467.6c-57.1 0-103.6-46.5-103.6-103.6 0-7 5.7-12.7 12.7-12.7 7 0 12.7 5.7 12.7 12.7 0 43.1 35 78.1 78.1 78.1 43.1 0 78.1-35 78.1-78.1 0-7 5.7-12.7 12.7-12.7s12.7 5.7 12.7 12.7c0.2 57.2-46.3 103.6-103.4 103.6zM532.4 606H328.1c-7 0-12.7-5.7-12.7-12.7 0-7 5.7-12.7 12.7-12.7h204.2c7 0 12.7 5.7 12.7 12.7 0.1 6.9-5.6 12.7-12.6 12.7zM532.4 710.7H328.1c-7 0-12.7-5.7-12.7-12.7s5.7-12.7 12.7-12.7h204.2c7 0 12.7 5.7 12.7 12.7s-5.6 12.7-12.6 12.7zM532.4 815.4H328.1c-7 0-12.7-5.7-12.7-12.7 0-7 5.7-12.7 12.7-12.7h204.2c7 0 12.7 5.7 12.7 12.7 0.1 7-5.6 12.7-12.6 12.7zM834.7 815.4h-199c-7 0-12.7-5.7-12.7-12.7 0-7 5.7-12.7 12.7-12.7h199c7 0 12.7 5.7 12.7 12.7 0.1 7-5.6 12.7-12.7 12.7z" fill="#141414" /><path d="M798.8 737.3H671.7c-15.5 0-28-12.5-28-28v-92.7c0-15.5 12.5-28 28-28h127.2c15.5 0 28 12.5 28 28v92.7c0 15.5-12.6 28-28.1 28z" fill="#9DC6AF" /><path d="M799.4 750H671.1c-22.2 0-40.2-18-40.2-40.2V616c0-22.2 18-40.2 40.2-40.2h128.3c22.2 0 40.2 18 40.2 40.2v93.8c0 22.2-18 40.2-40.2 40.2zM671.1 601.3c-8.1 0-14.7 6.6-14.7 14.7v93.8c0 8.1 6.6 14.7 14.7 14.7h128.3c8.1 0 14.7-6.6 14.7-14.7V616c0-8.1-6.6-14.7-14.7-14.7H671.1z" fill="#191919" /><path d="M152.3 978.6h-5.7c-44.5 0-80.5-36-80.5-80.5V237c0-28.3 22.9-51.2 51.2-51.2h115.5v712.3c0 44.5-36.1 80.5-80.5 80.5z" fill="#9DC6AF" /><path d="M149.4 991.4c-53 0-96.1-43.1-96.1-96.1V238.8c0-36.2 29.5-65.7 65.7-65.7h126.4v722.2c0.1 53-43 96.1-96 96.1z m-30.3-792.9c-22.2 0-40.2 18.1-40.2 40.2v656.5c0 38.9 31.7 70.6 70.6 70.6s70.6-31.7 70.6-70.6V198.5h-101z" fill="#191919" /></svg>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a className="p-7" onClick={() => changeSelected('Phone Number')}>
                            <svg width="48px" height="48px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M696.2 1000.9H321c-46 0-83.3-37.3-83.3-83.3V103.9c0-46 37.3-83.3 83.3-83.3h375.2c46 0 83.3 37.3 83.3 83.3v813.7c0 46.1-37.3 83.3-83.3 83.3z" fill="#9DC6AF" /><path d="M692.2 1014.6H325c-55.6 0-100.9-45.3-100.9-100.9V107.9C224.1 52.3 269.4 7 325 7h367.2c55.6 0 100.9 45.3 100.9 100.9v805.8c0 55.6-45.2 100.9-100.9 100.9zM325 34.3c-40.6 0-73.6 33-73.6 73.6v805.8c0 40.6 33 73.6 73.6 73.6h367.2c40.6 0 73.6-33 73.6-73.6V107.9c0-40.6-33-73.6-73.6-73.6H325z" fill="#191919" /><path d="M237.7 146.1h541.8v672.1H237.7z" fill="#FAFCFB" /><path d="M779.5 831.8H237.7c-7.5 0-13.6-6.1-13.6-13.6V146.1c0-7.5 6.1-13.6 13.6-13.6h541.8c7.5 0 13.6 6.1 13.6 13.6v672.1c0 7.5-6.1 13.6-13.6 13.6z m-528.1-27.2h514.5V159.7H251.4v644.9z" fill="#0F0F0F" /><path d="M374.9 431.7m-29.6 0a29.6 29.6 0 1 0 59.2 0 29.6 29.6 0 1 0-59.2 0Z" fill="#0F0F0F" /><path d="M642.3 431.7m-29.6 0a29.6 29.6 0 1 0 59.2 0 29.6 29.6 0 1 0-59.2 0Z" fill="#0F0F0F" /><path d="M508.6 547.3c-36.1 0-65.5-28.6-65.5-63.8v-20.1c0-7.5 6.1-13.6 13.6-13.6s13.6 6.1 13.6 13.6v20.1c0 20.2 17.2 36.5 38.3 36.5s38.3-16.4 38.3-36.5v-20.1c0-7.5 6.1-13.6 13.6-13.6s13.6 6.1 13.6 13.6v20.1c0 35.1-29.4 63.8-65.5 63.8zM560.5 90.4H456.8c-7.5 0-13.6-6.1-13.6-13.6s6.1-13.6 13.6-13.6h103.7c7.5 0 13.6 6.1 13.6 13.6s-6.1 13.6-13.6 13.6z" fill="#0F0F0F" /><path d="M508.6 909.2m-37.9 0a37.9 37.9 0 1 0 75.8 0 37.9 37.9 0 1 0-75.8 0Z" fill="#FAFCFB" /><path d="M508.6 960.7c-28.4 0-51.5-23.1-51.5-51.5s23.1-51.5 51.5-51.5 51.5 23.1 51.5 51.5-23.1 51.5-51.5 51.5z m0-75.8c-13.4 0-24.3 10.9-24.3 24.3s10.9 24.3 24.3 24.3 24.3-10.9 24.3-24.3-10.9-24.3-24.3-24.3z" fill="#0F0F0F" /></svg>
                            Phone Number
                        </a>
                    </li>
                    <li>
                        <a className="p-7" onClick={() => changeSelected('SMS')}>
                            <svg width="48px" height="48px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M1001 500.5c0 234.6-219.2 424.8-489.7 424.8-70.2 0-136.9-12.8-197.3-35.9-25.1-9.6-129.6 72.9-152.3 60-25.3-14.5 31.5-124.8 9.7-143C79.1 729.1 21.7 620.6 21.7 500.5c0-234.6 219.2-424.8 489.7-424.8S1001 265.9 1001 500.5z" fill="#FAFCFB" /><path d="M168 964.3c-4.8 0-9.1-1-12.9-3.2-16.4-9.4-13.6-32.5-12.7-40.1 1.7-14 6.2-31 10.5-47.4 3.5-13.4 7.2-27.3 9-38.6 2.2-13.2 0.9-17.7 0.6-18.7-48.2-40.3-86.1-87.7-112.6-140.8-27.7-55.3-41.7-114.2-41.7-175 0-59.4 13.4-117 39.8-171.3 25.5-52.2 61.9-99.1 108.2-139.3 46.2-40.1 100-71.6 159.8-93.5 61.9-22.7 127.6-34.2 195.3-34.2s133.4 11.5 195.3 34.2c59.9 22 113.6 53.4 159.8 93.5 46.4 40.2 82.8 87.1 108.2 139.3 26.4 54.2 39.8 111.9 39.8 171.3 0 59.4-13.4 117-39.8 171.3-25.5 52.2-61.9 99.1-108.2 139.3-46.2 40.1-100 71.6-159.8 93.5-61.9 22.7-127.6 34.2-195.3 34.2-70.2 0-138-12.3-201.8-36.7-1-0.1-6.3-0.1-22.4 7.3-12.3 5.7-27.2 13.9-41.6 21.9-36 20.1-60.3 33-77.5 33zM511.3 89.2c-64.5 0-127.1 11-185.9 32.6-56.8 20.8-107.7 50.6-151.5 88.6-43.6 37.7-77.8 81.7-101.6 130.6-24.6 50.5-37.1 104.2-37.1 159.4 0 56.6 13.1 111.4 38.9 163C99 713.4 134.7 758 180.2 796c17.2 14.4 8.7 46.9-1.2 84.5-3.6 13.5-7.2 27.6-9.1 39-1.7 10.6-1.3 15.7-0.8 17.8 2.6-0.2 8.7-1.5 21.3-7.3 12.5-5.7 27.6-14.1 42.1-22.2 43.6-24.2 69.1-37.6 86.5-30.9 60.7 23.2 125.5 35 192.4 35 64.5 0 127.1-11 185.9-32.6 56.8-20.8 107.7-50.6 151.5-88.6 43.6-37.8 77.8-81.8 101.7-130.8 24.6-50.5 37.1-104.2 37.1-159.4 0-55.3-12.5-108.9-37.1-159.4-23.9-48.9-58.1-92.9-101.7-130.8-43.7-37.9-94.7-67.7-151.5-88.6-58.9-21.6-121.5-32.5-186-32.5z" fill="#0F0F0F" /><path d="M717.4 405.1m-46.6 0a46.6 46.6 0 1 0 93.2 0 46.6 46.6 0 1 0-93.2 0Z" fill="#141414" /><path d="M345.7 442c-7.5 0-13.5-6-13.5-13.5 0-18.3-13.5-33.2-30-33.2s-30 14.9-30 33.2c0 7.5-6 13.5-13.5 13.5s-13.5-6-13.5-13.5c0-33.2 25.6-60.2 57-60.2s57 27 57 60.2c0 7.4-6.1 13.5-13.5 13.5z" fill="#141414" /><path d="M396.2 532.7c0 60.1 51.8 109.2 115.2 109.2 63.3 0 115.2-49.1 115.2-109.2v-27.9H396.2v27.9z" fill="#4F423B" /><path d="M511.3 655.4c-70.9 0-128.7-55.1-128.7-122.7v-41.4H640v41.4c0 67.7-57.7 122.7-128.7 122.7zM409.7 518.3v14.4c0 52.8 45.6 95.7 101.7 95.7s101.7-42.9 101.7-95.7v-14.4H409.7z" fill="#141414" /><path d="M443.2 588.6a68.1 27.1 0 1 0 136.2 0 68.1 27.1 0 1 0-136.2 0Z" fill="#D39E33" /><path d="M175.9 561.8m-42.5 0a42.5 42.5 0 1 0 85 0 42.5 42.5 0 1 0-85 0Z" fill="#9DC6AF" /><path d="M853.4 561.8m-42.5 0a42.5 42.5 0 1 0 85 0 42.5 42.5 0 1 0-85 0Z" fill="#9DC6AF" /></svg>
                            SMS
                        </a>
                    </li>
                    <li>
                        <a className="p-7" onClick={() => changeSelected('Address')}>
                            <svg width="48px" height="48px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M130.6 320.6h764.7V906H130.6z" fill="#FAFCFB" /><path d="M895.4 919.2H130.6c-7.3 0-13.2-5.9-13.2-13.2V320.6c0-7.3 5.9-13.2 13.2-13.2h764.7c7.3 0 13.2 5.9 13.2 13.2V906c0.1 7.3-5.8 13.2-13.1 13.2z m-751.5-26.4h738.3V333.9H143.9v558.9z" fill="#0F0F0F" /><path d="M936.8 969.1h-851c-17.1 0-31-14-31-31V937c0-17.1 14-31 31-31h851c17.1 0 31 14 31 31v1.1c0 17-13.9 31-31 31z" fill="#845A3D" /><path d="M936.3 982.3h-850c-24.7 0-44.8-20.1-44.8-44.8 0-24.7 20.1-44.8 44.8-44.8h849.9c24.7 0 44.8 20.1 44.8 44.8 0 24.7-20 44.8-44.7 44.8z m-850-63.1c-10.1 0-18.3 8.2-18.3 18.3 0 10.1 8.2 18.3 18.3 18.3h849.9c10.1 0 18.3-8.2 18.3-18.3 0-10.1-8.2-18.3-18.3-18.3H86.3z" fill="#141414" /><path d="M950.2 245.5H75.8l72.1-153.2h730.2z" fill="#9DC6AF" /><path d="M950.2 258.7H75.8c-4.5 0-8.7-2.3-11.2-6.1-2.4-3.8-2.7-8.6-0.8-12.7L136 86.6c2.2-4.6 6.8-7.6 12-7.6h730.2c5.1 0 9.8 3 12 7.6l72.1 153.2c1.9 4.1 1.6 8.9-0.8 12.7-2.6 3.9-6.8 6.2-11.3 6.2zM96.6 232.3h832.7l-59.7-126.8H156.3L96.6 232.3z" fill="#191919" /><path d="M264 110.3l-58.6 135.2" fill="#9DC6AF" /><path d="M205.4 258.7c-1.8 0-3.5-0.4-5.3-1.1-6.7-2.9-9.8-10.7-6.9-17.4L251.8 105c2.9-6.7 10.7-9.8 17.4-6.9 6.7 2.9 9.8 10.7 6.9 17.4l-58.6 135.2c-2.1 5.1-7 8-12.1 8z" fill="#191919" /><path d="M762 110.3l58.6 135.2" fill="#9DC6AF" /><path d="M820.6 258.7c-5.1 0-10-3-12.1-8l-58.6-135.2c-2.9-6.7 0.2-14.5 6.9-17.4 6.7-2.9 14.5 0.2 17.4 6.9l58.6 135.2c2.9 6.7-0.2 14.5-6.9 17.4-1.7 0.8-3.5 1.1-5.3 1.1z" fill="#191919" /><path d="M387.4 110.3l-27.1 135.2" fill="#9DC6AF" /><path d="M360.3 258.7c-0.9 0-1.7-0.1-2.6-0.3-7.2-1.4-11.8-8.4-10.4-15.6l27-135.2c1.4-7.2 8.4-11.8 15.6-10.4 7.2 1.4 11.8 8.4 10.4 15.6l-27 135.2c-1.3 6.4-6.8 10.7-13 10.7z" fill="#191919" /><path d="M638.6 110.3l27.1 135.2" fill="#9DC6AF" /><path d="M665.7 258.7c-6.2 0-11.7-4.3-13-10.6l-27-135.2c-1.4-7.2 3.2-14.1 10.4-15.6 7.2-1.4 14.1 3.2 15.6 10.4l27 135.2c1.4 7.2-3.2 14.1-10.4 15.6-0.9 0.1-1.8 0.2-2.6 0.2z" fill="#191919" /><path d="M513 110.3v135.2" fill="#9DC6AF" /><path d="M513 258.7c-7.3 0-13.2-5.9-13.2-13.2V110.3c0-7.3 5.9-13.2 13.2-13.2s13.2 5.9 13.2 13.2v135.2c0 7.3-5.9 13.2-13.2 13.2z" fill="#191919" /><path d="M918.6 245.5c44.8 0 81.1 36.3 81.1 81.1s-36.3 81.1-81.1 81.1-81.1-36.3-81.1-81.1c0 44.8-36.3 81.1-81.1 81.1s-81.1-36.3-81.1-81.1c0 44.8-36.3 81.1-81.1 81.1S513 371.4 513 326.6c0 44.8-36.3 81.1-81.1 81.1s-81.1-36.3-81.1-81.1c0 44.8-36.3 81.1-81.1 81.1s-81.1-36.3-81.1-81.1c0 44.8-36.3 81.1-81.1 81.1s-81.1-36.3-81.1-81.1 36.3-81.1 81.1-81.1h809" fill="#9DC6AF" /><path d="M918.6 421c-34.5 0-64.7-18.6-81.1-46.2-16.5 27.6-46.7 46.2-81.1 46.2-34.5 0-64.7-18.6-81.1-46.2-16.5 27.7-46.7 46.2-81.1 46.2s-64.7-18.6-81.1-46.2C496.6 402.5 466.4 421 432 421c-34.5 0-64.7-18.6-81.1-46.2-16.5 27.7-46.7 46.2-81.1 46.2s-64.7-18.6-81.1-46.2C172 402.4 141.8 421 107.3 421c-52 0-94.4-42.3-94.4-94.4 0-52 42.3-94.4 94.4-94.4h811.2c52 0 94.4 42.3 94.4 94.4 0.1 52.1-42.2 94.4-94.3 94.4z m-67.9-94.4c0 37.4 30.5 67.9 67.9 67.9s67.9-30.5 67.9-67.9c0-37.4-30.5-67.9-67.9-67.9H107.4c-37.4 0-67.9 30.5-67.9 67.9 0 37.4 30.5 67.9 67.9 67.9 37.4 0 67.9-30.5 67.9-67.9 0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 37.4 30.5 67.9 67.9 67.9 37.4 0 67.9-30.5 67.9-67.9 0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 37.4 30.5 67.9 67.9 67.9 37.4 0 67.9-30.5 67.9-67.9 0-7.3 5.9-13.2 13.2-13.2s13.2 5.9 13.2 13.2c0 37.4 30.5 67.9 67.9 67.9s67.9-30.5 67.9-67.9c0-7.3 5.9-13.2 13.2-13.2s13.2 5.9 13.2 13.2c0 37.4 30.5 67.9 67.9 67.9 37.4 0 67.9-30.5 67.9-67.9 0-7.3 5.9-13.2 13.2-13.2s13.4 5.9 13.4 13.2z" fill="#191919" /><path d="M398.7 906H228.3c-11.2 0-20.3-9.1-20.3-20.3V571.6c0-11.2 9.1-20.3 20.3-20.3h170.4c11.2 0 20.3 9.1 20.3 20.3v314.1c-0.1 11.2-9.2 20.3-20.3 20.3z" fill="#D39E33" /><path d="M398.3 919.2H228.6c-18.7 0-33.8-15.2-33.8-33.8V572c0-18.7 15.2-33.8 33.8-33.8h169.7c18.7 0 33.8 15.2 33.8 33.8v313.4c0 18.6-15.1 33.8-33.8 33.8zM228.6 564.6c-4.1 0-7.4 3.3-7.4 7.4v313.4c0 4.1 3.3 7.4 7.4 7.4h169.7c4.1 0 7.4-3.3 7.4-7.4V572c0-4.1-3.3-7.4-7.4-7.4H228.6z" fill="#111111" /><path d="M245 733.4m-14.6 0a14.6 14.6 0 1 0 29.2 0 14.6 14.6 0 1 0-29.2 0Z" fill="#0C0C0C" /><path d="M788.7 700.7H579.1c-5.9 0-10.7-4.8-10.7-10.7v-99.3c0-5.9 4.8-10.7 10.7-10.7h209.7c5.9 0 10.7 4.8 10.7 10.7V690c-0.1 6-4.9 10.7-10.8 10.7z" fill="#FAFCFB" /><path d="M788.6 714H579.2c-13.3 0-24.1-10.8-24.1-24.1v-99c0-13.3 10.8-24.1 24.1-24.1h209.3c13.3 0 24.1 10.8 24.1 24.1v99c0 13.3-10.8 24.1-24 24.1z m-207-26.5h204.5v-94.2H581.6v94.2z" fill="#0F0F0F" /><path d="M793.6 750.3H574.2c-13.5 0-24.4-10.9-24.4-24.4v-0.8c0-13.5 10.9-24.4 24.4-24.4h219.4c13.5 0 24.4 10.9 24.4 24.4v0.8c0 13.5-10.9 24.4-24.4 24.4z" fill="#FAFCFB" /><path d="M793.2 763.5H574.6c-21 0-38-17.1-38-38 0-21 17.1-38 38-38h218.6c21 0 38 17.1 38 38 0 21-17 38-38 38zM574.6 714c-6.4 0-11.6 5.2-11.6 11.6 0 6.4 5.2 11.6 11.6 11.6h218.6c6.4 0 11.6-5.2 11.6-11.6 0-6.4-5.2-11.6-11.6-11.6H574.6z" fill="#0F0F0F" /><path d="M889.9 110.3H136.1c-17.1 0-31-14-31-31v-1.1c0-17.1 14-31 31-31h753.8c17.1 0 31 14 31 31v1.1c0 17-14 31-31 31z" fill="#845A3D" /><path d="M889.4 123.5H136.6c-24.7 0-44.8-20.1-44.8-44.8S112 34 136.6 34h752.7c24.7 0 44.8 20.1 44.8 44.8s-20.1 44.7-44.7 44.7zM136.6 60.4c-10.1 0-18.3 8.2-18.3 18.3S126.5 97 136.6 97h752.7c10.1 0 18.3-8.2 18.3-18.3s-8.2-18.3-18.3-18.3H136.6z" fill="#141414" /></svg>
                            Address
                        </a>
                    </li>
                </ul>
            }

            {selected !== null &&
                <SubMenu props={selected} menu={menu} setMenu={setMenu} />
            }

        </>
    );
}