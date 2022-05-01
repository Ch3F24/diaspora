<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'hu' => [
                'title' => 'Megélhetés',
                'sub_title' => 'bányászélet, gazdasági értelemben vett értelmezés (foglalkozás, pénz, fizetés, adósság)',
                'description' => 'Az Amerikába kivándorlók az iparban helyezkedtek el, rendkívül nehéz munkakörülmények között dolgoztak, kiszipolyozták őket. Fizetésüket igyekeztek félretenni, hiszen ezért vándoroltak ki. Keresetükből az otthon maradottakat is támogatták',
                'active' => 1
            ],
            'en' => [
                'title' => 'Megélhetés',
                'sub_title' => 'bányászélet, gazdasági értelemben vett értelmezés (foglalkozás, pénz, fizetés, adósság)',
                'description' => 'Az Amerikába kivándorlók az iparban helyezkedtek el, rendkívül nehéz munkakörülmények között dolgoztak, kiszipolyozták őket. Fizetésüket igyekeztek félretenni, hiszen ezért vándoroltak ki. Keresetükből az otthon maradottakat is támogatták',
                'active' => 1
            ],
        ];
    }
}
