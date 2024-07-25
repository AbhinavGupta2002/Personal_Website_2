import { TikTokEmbed } from 'react-social-media-embed';
import { useSelector } from 'react-redux'
import React from 'react';

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
                            src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c6f20fa8c7c1d112ea9a1c5918f4b607.jpeg?lk3s=a5d48078&nonce=5625&refresh_token=5b7681d7834ba51b20539bd90b62a1fc&x-expires=1722042000&x-signature=VMIVLVRwSO25BVg5EWK3FerXgog%3D&shp=a5d48078&shcp=81f88b70'
                            width='30%'
                            className='rounded-full'
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
