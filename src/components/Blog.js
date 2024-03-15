import React from "react";

function Blogs() {
    return (
      <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
        {/* Header */}
        <div className="flex justify-center text-2xl py-10 hidden md:flex font-spartan">
          <a href="/" className="pr-24 text-gray-400 hover:text-green-400 transition duration-300">Home</a>
          <a href="/blogs/"
              className="pl-2 pr-20 text-green-400 border-b-4 border-green-500">Blogs</a>
          <a href="/scribs/"
              className="pl-24 text-gray-400 hover:text-green-400 transition duration-300">Random Scribs</a>
          <a href="/papers-shelve/"
              className="pl-24 text-gray-400 hover:text-green-400 transition duration-300">Papers Stack</a>
          <a href="/books-shelve/"
              className="pl-24 text-gray-400 hover:text-green-400 transition duration-300">Books Nook</a>    
          <a href="/cv/"
              className="pl-24 text-gray-400 hover:text-green-400 transition duration-300">Resume</a>
        </div>
        {/* Blog section */}
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-20 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*1R9RiWFbSUPKZ5_f" alt="blog"/>
                  <div class="p-6">
                    {/* <h2 class="border-solid border border-sky-500 text-xs title-font font-medium text-gray-200 mr-80">Java</h2> */}
                    <div class="inline-block">
                      <div class="inline-flex justify-right border-2 pr-1 rounded border-gray-400 bg-gray-600 text-gray-200 mb-2">
                        <p class="text-center text-xs title-font pl-1 text-gray-200">Java</p>
                      </div>
                    </div>
                    <h1 class="title-font text-lg font-medium text-gray-200 mb-3">Hashtable in Java</h1>
                    <p class="leading-relaxed mb-3">Details around Hashtables implementation, workings in Java.....</p>
                    <div class="flex items-center flex-wrap ">
                      <a href="https://medium.com/@prasha7/hashtable-in-java-bcca87495414" target="_blank" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      {/* <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*xqZBqJYPVcmUn1x_" alt="blog"/>
                  <div class="p-6">
                    <div class="inline-block">
                      <div class="inline-flex justify-right border-2 pr-1 rounded border-gray-400 bg-gray-600 text-gray-200 mb-2">
                        <p class="text-center text-xs title-font pl-1 text-gray-200">Java</p>
                      </div>
                    </div>
                    <h1 class="title-font text-lg font-medium text-gray-200 mb-4">hashcode() and equals() contract in Java</h1>
                    <p class="leading-relaxed mb-3">How hashcode and equals contract work in Java and how to implement it.....</p>
                    <div class="flex items-center flex-wrap">
                      <a target="_blank" href="https://medium.com/@prasha7/hashcode-and-equals-contract-in-java-f2448a34336d" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      {/* <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*4rfMFKIVdNkGqLRP" alt="blog"/>
                  <div class="p-6">
                    <div class="inline-block">
                      <div class="inline-flex justify-right border-2 pr-1 rounded border-gray-400 bg-gray-600 text-gray-200 mb-2">
                        <p class="text-center text-xs title-font pl-1 text-gray-200">Java</p>
                      </div>
                    </div>
                    <h1 class="title-font text-lg font-medium text-gray-200 mb-3">HashMap in Java</h1>
                    <p class="leading-relaxed mb-3">Details around HashMap implementation, workings in Java.....</p>
                    <div class="flex items-center flex-wrap ">
                      <a target="_blank" href="https://medium.com/@prasha7/hashmap-in-java-51409e2d6d74" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      {/* <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*JrYCR1W9h8RO2vEr" alt="blog"/>
                  <div class="p-6">
                    <div class="inline-block">
                      <div class="inline-flex justify-right border-2 pr-1 rounded border-gray-400 bg-gray-600 text-gray-200 mb-2">
                        <p class="text-center text-xs title-font pl-1 text-gray-200">Java</p>
                      </div>
                    </div>
                    <h1 class="title-font text-lg font-medium text-gray-200 mb-3">Quirky keywords in Java</h1>
                    <p class="leading-relaxed mb-3">Quirky and less known keywords in Java and details around them.....</p>
                    <div class="flex items-center flex-wrap ">
                      <a target="_blank" href="https://medium.com/@prasha7/quirky-keywords-in-java-429d3b9ed381" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      {/* <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3">
                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*wuzkVPRz7g5BY8nW" alt="blog"/>
                  <div class="p-6">
                    <div class="inline-block">
                      <div class="inline-flex justify-right border-2 pr-1 rounded border-gray-400 bg-gray-600 text-gray-200 mb-2">
                        <p class="text-center text-xs title-font pl-1 text-gray-200">Java</p>
                      </div>
                    </div>
                    <h1 class="title-font text-lg font-medium text-gray-200 mb-3">Exceptions vs Errors in Java</h1>
                    <p class="leading-relaxed mb-3">Difference between exceptions and errors in Java, dive in for some quirks....</p>
                    <div class="flex items-center flex-wrap ">
                      <a target="_blank" href="https://medium.com/@prasha7/exceptions-vs-errors-in-java-e627fa4127f0" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      {/* <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Blogs;
