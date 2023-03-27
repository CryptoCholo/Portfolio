
import image from "/enugu.svg"

function Header() {
    // bg-[url('/homeB.webp')] bg-center bg-cover || style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}
    return (
        <div className="flex flex-col w-full bg-violet-100  text-blue-900 h-full">
            <main className="w-full h-full  px-16 pb-24 pt-10">
                <header className="sticky flex top-0 items-center justify-between gap-80 h-20 w-full px-10 p-4">
                    <div className="text-xl font-semibold w-1/3 py-5 px-10 rounded-xl bg-violet-50" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
                        MR CHOLO
                    </div>
                    <ul className="flex justify-between gap-12 py-5 w-2/3 px-10 text-lg bg-violet-50 font-semibold cursor-pointer rounded-xl" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
                        <li>
                            Projects
                        </li>
                        <li>
                            Articles
                        </li>
                        <li>
                            Github
                        </li>
                    </ul>
                </header>
                <div className="flex items-center h-full">
                    <div className="flex justify-start w-full p-10 rounded-xl bg-violet-50" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
                        <h1 className="text-[4vw]">Hi, <br/>I'm Offor Chibuzor.<br/>
                            FullStack Developer <br/> in Enugu, Nigeria.
                        </h1>
                    </div>
                   <img className="w-1/3 h-2/3 rounded-full" src={image}/>
                </div>
             </main>
        </div>
    )
  }
  
  export default Header;
  