import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-scroll';

export const Interests = () => {
    const mode = useSelector((state) => state.mode) // redux state

    return (
        <div class={mode === 'day' ? "bg-gray-200" : "bg-gray-800"}>
            <Link className="Interests"/>
            <h3 className={mode === 'day' ? "text-center text-3xl font-semibold text-gray-900 pt-10" : "text-center text-3xl font-semibold text-white pt-10"}>Interests</h3>
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
                <div class={mode === 'day' ? "text-center md:border-r md:border-gray-300" : "text-center md:border-r md:border-gray-700"}>
                    <h6 class="text-5xl lg:text-6xl xl:text-7xl">🎶</h6>
                    <br></br>
                    <p class={mode === 'day' ? "text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base" : "text-sm font-medium tracking-widest text-white uppercase lg:text-base"}>
                        Music
                    </p>
                </div>
                <div class={mode === 'day' ? "text-center md:border-r md:border-gray-300" : "text-center md:border-r md:border-gray-700"}>
                    <h6 class="text-5xl lg:text-6xl xl:text-7xl">🏸</h6>
                    <br></br>
                    <p class={mode === 'day' ? "text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base" : "text-sm font-medium tracking-widest text-white uppercase lg:text-base"}>
                        Badminton
                    </p>
                </div>
                <div class={mode === 'day' ? "text-center md:border-r md:border-gray-300" : "text-center md:border-r md:border-gray-700"}>
                    <h6 class="text-5xl lg:text-6xl xl:text-7xl">🖥</h6>
                    <br></br>
                    <p class={mode === 'day' ? "text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base" : "text-sm font-medium tracking-widest text-white uppercase lg:text-base"}>
                        Web Development
                    </p>
                </div>
                <div class="text-center">
                    <h6 class="text-5xl lg:text-6xl xl:text-7xl">🎮</h6>
                    <br></br>
                    <p class={mode === 'day' ? "text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base" : "text-sm font-medium tracking-widest text-white uppercase lg:text-base"}>
                        Video Games
                    </p>
                </div>
                </div>
            </div>
      </div>
    );
  };

  export default Interests