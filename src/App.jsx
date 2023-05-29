


function App() {

    return (
        <>
            {/* Menu principal */}
            <nav className="z-20 bg-white dark:bg-slate-800 fixed md:static w-full md:w-auto border-b md:border-none shadow-lg md:shadow-none dark:border-none">

                <div className="p-6 container mx-auto">
                    <div className="flex justify-between items-center">

                        {/* Imagen - Logo */}
                        <div className="z-20">
                            <a href="#" className="flex items-center">
                                <img src="/img/firefox.png" alt="logo" className="w-14 h-14" />
                                <span className="text-3xl ml-3"> <span className="font-bold">Firefox</span> Browser</span>
                            </a>
                        </div>

                        {/* Cuerpo del menu */}
                        <div>

                            {/* Boton Responsive */}
                            <input type="checkbox" name="hamburger" id="hamburger" className="peer" hidden />

                            <label htmlFor="hamburger" className="peer-checked:hamburger block z-20 cursor-pointer md:hidden transition p-5 hover:bg-gray-200 dark:hover:bg-slate-700 rounded">
                                <div className="h-0.5 w-6 bg-black dark:bg-white transition"></div>
                                <div className="mt-2 h-0.5 w-6 bg-black dark:bg-white transition"></div>
                            </label>

                            {/* Cuerpo de los enlaces */}
                            <div className="bg-white dark:bg-slate-900 dark:md:bg-slate-800 w-3/5 shadow-lg transition flex flex-col justify-between fixed inset-0 translate-x-[-100%] peer-checked:translate-x-0 md:w-auto md:static md:shadow-none md:translate-x-0 md:flex-row">

                                {/* Enlaces */}
                                <div className="px-6 pt-32 flex flex-col md:flex-row md:items-center gap-3 md:p-0">
                                    <a href="#" className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white  hover:bg-blue-500">Caracteristicas</a>
                                    <a href="#" className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-yellow-400">Ayuda</a>
                                    <a href="#" className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-indigo-500">Componentes</a>
                                    <a href="#" className="tracking-wide cursor-pointer px-3 py-2 rounded font-semibold text-lg transition hover:text-white hover:bg-pink-500">Idiomas</a>
                                </div>

                                {/* Boton */}
                                <div className="block md:hidden border-t py-8 px-6 md:border-t-0 dark:border-slate-700 md:py-0 md:pr-0 md:pl-6">
                                    <a href="#" className="block px-6 py-2 rounded text-center text-white text-lg font-semibold transition bg-blue-500 hover:bg-blue-600">Descargar</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </nav>

            {/* Hero */}
            <div className="mx-auto container flex px-5 md:py-24 md:flex-row flex-col items-center relative pt-40">

                {/* Cuerpo del texto */}
                <div className="lg:flex-grow md:w-1/2 lg:pr-32 md:pr-16 md:pb-0 flex flex-col md:items-start md:text-left items-center text-center pb-5">

                    {/* Texto */}
                    <h1 className="lg:text-6xl text-5xl mb-4 font-medium">Lorem ipsum dolor sit amet consectetur.</h1>
                    <p className="mb-8 leading-relaxed text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas eum id minima dolor impedit nisi itaque maiores.</p>

                    {/* Botones */}
                    <div className="flex xl:flex-row md:flex-col flex-wrap w-full justify-center xl:justify-start gap-10 md:gap-0">

                        <button className="btn-dowloand">
                            <img src="/img/logo_windows.png" alt="logo windows" className="w-10 h-10" />
                            <span className="ml-4 flex items-start flex-col leading-none text-white">
                                <span className="text-xs uppercase">Instalar en</span>
                                <span className="font-medium text-xl">Windows</span>
                            </span>
                        </button>

                        <button className="btn-dowloand xl:ml-4 md:mt-4 mt-0 xl:mt-0">
                            <img src="/img/apple-logo.png" alt="logo windows" className="w-10 h-10" />
                            <span className="ml-4 flex items-start flex-col leading-none text-white">
                                <span className="text-xs uppercase">Instalar en</span>
                                <span className="font-medium text-xl">Mac OS</span>
                            </span>
                        </button>

                    </div>

                </div>

                {/* Imagen */}
                <div className="hidden md:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img src="/img/image_hero1.png" alt="cuerpo" className="object-cover object-center rounded" />
                </div>

                {/* SVG de fondo */}
                <img src="/img/image_hero2.svg" alt="svg" className="hidden md:block absolute right-0 xl:w-1/2 lg:w-[60%] md:w-[55%] -z-10 mt-20" />
                <div>
                </div>
            </div>

            {/* Titulo */}
            <div className="container mx-auto py-28 w-10/12 md:w-8/12">
                <h1 className="sm:text-5xl text-4xl mb-4 font-medium text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima nobis necessitatibus aut.
                </h1>
            </div>


            {/* Cuerpo de la pagina */}
            <section>
                <div className="container mx-auto flex px-8 lg:py-20 py-14 md:flex-row flex-col items-center">

                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col items-start text-left mb-16 md:mb-0">
                        <h2 className="sm:text-4xl text-3xl mb-4 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                        <p className="mb-8 leading-relaxed text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus impedit nemo iusto ipsum maxime maiores labore minima temporibus doloremque cupiditate ipsam magni, harum officia consequuntur aut libero quam sequi sapiente?</p>
                    </div>

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img src="/img/image_content1.svg" alt="imagen" className="object-cover object-center rounded shadow-xl" />
                    </div>
                </div>


                <div className="container mx-auto flex px-8 lg:py-20 py-14 md:flex-row flex-col items-center">

                    <div className="lg:flex-grow md:w-1/2 flex flex-col md:pl-16 items-start text-left mb-16 md:mb-0">
                        <h2 className="sm:text-4xl text-3xl mb-4 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                        <p className="mb-8 leading-relaxed text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus impedit nemo iusto ipsum maxime maiores labore minima temporibus doloremque cupiditate ipsam magni, harum officia consequuntur aut libero quam sequi sapiente?</p>
                    </div>

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:order-first">
                        <img src="/img/image_content2.svg" alt="imagen" className="object-cover object-center rounded" />
                    </div>
                </div>


                <div className="container mx-auto flex px-8 lg:py-20 py-14 md:flex-row flex-col items-center">

                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 flex flex-col items-start text-left mb-16 md:mb-0">
                        <h2 className="sm:text-4xl text-3xl mb-4 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
                        <p className="mb-8 leading-relaxed text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus impedit nemo iusto ipsum maxime maiores labore minima temporibus doloremque cupiditate ipsam magni, harum officia consequuntur aut libero quam sequi sapiente?</p>
                    </div>

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img src="/img/image_content3.png" alt="imagen" className="object-cover object-center rounded shadow-xl" />
                    </div>
                </div>
            </section>

            {/* Informacion */}
            <section className="">
                <h1 className="md:text-6xl text-center text-5xl font-medium md:mt-40 md:mb-80 my-28">Pittchfork Kickstartet Taxidermye</h1>

                <div className="flex px-5 pb-24 items-center flex-col">

                    <div className="relative w-full flex justify-center items-end">
                        <img src="/img/image_info1.png" alt="imagen" className="w-4/5 md:w-8/12 h-1/5 mb-10 object-cover object-center rounded shadow" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1242 532" className="absolute -z-10">
                            <path fill="none" stroke="#ffba2d" strokeWidth="2"
                                d="M1198.8 232.3c4.7 3 6.1 9.1 3.2 13.8l-.2.3c-2.8 4.5-1.3 10.4 3.2 13.2 4.6 2.8 10.5 1.5 13.4-2.9l.2-.3c3.1-4.7 9.4-6 14.2-3.1 4.8 3 6.3 9.3 3.3 14.1-8.9 14.1-27.8 18.3-42 9.5-14.3-8.8-18.7-27.4-9.8-41.4 3-4.7 9.3-6.2 14.1-3.3l.2.1h.2z">
                            </path>
                            <linearGradient id="a2" x1="1046.5737" x2="1180.3937" y1="142.2743" y2="50.0583"
                                gradientTransform="matrix(1 0 0 -1 0 519.0001)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#ffda65"></stop>
                                <stop offset="1" stopColor="#ff9741"></stop>
                            </linearGradient>
                            <circle cx="1096.9" cy="411.4" r="120.5" fill="url(#a2)"></circle>
                            <linearGradient id="b2" x1="-83.934" x2="122.2983" y1="-272.8492" y2="-30.4322"
                                gradientTransform="matrix(.766 -.6428 -.6428 -.766 175.4476 172.2943)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#c857f1"></stop>
                                <stop offset="1" stopColor="#2ebffc"></stop>
                            </linearGradient>
                            <path fill="url(#b2)"
                                d="M45.1 300.6l323-271C421.4-15.3 501-8.3 545.8 45.1l.2.2c44.8 53.4 37.8 132.9-15.5 177.7l-323 271C154 538.7 74.4 531.8 29.7 478.4l-.2-.2c-44.8-53.3-37.8-132.9 15.6-177.6z">
                            </path>
                            <path fill="none" stroke="#ff008b" strokeWidth="2"
                                d="M130.5 193.8L522.4 58.9c52.9-18.2 110.5 9.9 128.7 62.8h0c18.2 52.9-9.9 110.5-62.8 128.7L196.5 385.3c-52.9 18.2-110.5-9.9-128.7-62.8h0c-18.3-52.9 9.8-110.5 62.7-128.7z">
                            </path>
                            <circle cx="811.9" cy="81.2" r="12" fill="#ff008b"></circle>
                            <linearGradient id="c2" x1="733.0189" x2="647.999" y1="-193.4654" y2="-16.5744"
                                gradientTransform="scale(1 -1) rotate(32.997 1111.38555617 211.5247949)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#f80089"></stop>
                                <stop offset="1" stopColor="#b833e1"></stop>
                            </linearGradient>
                            <path fill="url(#c2)"
                                d="M678 256.3L981.8 59.1c58.4-37.9 136.5-21.3 174.5 37.1l.1.2c37.9 58.4 21.3 136.5-37.1 174.5L815.5 468.1C757.1 506 679 489.4 641.1 431l-.1-.2c-38-58.4-21.4-136.5 37-174.5z">
                            </path>
                        </svg>

                    </div>

                    <div className="xl:w-2/3 w-full px-8 xl:px-0 mt-5 md:mt-0 flex justify-between lg:flex-row flex-col gap-10">

                        <div>
                            <h1 className="sm:text-4xl text-3xl mb-4 font-medium">Lorem ipsum dolor sit amet.</h1>
                            <p className="mb-8 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum libero blanditiis id fuga quibusdam. Animi voluptatibus doloremque nobis temporibus unde itaque modi culpa, repellendus est. Consequuntur nesciunt voluptatum eius placeat.</p>
                        </div>

                        <div>
                            <h1 className="sm:text-4xl text-3xl mb-4 font-medium">Lorem ipsum dolor sit amet.</h1>
                            <p className="mb-8 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum libero blanditiis id fuga quibusdam. Animi voluptatibus doloremque nobis temporibus unde itaque modi culpa, repellendus est. Consequuntur nesciunt voluptatum eius placeat.</p>
                        </div>

                        <div>
                            <h1 className="sm:text-4xl text-3xl mb-4 font-medium">Lorem ipsum dolor sit amet.</h1>
                            <p className="mb-8 leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum libero blanditiis id fuga quibusdam. Animi voluptatibus doloremque nobis temporibus unde itaque modi culpa, repellendus est. Consequuntur nesciunt voluptatum eius placeat.</p>
                        </div>
                    </div>
                </div>

                <div className="container px-5 pb-24 mx-auto">
                    <div className="flex md:flex-row flex-col flex-wrap -mx-4 -mb-10">
                        <div className="md:w-1/2 mb-10 px-4 flex flex-col items-center justify-center">
                            <div className="h-80 lg:h-96">
                                <img src="/img/image_info2.png" alt="info" className="object-cover object-center w-full h-full" />
                                <h2 className="text-4xl font-medium mt-6 mb-3">Lorem ipsum dolor sit.</h2>
                                <p className="leading-relaxed text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt suscipit et, ut exercitationem numquam ratione dolorum? Odio, reprehenderit neque enim quidem dolore debitis atque quos cupiditate consequuntur minus illo dolorum.</p>
                            </div>
                        </div>

                        <div className="md:w-1/2 mb-10 px-4 flex flex-col items-center justify-center">
                            <div className="h-80 lg:h-96">
                                <img src="/img/image_info3.png" alt="info" className="object-cover object-center w-full h-full" />
                                <h2 className="text-4xl font-medium mt-6 mb-3">Lorem ipsum dolor sit.</h2>
                                <p className="leading-relaxed text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt suscipit et, ut exercitationem numquam ratione dolorum? Odio, reprehenderit neque enim quidem dolore debitis atque quos cupiditate consequuntur minus illo dolorum.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Seccion Descargas */}
            <div className="flex mt-40 px-5 py-24 md:flex-row flex-col items-center justify-center bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">

                <div className="hidden md:block lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img src="/img/firefox.png" alt="logo" className="object-cover object-center w-full rounded" />
                </div>

                <div className="md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="lg:text-7xl text-6xl mb-8 font-medium text-white">Disponible para móviles</h1>
                    <div className="flex md:flex-row flex-col flex-wrap gap-5 justify-center items-center">
                        <button className="btn-dowloand">
                            <img src="/img/google-play.png" alt="logo windows" className="w-10 h-10" />
                            <span className="ml-4 flex items-start flex-col leading-none text-white">
                                <span className="text-xs uppercase">Disponible en</span>
                                <span className="font-medium text-xl">Google Play</span>
                            </span>
                        </button>

                        <button className="btn-dowloand">
                            <img src="/img/apple-logo.png" alt="logo windows" className="w-10 h-10" />
                            <span className="ml-4 flex items-start flex-col leading-none text-white">
                                <span className="text-xs">Consiguelo en el</span>
                                <span className="font-medium text-xl">App Store</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
                <div className="container mx-auto px-5 py-8 flex items-center">
                    <div className="w-full flex justify-center gap-10">
                        <a href="#" className="text-white cursor-pointer">
                            <i class="fa-brands fa-facebook-f text-2xl transition hover:-translate-y-1 hover:scale-110"></i>
                        </a>

                        <a href="#" className="text-white cursor-pointer">
                            <i class="fa-brands fa-instagram text-2xl transition hover:-translate-y-1 hover:scale-110"></i>
                        </a>

                        <a href="#" className="text-white cursor-pointer">
                            <i class="fa-brands fa-github text-2xl transition hover:-translate-y-1 hover:scale-110"></i>
                        </a>

                        <a href="#" className="text-white cursor-pointer">
                            <i class="fa-brands fa-linkedin text-2xl transition hover:-translate-y-1 hover:scale-110"></i>
                        </a>
                    </div>

                </div>
            </footer>

        </>
    )
}

export default App
