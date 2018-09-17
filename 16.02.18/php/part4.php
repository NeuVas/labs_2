<?php

function fun($x, $y) {
    return ($y === 0) ? $x : fun($x + 1, $y - 1);
}

echo fun(10, 5);
echo "\n";