<?php
class Translator {
    static $loaded = [];
    public static function load($l = 'en') {
        $x  = json_decode(file_get_contents('./translations/'.$l.'.json'), true);
        self::$loaded = $x;
    }
    public static function t($key) {
        return  (array_key_exists($key, self::$loaded)) ? self::$loaded[$key] : $key;
    }
}