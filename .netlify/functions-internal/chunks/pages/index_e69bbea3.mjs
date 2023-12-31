function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ch1yo's coffee</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
    <style>
        /* 動畫部分 */
        #portfolio a:hover figcaption {
            transform: translateY(0);
        }

        #service {
            background-image: url("images/about.jpg");
            background-size: cover;
            background-position: center;
        }
    </style>
</head>

<body class="lg:w-3/4 mx-auto">
    <!-- 主選單 -->
    <nav class="flex bg-slate-900 h-[70px] items-center fixed w-full lg:w-3/4 z-50">
        <a href="#" class="text-slate-100 text-4xl font-bold px-4">Ch1yo's coffee</a>
        <div class="space-x-1 lg:space-x-4 ml-6">
            <a href="#about" class="text-slate-100">關於</a>
            <a href="#portfolio" class="text-slate-100">品項</a>
            <a href="#service" class="text-slate-100">其他飲品</a>
            <a href="#contact" class="text-slate-100">聯絡我</a>
        </div>
        <div class="space-x-4 ml-auto mr-3">
            <a href="#" class="text-slate-100">
                <i class="fa-solid fa-magnifying-glass"></i>
            </a>
            <a href="#" class="text-slate-100">
                <i class="fa-solid fa-user"></i></a>
        </div>
    </nav>

    <div class="h-[70px]"></div>

    <header class="relative aspect-[21/9]">
        <!-- 設定相對定位,整個比例(如果有flex就只能設在圖片) -->
        <img src="/images/1.jpg" alt="" class="w-full h-full object-cover opacity-50">
        <div class="absolute bg-white/20 inset-0 m-auto sm:w-1/2 w-5/12 h-fit text-center space-y-4 p-3 rounded-xl "
            data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-delay="500">
            <h1 class="sm:text-6xl text-3xl font-bold">Welcome to <br>Ch1yo's coffee</h1>
            <P class="sm:block hidden underline decoration-solid italic">致力於打造最舒適的客戶體驗</P>
            <a href="#about" class="inline-block px-6 py-1 bg-rose-400 rounded-lg">more</a>
        </div>
    </header>

    <!-- 關於 -->
    <h2 class="text-4xl font-black py-10 text-center">關於我們</h2>
    <div class="swiper" data-aos="zoom-in"
    data-aos-anchor-placement="center-bottom" data-aos-delay="100">
        <section class="h-[600px] swiper-wrapper" id="about" >
            <div class="bg-amber-100 lg:w-[900px] w-10/12 h-full  mx-auto flex flex-wrap items-center swiper-slide">
                <div class="lg:w-1/3 sm:w-1/2 w-full p-10 aspect-[16/9]">
                    <div class="rounded-full overflow-hidden aspect-[1/1]">
                        <img src="/images/4.jpg" alt="" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="lg:w-2/3 sm:w-1/2 w-full sm:pl-8 text-center sm:text-left">
                    <h2 class="text-3xl font-bold mb-2 border divide-yellow-400  w-fit">使用精選新鮮咖啡豆</h2>
                    <div class="text-xl mt-4">各種不同烘焙度可選擇</div>
                    <p class="leading-8 underline decoration-solid italic ">從淺焙豆到深焙豆，花香、果香、焦糖香一次滿足</p>
                </div>
            </div>
            <div class="lg:w-[900px] w-10/12 items-center swiper-slide">
                <div class="sm:aspect-[16/9] aspect-[1/1]">
                    <img src="/images/p10.jpg" alt="" class="w-full h-full object-cover">
                </div>
            </div>
            <div class="lg:w-[900px] w-10/12 items-center swiper-slide">
                <div class="sm:aspect-[16/9] aspect-[1/1]">
                    <img src="/images/11.jpg" alt="" class="w-full h-full object-cover">
                </div>
            </div>
            
        </section>
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div class="swiper-scrollbar"></div>
    </div>
    
    <!-- 圖片牆 -->
    <section id="portfolio" class="bg-amber-50">
        <div class="flex flex-wrap">
            <div class="w-full xl:w-1/3">
                <a href="/images/p9.jpg" class="block">
                    <figure class="relative overflow-hidden aspect-[3/4]" data-aos="zoom-in"
                        data-aos-anchor-placement="center-bottom" data-aos-delay="100">
                        <img src="/images/p9.jpg" alt="" class="object-cover">
                        <figcaption
                            class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                            悠閒的環境</figcaption>
                    </figure>
                </a>
            </div>
            <div class="flex flex-wrap xl:w-2/3">
                <div class="xl:w-1/6,h-1/2, lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="bottom-bottom" data-aos-delay="100">
                    <a href="/images/p1.jpg" class="block">
                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/p1.jpg" alt="" class="object-contain">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                讀本書吧!</figcaption>
                        </figure>
                    </a>
                </div>
                <div class="xl:w-1/6,h-1/2 lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
                    <a href="/images/p2.jpg" class="block">
                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/p2.jpg" alt="" class="object-cover">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                冰拿鐵</figcaption>
                        </figure>
                    </a>
                </div>
                <div class="xl:w-1/6,h-1/2 lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="bottom-bottom" data-aos-delay="500">
                    <a href="/images/p3.jpg" class="block">
                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/p3.jpg" alt="" class="object-cover">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                濃縮咖啡</figcaption>
                        </figure>
                    </a>
                </div>
                <div class="xl:w-1/6,h-1/2 lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="bottom-bottom" data-aos-delay="700">
                    <a href="/images/p4.jpg" class="block">
                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/p4.jpg" alt="" class="object-cover">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                巧克力布郎尼</figcaption>
                        </figure>
                    </a>
                </div>
                <div class="xl:w-1/6,h-1/2 lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="center-bottom" data-aos-delay="100">
                    <a href="/images/p5.jpg" class="block">
                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/p5.jpg" alt="" class="object-cover">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                特色咖啡</figcaption>
                        </figure>
                    </a>
                </div>
                <div class="xl:w-1/6,h-1/2 lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="center-bottom" data-aos-delay="300">
                    <a href="/images/p6.jpg" class="block">
                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/p6.jpg" alt="" class="object-cover">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                來個糕點吧!</figcaption>
                        </figure>
                    </a>
                </div>
                <div class="xl:w-1/6,h-1/2 lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="center-bottom" data-aos-delay="500">
                    <a href="/images/p7.jpg" class="block">

                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/p7.jpg" alt="" class="object-cover">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                來個糕點吧!</figcaption>
                        </figure>
                    </a>
                </div>
                <div class="xl:w-1/6,h-1/2 lg:w-1/4 sm:w-1/3 w-1/2" data-aos="zoom-in"
                    data-aos-anchor-placement="center-bottom" data-aos-delay="700">
                    <a href="/images/p8.jpg" class="block">

                        <figure class="relative overflow-hidden aspect-[3/4]">
                            <img src="/images/p8.jpg" alt="" class="object-cover">
                            <figcaption
                                class="absolute bottom-0 bg-amber-200/50 w-full text-center translate-y-full duration-500 italic">
                                朋友聚餐</figcaption>
                        </figure>
                    </a>
                </div>

            </div>
        </div>
    </section>
    <!-- 其他飲品 -->
    <section class="py-20" id="service">
        <h2 class="text-4xl text-center font-bold pb-10">其他飲品</h2>
        <div class="container flex flex-wrap mx-auto ">
            <div class="w-full md:w-1/3 md:p-4 py-4 px-20" data-aos="zoom-in" data-aos-anchor-placement="center-bottom"
                data-aos-delay="100">
                <div class="text-center rounded-lg shadow-lg border-zinc-400 border bg-white overflow-hidden">
                    <h3 class="text-xl font-bold py-8 bg-lime-100">茶類</h3>
                    <ul class="divide-y divide-zinc-300  bg-white-zinc-300 text-zinc-900 border-t">
                        <li class="py-4">深焙綠茶</li>
                        <li class="py-4">熱帶水果茶</li>
                        <li class="py-4">普洱茶</li>
                    </ul>
                </div>
            </div>
            <div class="w-full md:w-1/3 md:p-4 py-4 px-20" data-aos="zoom-in" data-aos-anchor-placement="center-bottom"
                data-aos-delay="300">
                <div class="text-center rounded-lg shadow-lg border-zinc-400 border bg-white
                bg-white overflow-hidden">
                    <h3 class="text-xl font-bold py-8 bg-sky-300">奶昔</h3>
                    <ul class="divide-y divide-zinc-300 border-zinc-300 text-zinc-900 border-t">
                        <li class="py-4">香蕉奶昔</li>
                        <li class="py-4">蘋果奶昔</li>
                        <li class="py-4">酪梨奶昔</li>
                        <li class="py-4">香草奶昔</li>
                    </ul>
                </div>
            </div>
            <div class="w-full md:w-1/3 md:p-4 py-4 px-20" data-aos="zoom-in" data-aos-anchor-placement="center-bottom"
                data-aos-delay="500">
                <div class="text-center rounded-lg shadow-lg border-zinc-400 border bg-white
                bg-white overflow-hidden">
                    <h3 class="text-xl font-bold py-8 bg-rose-300">紅茶</h3>
                    <ul class="divide-y divide-zinc-300 border-zinc-300 text-zinc-900 border-t">
                        <li class="py-4">英式大吉嶺</li>
                        <li class="py-4">錫蘭紅茶</li>
                        <li class="py-4">阿薩姆紅茶</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- 聯絡我 -->
    <section class="py-20 bg-amber-100" id="contact">
        <div class="w-1/2 mx-auto">
            <h2 class="text-4xl font-black text-center pb-10">客服中心</h2>
            <form action="">
                <div class="mb-3">
                    <label for="" class="block mb-2">姓名</label>
                    <input type="text" class="border border-zinc-800 w-full p-3 rounded">
                </div>
                <div class="mb-3">
                    <label for="" class="block mb-2">連絡電話</label>
                    <input type="text" class="border border-zinc-800 w-full p-3 rounded">
                </div>
                <div class="mb-3">
                    <label for="" class="block mb-2">Email</label>
                    <input type="text" class="border border-zinc-800 w-full p-3 rounded">
                </div>
                <div class="mb-3">
                    <label for="" class="block mb-2">內容</label>
                    <textarea name="" id="" cols="30" rows="10"
                        class="border border-zinc-800 w-full p-3 rounded"></textarea>
                </div>
                <div>
                    <input type="submit" value="送出" class="px-5 py-2 bg-lime-400 rounded">
                </div>
            </form>
        </div>
    </section>
    <!-- footer -->
    <footer class="flex bg-zinc-900 text-zinc-50 px-3 py-5 justify-between text-sm">
        <div>
            COPYRIGHTS&copy;2023.All Rights Reserved
        </div>
        <div>
            Design by Ch1yo.
        </div>
    </footer>

    <script>
        AOS.init({
            offset: 0,
            // anchorPlacement: 'center-bottom'
        });
        var image = document.getElementsByClassName('thumbnail');
        let cover = document.querySelector('.cover')
        new simpleParallax(image, {
            orientation: 'right',
            delay: 1,
            scale: 2
        });
        new simpleParallax(cover, {
            delay: .6,
            orientation: 'down',
            scale: 1.5
        })

        // swiper
        const swiper = new Swiper('.swiper', {
            // Optional parameters
            // direction: 'h',
            loop: true,
            effect: 'cube',
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            // scrollbar: {
            // el: '.swiper-scrollbar',
            // },
        });
    </script>
</body>

</html>`
	}
render["astro:html"] = true;

export { render as default };
