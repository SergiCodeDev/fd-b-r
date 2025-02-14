import IconHome from "./icons/IconHome"

export default function FuturisticDesing() {
    return (
        <section className="bg-[#e3f4ff]">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 md:py-8 min-h-lvh grid grid-cols-12 gap-4">
                <div className="col-span-3 grid grid-rows-10 gap-4">
                    <div className="bg-white row-span-4 rounded-[50px]">
                    </div>
                    <div className="bg-white row-span-6 rounded-[50px]">
                    </div>
                </div>
                <div className="bg-white col-span-6 rounded-[50px] bg-[url('/robot.jpg')] bg-cover bg-no-repeat bg-center relative grid place-items-center">
                    <nav className="absolute left-0 top-0 bg-[#e3f4ff] rounded-br-[50px] pr-4 pb-4 before:content-[''] before:absolute before:h-16 before:w-16 before:left-0 before:-bottom-16 before:z-10 before:rounded-tl-[50px] before:shadow-[-1rem_-1rem_0] before:shadow-[#e3f4ff] after:content-[''] after:absolute after:h-14 after:w-14 after:-right-[56px] after:top-0 after:z-10 after:rounded-tl-[50px] after:rounded-[50px] after:shadow-[-24px_-28px_0] after:shadow-[#e3f4ff]">
                        <ul className="flex flex-row items-center gap-4 bg-white px-6 py-2 rounded-[50px]">
                            <li>
                                <a
                                    href="#!"
                                    className="bg-[rgb(45,183,252)] transition-all ease-in-out duration-200 p-3 block rounded-full shadow-[0_0_16px_-6px] shadow-[rgb(45,183,252)] hover:bg-[rgb(80,167,211)] hover:shadow-[rgb(80,167,211)]"
                                >
                                    <IconHome className="h-6 w-6 text-white" />
                                </a>
                            </li>
                            <li className="transition-transform ease-in-out duration-200 hover:scale-110">
                                <a href="#!" className="uppercase font-medium">Sobre</a>
                            </li>
                            <li className="transition-transform ease-in-out duration-200 hover:scale-110">
                                <a href="#!" className="uppercase font-medium">Tienda</a>
                            </li>
                            <li className="transition-transform ease-in-out duration-200 hover:scale-110">
                                <a href="#!" className="uppercase font-medium">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="text-white text-9xl font-extrabold [text-shadow:0_0_14px_white]">SERGI</h1>
                </div>
                <div className="bg-white col-span-3 rounded-[50px] relative rounded-bl-none">

                    <div className="absolute right-full bottom-0 bg-[#e3f4ff] rounded-tl-[82px] pl-4 pt-4 before:content-[''] before:absolute before:h-16 before:w-16 before:right-full before:-bottom-0 before:z-10 before:rounded-br-[50px] before:shadow-[1rem_1rem_0] before:shadow-[#e3f4ff] after:content-[''] after:absolute after:h-16 after:w-16 after:right-[1rem] after:bottom-full after:z-10 after:rounded-br-[34px] after:shadow-[1rem_1rem_0] after:shadow-[#e3f4ff]">

                        <div className="bg-white p-4 rounded-bl-[66px] rounded-tl-[66px] before:content-[''] before:absolute before:h-16 before:w-16 before:right-0 before:bottom-[calc(100%-1rem)] before:z-20 before:rounded-br-[50px] before:shadow-[1rem_1rem_0] before:shadow-white">
                            <div className="bg-[#e3f4ff] rounded-[50px] p-4">
                                <h5 className="font-medium uppercase text-center">Datos</h5>
                                <div className=" w-32 h-36"></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
           </section>
    )
}