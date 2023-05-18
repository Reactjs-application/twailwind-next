import React from 'react';

export default function Grid() {
    return (
        <>
            <div className="mt-7 w-full p-5">
                <h1 className="text-xl text-black font-medium">Flex Basis</h1>
                <div className="flex flex-col md:flex-row gap-6 mt-4">
                    <div className="basis-full md:basis-1/4 bg-stone-300 text-black text-center p-5">
                        Flex Basis 1
                    </div>
                    <div className="basis-full md:basis-1/4 bg-stone-300 text-black text-center p-5">
                        Flex Basis 2
                    </div>
                    <div className="basis-full md:basis-1/4 bg-stone-300 text-black text-center p-5">
                        Flex Basis 3
                    </div>
                    <div className="basis-full md:basis-1/4 bg-stone-300 text-black text-center p-5">
                        Flex Basis 4
                    </div>
                </div>
                <h1 className="text-xl text-black font-medium mt-4">Flex Direction</h1>
                <div className="flex flex-col-reverse md:flex-row-reverse gap-6 mt-4">
                    <div className="basis-full md:basis-1/4 bg-stone-300 text-black text-center p-5">
                        Flex Basis 1
                    </div>
                    <div className="basis-full md:basis-1/4 bg-stone-300 text-black text-center p-5">
                        Flex Basis 2
                    </div>
                    <div className="basis-full md:basis-1/4 bg-stone-300 text-black text-center p-5">
                        Flex Basis 3
                    </div>
                    <div className="basis-full md:basis-1/4 bg-stone-300 text-black text-center p-5">
                        Flex Basis 4
                    </div>
                </div>
                <h1 className="text-xl text-black font-medium mt-4">Flex Wrap</h1>
                <div className="flex flex-wrap gap-6 mt-4 text-center">
                    <div className="bg-stone-300 text-black p-5">Flex Basis 1</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 2</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 3</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 4</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 4</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 4</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 1</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 2</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 3</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 4</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 4</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 4</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 1</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 2</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 3</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 4</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 4</div>
                    <div className="bg-stone-300 text-black p-5">Flex Basis 4</div>
                </div>
            </div>
            <h1 className="text-xl text-black font-medium mt-4">Flex</h1>
            <div className="flex gap-2 mt-4  text-center">
                <div className="flex-none  bg-stone-300 text-black">Flex 1</div>
                <div className="flex-1 w-10 bg-stone-300 text-black">Flex 2</div>
                <div className="flex-1 w-40  bg-stone-300 text-black">Flex 3</div>
            </div>
            <div class="flex gap-2  text-center mt-4">
                <div class="grow h-10 w-10 bg-stone-300 text-black order-last">1</div>
                <div class="grow-[5] h-10 w-10 bg-stone-300 text-black">2</div>
                <div class="grow-0  h-10 w-10 bg-stone-300 text-black">3</div>
            </div>
        </>
    );
}
