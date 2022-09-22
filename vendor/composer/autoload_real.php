<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit2a140d7e71ef3b0d01203d5c60b8900a
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit2a140d7e71ef3b0d01203d5c60b8900a', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit2a140d7e71ef3b0d01203d5c60b8900a', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit2a140d7e71ef3b0d01203d5c60b8900a::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
