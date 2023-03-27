export default function Projects() {
    return (
        <div className="flex flex-col gap-14 w-full  justify-center items-center bg-violet-100 gap-7 py-10 px-16 h-min font-serif">
            <div className="flex flex-col gap-5  bg-violet-50 items-start w-full py-10 px-10 rounded-2xl" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
                <h2>Mini FaceBook</h2>
                <p className="font-semibold">A mini facebook application</p>
                <button className="w-1/3" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>View</button>
            </div>
            <div className="flex flex-col gap-5 bg-violet-50 items-start w-full py-10 px-10 rounded-2xl" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
                <h2> A Blog</h2>
                <p className="font-semibold">A Blog api and frontend</p>
                <button className="w-1/3" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>View</button>
            </div>
            <div className="flex flex-col gap-5 bg-violet-50 items-start w-full g py-10 px-10 rounded-2xl" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
                <h2>ChopLife Restaurant</h2>
                <p className="font-semibold">A chatbot application built with socket.io</p>
                <button className="w-1/3" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>View</button>
            </div>
            <div className="flex flex-col gap-5 bg-violet-50 items-start w-full py-10 px-10 rounded-2xl" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
                <h2>Woyengi Skincare</h2>
                <p className="font-semibold">An ecommerce store for a askincare brand</p>
                <button className="w-1/3" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>View</button>
            </div>
        </div>
    )
}