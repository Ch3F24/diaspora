<div class="bg-midnight sticky top-0 z-10" x-data="{ open: false }" @scroll.window="atTop = (window.pageYOffset > 20 ? false : true)" :class="{ 'shadow-md' : !atTop }">
    <div class="max-w-7xl mx-auto px-8 sm:px-16">
        <div class="flex justify-between items-center border-b border-white md:border-none py-6">
            <div class="flex justify-start md:order-last md:ml-8 md:pt-8 md:w-5/12">
                <a href="{{route('home')}}">
                    <p class="text-2xl md:text-5xl text-roman">{{ $page_title ? $page_title : 'Magyarok /n a nagyvilágban'}}</p>
                </a>
            </div>
            <div class="flex justify-between items-center md:border-b md:border-white md:justify-start md:w-7/12">
                <div class="-mr-2 -my-2 md:hidden" x-on:click="open = true">
                    <button type="button"
                            class="p-2 inline-flex rounded-md items-center justify-center text-white hover:bg-roman focus:outline-none focus:ring-0"
                            aria-expanded="false">
                        <span class="sr-only">Open menu</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
                <nav class="hidden md:flex space-x-10 items-end">
                    <ul class="flex text-roman pb-2 md:mr-8">
                        @foreach(Mcamara\LaravelLocalization\Facades\LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
                            <li>
                                <a
                                    rel="alternate"
                                    hreflang="{{ $localeCode }}"
                                    @class([
                                        'text-white' => Mcamara\LaravelLocalization\Facades\LaravelLocalization::getCurrentLocale() == $localeCode,
                                        "after:content-['|'] after:mx-2 after:text-roman flex" => $localeCode == 'hu','hover:text-white transition-color font-light text-xl'])
                                    href="{{ Mcamara\LaravelLocalization\Facades\LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">
                                    {{ strtoupper($localeCode) }}
                                </a>
                            </li>
                        @endforeach
                    </ul>
                    <a href="{{ route('location','wintondale') }}" class="text-xl font-light text-roman hover:text-white transition-color pb-2">{{ __('Wintondale') }}</a>
{{--                    <a href="{{ route('location','argentine') }}" class="text-xl font-light text-roman hover:text-white transition-color pb-2">{{ __('Argentine') }}</a>--}}
                </nav>
            </div>
        </div>

    </div>

    {{--        Mobile--}}
    <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
         x-show="open"
         x-transition:enter="transition ease-out duration-200"
         x-transition:enter-start="opacity-0 translate-y-1"
         x-transition:enter-end="opacity-100 translate-y-0"
         x-transition:leave="transition ease-in duration-150"
         x-transition:leave-start="opacity-100 translate-y-0"
         x-transition:leave-end="opacity-0 translate-y-1">
        <div class="rounded-md shadow-md ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div class="pb-6 px-5">
                <div class="flex items-center justify-between border-b border-roman py-5">
                    <div>
                        <p class="text-2xl text-roman">{{ $page_title ? $page_title : 'Magyarok /n a nagyvilágban'}}</p>
                    </div>
                    <div class="-mr-2">
                        <button type="button"
                                class="bg-white rounded-md p-2 inline-flex items-center justify-center text-roman hover:text-white hover:bg-roman focus:outline-none"
                                x-on:click="open = false">
                            <span class="sr-only">Close menu</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="mt-6">
                    <nav class="grid gap-y-6">
                        <a href="{{ route('location','wintondale') }}" class="-m-3 p-3 flex items-center rounded-md">
                            <span class="text-base font-medium text-roman hover:text-midnight">{{ __('Wintondale') }}</span>
                        </a>
                        <a href="{{ route('location','argentine') }}" class="-m-3 p-3 flex items-center rounded-md">
                            <span class="text-base font-medium text-roman hover:text-midnight">{{ __('Argentine') }}</span>
                        </a>

                        <ul class="flex text-roman pb-2">
                            @foreach(Mcamara\LaravelLocalization\Facades\LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
                                <li>
                                    <a
                                        rel="alternate"
                                        hreflang="{{ $localeCode }}"
                                        @class([
                                            'opacity-50' => Mcamara\LaravelLocalization\Facades\LaravelLocalization::getCurrentLocale() == $localeCode,
                                            "after:content-['|'] after:ml-1 after:mr-2 after:text-roman" => $localeCode == 'hu','hover:text-midnight transition-color text-base font-medium'])
                                        href="{{ Mcamara\LaravelLocalization\Facades\LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}">
                                        {{ strtoupper($localeCode) }}
                                    </a>
                                </li>
                            @endforeach
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
