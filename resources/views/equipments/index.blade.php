<section class="equipments">
    @foreach($equipments as $equipment)
        <div class="flex">
            <div class="text-white">
                {{ $equipment->category->title }}
                {{ $equipment->category->sub_title }}
                {{ $equipment->category->description }}

            </div>
            <div>
                <h1> slideshow</h1>
            </div>
            <div>
                {{ $equipment->title }}
                {{ $equipment->sub_title }}
                {{ $equipment->purpose }}
                {{ $equipment->news }}
                {{ $equipment->hunglish }}
            </div>
        </div>
    @endforeach
</section>
