import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable"

import new1 from "../../assets/new1.webp"
import new2 from "../../assets/new2.webp"
import new3 from "../../assets/new3.webp"
import new4 from "../../assets/new4.webp"

function GalleryResizable() {
    return (
        <>
        {/* Desktop Resizable Gallery */}
        <ResizablePanelGroup orientation="horizontal" className="max-md:hidden! max-h-145 min-h-145">
             {/* left */}
            <ResizablePanel defaultSize="50%">
                <div className="flex h-full w-full p-2">
                <img src={new1} loading='lazy' alt="img" className=" w-full h-full object-cover"/>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle className="w-1 bg-gray-600 hover:bg-gray-300 hover:w-1.5 transition"/>
             {/* Right */}
            <ResizablePanel defaultSize="50%">
                <ResizablePanelGroup orientation="vertical">
                {/* Right Top */}
                    <ResizablePanel>
                        <ResizablePanelGroup orientation="horizontal">
                            {/* Right Bottom Left */}
                            <ResizablePanel defaultSize="50%">
                                <div className="flex h-full w-full p-2">
                                    <img src={new2}  loading='lazy'alt="img" className=" w-full h-full object-cover"/>
                                </div>
                            </ResizablePanel>
                            <ResizableHandle withHandle className="w-1 bg-gray-600 hover:bg-gray-300 hover:w-1.5 transition"/>
                            {/* Right Bottom Left */}
                            <ResizablePanel defaultSize="50%">
                                <div className="flex h-full w-full p-2">
                                    <img src={new1}  loading='lazy'alt="img" className=" w-full h-full object-cover"/>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                    <ResizableHandle withHandle className="w-1 bg-gray-700 hover:bg-gray-300 hover:w-1.5 transition"/> 
                    {/* Right Bottom */}
                    <ResizablePanel>
                        <ResizablePanelGroup orientation="horizontal">
                            {/* Right Bottom Left */}
                            <ResizablePanel defaultSize="50%">
                                <div className="flex h-full w-full p-2">
                                    <img src={new3} loading='lazy' alt="img" className=" w-full h-full object-cover"/>
                                </div>
                            </ResizablePanel>  
                            <ResizableHandle withHandle className="w-1 bg-gray-600 hover:bg-gray-300 hover:w-1.5 transition"/>
                            {/* Right Bottom Left */}
                            <ResizablePanel defaultSize="50%">
                                <div className="flex h-full w-full p-2">
                                    <img src={new4}  loading='lazy'alt="img" className=" w-full h-full object-cover"/>
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>


{/* Mobile Gallery */}
        <div data-aos="fade-up" data-aos-delay="200" className="md:hidden flex flex-col gap-3 p-2">
        {/* الصورة الكبيرة */}
            <img src={new1} loading='lazy' alt="img" className="w-full h-60 rounded-md object-fill"/>
        {/* grid الصور */}
            <div className="grid grid-cols-2 gap-3">
                <img src={new2} loading='lazy' alt="img" className="w-full h-40 object-cover rounded-md" />
                <img src={new1} loading='lazy' alt="img" className="w-full h-40 object-cover rounded-md" />
                <img src={new3} loading='lazy' alt="img" className="w-full h-40 object-cover rounded-md" />
                <img src={new4} loading='lazy' alt="img" className="w-full h-40 object-cover rounded-md" />
            </div>
        </div>

        </>
    )
}
export default GalleryResizable
