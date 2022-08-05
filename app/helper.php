<?php

use Illuminate\Support\Facades\Route;

if (! function_exists('currentPage')) {
    function currentPage($route,$isSlug = false) {
        if ($isSlug) {
            $current = Route::current()->parameter('location');
        } else {
            $current = Route::currentRouteName();
        }

        return $current === $route ? 'active' : '';
    }
}
