import { TikTokEmbed } from 'react-social-media-embed';
import { useSelector } from 'react-redux'
import React from 'react';

import tiktokHeadshot from './img/tiktokHeadshot.jpeg'

const TikTokHighlights = () => {
    const tikToks = [
        { url: "https://www.tiktok.com/@saccomander/video/7383578560021187846" },
        { url: "https://www.tiktok.com/@saccomander/video/7370530089701887237" },
        { url: "https://www.tiktok.com/@saccomander/video/7202001961334459650" }
    ];
    const mode = useSelector((state) => state.mode) // redux state

    return (
        <div className={`flex justify-center gap-20 p-10 flex-wrap ` + (mode === 'day' ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-white")}>
            <div className="col-span-12 sm:col-span-3">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto md:before:mx-0 before:bg-blue-700">
                    <h3 className="text-3xl font-semibold">I Post Music on TikTok!</h3>
                    <a
                        className={`mt-5 rounded-md border p-3 flex justify-around items-center cursor-pointer ` + (mode === 'day' ? "bg-gray-300 border-gray-400 hover:bg-gray-100" : "bg-gray-900 border-gray-700 hover:bg-gray-800")}
                        href='https://www.tiktok.com/@saccomander'
                    >
                        <img
                            src={tiktokHeadshot}
                            width='80px'
                            className='rounded-full border border-gray-400'
                        />
                        <div className='flex flex-col items-center'>
                            <div className='text-sm'>Check Out More</div>
                            <div className='font-bold'>@saccomander</div>
                        </div>
                    </a>
                </div>
            </div>
            {tikToks.map((tikTok, _) => (
                <div className='flex justify-center'>
                    <TikTokEmbed url={tikTok.url} width={320} height={570}/>
                </div>
            ))}
        </div>
    );
};

export default TikTokHighlights;
