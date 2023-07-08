const TsectionP = () => {
    return <div className="mt-96   relative ">
        <h1 className=" font-bold text-orange-400 text-xl ml-4 md:ml-[400px]">Portfolio</h1>
        <h1 className=" font-bold text-xl md:ml-[400px] ml-4 dark:text-white">Some of My Projects can help you to know me better 🥰</h1>
    <div className="relative   space-y-4 h-[400px] ml-0 mt-20 md:ml-[18%] ">
       <a href="#" class="flex flex-col items-center rounded-lg shadow md:flex-row md:w-[84%] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
         <img class=" w-full rounded-t-lg h-96  md:w-[400px] md:h-[250px] md:rounded-none md:rounded-l-lg" src={process.env.PUBLIC_URL + '/shop.jpg'} alt=""/>
         <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">Shop</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
         </a>



         <a href="#" class="flex flex-col items-center rounded-lg shadow md:flex-row md:w-[84%] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
         <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">ShopEase</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> A stylish, React-powered shopping website utilizing Tailwind CSS. Explore a wide range of products, view detailed descriptions, and add items to your cart. Enjoy a seamless and visually appealing shopping experience.</p>
        </div>
         <img class="w-full rounded-t-lg h-96  md:w-[400px] md:h-[250px] md:rounded-none md:rounded-l-lg" src={process.env.PUBLIC_URL + '/shoping.jpg'} alt=""/>
         
         </a>



    <div className="relative ">
         <a href="#" class="  flex flex-col items-center rounded-lg shadow md:flex-row md:w-[84%] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
         <img class="w-full rounded-t-lg h-96  md:w-[400px] md:h-[250px] md:rounded-none md:rounded-l-lg" src={process.env.PUBLIC_URL + '/gym.jpg'} alt=""/>
         <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">gymBro</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">GymFit Web: A sleek, React-based gym website with Tailwind CSS. Features classes, trainers, memberships, and testimonials. Engaging design for a seamless user experience.</p>
        </div>
         </a>

</div>

    </div>
    

</div>;

};

export default TsectionP;