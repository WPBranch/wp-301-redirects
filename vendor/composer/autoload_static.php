<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2a140d7e71ef3b0d01203d5c60b8900a
{
    public static $prefixLengthsPsr4 = array (
        'K' => 
        array (
            'Kamal\\Wp301Redirects\\' => 21,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Kamal\\Wp301Redirects\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit2a140d7e71ef3b0d01203d5c60b8900a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2a140d7e71ef3b0d01203d5c60b8900a::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit2a140d7e71ef3b0d01203d5c60b8900a::$classMap;

        }, null, ClassLoader::class);
    }
}
