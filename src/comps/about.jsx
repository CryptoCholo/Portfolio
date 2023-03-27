export default function About() {
    return (
        <div className="h-5/6 flex justify-center gap-20 bg-violet-100 py-16 px-16">
            <div className="bg-[url('/cholo.png')] h-full w-1/3 bg-center bg-contain bg-no-repeat rounded-full bg-violet-100" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
            </div>
            <div className="w-2/3 p-6 rounded-3xl bg-violet-50" style={{boxShadow: "-8px -6px 15px 0 #fff, 6px 8px 15px 0 rgb(0 0 0 / 15%)"}}>
                <p className="text-xl  text-indigo-900 font-serif">
                To learn more, check out the documentation on Responsive Design, Dark Mode and other media query modifiers. Using custom values Customizing your theme
                By default, Tailwind provides top/right/bottom/left/inset utilities for a combination of the default spacing scale, auto, full as well as some additional fraction values. 
                You can customize your spacing scale by editing theme.spacing or theme.extend.spacing in your tailwind.config.js file.
                For a complete list of all available state modifiers, check out the Hover, Focus, & Other States documentation.
                </p>
            </div> 
        </div>
    )
}