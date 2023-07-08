import React from 'react'

const SecSectionP = () => {
  return (
<div className=" mt-96 md:mt-0 ">  
    <div className='relative  h-auto md:h-[400px] md:ml-[29%] mt-60 w-auto '>
      <a href="#"  class=" flex flex-col items-center bg-white  border-gray-200 rounded-lg  md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-black ">
           <img class="object-cover w-auto rounded-full md:rounded-3xl  shadow-xl shadow-black dark:shadow-white dark:shadow-sm h-96 md:h-auto md:w-60" src={process.env.PUBLIC_URL + '/developer.jpg'} alt=""/>
         <div class="flex flex-col justify-between  p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Me</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">As a passionate web developer, I love self-learning and have independently studied Django, Tailwind CSS, and Flowbite. I possess a strong command over HTML, CSS, and Tailwind CSS, enabling me to create visually appealing and responsive websites. I am also familiar with Flowbite, a CSS framework that enhances my development workflow. Currently, I am expanding my skills in React.js to create dynamic and interactive user interfaces. With a commitment to continuous self-improvement, I am always seeking new challenges to enhance my skills and stay updated in the ever-evolving field of web development.</p>
        </div>
      </a>

    </div>
      
</div>
  )
}

export default SecSectionP