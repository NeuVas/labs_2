<?php
(function() {
    echo("IIFE 1");
})();

$foo = (function() {
    return function() {
        echo("IIFE 2");
    };
})();
echo $foo();

?>