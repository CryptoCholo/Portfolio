export default function About() {
    return (
        <div className="h-5/6 flex justify-center gap-20 bg-violet-100 py-16 px-16">
            <div className="bg-[url('/cholo.png')] h-full w-1/3 bg-center bg-contain bg-no-repeat rounded-full bg-violet-100" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
            </div>
            <div className="w-2/3 p-10 rounded-3xl bg-violet-50" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
                <p className="text-xl  text-indigo-900 font-serif">
                    Dedicated full-stack developer with experience in building web applications using JavaScript, 
                    implementing technical specifications using best practices. 
                    I have a passion for programming and enjoy solving complex problems.
                    I am a quick learner and am able to adapt to new technologies and methodologies easily.
                </p>
            </div> 
        </div>
    )
}