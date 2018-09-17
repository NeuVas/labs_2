<?php

function fac($x) {
    return ($x < 1) ? 1 : $x * fac($x - 1);
}

echo fac(4);