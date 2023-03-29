import nodejs from "/Node.js_logo.svg";
import react from "/react-2.svg";
import git from "/Git-logo.svg";
import tailwind from "/tailwindcss.svg";
import mongodb from "/MongoDB_Logo.svg";
import typescript from "/Typescript.svg";

export default function About() {
    return (
        <div className="h-full flex justify-center gap-20 bg-violet-100 py-16 px-16">
            <div className="bg-[url('/cholo.png')] h-full w-1/3 bg-center bg-contain bg-no-repeat rounded-full bg-violet-100" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
            </div>
            <div className="w-2/3 flex flex-col items-start justify-between p-10 rounded-3xl bg-violet-50" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
                <p className="text-xl  text-indigo-900 font-serif">
                    Dedicated full-stack developer with experience in building web applications using JavaScript, 
                    implementing technical specifications using best practices. 
                    I have a passion for programming and enjoy solving complex problems.
                    I am a quick learner and am able to adapt to new technologies and methodologies easily.
                </p>
                <button className="bg-violet-300 "><a  href="https://drive.google.com/file/d/1L5bg9cnWY1uYB_mrsIhDN0YZwXNrIyRI/view?usp=share_link">View CV</a></button>
                <div className="flex h-1/3">
                    <span> <img className="w-5/6 h-5/6 rounded-full" src={nodejs}/></span>
                    <span><img className="w-5/6 h-5/6 rounded-full" src={react}/></span>
                    <span><img className="w-5/6 h-5/6 rounded-full" src={git}/></span>
                    <span><img className="w-4/6 h-4/6 rounded-full" src={tailwind}/></span>
                    <span><img className="w-5/6 h-5/6 rounded-full" src={mongodb}/></span>
                    {/* <span><img className="w-5/6 h-5/6 rounded-full" src={typescript}/></span> */}
                </div>
            </div> 
        </div>
    )
}