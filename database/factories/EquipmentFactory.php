<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EquipmentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'inventory_number' => '2012. 59. 3.',
            'category_id' => 1,
            'published' => 1,
            'svg' => 'cash_register',
            'hu' => [
                'title' => 'Pénztárgép',
                'sub_title' => 'A Bagu Balázs boltjában lévő pénztárgép.Bagu Balázs az épületben fűszer- és hentesüzletet tartott fenn, az emeleten',
                'purpose' => 'A szatócsbolt működtetésének érzékeltetésére',
                'hunglish' => 'grocerista, groszer (fűszeres): a grocer szóalakbólgroszeri: fűszerüzlet: a',
                'news' => '„Az amerikai magyar ember, ha valamit venni akar, nem megy a szatócshoz, hanem a nagy áruházba, mert ott nemcsak nagyobb választék, hanem nagyobb a biztonság is, hogy minden tekintetben jól fogják kiszolgálni. — A transatlantic Trust Company fejlődése a legjobb bizonyíték a mellett, hogy mennyire amerikai lett az itteni magyarok gondolkozása, és felfogása: ők se mennek már a szatócshoz, hanem átpártoltak a nagy áruházhoz, a magyarok hatalmas bankjához.” Amerikai Magyar Reformátusok Lapja. 1916. 01. 29. 4',
                'active' => 1
            ],
            'en' => [
                'title' => 'Pénztárgép',
                'sub_title' => 'A Bagu Balázs boltjában lévő pénztárgép.Bagu Balázs az épületben fűszer- és hentesüzletet tartott fenn, az emeleten',
                'purpose' => 'A szatócsbolt működtetésének érzékeltetésére',
                'hunglish' => 'grocerista, groszer (fűszeres): a grocer szóalakbólgroszeri: fűszerüzlet: a',
                'news' => '„Az amerikai magyar ember, ha valamit venni akar, nem megy a szatócshoz, hanem a nagy áruházba, mert ott nemcsak nagyobb választék, hanem nagyobb a biztonság is, hogy minden tekintetben jól fogják kiszolgálni. — A transatlantic Trust Company fejlődése a legjobb bizonyíték a mellett, hogy mennyire amerikai lett az itteni magyarok gondolkozása, és felfogása: ők se mennek már a szatócshoz, hanem átpártoltak a nagy áruházhoz, a magyarok hatalmas bankjához.” Amerikai Magyar Reformátusok Lapja. 1916. 01. 29. 4',
                'active' => 1
            ],
        ];
    }
}
