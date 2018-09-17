<?php
$a = null;

$b = ($a === "") ? '=""' 
        : (($a === null) ? '=null' 
        : (($a === 0) ? '=0'
        : (($a === false) ? '=false' : "other")));

echo($a);
?>